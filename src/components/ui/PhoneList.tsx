"use client";

import { PHONES } from "@/lib/data";
import { trackPhoneClick } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

type PhoneListVariant = "inline" | "stack" | "compact" | "header";

interface PhoneListProps {
  variant?: PhoneListVariant;
  className?: string;
  linkClassName?: string;
  showIcon?: boolean;
  iconClassName?: string;
  /** Переопределить список номеров (например, только 2 для Header) */
  phones?: readonly { display: string; raw: string }[];
}

export function PhoneList({
  variant = "stack",
  className,
  linkClassName,
  showIcon = true,
  iconClassName,
  phones = PHONES,
}: PhoneListProps) {
  if (variant === "header") {
    return (
      <ul className={cn("flex flex-col gap-1", className)}>
        {phones.map((phone) => (
          <li key={phone.raw}>
            <a
              href={`tel:${phone.raw}`}
              onClick={trackPhoneClick}
              className={cn(
                "inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-slate-800 transition-colors hover:text-brand-600",
                linkClassName
              )}
            >
              {showIcon && <Phone className={cn("h-4 w-4 shrink-0 text-brand-600", iconClassName)} />}
              {phone.display}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  if (variant === "inline") {
    return (
      <div className={cn("flex flex-col items-end gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-1", className)}>
        {phones.map((phone, index) => (
          <span key={phone.raw} className="inline-flex items-center">
            {index > 0 && (
              <span className="mx-2 hidden text-slate-300 sm:inline" aria-hidden="true">
                |
              </span>
            )}
            <a
              href={`tel:${phone.raw}`}
              onClick={trackPhoneClick}
              className={cn(
                "inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-semibold transition-colors hover:text-brand-600 sm:text-sm",
                linkClassName
              )}
            >
              {showIcon && index === 0 && (
                <Phone className={cn("h-3.5 w-3.5 shrink-0", iconClassName)} />
              )}
              {phone.display}
            </a>
          </span>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={`tel:${phones[0].raw}`}
        onClick={trackPhoneClick}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold transition-colors",
          linkClassName,
          className
        )}
      >
        {showIcon && <Phone className={cn("h-4 w-4 shrink-0", iconClassName)} />}
        {phones[0].display}
      </a>
    );
  }

  return (
    <ul className={cn("space-y-2", className)}>
      {phones.map((phone) => (
        <li key={phone.raw}>
          <a
            href={`tel:${phone.raw}`}
            onClick={trackPhoneClick}
            className={cn(
              "inline-flex items-center gap-2 text-sm font-medium transition-colors",
              linkClassName
            )}
          >
            {showIcon && <Phone className={cn("h-4 w-4 shrink-0", iconClassName)} />}
            {phone.display}
          </a>
        </li>
      ))}
    </ul>
  );
}
