import { promises as fs } from "fs";
import path from "path";
import { SEED_REVIEWS } from "./seed";
import type { Review } from "./types";

const DB_FILENAME = "reviews-db.json";
const BLOB_PATHNAME = "reviews/reviews-db.json";

function dbPath() {
  return path.join(process.cwd(), "data", DB_FILENAME);
}

async function readLocalDb(): Promise<Review[]> {
  try {
    const raw = await fs.readFile(dbPath(), "utf-8");
    const parsed = JSON.parse(raw) as Review[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

async function writeLocalDb(reviews: Review[]): Promise<void> {
  const dir = path.dirname(dbPath());
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(dbPath(), JSON.stringify(reviews, null, 2), "utf-8");
}

async function readBlobDb(): Promise<Review[] | null> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return null;

  try {
    const { list, head } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: "reviews/", token });
    const target = blobs.find((b) => b.pathname === BLOB_PATHNAME);
    if (!target) return [];

    const meta = await head(target.url, { token });
    const res = await fetch(meta.downloadUrl);
    if (!res.ok) return [];
    const parsed = (await res.json()) as Review[];
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("[Reviews] Blob read failed:", error);
    return null;
  }
}

async function writeBlobDb(reviews: Review[]): Promise<boolean> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) return false;

  try {
    const { put } = await import("@vercel/blob");
    await put(BLOB_PATHNAME, JSON.stringify(reviews), {
      access: "public",
      token,
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "application/json",
    });
    return true;
  } catch (error) {
    console.error("[Reviews] Blob write failed:", error);
    return false;
  }
}

export async function getAllStoredReviews(): Promise<Review[]> {
  const blob = await readBlobDb();
  if (blob !== null) return blob;
  return readLocalDb();
}

export async function saveStoredReviews(reviews: Review[]): Promise<void> {
  const blobOk = await writeBlobDb(reviews);
  if (!blobOk) {
    await writeLocalDb(reviews);
  }
}

export async function getPublishedReviews(service?: string): Promise<Review[]> {
  const stored = await getAllStoredReviews();
  const approvedStored = stored.filter((r) => r.status === "approved");
  const seed = SEED_REVIEWS.filter((r) => r.status === "approved");

  const byId = new Map<string, Review>();
  for (const r of seed) byId.set(r.id, r);
  for (const r of approvedStored) byId.set(r.id, r);

  let list = Array.from(byId.values()).filter((r) => r.status === "approved");
  if (service) {
    list = list.filter((r) => r.service === service);
  }
  return list.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getAllReviewsForAdmin(): Promise<Review[]> {
  const stored = await getAllStoredReviews();
  const byId = new Map<string, Review>();
  for (const r of SEED_REVIEWS) byId.set(r.id, r);
  for (const r of stored) byId.set(r.id, r);
  return Array.from(byId.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function formatReviewDate(iso: string): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function generateReviewId(): string {
  return `rev-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
