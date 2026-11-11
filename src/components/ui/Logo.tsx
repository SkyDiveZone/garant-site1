import { SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type LogoVariant = "header" | "footer" | "icon";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
  linked?: boolean;
}

const ALT = `${SITE.name} — ${SITE.logoTagline} в Екатеринбурге`;
const LOGO_SRC = "/logo-mark.webp?v=ekb-4";

function LogoMark({
  className,
  size = 180,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Image
      src={LOGO_SRC}
      alt=""
      width={size}
      height={size}
      priority
      className={cn("shrink-0 rounded-[12px] object-contain", className)}
      aria-hidden="true"
    />
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

export function Logo({ variant = "header", className, linked = true }: LogoProps) {
  const headerBrand = (
    <div className={cn("flex items-center gap-2.5 sm:gap-3", className)}>
      <LogoMark className="h-10 w-10 sm:h-11 sm:w-11" size={88} />
      <BrandText light />
      <span className="sr-only">{ALT}</span>
    </div>
  );

  const footerBrand = (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark className="h-14 w-14" size={112} />
      <BrandText light />
      <span className="sr-only">{ALT}</span>
    </div>
  );

  const iconOnly = <LogoMark className="h-11 w-11" />;

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
