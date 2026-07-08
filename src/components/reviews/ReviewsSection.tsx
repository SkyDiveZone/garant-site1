import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getPublishedReviews } from "@/lib/reviews/store";

interface ReviewsSectionProps {
  service?: string;
  title?: string;
  subtitle?: string;
  showForm?: boolean;
}

export async function ReviewsSection({
  service,
  title = "Отзывы клиентов",
  subtitle = "Реальные отзывы жителей Екатеринбурга",
  showForm = true,
}: ReviewsSectionProps) {
  const reviews = await getPublishedReviews(service);

  return (
    <Section id="reviews">
      <SectionHeader badge="Отзывы" title={title} subtitle={subtitle} />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {showForm && (
        <div className="mt-12">
          <ReviewForm />
        </div>
      )}
    </Section>
  );
}
