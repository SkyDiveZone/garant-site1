"use client";

import { MaxIconSvg, TelegramIconSvg } from "@/components/ui/messenger-icons";
import { Button } from "@/components/ui/Button";
import { HEADER_PHONES } from "@/lib/data";
import { MESSENGER } from "@/lib/messenger-config";
import { trackMaxClick, trackPhoneClick, trackTelegramClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface HeaderContactsProps {
  onOpenForm: () => void;
  className?: string;
}

const messengerBtn =
  "inline-flex h-[22px] w-[84px] items-center justify-center gap-1 rounded-md border px-1.5 text-[10px] font-semibold leading-none shadow-sm transition-colors hover:shadow sm:h-[24px] sm:text-xs";

export function HeaderContacts({ onOpenForm, className }: HeaderContactsProps) {
  const phone = HEADER_PHONES[0];

  return (
    <div className={cn("flex min-w-0 items-center gap-2.5 sm:gap-3", className)}>
      {/* Левая колонка: CTA + телефон */}
      <div className="flex min-w-0 flex-col items-stretch gap-1">
        <Button
          size="sm"
          className="min-h-[30px] whitespace-nowrap px-3 py-1 text-xs font-semibold sm:min-h-[32px] sm:text-sm"
          onClick={onOpenForm}
        >
          Вызвать мастера
        </Button>
        <a
          href={`tel:${phone.raw}`}
          onClick={trackPhoneClick}
          className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-bold leading-none text-slate-900 transition-colors hover:text-brand-600 sm:text-sm"
        >
          <Phone className="h-3.5 w-3.5 shrink-0 text-brand-600 sm:h-4 sm:w-4" />
          {phone.display}
        </a>
      </div>

      {/* Правая колонка: Telegram + MAX */}
      <div className="flex shrink-0 flex-col gap-1">
        <a
          href={MESSENGER.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackTelegramClick}
          className={cn(
            messengerBtn,
            "border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-300 hover:bg-sky-100"
          )}
          aria-label={`Telegram ${MESSENGER.telegram.username}`}
        >
          <TelegramIconSvg size={11} />
          {MESSENGER.telegram.label}
        </a>
        <a
          href={MESSENGER.max.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackMaxClick}
          className={cn(
            messengerBtn,
            "border-violet-200 bg-violet-50 text-violet-800 hover:border-violet-300 hover:bg-violet-100"
          )}
          aria-label={`MAX ${MESSENGER.max.display}`}
        >
          <MaxIconSvg size={11} />
          MAX
        </a>
      </div>
    </div>
  );
}
