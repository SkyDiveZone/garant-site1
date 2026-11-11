import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoVariant = "header" | "footer" | "icon";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  linked?: boolean;
  /** Светлый текст (для тёмного фона). По умолчанию тёмный — как на ЕКБ2. */
  light?: boolean;
}

const ALT = `${SITE.name} — ${SITE.logoTagline} в Екатеринбурге`;

/** Логотип с живого ЕКБ2 (ekat-garant196.ru): зелёный дом. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="8" fill="#134e3e" />
      <path
        fill="#f6f1e6"
        fillRule="evenodd"
        d="M16 6.8 25 14.4V24.4H7V14.4L16 6.8zm0 3.1L10.2 15v6.6h11.6V15L16 9.9z"
      />
      <rect x="14.15" y="17.2" width="3.7" height="4.4" rx=".4" fill="#d24a2c" />
    </svg>
  );
}

function BrandText({ light }: { light?: boolean }) {
  return (
    <span className="min-w-0 leading-tight">
      <span
        className={cn(
          "block font-display text-[0.95rem] font-extrabold tracking-tight sm:text-[1.05rem]",
          light ? "text-white" : "text-ink"
        )}
      >
        Гарант Мастер
      </span>
      <span
        className={cn(
          "mt-0.5 block text-[10px] font-medium sm:text-[11px]",
          light ? "text-white/55" : "text-muted"
        )}
      >
        Екатеринбург · 24/7
      </span>
    </span>
  );
}

export function Logo({
  variant = "header",
  className,
  linked = true,
  light = false,
}: LogoProps) {
  const headerBrand = (
    <div className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <LogoMark className="h-8 w-8 sm:h-9 sm:w-9" />
      <BrandText light={light} />
      <span className="sr-only">{ALT}</span>
    </div>
  );

  const footerBrand = (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-11 w-11" />
      <BrandText light={light} />
      <span className="sr-only">{ALT}</span>
    </div>
  );

  const iconOnly = <LogoMark className="h-9 w-9" />;

  const content =
    variant === "header" ? headerBrand : variant === "footer" ? footerBrand : iconOnly;

  if (!linked) {
    return <span className="inline-flex shrink-0">{content}</span>;
  }

  return (
    <Link href="/" className="inline-flex shrink-0 transition-opacity hover:opacity-90" aria-label={ALT}>
      {content}
    </Link>
  );
}
