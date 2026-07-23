import { SITE } from "@/lib/data";
import { getCategoryLabel } from "@/lib/reviews/categories";
import type { Review } from "@/lib/reviews/types";

interface ReviewsJsonLdProps {
  reviews: Review[];
}

export function ReviewsJsonLd({ reviews }: ReviewsJsonLdProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    url: `${SITE.url}/otzyvy`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressLocality: "Екатеринбург",
      addressCountry: "RU",
    },
    aggregateRating:
      reviews.length > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: (
              reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
            ).toFixed(1),
            reviewCount: reviews.length,
            bestRating: 5,
            worstRating: 1,
          }
        : undefined,
    review: reviews.slice(0, 20).map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      datePublished: r.createdAt.split("T")[0],
      reviewBody: r.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      itemReviewed: {
        "@type": "Service",
        name: getCategoryLabel(r.category),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
