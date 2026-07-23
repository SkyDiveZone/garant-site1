import type { Review } from "@/lib/reviews/types";

export function formatReviewDisplayDate(iso: string): string {
  const d = new Date(iso);
  const dd = String(d.getUTCDate()).padStart(2, "0");
  const mm = String(d.getUTCMonth() + 1).padStart(2, "0");
  const yyyy = d.getUTCFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

const RANGE_START = Date.UTC(2023, 0, 1);
const RANGE_END = Date.UTC(2026, 3, 15);
const MIN_GAP_MS = 12 * 24 * 60 * 60 * 1000; // минимум 12 дней между отзывами

/** Детерминированный псевдо-рандом 0..1 по индексу и id */
function jitter(seed: string, index: number): number {
  let h = index + 1;
  for (let i = 0; i < seed.length; i++) {
    h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return (h % 1000) / 1000;
}

/** Генерирует N дат в диапазоне с естественными промежутками */
export function generateNaturalDates(count: number, seeds: string[]): string[] {
  if (count === 0) return [];

  const span = RANGE_END - RANGE_START;
  const slot = Math.max(Math.floor(span / (count + 1)), MIN_GAP_MS);

  const timestamps: number[] = [];
  let cursor = RANGE_START + slot * 0.4;

  for (let i = 0; i < count; i++) {
    const maxAdvance = Math.min(slot * 1.4, RANGE_END - cursor - MIN_GAP_MS * (count - i - 1));
    const advance = Math.floor(maxAdvance * (0.35 + jitter(seeds[i] ?? String(i), i) * 0.55));
    const dayOffset = Math.floor(jitter(seeds[i] ?? String(i), i + 7) * 20) * 86400000;
    let ts = cursor + Math.max(advance, MIN_GAP_MS * 0.5) + dayOffset;

    if (ts > RANGE_END) ts = RANGE_END - (count - i) * MIN_GAP_MS;
    if (i > 0 && ts - timestamps[i - 1] < MIN_GAP_MS) {
      ts = timestamps[i - 1] + MIN_GAP_MS + Math.floor(jitter(seeds[i], i + 3) * 86400000 * 5);
    }

    timestamps.push(Math.min(ts, RANGE_END));
    cursor = ts;
  }

  return timestamps.map((ts) => new Date(ts).toISOString());
}

/** Назначает естественные даты всем approved-отзывам (стабильный порядок по id) */
export function redistributeApprovedReviewDates(reviews: Review[]): Review[] {
  const approved = reviews
    .filter((r) => r.status === "approved")
    .sort((a, b) => a.id.localeCompare(b.id));

  if (approved.length === 0) return reviews;

  const naturalDates = generateNaturalDates(
    approved.length,
    approved.map((r) => r.id)
  );

  const dateById = new Map(approved.map((r, i) => [r.id, naturalDates[i]]));

  return reviews.map((r) => {
    if (r.status !== "approved") return r;
    const createdAt = dateById.get(r.id)!;
    return {
      ...r,
      createdAt,
      date: formatReviewDisplayDate(createdAt),
    };
  });
}

export function needsDateRedistribution(reviews: Review[]): boolean {
  const approved = reviews.filter((r) => r.status === "approved");
  if (approved.length < 2) return false;

  const dayKeys = approved.map((r) => r.createdAt.slice(0, 10));
  const uniqueDays = new Set(dayKeys);
  if (uniqueDays.size < approved.length * 0.7) return true;

  const times = approved.map((r) => new Date(r.createdAt).getTime()).sort((a, b) => a - b);
  for (let i = 1; i < times.length; i++) {
    if (times[i] - times[i - 1] < MIN_GAP_MS) return true;
  }

  const outOfRange = approved.some((r) => {
    const t = new Date(r.createdAt).getTime();
    return t < RANGE_START || t > RANGE_END;
  });

  return outOfRange;
}
