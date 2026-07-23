"use client";

import { AdminReplyModal } from "@/components/admin/AdminReplyModal";
import { Button } from "@/components/ui/Button";
import { REVIEW_CATEGORIES } from "@/lib/reviews/categories";
import type { Review, ReviewCategory, ReviewStatus } from "@/lib/reviews/types";
import { cn } from "@/lib/utils";
import {
  Check,
  Loader2,
  LogOut,
  MessageSquare,
  Search,
  Star,
  Trash2,
  X,
  ZoomIn,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const STATUS_LABELS: Record<ReviewStatus, string> = {
  pending: "На модерации",
  approved: "Опубликован",
  rejected: "Отклонён",
};

function getCsrfToken(): string {
  if (typeof document === "undefined") return "";
  const match = document.cookie.match(/(?:^|;\s*)admin_csrf=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

export function AdminReviewsPanel() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selected, setSelected] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<ReviewCategory | "all">("all");
  const [filterStatus, setFilterStatus] = useState<ReviewStatus | "all">("all");
  const [filterRating, setFilterRating] = useState<number | "all">("all");
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);
  const [replyModalOpen, setReplyModalOpen] = useState(false);

  const buildQuery = useCallback(() => {
    const params = new URLSearchParams();
    if (search.trim()) params.set("search", search.trim());
    if (filterCategory !== "all") params.set("category", filterCategory);
    if (filterStatus !== "all") params.set("status", filterStatus);
    if (filterRating !== "all") params.set("rating", String(filterRating));
    if (filterDateFrom) params.set("dateFrom", filterDateFrom);
    if (filterDateTo) params.set("dateTo", filterDateTo);
    const qs = params.toString();
    return qs ? `?${qs}` : "";
  }, [search, filterCategory, filterStatus, filterRating, filterDateFrom, filterDateTo]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/reviews${buildQuery()}`);
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = (await res.json()) as { reviews: Review[] };
      setReviews(data.reviews);
      setError("");
    } catch {
      setError("Не удалось загрузить отзывы");
    } finally {
      setLoading(false);
    }
  }, [buildQuery, router]);

  useEffect(() => {
    const timer = setTimeout(() => void load(), 300);
    return () => clearTimeout(timer);
  }, [load]);

  const adminFetch = async (url: string, options: RequestInit = {}) => {
    const headers = new Headers(options.headers);
    headers.set("X-CSRF-Token", getCsrfToken());
    return fetch(url, { ...options, headers });
  };

  const updateReviewInState = (review: Review) => {
    setReviews((prev) => prev.map((r) => (r.id === review.id ? review : r)));
    setSelected(review);
  };

  const saveReview = async (patch: Partial<Review> & { id: string }) => {
    setSaving(true);
    setError("");
    try {
      const res = await adminFetch("/api/admin/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Ошибка сохранения");
      }
      const data = (await res.json()) as { review: Review };
      updateReviewInState(data.review);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка сохранения");
    } finally {
      setSaving(false);
    }
  };

  const saveReply = async (text: string) => {
    if (!selected) return;
    setSaving(true);
    setError("");
    try {
      const res = await adminFetch("/api/admin/reviews/reply", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selected.id, text }),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Ошибка сохранения ответа");
      }
      const data = (await res.json()) as { review: Review };
      updateReviewInState(data.review);
      setReplyModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка сохранения ответа");
    } finally {
      setSaving(false);
    }
  };

  const deleteReply = async () => {
    if (!selected) return;
    setSaving(true);
    setError("");
    try {
      const res = await adminFetch(
        `/api/admin/reviews/reply?id=${encodeURIComponent(selected.id)}`,
        { method: "DELETE" }
      );
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Ошибка удаления ответа");
      }
      const data = (await res.json()) as { review: Review };
      updateReviewInState(data.review);
      setReplyModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка удаления ответа");
    } finally {
      setSaving(false);
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Удалить отзыв безвозвратно?")) return;
    setSaving(true);
    try {
      const res = await adminFetch(`/api/admin/reviews?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Ошибка удаления");
      setReviews((prev) => prev.filter((r) => r.id !== id));
      setSelected(null);
      setReplyModalOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка удаления");
    } finally {
      setSaving(false);
    }
  };

  const handlePhotoUpload = async (files: FileList | null) => {
    if (!selected || !files?.length) return;
    const remaining = 10 - selected.photos.length;
    if (remaining <= 0) return;

    const uploaded: string[] = [];
    for (const file of Array.from(files).slice(0, remaining)) {
      const form = new FormData();
      form.append("file", file);
      const res = await adminFetch("/api/admin/upload", { method: "POST", body: form });
      if (res.ok) {
        const data = (await res.json()) as { url: string };
        uploaded.push(data.url);
      }
    }

    if (uploaded.length === 0) return;
    const photos = [...selected.photos, ...uploaded];
    setSelected({ ...selected, photos });
    await saveReview({ id: selected.id, photos });
  };

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
  };

  if (loading && reviews.length === 0) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-bold text-slate-900">Модерация отзывов</h1>
        <Button variant="secondary" size="sm" onClick={logout}>
          <LogOut className="h-4 w-4" />
          Выйти
        </Button>
      </div>

      <div className="grid gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="relative sm:col-span-2 lg:col-span-4">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск по имени, тексту, телефону..."
            className="w-full rounded-lg border border-slate-200 py-2 pl-10 pr-3 text-sm"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value as ReviewCategory | "all")}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="all">Все категории</option>
          {REVIEW_CATEGORIES.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.label}
            </option>
          ))}
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as ReviewStatus | "all")}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="all">Все статусы</option>
          <option value="pending">На модерации</option>
          <option value="approved">Опубликован</option>
          <option value="rejected">Отклонён</option>
        </select>
        <select
          value={filterRating === "all" ? "all" : String(filterRating)}
          onChange={(e) =>
            setFilterRating(e.target.value === "all" ? "all" : Number(e.target.value))
          }
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="all">Любой рейтинг</option>
          {[5, 4, 3, 2, 1].map((n) => (
            <option key={n} value={n}>
              {n} звёзд
            </option>
          ))}
        </select>
        <input
          type="date"
          value={filterDateFrom}
          onChange={(e) => setFilterDateFrom(e.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          aria-label="Дата от"
        />
        <input
          type="date"
          value={filterDateTo}
          onChange={(e) => setFilterDateTo(e.target.value)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
          aria-label="Дата до"
        />
      </div>

      {error && <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</p>}

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="max-h-[70vh] space-y-2 overflow-y-auto">
          {reviews.length === 0 ? (
            <p className="py-8 text-center text-sm text-slate-500">Отзывы не найдены</p>
          ) : (
            reviews.map((review) => (
              <button
                key={review.id}
                type="button"
                onClick={() => setSelected(review)}
                className={cn(
                  "w-full rounded-xl border p-4 text-left transition-colors",
                  selected?.id === review.id
                    ? "border-brand-500 bg-brand-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-900">{review.name}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-xs font-medium",
                      review.status === "approved" && "bg-emerald-100 text-emerald-700",
                      review.status === "pending" && "bg-amber-100 text-amber-700",
                      review.status === "rejected" && "bg-red-100 text-red-700"
                    )}
                  >
                    {STATUS_LABELS[review.status]}
                  </span>
                </div>
                <p className="mt-1 line-clamp-2 text-sm text-slate-600">{review.text}</p>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                  <span>{review.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-0.5">
                    {review.rating}
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  </span>
                  {review.photos.length > 0 && (
                    <>
                      <span>·</span>
                      <span>{review.photos.length} фото</span>
                    </>
                  )}
                  {review.adminReply && (
                    <>
                      <span>·</span>
                      <span className="text-brand-600">💬 ответ</span>
                    </>
                  )}
                </div>
              </button>
            ))
          )}
        </div>

        {selected && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="font-display text-lg font-bold text-slate-900">Редактирование</h2>

            <div className="mt-4 space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Имя</label>
                <input
                  value={selected.name}
                  onChange={(e) => setSelected({ ...selected, name: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Рейтинг</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button key={n} type="button" onClick={() => setSelected({ ...selected, rating: n })}>
                      <Star
                        className={cn(
                          "h-6 w-6",
                          n <= selected.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        )}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Категория</label>
                <select
                  value={selected.category}
                  onChange={(e) =>
                    setSelected({ ...selected, category: e.target.value as ReviewCategory })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  {REVIEW_CATEGORIES.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Текст</label>
                <textarea
                  rows={5}
                  value={selected.text}
                  onChange={(e) => setSelected({ ...selected, text: e.target.value })}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Статус</label>
                <select
                  value={selected.status}
                  onChange={(e) =>
                    setSelected({ ...selected, status: e.target.value as ReviewStatus })
                  }
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                >
                  <option value="pending">На модерации</option>
                  <option value="approved">Опубликован</option>
                  <option value="rejected">Отклонён</option>
                </select>
              </div>

              {selected.photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selected.photos.map((src, i) => (
                    <div key={src} className="relative h-20 w-20 overflow-hidden rounded-lg border">
                      <Image src={src} alt="" fill className="object-cover" unoptimized />
                      <button
                        type="button"
                        className="absolute inset-0 flex items-center justify-center bg-black/0 transition hover:bg-black/30"
                        onClick={() => setLightboxPhoto(src)}
                      >
                        <ZoomIn className="h-5 w-5 text-white opacity-0 transition hover:opacity-100" />
                      </button>
                      <button
                        type="button"
                        className="absolute right-0 top-0 bg-red-500 px-1 text-xs text-white"
                        onClick={() => {
                          const photos = selected.photos.filter((_, j) => j !== i);
                          setSelected({ ...selected, photos });
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {selected.photos.length < 10 && (
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">
                    Добавить фото ({selected.photos.length}/10)
                  </label>
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    multiple
                    onChange={(e) => void handlePhotoUpload(e.target.files)}
                    className="text-sm"
                  />
                </div>
              )}

              {selected.adminReply && (
                <div className="rounded-xl border border-brand-100 bg-brand-50/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    Текущий ответ компании
                  </p>
                  <p className="mt-2 line-clamp-4 whitespace-pre-wrap text-sm text-slate-700">
                    {selected.adminReply.text}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">{selected.adminReply.date}</p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                <Button disabled={saving} onClick={() => saveReview({ ...selected, id: selected.id })}>
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Сохранить"}
                </Button>
                <Button
                  variant="secondary"
                  disabled={saving}
                  onClick={() => saveReview({ id: selected.id, status: "approved" })}
                >
                  <Check className="h-4 w-4" />
                  Одобрить
                </Button>
                <Button
                  variant="outline"
                  disabled={saving}
                  onClick={() => saveReview({ id: selected.id, status: "rejected" })}
                >
                  <X className="h-4 w-4" />
                  Отклонить
                </Button>
                <Button
                  variant="outline"
                  disabled={saving || selected.status !== "approved"}
                  onClick={() => setReplyModalOpen(true)}
                  title={
                    selected.status !== "approved"
                      ? "Ответ доступен только для опубликованных отзывов"
                      : undefined
                  }
                >
                  <MessageSquare className="h-4 w-4" />
                  {selected.adminReply ? "💬 Редактировать ответ" : "💬 Ответить"}
                </Button>
                <Button
                  variant="ghost"
                  disabled={saving}
                  onClick={() => deleteReview(selected.id)}
                  className="text-red-600 hover:bg-red-50"
                >
                  <Trash2 className="h-4 w-4" />
                  Удалить
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-white"
            onClick={() => setLightboxPhoto(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative h-[80vh] w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <Image src={lightboxPhoto} alt="" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}

      {selected && (
        <AdminReplyModal
          review={selected}
          open={replyModalOpen}
          saving={saving}
          onClose={() => setReplyModalOpen(false)}
          onSave={saveReply}
          onDelete={deleteReply}
        />
      )}
    </div>
  );
}
