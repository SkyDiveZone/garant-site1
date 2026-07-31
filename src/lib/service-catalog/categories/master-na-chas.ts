import { getFullPriceCatalog } from "@/lib/service-prices";
import { buildMasterNaChasOfferFromPrice } from "@/lib/service-catalog/content-templates";
import { MASTER_NA_CHAS_OFFER_GALLERIES } from "@/lib/service-catalog/offer-galleries";
import { MASTER_NA_CHAS_OFFER_SLUGS } from "@/lib/service-catalog/slug-map";
import type { ServiceOfferPage } from "@/lib/service-catalog/types";

let cachedOffers: ServiceOfferPage[] | null = null;

export function getMasterNaChasOffers(): ServiceOfferPage[] {
  if (cachedOffers) return cachedOffers;

  const prices = getFullPriceCatalog()["master-na-chas"];
  const allItems = prices.flatMap((group) =>
    group.items.map((item) => ({ group, item }))
  );

  if (allItems.length !== MASTER_NA_CHAS_OFFER_SLUGS.length) {
    throw new Error(
      `Master-na-chas slug count (${MASTER_NA_CHAS_OFFER_SLUGS.length}) !== price items (${allItems.length})`
    );
  }

  cachedOffers = allItems.map(({ group, item }, index) => {
    const slug = MASTER_NA_CHAS_OFFER_SLUGS[index];
    const offer = buildMasterNaChasOfferFromPrice(group, item, slug, index);
    const gallery = MASTER_NA_CHAS_OFFER_GALLERIES[slug];
    return gallery ? { ...offer, galleryImages: gallery } : offer;
  });

  return cachedOffers;
}

export function getMasterNaChasOffer(slug: string): ServiceOfferPage | undefined {
  return getMasterNaChasOffers().find((offer) => offer.slug === slug);
}

export function getAllMasterNaChasOfferSlugs(): string[] {
  return getMasterNaChasOffers().map((offer) => offer.slug);
}

export function getMasterNaChasOffersByGroup(): { title: string; offers: ServiceOfferPage[] }[] {
  const groups = new Map<string, ServiceOfferPage[]>();
  for (const offer of getMasterNaChasOffers()) {
    const list = groups.get(offer.priceGroup) ?? [];
    list.push(offer);
    groups.set(offer.priceGroup, list);
  }
  const prices = getFullPriceCatalog()["master-na-chas"];
  return prices
    .map((group) => ({
      title: group.title,
      offers: groups.get(group.title) ?? [],
    }))
    .filter((g) => g.offers.length > 0);
}
