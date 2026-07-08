import type { Review } from "@/lib/reviews/types";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  review: Review;
  compact?: boolean;
}

export function ReviewCard({ review, compact }: ReviewCardProps) {
  return (
    <article
      className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm ${
        compact ? "p-5" : "p-7"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(review.rating)].map((_, j) => (
            <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
          {review.service}
        </span>
      </div>

      <p className={`mt-4 leading-relaxed text-slate-700 ${compact ? "text-sm" : "text-sm"}`}>
        {review.text}
      </p>

      {review.photos.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {review.photos.map((src) => (
            <div
              key={src}
              className="relative h-20 w-20 overflow-hidden rounded-lg border border-slate-200"
            >
              <Image src={src} alt="" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      )}

      <div className={`flex items-center gap-3 border-t border-slate-100 ${compact ? "mt-4 pt-4" : "mt-6 pt-5"}`}>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-100 font-semibold text-brand-700">
          {review.name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{review.name}</div>
          <div className="text-xs text-slate-500">
            {review.district} · {review.date}
          </div>
        </div>
      </div>
    </article>
  );
}
