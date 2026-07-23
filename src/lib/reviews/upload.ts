import { randomBytes } from "crypto";
import { promises as fs } from "fs";
import path from "path";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_PHOTOS = 10;

const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp"]);

const MAGIC: Record<string, number[][]> = {
  "image/jpeg": [[0xff, 0xd8, 0xff]],
  "image/png": [[0x89, 0x50, 0x4e, 0x47]],
  "image/webp": [[0x52, 0x49, 0x46, 0x46]],
};

function photosDir() {
  return path.join(process.cwd(), "data", "review-photos");
}

function matchesMagic(buffer: Buffer, mime: string): boolean {
  const patterns = MAGIC[mime];
  if (!patterns) return false;

  if (mime === "image/webp") {
    return (
      buffer.length >= 12 &&
      buffer[0] === 0x52 &&
      buffer[1] === 0x49 &&
      buffer[2] === 0x46 &&
      buffer[3] === 0x46 &&
      buffer.toString("ascii", 8, 12) === "WEBP"
    );
  }

  return patterns.some((pattern) =>
    pattern.every((byte, index) => buffer[index] === byte)
  );
}

function safeExtension(mime: string): string {
  if (mime === "image/png") return "png";
  if (mime === "image/webp") return "webp";
  return "jpg";
}

export async function saveReviewPhoto(file: File): Promise<string | null> {
  if (!ALLOWED_MIME.has(file.type) || file.size > MAX_FILE_SIZE || file.size === 0) {
    return null;
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (!matchesMagic(buffer, file.type)) return null;

  const ext = safeExtension(file.type);
  const filename = `${Date.now()}-${randomBytes(16).toString("hex")}.${ext}`;
  const dir = photosDir();
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(path.join(dir, filename), buffer);

  return `/api/review-photos/${filename}`;
}

export async function saveReviewPhotos(files: File[]): Promise<string[]> {
  const urls: string[] = [];
  for (const file of files.slice(0, MAX_PHOTOS)) {
    const url = await saveReviewPhoto(file);
    if (url) urls.push(url);
  }
  return urls;
}

export async function deleteReviewPhoto(url: string): Promise<void> {
  const prefix = "/api/review-photos/";
  if (!url.startsWith(prefix)) return;
  const filename = url.slice(prefix.length);
  if (!filename || filename.includes("..") || filename.includes("/")) return;
  try {
    await fs.unlink(path.join(photosDir(), filename));
  } catch {
    /* ignore missing files */
  }
}

export { MAX_PHOTOS, MAX_FILE_SIZE };
