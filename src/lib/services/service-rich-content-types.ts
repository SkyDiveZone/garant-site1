import type { ServiceFAQ } from "./types";

export interface ServiceRichWhenItem {
  title: string;
  description: string;
}

export interface ServiceRichStep {
  title: string;
  description: string;
}

export interface ServiceRichRelated {
  title: string;
  href: string;
  description: string;
}

export interface ServiceRichContent {
  focusedPriceNames: readonly string[];
  fullPriceHref: string;
  whenNeeded: readonly ServiceRichWhenItem[];
  includedWorks: readonly string[];
  visitSteps: readonly ServiceRichStep[];
  duration: string;
  priceFactors: readonly string[];
  faq: readonly ServiceFAQ[];
  relatedServices: readonly ServiceRichRelated[];
}
