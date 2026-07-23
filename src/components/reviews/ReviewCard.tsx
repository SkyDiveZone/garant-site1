"use client";

import { getCategoryEmoji, getCategoryLabel } from "@/lib/reviews/categories";
import type { Review } from "@/lib/reviews/types";
import { cn } from "@/lib/utils";
import { Calendar, Camera, Star } from "lucide-react";
import { ReviewGallery } from "@/components/reviews/ReviewGallery";

interface ReviewCardProps {
  review: Review;
  className?: string;
}

export function ReviewCard({ review, className }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10",
        className
      )}
    >
      {review.photos.length > 0 && (
        <div className="relative">
          <ReviewGallery photos={review.photos} variant="card" />
          <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <Camera className="h-3.5 w-3.5" />
            {review.photos.length}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-bold text-slate-900">{review.name}</h3>
            <p className="mt-1 text-sm text-brand-600">
              {getCategoryEmoji(review.category)} {getCategoryLabel(review.category)}
            </p>
          </div>
          <div className="flex items-center gap-0.5" aria-label={`Оценка ${review.rating} из 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"
                )}
              />
            ))}
          </div>
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
          {review.text}
        </p>

        <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-400">
          <Calendar className="h-3.5 w-3.5" />
          {review.date}
        </p>
      </div>
    </article>
  );
}
