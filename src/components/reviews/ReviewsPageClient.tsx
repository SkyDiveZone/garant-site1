"use client";

import { ReviewCard } from "@/components/reviews/ReviewCard";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { Button } from "@/components/ui/Button";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { REVIEW_CATEGORIES } from "@/lib/reviews/categories";
import type { Review, ReviewCategory } from "@/lib/reviews/types";
import { cn } from "@/lib/utils";
import { Loader2, MessageSquarePlus } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type FilterValue = ReviewCategory | "all";

export function ReviewsPageClient() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState<FilterValue>("all");
  const [loading, setLoading] = useState(true);

  const loadReviews = useCallback(async (category?: ReviewCategory) => {
    setLoading(true);
    try {
      const qs = category ? `?category=${encodeURIComponent(category)}` : "";
      const res = await fetch(`/api/reviews${qs}`);
      const data = (await res.json()) as { reviews: Review[] };
      setReviews(data.reviews);
    } catch {
      setReviews([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadReviews(filter === "all" ? undefined : filter);
  }, [filter, loadReviews]);

  const scrollToForm = () => {
    document.getElementById("review-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="page-hero">
        <div className="gradient-mesh pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div className="page-hero__inner relative z-10">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">Отзывы</span>
          </nav>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Отзывы наших клиентов
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Публикуем реальные отзывы и фотографии выполненных работ наших клиентов из
              Екатеринбурга.
            </p>
            <Button size="lg" className="mt-8" onClick={scrollToForm}>
              <MessageSquarePlus className="h-5 w-5" />
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            <FilterButton
              active={filter === "all"}
              onClick={() => setFilter("all")}
              label="Все отзывы"
            />
            {REVIEW_CATEGORIES.map((cat) => (
              <FilterButton
                key={cat.slug}
                active={filter === cat.slug}
                onClick={() => setFilter(cat.slug)}
                label={`${cat.emoji} ${cat.label}`}
              />
            ))}
          </div>

          <MotionSection className="mt-10">
            {loading ? (
              <div className="flex justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
              </div>
            ) : reviews.length === 0 ? (
              <MotionItem>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-16 text-center">
                  <p className="font-display text-xl font-bold text-slate-900">
                    {filter === "all"
                      ? "Пока нет опубликованных отзывов"
                      : "В этой категории пока нет отзывов"}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Станьте первым — оставьте свой отзыв!
                  </p>
                  <Button className="mt-6" onClick={scrollToForm}>
                    Оставить отзыв
                  </Button>
                </div>
              </MotionItem>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review) => (
                  <MotionItem key={review.id}>
                    <ReviewCard review={review} />
                  </MotionItem>
                ))}
              </div>
            )}
          </MotionSection>
        </div>
      </section>

      <section id="review-form" className="section-padding bg-slate-50/80">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Оставить отзыв
            </h2>
            <p className="mt-3 text-center text-sm text-slate-600 sm:text-base">
              Поделитесь впечатлениями о нашей работе. Отзыв появится на сайте после проверки
              администратором.
            </p>
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-8">
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-200 sm:px-6 sm:py-3.5 sm:text-base",
        active
          ? "border-brand-500 bg-brand-600 text-white shadow-brand-600/25"
          : "border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
      )}
    >
      {label}
    </button>
  );
}
