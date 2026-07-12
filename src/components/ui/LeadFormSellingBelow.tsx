"use client";

import { MasterSellingSections } from "@/components/landing/MasterSellingSections";

interface LeadFormSellingBelowProps {
  slug?: string;
  formAnchor?: string;
  compact?: boolean;
  className?: string;
}

export function LeadFormSellingBelow({
  slug,
  formAnchor,
  compact,
  className,
}: LeadFormSellingBelowProps) {
  return (
    <MasterSellingSections
      slug={slug}
      formAnchor={formAnchor}
      compact={compact}
      className={className}
    />
  );
}
