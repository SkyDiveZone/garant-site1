import type { ReviewCategory } from "@/lib/reviews/types";
import type { ServiceBenefit, ServiceFAQ, ServiceStep } from "@/lib/services/types";
import type { LucideIcon } from "lucide-react";

export type ServiceCatalogCategory = "elektrik";

export interface ServiceOfferGalleryImage {
  src: string;
  alt: string;
}

export interface ServiceOfferSituation {
  title: string;
  description: string;
}

export interface ServiceOfferProblem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceOfferPage {
  /** URL segment under /{category}/ */
  slug: string;
  category: ServiceCatalogCategory;
  categoryLabel: string;
  categoryHref: string;
  /** Display name of the service (short) */
  serviceName: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  heroSubtitle: string;
  priceFrom: number;
  priceUnit?: string;
  priceGroup: string;
  /** Full description block */
  aboutIntro: string;
  includedWorks: readonly string[];
  howItWorks: readonly string[];
  whenNeeded: readonly ServiceOfferSituation[];
  whenToCall: readonly ServiceOfferSituation[];
  popularProblems: readonly ServiceOfferProblem[];
  benefits: readonly ServiceBenefit[];
  steps: readonly ServiceStep[];
  galleryImages: readonly ServiceOfferGalleryImage[];
  faq: readonly ServiceFAQ[];
  reviewCategory: ReviewCategory;
  /** Optional keyword hints for future per-service review filtering */
  reviewKeywords?: readonly string[];
}

export interface ServiceCatalogCategoryConfig {
  slug: ServiceCatalogCategory;
  label: string;
  href: string;
  reviewCategory: ReviewCategory;
}
