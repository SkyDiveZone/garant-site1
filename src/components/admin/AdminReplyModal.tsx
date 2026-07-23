"use client";

import { Button } from "@/components/ui/Button";
import type { Review } from "@/lib/reviews/types";
import { Loader2, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";

interface AdminReplyModalProps {
  review: Review;
  open: boolean;
  saving: boolean;
  onClose: () => void;
  onSave: (text: string) => Promise<void>;
  onDelete: () => Promise<void>;
}

export function AdminReplyModal({
  review,
  open,
  saving,
  onClose,
  onSave,
  onDelete,
}: AdminReplyModalProps) {
  const [text, setText] = useState(review.adminReply?.text ?? "");

  useEffect(() => {
    if (open) {
      setText(review.adminReply?.text ?? "");
    }
  }, [open, review.adminReply?.text]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSave = async () => {
    await onSave(text);
  };

  const handleDelete = async () => {
    if (!review.adminReply) return;
    if (!confirm("Удалить ответ компании?")) return;
    await onDelete();
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center bg-black/50 p-4 sm:items-center"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-reply-title"
        className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="admin-reply-title" className="font-display text-xl font-bold text-slate-900">
              Ответ компании
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Отзыв от {review.name}
              {review.adminReply && (
                <span className="block pt-1 text-xs text-slate-400">
                  Текущий ответ от {review.adminReply.date}
                </span>
              )}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
            aria-label="Закрыть"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <textarea
          rows={8}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Спасибо за отзыв! Мы рады, что смогли помочь..."
          className="mt-4 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm leading-relaxed text-slate-800 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100"
        />

        <div className="mt-5 flex flex-wrap gap-2">
          <Button disabled={saving} onClick={() => void handleSave()}>
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Сохранить"}
          </Button>
          <Button variant="secondary" disabled={saving} onClick={onClose}>
            Отмена
          </Button>
          {review.adminReply && (
            <Button
              variant="ghost"
              disabled={saving}
              onClick={() => void handleDelete()}
              className="ml-auto text-red-600 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
              Удалить ответ
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
