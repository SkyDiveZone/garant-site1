import type { ServiceCatalogCategory, ServiceOfferPage } from "@/lib/service-catalog/types";
import {
  getAllElektrikOfferSlugs,
  getElektrikOffer,
  getElektrikOffers,
  getElektrikOffersByGroup,
} from "@/lib/service-catalog/categories/elektrik";
import {
  getAllSantehnikOfferSlugs,
  getSantehnikOffer,
  getSantehnikOffers,
  getSantehnikOffersByGroup,
} from "@/lib/service-catalog/categories/santehnik";

export function getServiceOffer(
  category: ServiceCatalogCategory,
  slug: string
): ServiceOfferPage | undefined {
  if (category === "elektrik") return getElektrikOffer(slug);
  if (category === "santehnik") return getSantehnikOffer(slug);
  return undefined;
}

export function getAllServiceOfferPaths(): { category: ServiceCatalogCategory; slug: string }[] {
  return [
    ...getAllElektrikOfferSlugs().map((slug) => ({ category: "elektrik" as const, slug })),
    ...getAllSantehnikOfferSlugs().map((slug) => ({ category: "santehnik" as const, slug })),
  ];
}

export function getCategoryOffersGrouped(category: ServiceCatalogCategory) {
  if (category === "elektrik") return getElektrikOffersByGroup();
  if (category === "santehnik") return getSantehnikOffersByGroup();
  return [];
}

export function getCategoryOffers(category: ServiceCatalogCategory): ServiceOfferPage[] {
  if (category === "elektrik") return getElektrikOffers();
  if (category === "santehnik") return getSantehnikOffers();
  return [];
}

export function getServiceOfferPath(category: ServiceCatalogCategory, slug: string): string {
  return `/${category}/${slug}`;
}
