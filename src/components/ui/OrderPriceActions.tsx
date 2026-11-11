"use client";

import { Button } from "@/components/ui/Button";
import { OPEN_LEAD_FORM_EVENT } from "@/lib/lead-form-events";
import { cn } from "@/lib/utils";

interface OrderPriceActionsProps {
  orderHref: string;
  orderLabel?: string;
  priceLabel?: string;
  size?: "sm" | "lg";
  className?: string;
}

function openLeadForm() {
  window.dispatchEvent(new CustomEvent(OPEN_LEAD_FORM_EVENT));
}

export function OrderPriceActions({
  orderHref,
  orderLabel = "Заказать",
  priceLabel,
  size = "sm",
  className,
}: OrderPriceActionsProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {priceLabel ? (
        <p className="whitespace-nowrap text-sm font-bold text-brand-700">{priceLabel}</p>
      ) : null}
      <Button
        href={orderHref}
        size={size}
        onClick={(event) => {
          event.preventDefault();
          openLeadForm();
        }}
      >
        {orderLabel}
      </Button>
    </div>
  );
}
