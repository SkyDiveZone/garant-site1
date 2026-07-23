import { ReviewsPageClient } from "@/components/reviews/ReviewsPageClient";
import { ReviewsJsonLd } from "@/components/reviews/ReviewsJsonLd";
import { getPublishedReviews } from "@/lib/reviews/store";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Отзывы клиентов — Гарант Мастер | Екатеринбург",
  description:
    "Реальные отзывы и фотографии выполненных работ: сантехник, электрик, мастер на час и ремонт квартир в Екатеринбурге. Оставьте свой отзыв — публикуем после модерации.",
  path: "/otzyvy",
  keywords: [
    "отзывы гарант мастер",
    "отзывы сантехник екатеринбург",
    "отзывы электрик екатеринбург",
    "отзывы ремонт квартир екатеринбург",
  ],
});

export default async function OtzyvyPage() {
  const reviews = await getPublishedReviews();

  return (
    <>
      <ReviewsJsonLd reviews={reviews} />
      <ReviewsPageClient />
    </>
  );
}
