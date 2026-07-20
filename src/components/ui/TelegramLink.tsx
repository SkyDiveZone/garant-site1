"use client";

import { TelegramIconSvg } from "@/components/ui/messenger-icons";
import { MESSENGER } from "@/lib/messenger-config";
import { trackTelegramClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";

interface TelegramLinkProps {
  className?: string;
  showLabel?: boolean;
  label?: string;
  iconSize?: number;
  variant?: "link" | "button";
}

function TelegramIcon({ size = 20 }: { size?: number }) {
  return <TelegramIconSvg size={size} />;
}

export function TelegramLink({
  className,
  showLabel = true,
  label,
  iconSize = 20,
  variant = "link",
}: TelegramLinkProps) {
  return (
    <a
      href={MESSENGER.telegram.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackTelegramClick}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold transition-all",
        variant === "button"
          ? "rounded-xl border border-sky-200 bg-sky-50 px-3.5 py-2 text-sky-700 shadow-sm hover:border-sky-300 hover:bg-sky-100 hover:shadow"
          : "transition-colors",
        className
      )}
      aria-label={`Telegram ${MESSENGER.telegram.username}`}
    >
      <TelegramIcon size={iconSize} />
      {showLabel && (label ?? MESSENGER.telegram.username)}
    </a>
  );
}

export { TelegramIcon };
