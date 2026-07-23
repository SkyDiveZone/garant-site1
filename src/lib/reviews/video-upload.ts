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

function videosDir() {
  return path.join(process.cwd(), "data", "review-videos");
}

function extensionFromName(name: string): string | null {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  return ALLOWED_EXT.has(ext) ? ext : null;
}

function safeExtension(mime: string, filename: string): string | null {
  const fromName = extensionFromName(filename);
  const fromMime =
    mime === "video/mp4" ? "mp4" : mime === "video/webm" ? "webm" : mime === "video/quicktime" ? "mov" : null;

  if (!fromName || !fromMime || fromName !== fromMime) return null;
  return fromMime;
}

function matchesVideoMagic(buffer: Buffer, mime: string): boolean {
  if (buffer.length < 12) return false;

  if (mime === "video/webm") {
    return buffer[0] === 0x1a && buffer[1] === 0x45 && buffer[2] === 0xdf && buffer[3] === 0xa3;
  }

  const boxType = buffer.toString("ascii", 4, 8);
  if (boxType !== "ftyp") return false;

  return mime === "video/mp4" || mime === "video/quicktime";
}

export async function saveReviewVideo(file: File): Promise<string | null> {
  if (!ALLOWED_MIME.has(file.type) || file.size > MAX_VIDEO_SIZE || file.size === 0) {
    return null;
  }

  const ext = safeExtension(file.type, file.name);
  if (!ext) return null;

  const buffer = Buffer.from(await file.arrayBuffer());
  if (!matchesVideoMagic(buffer, file.type)) return null;

  const filename = `${Date.now()}-${randomBytes(16).toString("hex")}.${ext}`;
  const dir = videosDir();
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, filename), buffer);

  return `/api/review-videos/${filename}`;
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

export { MIME_BY_EXT, ALLOWED_EXT };
