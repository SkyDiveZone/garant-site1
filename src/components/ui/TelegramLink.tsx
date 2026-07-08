import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";

interface TelegramLinkProps {
  className?: string;
  showLabel?: boolean;
  label?: string;
  iconSize?: number;
  variant?: "link" | "button";
}

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
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
      href={SITE.telegram.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 text-sm font-semibold transition-all",
        variant === "button"
          ? "rounded-xl border border-sky-200 bg-sky-50 px-3.5 py-2 text-sky-700 shadow-sm hover:border-sky-300 hover:bg-sky-100 hover:shadow"
          : "transition-colors",
        className
      )}
      aria-label={`Telegram ${SITE.telegram.username}`}
    >
      <TelegramIcon size={iconSize} />
      {showLabel && (label ?? SITE.telegram.username)}
    </a>
  );
}

export { TelegramIcon };
