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

function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/apple-touch-icon.png"
      alt=""
      width={48}
      height={48}
      priority
      className={cn("h-10 w-10 shrink-0 rounded-lg object-contain sm:h-11 sm:w-11", className)}
      aria-hidden="true"
    />
  );
}

export function Logo({ variant = "header", className, linked = true }: LogoProps) {
  const headerBrand = (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <div className="min-w-0 leading-tight">
        <p className="font-display text-[15px] font-extrabold uppercase tracking-wide text-slate-900 sm:text-base">
          Гарант Мастер
        </p>
        <p className="mt-0.5 text-[10px] font-medium leading-snug text-slate-500 sm:hidden">
          {SITE.logoTaglineLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <p className="mt-0.5 hidden text-xs font-medium leading-snug text-slate-500 sm:block lg:whitespace-nowrap">
          {SITE.logoTagline}
        </p>
      </div>
    </div>
  );

  const footerBrand = (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-11 w-11" />
      <div className="leading-tight">
        <p className="font-display text-base font-extrabold uppercase tracking-wide text-white">
          Гарант Мастер
        </p>
        <p className="mt-0.5 text-xs text-slate-400">{SITE.logoTagline}</p>
      </div>
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
