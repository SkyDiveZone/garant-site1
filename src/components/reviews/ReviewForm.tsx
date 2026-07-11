"use client";

import { Button } from "@/components/ui/Button";
import { COPY, REVIEW_SERVICE_OPTIONS } from "@/lib/copy";
import { trackReviewSubmit } from "@/lib/yandex-metrika";
import { EKB_DISTRICTS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, Loader2, Star } from "lucide-react";
import { useState, type FormEvent } from "react";

export function ReviewForm({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [service, setService] = useState("");
  const [district, setDistrict] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setStatus("loading");
    setErrorMessage("");

    try {
      const form = new FormData();
      form.append("name", name);
      if (phone.trim()) form.append("phone", phone);
      form.append("rating", String(rating));
      form.append("service", service);
      form.append("district", district);
      form.append("text", text);

      const res = await fetch("/api/reviews", { method: "POST", body: form });
      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Не удалось отправить отзыв");
      }

      trackReviewSubmit();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Ошибка отправки");
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center",
          className
        )}
      >
        <CheckCircle2 className="mb-3 h-12 w-12 text-emerald-500" />
        <p className="text-lg font-semibold text-emerald-900">{COPY.reviewSuccessTitle}</p>
        <p className="mt-1 text-sm text-emerald-700">{COPY.reviewSuccessMessage}</p>
      </div>
    );
  }

  return (
    <div className={cn("rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8", className)}>
      <h3 className="font-display text-xl font-bold text-slate-900">Оставить отзыв</h3>
      <p className="mt-2 text-sm text-slate-600">Поделитесь впечатлениями о нашей работе</p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
        <div>
          <label htmlFor="review-name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Имя
          </label>
          <input
            id="review-name"
            required
            minLength={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        <div>
          <label htmlFor="review-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Телефон <span className="font-normal text-slate-400">(необязательно)</span>
          </label>
          <input
            id="review-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        <div>
          <span className="mb-1.5 block text-sm font-medium text-slate-700">Оценка</span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                onClick={() => setRating(value)}
                onMouseEnter={() => setHoverRating(value)}
                onMouseLeave={() => setHoverRating(0)}
                className="rounded p-1 transition-colors hover:bg-amber-50"
                aria-label={`Оценка ${value}`}
              >
                <Star
                  className={cn(
                    "h-7 w-7",
                    (hoverRating || rating) >= value
                      ? "fill-amber-400 text-amber-400"
                      : "text-slate-300"
                  )}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="review-service" className="mb-1.5 block text-sm font-medium text-slate-700">
              Услуга
            </label>
            <select
              id="review-service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="">Выберите услугу</option>
              {REVIEW_SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="review-district" className="mb-1.5 block text-sm font-medium text-slate-700">
              Район
            </label>
            <select
              id="review-district"
              required
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
            >
              <option value="">Выберите район</option>
              {EKB_DISTRICTS.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="review-text" className="mb-1.5 block text-sm font-medium text-slate-700">
            Текст отзыва
          </label>
          <textarea
            id="review-text"
            required
            minLength={10}
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
        </div>

        {status === "error" && errorMessage && (
          <div
            role="alert"
            className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMessage}
          </div>
        )}

        <Button type="submit" size="lg" disabled={status === "loading" || rating === 0} className="w-full">
          {status === "loading" ? <Loader2 className="h-5 w-5 animate-spin" /> : "Отправить отзыв"}
        </Button>
      </form>
    </div>
  );
}
