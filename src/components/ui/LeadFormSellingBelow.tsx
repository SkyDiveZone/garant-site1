"use client";

import { MasterSellingSections } from "@/components/landing/MasterSellingSections";

interface LeadFormSellingBelowProps {
  slug?: string;
  formAnchor?: string;
  compact?: boolean;
  className?: string;
  hideWorkTypes?: boolean;
}

export function LeadFormSellingBelow({
  slug,
  formAnchor,
  compact,
  className,
  hideWorkTypes,
}: LeadFormSellingBelowProps) {
  return (
    <MasterSellingSections
      slug={slug}
      formAnchor={formAnchor}
      compact={compact}
      className={className}
      hideWorkTypes={hideWorkTypes}
    />
  );
}
