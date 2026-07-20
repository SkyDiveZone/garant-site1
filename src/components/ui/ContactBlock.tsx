"use client";

import { MaxIconSvg, TelegramIconSvg } from "@/components/ui/messenger-icons";
import { PHONES } from "@/lib/data";
import { MESSENGER } from "@/lib/messenger-config";
import { trackMaxClick, trackPhoneClick, trackTelegramClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

type ContactBlockSize = "xs" | "sm" | "md" | "lg";
type ContactBlockTheme = "light" | "dark" | "on-dark";
type ContactBlockAlign = "start" | "center" | "end";

interface ContactBlockProps {
  className?: string;
  size?: ContactBlockSize;
  theme?: ContactBlockTheme;
  align?: ContactBlockAlign;
  /** Для Header — резерв места до монтирования (гидрация) */
  reserveSpace?: boolean;
  phones?: readonly { display: string; raw: string }[];
}

const chipBase =
  "inline-flex w-full items-center justify-center gap-2 rounded-xl border font-semibold shadow-sm transition-all hover:scale-[1.02] hover:shadow-md active:scale-[0.98]";

const chipSizes: Record<ContactBlockSize, string> = {
  xs: "min-h-[30px] px-2.5 py-1 text-[11px] leading-none sm:min-h-[32px] sm:text-xs",
  sm: "min-h-[40px] px-3.5 py-2 text-sm",
  md: "min-h-[44px] px-4 py-2.5 text-sm",
  lg: "min-h-[48px] px-5 py-3 text-base",
};

const iconSizes: Record<ContactBlockSize, number> = {
  xs: 12,
  sm: 16,
  md: 18,
  lg: 20,
};

const phoneIconClass: Record<ContactBlockSize, string> = {
  xs: "h-3.5 w-3.5 sm:h-4 sm:w-4",
  sm: "h-4 w-4",
  md: "h-4 w-4",
  lg: "h-5 w-5",
};

const messengerThemes = {
  light: {
    telegram:
      "border-sky-200 bg-sky-50 text-sky-800 hover:border-sky-300 hover:bg-sky-100",
    max: "border-violet-200 bg-violet-50 text-violet-800 hover:border-violet-300 hover:bg-violet-100",
    phone:
      "border-slate-200 bg-white text-slate-900 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700",
    phoneIcon: "text-brand-600",
  },
  dark: {
    telegram:
      "border-slate-600 bg-slate-800/80 text-sky-300 hover:border-sky-500/50 hover:bg-slate-800 hover:text-sky-200",
    max: "border-slate-600 bg-slate-800/80 text-violet-300 hover:border-violet-500/50 hover:bg-slate-800 hover:text-violet-200",
    phone:
      "border-slate-600 bg-slate-800/80 text-white hover:border-brand-500/50 hover:bg-slate-800 hover:text-brand-300",
    phoneIcon: "text-brand-400",
  },
  "on-dark": {
    telegram:
      "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20",
    max: "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20",
    phone:
      "border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/20",
    phoneIcon: "text-white",
  },
} as const;

const layoutGap: Record<ContactBlockSize, string> = {
  xs: "gap-1.5",
  sm: "gap-2",
  md: "gap-2.5",
  lg: "gap-3",
};

function alignClass(align: ContactBlockAlign) {
  if (align === "center") return "items-stretch sm:items-center sm:justify-center";
  if (align === "end") return "items-stretch sm:items-end sm:justify-end";
  return "items-stretch sm:items-start sm:justify-start";
}

function ContactBlockContent({
  className,
  size = "md",
  theme = "light",
  align = "start",
  phones = PHONES,
}: Omit<ContactBlockProps, "reserveSpace">) {
  const phone = phones[0];
  const iconSize = iconSizes[size];
  const colors = messengerThemes[theme];
  const chipClass = cn(chipBase, chipSizes[size]);

  return (
    <div
      className={cn(
        "flex w-full min-w-0 max-w-xl flex-col sm:max-w-none sm:flex-row sm:flex-wrap",
        layoutGap[size],
        alignClass(align),
        align === "center" && "mx-auto sm:mx-0",
        className
      )}
    >
      <a
        href={`tel:${phone.raw}`}
        onClick={trackPhoneClick}
        className={cn(
          chipClass,
          colors.phone,
          "whitespace-nowrap sm:min-w-[11rem] sm:flex-1"
        )}
      >
        <Phone className={cn("shrink-0", phoneIconClass[size], colors.phoneIcon)} />
        {phone.display}
      </a>

      <a
        href={MESSENGER.telegram.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackTelegramClick}
        className={cn(chipClass, colors.telegram, "sm:min-w-[8.5rem] sm:flex-1")}
        aria-label={`Telegram ${MESSENGER.telegram.username}`}
      >
        <TelegramIconSvg size={iconSize} />
        {MESSENGER.telegram.label}
      </a>

      <a
        href={MESSENGER.max.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackMaxClick}
        className={cn(chipClass, colors.max, "sm:min-w-[7rem] sm:flex-1")}
        aria-label={`MAX ${MESSENGER.max.display}`}
      >
        <MaxIconSvg size={iconSize} />
        MAX
      </a>
    </div>
  );
}

export function ContactBlock({
  reserveSpace = false,
  size = "md",
  theme = "light",
  align = "start",
  ...props
}: ContactBlockProps) {
  const [mounted, setMounted] = useState(!reserveSpace);
  const chipClass = cn(chipBase, chipSizes[size]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted && reserveSpace) {
    return (
      <div
        className={cn(
          "pointer-events-none flex w-full min-w-0 max-w-xl flex-col opacity-0 sm:max-w-none sm:flex-row sm:flex-wrap",
          layoutGap[size],
          alignClass(align),
          props.className
        )}
        aria-hidden="true"
      >
        <span className={cn(chipClass, "border-transparent bg-transparent shadow-none sm:flex-1")}>
          <Phone className={phoneIconClass[size]} />
          {PHONES[0].display}
        </span>
        <span className={cn(chipClass, "border-transparent bg-transparent shadow-none sm:flex-1")}>
          Telegram
        </span>
        <span className={cn(chipClass, "border-transparent bg-transparent shadow-none sm:flex-1")}>
          MAX
        </span>
      </div>
    );
  }

  if (!mounted) return null;

  return <ContactBlockContent size={size} theme={theme} align={align} {...props} />;
}
