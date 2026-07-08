"use client";

import { PHONES, SITE } from "@/lib/data";
import { TelegramIcon } from "@/components/ui/TelegramLink";
import { FileText, Phone } from "lucide-react";

export function FloatingCTA() {
  const scrollToForm = () => {
    const form = document.getElementById("lead-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    window.location.hash = "lead-form";
  };

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 border-t border-slate-200 bg-white/95 p-2 shadow-[0_-4px_24px_rgba(15,76,129,0.12)] backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "max(0.5rem, env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2">
        <a
          href={`tel:${PHONES[0].raw}`}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-brand-600 px-2 py-3 text-xs font-semibold text-white"
        >
          <Phone className="h-4 w-4 shrink-0" />
          Позвонить
        </a>
        <a
          href={SITE.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-sky-500 px-2 py-3 text-xs font-semibold text-white"
          aria-label="Telegram"
        >
          <TelegramIcon size={16} />
          Telegram
        </a>
        <button
          type="button"
          onClick={scrollToForm}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-brand-200 bg-brand-50 px-2 py-3 text-xs font-semibold text-brand-700"
        >
          <FileText className="h-4 w-4 shrink-0" />
          Заявка
        </button>
      </div>
    </div>
  );
}
