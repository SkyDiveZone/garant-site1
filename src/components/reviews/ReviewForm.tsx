"use client";

import { Button } from "@/components/ui/Button";
import { REVIEW_CATEGORIES } from "@/lib/reviews/categories";
import type { ReviewCategory } from "@/lib/reviews/types";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2, ImagePlus, Loader2, Star, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState, type FormEvent } from "react";

const MAX_PHOTOS = 10;

export function ReviewForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState<ReviewCategory | "">("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [photos, setPhotos] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const handlePhotos = (files: FileList | null) => {
    if (!files?.length) return;
    const next = [...photos, ...Array.from(files)].slice(0, MAX_PHOTOS);
    setPhotos(next);
    previews.forEach((p) => URL.revokeObjectURL(p));
    setPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  const removePhoto = (index: number) => {
    URL.revokeObjectURL(previews[index]);
    setPhotos((p) => p.filter((_, i) => i !== index));
    setPreviews((p) => p.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = new FormData();
    form.append("name", name);
    form.append("phone", phone);
    form.append("category", category);
    form.append("text", text);
    form.append("rating", String(rating));
    photos.forEach((file) => form.append("photos", file));

    try {
      const res = await fetch("/api/reviews", { method: "POST", body: form });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Ошибка отправки");

      setStatus("success");
      setName("");
      setPhone("");
      setCategory("");
      setText("");
      setRating(5);
      setPhotos([]);
      previews.forEach((p) => URL.revokeObjectURL(p));
      setPreviews([]);
      if (fileRef.current) fileRef.current.value = "";
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Ошибка отправки");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
        <h3 className="mt-4 font-display text-xl font-bold text-emerald-900">Спасибо!</h3>
        <p className="mt-2 text-sm leading-relaxed text-emerald-800">
          Ваш отзыв отправлен на модерацию. После проверки администратором он появится на сайте.
        </p>
        <Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>
          Отправить ещё один отзыв
        </Button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
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
            className={inputClass}
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <label htmlFor="review-phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Телефон
          </label>
          <input
            id="review-phone"
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={inputClass}
            placeholder="+7 (___) ___-__-__"
          />
        </div>
      </div>

      <div>
        <label htmlFor="review-category" className="mb-1.5 block text-sm font-medium text-slate-700">
          Категория
        </label>
        <select
          id="review-category"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value as ReviewCategory)}
          className={inputClass}
        >
          <option value="">Выберите категорию</option>
          {REVIEW_CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.emoji} {c.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <span className="mb-1.5 block text-sm font-medium text-slate-700">Оценка</span>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              className="rounded-lg p-1 transition hover:scale-110"
              aria-label={`${n} звёзд`}
            >
              <Star
                className={cn(
                  "h-8 w-8",
                  n <= rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
                )}
              />
            </button>
          ))}
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
          rows={5}
          maxLength={5000}
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={cn(inputClass, "min-h-[140px] resize-y")}
          placeholder="Расскажите о выполненной работе..."
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Фотографии (до {MAX_PHOTOS}, jpg/png/webp, до 10 МБ каждая)
        </label>
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={(e) => handlePhotos(e.target.files)}
          className="hidden"
          id="review-photos"
        />
        <label
          htmlFor="review-photos"
          className={cn(
            "flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-8 transition hover:border-brand-300 hover:bg-brand-50/50",
            photos.length >= MAX_PHOTOS && "pointer-events-none opacity-50"
          )}
        >
          <ImagePlus className="h-8 w-8 text-brand-500" />
          <span className="mt-2 text-sm font-medium text-slate-700">
            Нажмите для загрузки фото
          </span>
          <span className="mt-1 text-xs text-slate-500">
            {photos.length} / {MAX_PHOTOS}
          </span>
        </label>

        {previews.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {previews.map((src, i) => (
              <div key={src} className="relative h-20 w-20 overflow-hidden rounded-lg border">
                <Image src={src} alt="" fill className="object-cover" unoptimized />
                <button
                  type="button"
                  onClick={() => removePhoto(i)}
                  className="absolute right-0.5 top-0.5 rounded-full bg-black/60 p-0.5 text-white"
                  aria-label="Удалить фото"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {status === "error" && error && (
        <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {error}
        </div>
      )}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          "Отправить отзыв"
        )}
      </Button>
    </form>
  );
}
