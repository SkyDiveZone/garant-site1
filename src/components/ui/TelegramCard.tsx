"use client";

import { Button } from "@/components/ui/Button";
import { MaxIconSvg } from "@/components/ui/messenger-icons";
import { TelegramIcon } from "@/components/ui/TelegramLink";
import { ROUND_THE_CLOCK } from "@/lib/copy";
import { MESSENGER } from "@/lib/messenger-config";
import { cn } from "@/lib/utils";

interface TelegramCardProps {
  className?: string;
}

const messengerButtonClass =
  "min-w-0 flex-1 border shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]";

export function TelegramCard({ className }: TelegramCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm",
        className
      )}
    >
      <p className="font-display text-base font-bold text-slate-900">💬 Есть вопросы?</p>
      <p className="mt-2 text-sm font-medium text-slate-800">
        Напишите нам в Telegram или MAX
      </p>
      <p className="mt-1 text-sm text-slate-600">
        {ROUND_THE_CLOCK.telegramResponse}
      </p>
      <div className="mt-4 flex flex-nowrap gap-3">
        <Button
          href={MESSENGER.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          variant="secondary"
          className={cn(
            messengerButtonClass,
            "border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-300 hover:bg-sky-100"
          )}
        >
          <TelegramIcon size={18} />
          Telegram
        </Button>
        <Button
          href={MESSENGER.max.url}
          target="_blank"
          rel="noopener noreferrer"
          size="md"
          variant="secondary"
          className={cn(
            messengerButtonClass,
            "border-violet-200 bg-violet-50 text-violet-800 hover:border-violet-300 hover:bg-violet-100"
          )}
        >
          <MaxIconSvg size={18} />
          MAX
        </Button>
      </div>
    </div>
  );
}
