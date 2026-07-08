"use client";

import { Button } from "@/components/ui/Button";
import { EKB_DISTRICTS } from "@/lib/data";
import { REVIEW_SERVICE_OPTIONS } from "@/lib/copy";
import type { Review, ReviewStatus } from "@/lib/reviews/types";
import { Loader2, LogOut, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const STATUS_LABELS: Record<ReviewStatus, string> = {
  pending: "На модерации",
  approved: "Опубликован",
  rejected: "Отклонён",
};

export function AdminReviewsPanel() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selected, setSelected] = useState<Review | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/reviews");
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = (await res.json()) as { reviews: Review[] };
      setReviews(data.reviews.filter((r) => r.name !== "[удалён]"));
      setError("");
    } catch {
      setError("Не удалось загрузить отзывы");
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    load();
  }, [load]);

  const saveReview = async (patch: Partial<Review> & { id: string }) => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/reviews", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      });
      if (!res.ok) {
        const data = (await res.json()) as { error?: string };
        throw new Error(data.error ?? "Ошибка сохранения");
      }
      const data = (await res.json()) as { review: Review };
      setReviews((prev) => prev.map((r) => (r.id === data.review.id ? data.review : r)));
      setSelected(data.review);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка сохранения");
    } finally {
      setSaving(false);
    }
  };

  const deleteReview = async (id: string) => {
    if (!confirm("Удалить отзыв?")) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/reviews?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Ошибка удаления");
      setReviews((prev) => prev.filter((r) => r.id !== id));
      setSelected(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка удаления");
    } finally {
      setSaving(false);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.push("/admin/login");
  };

  const handlePhotoUpload = async (files: FileList | null) => {
    if (!selected || !files?.length) return;
    const uploaded = await uploadPhotos(Array.from(files).slice(0, 3 - selected.photos.length));
    if (uploaded.length === 0) return;
    const photos = [...selected.photos, ...uploaded];
    setSelected({ ...selected, photos });
    await saveReview({ id: selected.id, photos });
  };

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-display text-2xl font-bold text-slate-900">Отзывы</h1>
        <Button variant="secondary" size="sm" onClick={logout}>
          <LogOut className="h-4 w-4" />
          Выйти
        </Button>
      </div>

      {error && <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-700">{error}</p>}

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          {reviews.map((review) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setSelected(review)}
              className={`w-full rounded-xl border p-4 text-left transition-colors ${
                selected?.id === review.id
                  ? "border-brand-500 bg-brand-50"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-900">{review.name}</span>
                <span className="text-xs text-slate-500">{STATUS_LABELS[review.status]}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600">{review.text}</p>
              <p className="mt-2 text-xs text-slate-400">
                {review.service} · {review.district} · {review.date}
              </p>
            </button>
          ))}
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
                    <button
                      key={n}
                      type="button"
                      onClick={() => setSelected({ ...selected, rating: n })}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          n <= selected.rating ? "fill-amber-400 text-amber-400" : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Услуга</label>
                  <select
                    value={selected.service}
                    onChange={(e) => setSelected({ ...selected, service: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  >
                    {REVIEW_SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Район</label>
                  <select
                    value={selected.district}
                    onChange={(e) => setSelected({ ...selected, district: e.target.value })}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  >
                    {EKB_DISTRICTS.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
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
                    <div key={src} className="relative h-16 w-16 overflow-hidden rounded-lg border">
                      <Image src={src} alt="" fill className="object-cover" unoptimized />
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

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">
                  Добавить фото
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(e) => void handlePhotoUpload(e.target.files)}
                  className="text-sm"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  disabled={saving}
                  onClick={() => saveReview({ ...selected, id: selected.id })}
                >
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Сохранить"}
                </Button>
                <Button
                  variant="secondary"
                  disabled={saving}
                  onClick={() => saveReview({ id: selected.id, status: "approved" })}
                >
                  Подтвердить
                </Button>
                <Button
                  variant="outline"
                  disabled={saving}
                  onClick={() => saveReview({ id: selected.id, status: "rejected" })}
                >
                  Отклонить
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
    </div>
  );
}

async function uploadPhotos(files: File[]): Promise<string[]> {
  const urls: string[] = [];
  for (const file of files) {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/admin/upload", { method: "POST", body: form });
    if (res.ok) {
      const data = (await res.json()) as { url: string };
      urls.push(data.url);
    }
  }
  return urls;
}
