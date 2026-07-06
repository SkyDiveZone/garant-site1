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

const ALT = `${SITE.name} — сантехник, электрик, мастер на час в Екатеринбурге`;

export function Logo({ variant = "header", className, linked = true }: LogoProps) {
  const isIcon = variant === "icon";
  const isFooter = variant === "footer";

  const image = (
    <Image
      src={isIcon ? "/favicon-32x32.png" : "/apple-touch-icon.png"}
      alt={ALT}
      width={isIcon ? 32 : 180}
      height={isIcon ? 32 : 180}
      priority={variant === "header"}
      className={cn(
        "object-contain",
        isIcon && "h-9 w-9",
        variant === "header" && "hidden h-11 w-auto sm:block sm:h-12 md:h-14",
        isFooter && "h-28 w-auto rounded-xl",
        className
      )}
    />
  );

  const iconOnly = (
    <Image
      src="/favicon-32x32.png"
      alt={ALT}
      width={32}
      height={32}
      priority
      className="h-9 w-9 object-contain sm:hidden"
    />
  );

  const content =
    variant === "header" ? (
      <span className="inline-flex items-center">
        {iconOnly}
        {image}
      </span>
    ) : (
      image
    );

  if (!linked) {
    return <span className={cn("inline-flex shrink-0", className)}>{content}</span>;
  }

  return (
    <Link href="/" className={cn("inline-flex shrink-0 items-center", className)} aria-label={SITE.name}>
      {content}
    </Link>
  );
}
