import type { ServiceCatalogCategory, ServiceOfferPage } from "@/lib/service-catalog/types";
import {
  getAllElektrikOfferSlugs,
  getElektrikOffer,
  getElektrikOffers,
  getElektrikOffersByGroup,
} from "@/lib/service-catalog/categories/elektrik";
import {
  getAllMasterNaChasOfferSlugs,
  getMasterNaChasOffer,
  getMasterNaChasOffers,
  getMasterNaChasOffersByGroup,
} from "@/lib/service-catalog/categories/master-na-chas";
import {
  getAllRemontKvartirOfferSlugs,
  getRemontKvartirOffer,
  getRemontKvartirOffers,
  getRemontKvartirOffersByGroup,
} from "@/lib/service-catalog/categories/remont-kvartir";
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
  if (category === "master-na-chas") return getMasterNaChasOffer(slug);
  if (category === "remont-kvartir") return getRemontKvartirOffer(slug);
  return undefined;
}

export function getAllServiceOfferPaths(): { category: ServiceCatalogCategory; slug: string }[] {
  return [
    ...getAllElektrikOfferSlugs().map((slug) => ({ category: "elektrik" as const, slug })),
    ...getAllSantehnikOfferSlugs().map((slug) => ({ category: "santehnik" as const, slug })),
    ...getAllMasterNaChasOfferSlugs().map((slug) => ({
      category: "master-na-chas" as const,
      slug,
    })),
    ...getAllRemontKvartirOfferSlugs().map((slug) => ({
      category: "remont-kvartir" as const,
      slug,
    })),
  ];
}

export function getCategoryOffersGrouped(category: ServiceCatalogCategory) {
  if (category === "elektrik") return getElektrikOffersByGroup();
  if (category === "santehnik") return getSantehnikOffersByGroup();
  if (category === "master-na-chas") return getMasterNaChasOffersByGroup();
  if (category === "remont-kvartir") return getRemontKvartirOffersByGroup();
  return [];
}

export function getCategoryOffers(category: ServiceCatalogCategory): ServiceOfferPage[] {
  if (category === "elektrik") return getElektrikOffers();
  if (category === "santehnik") return getSantehnikOffers();
  if (category === "master-na-chas") return getMasterNaChasOffers();
  if (category === "remont-kvartir") return getRemontKvartirOffers();
  return [];
}

export function getServiceOfferPath(category: ServiceCatalogCategory, slug: string): string {
  return `/${category}/${slug}`;
}
