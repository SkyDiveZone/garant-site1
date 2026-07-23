import { SITE } from "@/lib/data";
import { ROUND_THE_CLOCK } from "@/lib/copy";
import { cn } from "@/lib/utils";
import { ClipboardList, MapPin, ShieldCheck, Star } from "lucide-react";

interface HeroTrustInfoProps {
  className?: string;
  align?: "start" | "center" | "end";
  theme?: "light" | "on-dark";
}

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: ROUND_THE_CLOCK.trustLine, iconClass: "text-emerald-500" },
  { icon: ClipboardList, label: "Смета после осмотра", iconClass: "text-brand-500" },
  { icon: Star, label: "4.9 рейтинг", iconClass: "fill-amber-400 text-amber-400" },
] as const;

export function HeroTrustInfo({
  className,
  align = "start",
  theme = "light",
}: HeroTrustInfoProps) {
  const isOnDark = theme === "on-dark";

  return (
    <div
      className={cn(
        "flex w-full max-w-xl flex-col gap-3 sm:max-w-2xl",
        align === "center" && "mx-auto items-center text-center",
        align === "end" && "ml-auto items-end text-right",
        align === "start" && "items-stretch",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-wrap gap-x-4 gap-y-2 text-sm",
          isOnDark ? "text-brand-100" : "text-slate-600",
          align === "center" && "justify-center",
          align === "end" && "justify-end"
        )}
      >
        {TRUST_ITEMS.map(({ icon: Icon, label, iconClass }) => (
          <span key={label} className="inline-flex items-center gap-1.5">
            <Icon className={cn("h-4 w-4 shrink-0", iconClass)} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
      <p
        className={cn(
          "flex items-center gap-1.5 text-sm",
          isOnDark ? "text-brand-100" : "text-slate-600",
          align === "center" && "justify-center",
          align === "end" && "justify-end"
        )}
      >
        <MapPin
          className={cn("h-4 w-4 shrink-0", isOnDark ? "text-white" : "text-brand-600")}
          aria-hidden="true"
        />
        {SITE.serviceArea}
      </p>
    </div>
  );
}
