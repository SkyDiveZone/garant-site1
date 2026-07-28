import { ReviewCard } from "@/components/reviews/ReviewCard";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getPublishedReviews } from "@/lib/reviews/store";
import type { ReviewCategory } from "@/lib/reviews/types";

interface ServiceOfferReviewsProps {
  category: ReviewCategory;
  serviceName: string;
  limit?: number;
}

export async function ServiceOfferReviews({
  category,
  serviceName,
  limit = 3,
}: ServiceOfferReviewsProps) {
  const reviews = (await getPublishedReviews(category)).slice(0, limit);

  if (reviews.length === 0) return null;

  return (
    <Section id="reviews" className="bg-slate-50/80">
      <SectionHeader
        badge="Отзывы"
        title={`Отзывы об услуге «${serviceName.replace(/\s*\([^)]*\)/g, "").trim()}»`}
        subtitle="Реальные отзывы клиентов о работе электриков «Гарант Мастер»"
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
      <p className="mt-6 text-center">
        <Button href="/otzyvy" variant="outline" size="sm">
          Все отзывы
        </Button>
      </p>
    </Section>
  );
}
