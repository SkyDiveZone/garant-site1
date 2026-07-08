"use client";

import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";
import { TelegramIcon } from "@/components/ui/TelegramLink";
import { Phone } from "lucide-react";

interface ConversionActionsProps {
  formAnchor?: string;
  size?: "default" | "large";
}

export function ConversionActions({
  formAnchor = "#lead-form",
  size = "default",
}: ConversionActionsProps) {
  const isLarge = size === "large";

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button
        size={isLarge ? "lg" : "md"}
        href={`tel:${SITE.phoneRaw}`}
        className={isLarge ? "sm:min-w-[200px]" : ""}
      >
        <Phone className="h-4 w-4" />
        Позвонить
      </Button>
      <Button
        size={isLarge ? "lg" : "md"}
        variant="secondary"
        href={SITE.telegram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100"
      >
        <TelegramIcon size={16} />
        Telegram
      </Button>
      <Button
        size={isLarge ? "lg" : "md"}
        variant="outline"
        href={formAnchor}
      >
        Оставить заявку
      </Button>
    </div>
  );
}
