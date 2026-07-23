import { isReviewCategory } from "@/lib/reviews/categories";
import type { ReviewCategory } from "@/lib/reviews/types";

const PHONE_RE = /^[\d\s+\-()]{10,20}$/;

export function sanitizeText(value: string, maxLen: number): string {
  return value.trim().slice(0, maxLen);
}

export function validateReviewName(name: string): string | null {
  const v = sanitizeText(name, 80);
  if (v.length < 2) return "Укажите имя (минимум 2 символа)";
  return null;
}

export function validateReviewPhone(phone: string): string | null {
  const v = sanitizeText(phone, 20);
  if (!v) return "Укажите телефон";
  if (!PHONE_RE.test(v)) return "Некорректный номер телефона";
  return null;
}

export function validateReviewRating(rating: number): string | null {
  if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
    return "Укажите оценку от 1 до 5";
  }
  return null;
}

export function validateReviewCategory(category: string): category is ReviewCategory {
  return isReviewCategory(category);
}

export function validateReviewText(text: string): string | null {
  const v = sanitizeText(text, 5000);
  if (v.length < 10) return "Напишите отзыв (минимум 10 символов)";
  return null;
}

export function validateAdminReplyText(text: string): string | null {
  const v = sanitizeText(text, 3000);
  if (v.length < 5) return "Напишите ответ (минимум 5 символов)";
  return null;
}

export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
