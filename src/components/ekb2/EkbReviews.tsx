"use client";

import type { EkbReview } from "@/lib/ekb2/pages";
import { useState } from "react";

export function EkbReviews({ reviews }: { reviews: EkbReview[] }) {
  const [open, setOpen] = useState(false);
  const hasExtra = reviews.some((item) => item.extra);

  return (
    <section className="section">
      <h2>Отзывы</h2>
      <div className="reviews" style={{ marginTop: 14 }}>
        {reviews.map((review) => {
          if (review.extra && !open) return null;
          return (
            <blockquote key={`${review.meta}-${review.text.slice(0, 24)}`} className="review">
              <p>{review.text}</p>
              <footer>{review.meta}</footer>
            </blockquote>
          );
        })}
      </div>
      {hasExtra && (
        <button
          className="ghost more-reviews"
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Скрыть отзывы" : "Раскрыть все отзывы"}
        </button>
      )}
    </section>
  );
}
