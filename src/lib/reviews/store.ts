import { promises as fs } from "fs";
import path from "path";
import { formatReviewDisplayDate } from "@/lib/reviews/publish-date";
import type { Review, ReviewAdminFilters, ReviewCategory } from "@/lib/reviews/types";

/** Имя логической таблицы в файловом хранилище */
export const REVIEWS_TABLE = "reviews";

const DB_FILENAME = "reviews-db.json";

function dbPath() {
  return path.join(process.cwd(), "data", DB_FILENAME);
}

async function readDb(): Promise<Review[]> {
  try {
    const raw = await fs.readFile(dbPath(), "utf-8");
    const parsed = JSON.parse(raw) as { [REVIEWS_TABLE]?: Review[] };
    const list = parsed[REVIEWS_TABLE];
    return Array.isArray(list) ? list : [];
  } catch {
    return [];
  }
}

async function writeDb(reviews: Review[]): Promise<void> {
  const dir = path.dirname(dbPath());
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(
    dbPath(),
    JSON.stringify({ [REVIEWS_TABLE]: reviews }, null, 2),
    "utf-8"
  );
}

export async function getAllReviews(): Promise<Review[]> {
  return readDb();
}

export async function saveAllReviews(reviews: Review[]): Promise<void> {
  await writeDb(reviews);
}

export async function getPublishedReviews(category?: ReviewCategory): Promise<Review[]> {
  let list = (await readDb()).filter((r) => r.status === "approved");
  if (category) {
    list = list.filter((r) => r.category === category);
  }
  return list.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function filterReviewsForAdmin(
  reviews: Review[],
  filters: ReviewAdminFilters
): Review[] {
  let list = [...reviews];

  if (filters.search?.trim()) {
    const q = filters.search.trim().toLowerCase();
    list = list.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.text.toLowerCase().includes(q) ||
        r.phone?.toLowerCase().includes(q)
    );
  }

  if (filters.category && filters.category !== "all") {
    list = list.filter((r) => r.category === filters.category);
  }

  if (filters.status && filters.status !== "all") {
    list = list.filter((r) => r.status === filters.status);
  }

  if (filters.rating && filters.rating !== "all") {
    list = list.filter((r) => r.rating === filters.rating);
  }

  if (filters.dateFrom) {
    const from = new Date(filters.dateFrom).getTime();
    list = list.filter((r) => new Date(r.createdAt).getTime() >= from);
  }

  if (filters.dateTo) {
    const to = new Date(filters.dateTo).getTime() + 86400000;
    list = list.filter((r) => new Date(r.createdAt).getTime() <= to);
  }

  return list.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/** Длинный формат для даты отправки на модерацию */
export function formatReviewDate(iso: string): string {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export { formatReviewDisplayDate };

export function generateReviewId(): string {
  return `rev-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}
