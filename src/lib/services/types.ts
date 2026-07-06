export type ServiceCategory = "plumbing" | "electrical" | "handyman";

export interface ServiceBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServicePrice {
  name: string;
  price: string;
}

export interface ServiceReview {
  name: string;
  text: string;
  date: string;
  rating: number;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  h1: string;
  title: string;
  description: string;
  keywords: string[];
  heroSubtitle: string;
  priceFrom: string;
  category: ServiceCategory;
  categoryLabel: string;
  parent?: { label: string; href: string };
  seoText: string[];
  benefits: ServiceBenefit[];
  steps: ServiceStep[];
  prices: ServicePrice[];
  faq: ServiceFAQ[];
  reviews: ServiceReview[];
  galleryLabel: string;
}
