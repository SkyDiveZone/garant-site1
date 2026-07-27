"use client";

import { MasterSellingSections } from "@/components/landing/MasterSellingSections";
import { isAboutBeforeFaqSlug } from "@/lib/services/about-before-faq-slugs";

interface LeadFormSellingBelowProps {
  slug?: string;
  formAnchor?: string;
  compact?: boolean;
  className?: string;
  hideWorkTypes?: boolean;
  hidePriceList?: boolean;
}

export function LeadFormSellingBelow({
  slug,
  formAnchor,
  compact,
  className,
  hideWorkTypes,
  hidePriceList,
}: LeadFormSellingBelowProps) {
  return (
    <MasterSellingSections
      slug={slug}
      formAnchor={formAnchor}
      compact={compact}
      className={className}
      hideWorkTypes={hideWorkTypes}
      hidePriceList={hidePriceList}
      hideAbout={slug ? isAboutBeforeFaqSlug(slug) : false}
    />
  );
}
