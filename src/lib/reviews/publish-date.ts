import type { Review, ReviewAdminReply, ReviewStatus } from "@/lib/reviews/types";

/** Публичный формат даты публикации: 24.07.2026 */
export function formatReviewDisplayDate(iso: string): string {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}

export function isNewlyApproved(previous: ReviewStatus, next: ReviewStatus): boolean {
  return next === "approved" && previous !== "approved";
}

/** Устанавливает дату публикации на текущий момент сервера */
export function applyPublicationDate(review: Review): Review {
  const now = new Date().toISOString();
  return {
    ...review,
    createdAt: now,
    date: formatReviewDisplayDate(now),
  };
}

/** Создаёт или обновляет ответ администрации с текущей датой */
export function createAdminReply(text: string): ReviewAdminReply {
  const now = new Date().toISOString();
  return {
    text,
    createdAt: now,
    date: formatReviewDisplayDate(now),
  };
}
