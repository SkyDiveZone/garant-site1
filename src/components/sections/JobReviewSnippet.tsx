"use client";

import type { Review, ReviewCategory } from "@/lib/reviews/types";
import { useEffect, useState } from "react";

interface JobReviewSnippetProps {
  category?: ReviewCategory;
}

/** Один опубликованный отзыв рядом с кнопкой вызова. Пусто, если отзывов нет. */
export function JobReviewSnippet({ category }: JobReviewSnippetProps) {
  const [review, setReview] = useState<Review | null>(null);

  useEffect(() => {
    const url = category ? `/api/reviews?category=${category}` : "/api/reviews";
    let cancelled = false;
    fetch(url)
      .then((response) => response.json())
      .then((data: { reviews?: Review[] }) => {
        if (!cancelled) setReview(data.reviews?.[0] ?? null);
      })
      .catch(() => {
        if (!cancelled) setReview(null);
      });
    return () => {
      cancelled = true;
    };
  }, [category]);

  if (!review) return null;

  return (
    <blockquote className="max-w-xl rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">
      <p className="line-clamp-3 text-sm leading-relaxed text-white/85">«{review.text}»</p>
      <footer className="mt-1 text-xs text-white/55">{review.name}</footer>
    </blockquote>
  );
}
