"use client";

import { ReviewForm } from "@/components/reviews/ReviewForm";
import { ReviewGallery } from "@/components/reviews/ReviewGallery";
import { ReviewVideoPlayer } from "@/components/reviews/ReviewVideoPlayer";
import { getCategoryLabel } from "@/lib/reviews/categories";
import type { Review } from "@/lib/reviews/types";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PREVIEW_COUNT = 6;

export function HomeReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [ready, setReady] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data: { reviews?: Review[] }) => {
        if (!cancelled) setReviews(data.reviews ?? []);
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      })
      .finally(() => {
        if (!cancelled) setReady(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!formOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFormOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [formOpen]);

  const canExpand = reviews.length > PREVIEW_COUNT;
  const visible = expanded ? reviews : reviews.slice(0, PREVIEW_COUNT);

  const toggleExpanded = () => {
    setExpanded((open) => {
      if (open) {
        document.getElementById("reviews")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return !open;
    });
  };

  return (
    <>
      <div className="section-head">
        <h2 id="reviews-title">Отзывы</h2>
        {canExpand && (
          <button type="button" className="review-more" onClick={toggleExpanded}>
            {expanded ? "Свернуть" : "Все отзывы →"}
          </button>
        )}
      </div>

      {!ready ? (
        <p className="lead-sm">Загружаем отзывы…</p>
      ) : reviews.length === 0 ? (
        <p className="lead-sm">Отзывы появятся здесь после публикации.</p>
      ) : (
        <div className="reviews">
          {visible.map((review) => (
            <article key={review.id} className={expanded ? "review home-review is-open" : "review home-review"}>
              {review.photos.length > 0 && (
                <div className="home-review-shot">
                  <ReviewGallery photos={review.photos} variant="card" />
                </div>
              )}
              {review.video && (
                <div className="home-review-shot">
                  <ReviewVideoPlayer src={review.video} />
                </div>
              )}
              <p className="home-review-text">{review.text}</p>
              <span className="tag">{getCategoryLabel(review.category)}</span>
              <div className="who">
                <span className="avatar" aria-hidden="true">
                  {review.name.trim().charAt(0).toUpperCase()}
                </span>
                <span>
                  <strong>{review.name}</strong>
                  <small>
                    <span className="review-stars" aria-label={`Оценка ${review.rating} из 5`}>
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </span>
                    {" · "}
                    {review.date}
                  </small>
                </span>
              </div>
              {review.adminReply && (
                <div className="home-review-reply">
                  <strong>Ответ Гарант Мастер</strong>
                  {review.adminReply.text.split(/\n{2,}/).filter(Boolean).map((paragraph) => (
                    <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}

      <div className="review-actions">
        <button type="button" className="btn" onClick={() => setFormOpen(true)}>
          Оставить отзыв
        </button>
        {canExpand && (
          <button type="button" className="btn btn-ghost" onClick={toggleExpanded}>
            {expanded ? "Свернуть" : "Все отзывы"}
          </button>
        )}
      </div>

      {formOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-[#162033]/45 p-3 sm:items-center sm:p-6"
            onClick={() => setFormOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="home-review-form-title"
              className="my-auto w-full max-w-2xl rounded-[20px] bg-white p-5 shadow-[0_24px_70px_rgba(20,40,80,0.2)] sm:p-8"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 id="home-review-form-title" className="text-xl font-extrabold tracking-tight text-slate-900">
                    Оставить отзыв
                  </h3>
                  <p className="mt-1 text-sm font-medium text-slate-500">
                    Отзыв попадёт в админку и появится на сайте после проверки.
                  </p>
                </div>
                <button
                  type="button"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-slate-500 hover:bg-slate-100"
                  aria-label="Закрыть"
                  onClick={() => setFormOpen(false)}
                >
                  ×
                </button>
              </div>
              <ReviewForm />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
