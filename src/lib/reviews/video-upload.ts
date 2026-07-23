import { randomBytes } from "crypto";
import { promises as fs } from "fs";
import path from "path";

/** Максимальный размер видео (100 МБ) */
export const MAX_VIDEO_SIZE = 100 * 1024 * 1024;

const ALLOWED_MIME = new Set(["video/mp4", "video/webm", "video/quicktime"]);

const ALLOWED_EXT = new Set(["mp4", "webm", "mov"]);

const MIME_BY_EXT: Record<string, string> = {
  mp4: "video/mp4",
  webm: "video/webm",
  mov: "video/quicktime",
};

const MIME_ALIASES: Record<string, string> = {
  "video/mp4": "video/mp4",
  "video/x-mp4": "video/mp4",
  "video/webm": "video/webm",
  "video/quicktime": "video/quicktime",
  "video/x-quicktime": "video/quicktime",
};

function videosDir() {
  return path.join(process.cwd(), "data", "review-videos");
}

function extensionFromName(name: string): string | null {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return ALLOWED_EXT.has(ext) ? ext : null;
}

export function resolveVideoType(file: File): { mime: string; ext: string } | null {
  const ext = extensionFromName(file.name);
  if (!ext) return null;

  const mimeFromExt = MIME_BY_EXT[ext];
  const rawType = file.type.trim().toLowerCase();
  const normalizedType = MIME_ALIASES[rawType] ?? rawType;

  if (normalizedType && ALLOWED_MIME.has(normalizedType)) {
    const expectedExt =
      normalizedType === "video/mp4" ? "mp4" : normalizedType === "video/webm" ? "webm" : "mov";
    if (ext !== expectedExt) return null;
    return { mime: normalizedType, ext };
  }

  if (!rawType || rawType === "application/octet-stream") {
    return { mime: mimeFromExt, ext };
  }

  return null;
}

function matchesVideoMagic(buffer: Buffer, mime: string): boolean {
  if (buffer.length < 8) return false;

  if (mime === "video/webm") {
    return buffer[0] === 0x1a && buffer[1] === 0x45 && buffer[2] === 0xdf && buffer[3] === 0xa3;
  }

  const head = buffer.subarray(0, Math.min(buffer.length, 256));
  return head.includes(Buffer.from("ftyp"));
}

export type VideoSaveResult =
  | { ok: true; url: string }
  | { ok: false; reason: string };

export async function saveReviewVideo(file: File): Promise<VideoSaveResult> {
  if (file.size === 0) {
    return { ok: false, reason: "Файл пустой" };
  }
  if (file.size > MAX_VIDEO_SIZE) {
    return { ok: false, reason: `Файл больше ${Math.round(MAX_VIDEO_SIZE / (1024 * 1024))} МБ` };
  }

  const resolved = resolveVideoType(file);
  if (!resolved) {
    return { ok: false, reason: "Неподдерживаемый формат (нужен mp4, webm или mov)" };
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (!matchesVideoMagic(buffer, resolved.mime)) {
    return { ok: false, reason: "Файл повреждён или не является видео" };
  }

  const filename = `${Date.now()}-${randomBytes(16).toString("hex")}.${resolved.ext}`;
  const dir = videosDir();
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, filename), buffer);

  return { ok: true, url: `/api/review-videos/${filename}` };
}

export async function deleteReviewVideo(url?: string): Promise<void> {
  if (!url) return;

  const prefix = "/api/review-videos/";
  if (!url.startsWith(prefix)) return;

  const filename = url.slice(prefix.length);
  if (!filename || filename.includes("..") || filename.includes("/")) return;

  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (!ALLOWED_EXT.has(ext)) return;

  try {
    await fs.unlink(path.join(videosDir(), filename));
  } catch {
    /* ignore missing files */
  }
}

export { MIME_BY_EXT, ALLOWED_EXT, videosDir };
