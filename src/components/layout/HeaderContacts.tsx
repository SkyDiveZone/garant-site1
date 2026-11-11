"use client";

import { Button } from "@/components/ui/Button";
import { HEADER_PHONES } from "@/lib/data";
import { trackPhoneClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface HeaderContactsProps {
  onOpenForm: () => void;
  className?: string;
  light?: boolean;
}

export function HeaderContacts({ onOpenForm, className, light = false }: HeaderContactsProps) {
  const phone = HEADER_PHONES[0];

  return (
    <div className={cn("flex min-w-0 items-center gap-3 xl:gap-4", className)}>
      <a
        href={`tel:${phone.raw}`}
        onClick={trackPhoneClick}
        className={cn(
          "hidden min-w-0 flex-col items-end leading-tight lg:flex",
          light ? "text-white" : "text-ink"
        )}
      >
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-bold tracking-tight">
          <Phone className="h-3.5 w-3.5 shrink-0 text-brand-500" aria-hidden />
          {phone.display}
        </span>
        <span className={cn("text-[11px]", light ? "text-white/60" : "text-muted")}>Круглосуточно</span>
      </a>
      <Button size="sm" className="whitespace-nowrap px-4" onClick={onOpenForm}>
        Вызвать мастера
      </Button>
    </div>
  );
}
