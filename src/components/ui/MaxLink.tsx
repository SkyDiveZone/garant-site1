"use client";

import { MaxIconSvg } from "@/components/ui/messenger-icons";
import { MESSENGER } from "@/lib/messenger-config";
import { trackMaxClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";

interface MaxLinkProps {
  className?: string;
  showLabel?: boolean;
  label?: string;
  iconSize?: number;
  variant?: "link" | "button";
}

export function MaxLink({
  className,
  showLabel = true,
  label,
  iconSize = 20,
  variant = "link",
}: MaxLinkProps) {
  return (
    <a
      href={MESSENGER.max.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackMaxClick}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold transition-all",
        variant === "button"
          ? "rounded-xl border border-violet-200 bg-violet-50 px-3.5 py-2 text-violet-800 shadow-sm hover:border-violet-300 hover:bg-violet-100 hover:shadow"
          : "transition-colors",
        className
      )}
      aria-label={`MAX ${MESSENGER.max.display}`}
    >
      <MaxIconSvg size={iconSize} />
      {showLabel && (label ?? MESSENGER.max.display)}
    </a>
  );
}

export { MaxIconSvg as MaxIcon };
