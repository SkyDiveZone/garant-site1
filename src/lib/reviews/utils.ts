export const SERVICE_SLUG_TO_REVIEW_SERVICE: Record<string, string> = {
  santehnik: "Сантехник",
  elektrik: "Электрик",
  "remont-kvartir": "Ремонт квартир",
  "master-na-chas": "Мастер на час",
  "ustranenie-zasora": "Устранение засора",
};

export function reviewServiceForSlug(slug: string): string | undefined {
  return SERVICE_SLUG_TO_REVIEW_SERVICE[slug];
}
