"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { getCategoryLabel } from "@/lib/reviews/categories";
import type { Review } from "@/lib/reviews/types";
import { Star } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HomeReviewsPreview() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((data: { reviews?: Review[] }) => {
        if (!cancelled) setReviews((data.reviews ?? []).filter((item) => item.status !== "rejected").slice(0, 3));
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (reviews.length === 0) return null;

  return (
    <Section className="bg-cream">
      <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader
          badge="Отзывы"
          title="Отзывы клиентов"
          subtitle="Только отзывы, которые прошли модерацию"
          align="left"
          className="mb-0"
        />
        <Link
          href="/otzyvy"
          className="text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
        >
          Все отзывы →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {reviews.map((review) => (
          <article key={review.id} className="card-surface p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 font-display text-sm font-bold text-brand-700">
                {review.name.slice(0, 1).toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="truncate font-semibold text-ink">{review.name}</p>
                <p className="text-xs text-muted">
                  {review.date} · {getCategoryLabel(review.category)}
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < review.rating ? "fill-brand-500 text-brand-500" : "text-black/10"}`}
                />
              ))}
            </div>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-ink/80">{review.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
