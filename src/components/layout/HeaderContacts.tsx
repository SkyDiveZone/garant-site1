"use client";

import { HEADER_PHONES, SITE } from "@/lib/data";
import { trackMaxClick, trackPhoneClick, trackTelegramClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";

interface HeaderContactsProps {
  onOpenForm: () => void;
  className?: string;
  light?: boolean;
}

export function HeaderContacts({ onOpenForm: _onOpenForm, className, light = false }: HeaderContactsProps) {
  const phone = HEADER_PHONES[0];

  return (
    <div className={cn("hidden min-w-0 flex-col items-end lg:flex", className)}>
      <a
        href={`tel:${phone.raw}`}
        onClick={trackPhoneClick}
        className={cn(
          "whitespace-nowrap text-sm font-extrabold tracking-tight",
          light ? "text-white" : "text-ink"
        )}
      >
        {phone.display}
      </a>
      <span className={cn("text-[12px] font-semibold", light ? "text-white/60" : "text-muted")}>
        круглосуточно, без выходных
      </span>
      <div className="mt-1 flex items-center gap-2 text-[12px] font-semibold">
        <a
          href={SITE.telegram.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackTelegramClick}
          className={cn(light ? "text-white/75 hover:text-white" : "text-muted hover:text-ink")}
        >
          Телеграм
        </a>
        <a
          href={SITE.max.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackMaxClick}
          className={cn(light ? "text-white/75 hover:text-white" : "text-muted hover:text-ink")}
        >
          Макс
        </a>
      </div>
    </div>
  );
}
