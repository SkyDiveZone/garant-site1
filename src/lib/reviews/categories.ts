import type { ReviewCategory } from "@/lib/reviews/types";

export const REVIEW_CATEGORIES = [
  {
    slug: "santehnik" as const,
    label: "Сантехник",
    emoji: "🚿",
  },
  {
    slug: "elektrik" as const,
    label: "Электрик",
    emoji: "⚡",
  },
  {
    slug: "master-na-chas" as const,
    label: "Мастер на час",
    emoji: "🛠",
  },
  {
    slug: "remont-kvartir" as const,
    label: "Ремонт квартир",
    emoji: "🏠",
  },
] as const;

export const REVIEW_CATEGORY_SLUGS = REVIEW_CATEGORIES.map((c) => c.slug);

export function isReviewCategory(value: string): value is ReviewCategory {
  return REVIEW_CATEGORY_SLUGS.includes(value as ReviewCategory);
}

export function getCategoryLabel(slug: ReviewCategory): string {
  return REVIEW_CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}

export function getCategoryEmoji(slug: ReviewCategory): string {
  return REVIEW_CATEGORIES.find((c) => c.slug === slug)?.emoji ?? "";
}
