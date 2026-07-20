"use client";

import { Button } from "@/components/ui/Button";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { HeroTrustInfo } from "@/components/ui/HeroTrustInfo";
import { cn } from "@/lib/utils";

interface ConversionActionsProps {
  formAnchor?: string;
  size?: "default" | "large";
  className?: string;
  contactAlign?: "start" | "center" | "end";
  showContacts?: boolean;
  showTrustInfo?: boolean;
}

export function ConversionActions({
  formAnchor = "#lead-form",
  size = "default",
  className,
  contactAlign = "center",
  showContacts = true,
  showTrustInfo = false,
}: ConversionActionsProps) {
  const isLarge = size === "large";

  return (
    <div
      className={cn(
        "flex w-full max-w-xl flex-col gap-3 sm:max-w-2xl",
        contactAlign === "center" && "mx-auto items-center",
        contactAlign === "start" && "items-stretch",
        contactAlign === "end" && "ml-auto items-end",
        className
      )}
    >
      {showContacts && (
        <ContactBlock
          size={isLarge ? "lg" : "md"}
          align={contactAlign}
          className="max-w-none"
        />
      )}
      <Button
        size={isLarge ? "lg" : "md"}
        variant="outline"
        href={formAnchor}
        className="w-full"
      >
        Оставить заявку
      </Button>
      {showTrustInfo && <HeroTrustInfo align={contactAlign} />}
    </div>
  );
}
