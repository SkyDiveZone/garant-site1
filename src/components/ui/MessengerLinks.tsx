"use client";

import { MaxIconSvg, TelegramIconSvg } from "@/components/ui/messenger-icons";
import { MESSENGER } from "@/lib/messenger-config";
import { trackMaxClick, trackTelegramClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface MessengerLinksProps {
  className?: string;
  gapClassName?: string;
  iconSize?: number;
  showLabel?: boolean;
  variant?: "link" | "button";
  /** row — в строку, column — в столбец */
  direction?: "row" | "column";
  telegramClassName?: string;
  maxClassName?: string;
  telegramLabel?: string;
  maxLabel?: string;
  /** Резерв места до монтирования — для Header, где критична гидрация */
  reserveSpace?: boolean;
}

const linkBaseClass = "inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-all";
const telegramButtonClass =
  "rounded-xl border border-sky-200 bg-sky-50 px-3.5 py-2 text-sky-700 shadow-sm hover:border-sky-300 hover:bg-sky-100 hover:shadow";
const maxButtonClass =
  "rounded-xl border border-violet-200 bg-violet-50 px-3.5 py-2 text-violet-800 shadow-sm hover:border-violet-300 hover:bg-violet-100 hover:shadow";

function MessengerLinksContent({
  className,
  gapClassName,
  iconSize = 20,
  showLabel = true,
  variant = "link",
  direction = "row",
  telegramClassName,
  maxClassName,
  telegramLabel,
  maxLabel,
}: Omit<MessengerLinksProps, "reserveSpace">) {
  const resolvedTelegramLabel = telegramLabel ?? MESSENGER.telegram.username;
  const resolvedMaxLabel = maxLabel ?? MESSENGER.max.display;
  const isColumn = direction === "column";

  return (
    <div
      className={cn(
        isColumn
          ? "flex flex-col items-end gap-0.5"
          : cn("flex flex-nowrap items-center", gapClassName ?? "gap-3 sm:gap-4"),
        className
      )}
    >
      <a
        href={MESSENGER.telegram.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackTelegramClick}
        className={cn(
          linkBaseClass,
          variant === "button" ? telegramButtonClass : "transition-colors",
          telegramClassName
        )}
        aria-label={`Telegram ${MESSENGER.telegram.username}`}
      >
        <TelegramIconSvg size={iconSize} />
        {showLabel && resolvedTelegramLabel}
      </a>
      <a
        href={MESSENGER.max.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackMaxClick}
        className={cn(
          linkBaseClass,
          variant === "button" ? maxButtonClass : "transition-colors",
          maxClassName
        )}
        aria-label={`Max ${MESSENGER.max.display}`}
      >
        <MaxIconSvg size={iconSize} />
        {showLabel && resolvedMaxLabel}
      </a>
    </div>
  );
}

export function MessengerLinks({
  reserveSpace = false,
  iconSize = 20,
  telegramLabel,
  maxLabel,
  direction = "row",
  ...props
}: MessengerLinksProps) {
  const [mounted, setMounted] = useState(!reserveSpace);
  const resolvedTelegramLabel = telegramLabel ?? MESSENGER.telegram.username;
  const resolvedMaxLabel = maxLabel ?? MESSENGER.max.display;
  const isColumn = direction === "column";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    if (!reserveSpace) return null;
    return (
      <div
        className={cn(
          isColumn
            ? "flex flex-col items-end gap-0.5 opacity-0"
            : cn("flex flex-nowrap items-center gap-3 opacity-0 sm:gap-4"),
          props.className
        )}
        aria-hidden="true"
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <TelegramIconSvg size={iconSize} />
          {resolvedTelegramLabel}
        </span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold">
          <MaxIconSvg size={iconSize} />
          {resolvedMaxLabel}
        </span>
      </div>
    );
  }

  return (
    <MessengerLinksContent
      iconSize={iconSize}
      telegramLabel={telegramLabel}
      maxLabel={maxLabel}
      direction={direction}
      {...props}
    />
  );
}
