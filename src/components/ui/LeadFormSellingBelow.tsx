"use client";

import { MasterSellingSections } from "@/components/landing/MasterSellingSections";
import { isAboutBeforeFaqSlug } from "@/lib/services/about-before-faq-slugs";
import { isEnhancedLandingSlug } from "@/lib/services/enhanced-landing-slugs";

interface LeadFormSellingBelowProps {
  slug?: string;
  formAnchor?: string;
  compact?: boolean;
  className?: string;
  hideWorkTypes?: boolean;
  hidePriceList?: boolean;
  hideAbout?: boolean;
  hidePopularProblems?: boolean;
}

export function LeadFormSellingBelow({
  slug,
  formAnchor,
  compact,
  className,
  hideWorkTypes,
  hidePriceList,
  hideAbout,
  hidePopularProblems,
}: LeadFormSellingBelowProps) {
  const shouldHideAbout =
    hideAbout === true ||
    (slug != null && (isEnhancedLandingSlug(slug) || isAboutBeforeFaqSlug(slug)));

  return (
    <MasterSellingSections
      slug={slug}
      formAnchor={formAnchor}
      compact={compact}
      className={className}
      hideWorkTypes={hideWorkTypes}
      hidePriceList={hidePriceList}
      hideAbout={shouldHideAbout}
      hidePopularProblems={hidePopularProblems}
    />
  );
}
