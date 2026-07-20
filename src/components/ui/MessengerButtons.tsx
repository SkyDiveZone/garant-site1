"use client";

import { MaxIconSvg, TelegramIconSvg } from "@/components/ui/messenger-icons";
import { MESSENGER } from "@/lib/messenger-config";
import { trackContactHref } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";

const floatingMessengerBtn =
  "flex min-h-[36px] flex-1 items-center justify-center gap-1.5 rounded-xl border px-2 text-xs font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]";

/** Плавающая панель mobile: Telegram и MAX в столбец, одинаковый размер. */
export function FloatingMessengerButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex min-w-0 flex-1 flex-col gap-1.5", className)}>
      <a
        href={MESSENGER.telegram.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackContactHref(MESSENGER.telegram.url)}
        className={cn(
          floatingMessengerBtn,
          "border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-300 hover:bg-sky-100"
        )}
        aria-label="Telegram"
      >
        <TelegramIconSvg size={14} />
        <span className="truncate">Telegram</span>
      </a>
      <a
        href={MESSENGER.max.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackContactHref(MESSENGER.max.url)}
        className={cn(
          floatingMessengerBtn,
          "border-violet-200 bg-violet-50 text-violet-800 hover:border-violet-300 hover:bg-violet-100"
        )}
        aria-label="MAX"
      >
        <MaxIconSvg size={14} />
        <span className="truncate">MAX</span>
      </a>
    </div>
  );
}
