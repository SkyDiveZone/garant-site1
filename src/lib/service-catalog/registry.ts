import type { ServiceCatalogCategory, ServiceOfferPage } from "@/lib/service-catalog/types";
import {
  getAllElektrikOfferSlugs,
  getElektrikOffer,
  getElektrikOffers,
  getElektrikOffersByGroup,
} from "@/lib/service-catalog/categories/elektrik";

export function getServiceOffer(
  category: ServiceCatalogCategory,
  slug: string
): ServiceOfferPage | undefined {
  if (category === "elektrik") return getElektrikOffer(slug);
  return undefined;
}

export function getAllServiceOfferPaths(): { category: ServiceCatalogCategory; slug: string }[] {
  return getAllElektrikOfferSlugs().map((slug) => ({ category: "elektrik", slug }));
}

export function getCategoryOffersGrouped(category: ServiceCatalogCategory) {
  if (category === "elektrik") return getElektrikOffersByGroup();
  return [];
}

export function getCategoryOffers(category: ServiceCatalogCategory): ServiceOfferPage[] {
  if (category === "elektrik") return getElektrikOffers();
  return [];
}

export function getServiceOfferPath(category: ServiceCatalogCategory, slug: string): string {
  return `/${category}/${slug}`;
}
