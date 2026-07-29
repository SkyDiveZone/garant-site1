import { getFullPriceCatalog } from "@/lib/service-prices";
import { buildSantehnikOfferFromPrice } from "@/lib/service-catalog/content-templates";
import { SANTEHNIK_OFFER_GALLERIES } from "@/lib/service-catalog/offer-galleries";
import { SANTEHNIK_OFFER_SLUGS } from "@/lib/service-catalog/slug-map";
import type { ServiceOfferPage } from "@/lib/service-catalog/types";

let cachedOffers: ServiceOfferPage[] | null = null;

export function getSantehnikOffers(): ServiceOfferPage[] {
  if (cachedOffers) return cachedOffers;

  const prices = getFullPriceCatalog().santehnik;
  const allItems = prices.flatMap((group) =>
    group.items.map((item) => ({ group, item }))
  );

  if (allItems.length !== SANTEHNIK_OFFER_SLUGS.length) {
    throw new Error(
      `Santehnik slug count (${SANTEHNIK_OFFER_SLUGS.length}) !== price items (${allItems.length})`
    );
  }

  cachedOffers = allItems.map(({ group, item }, index) => {
    const slug = SANTEHNIK_OFFER_SLUGS[index];
    const offer = buildSantehnikOfferFromPrice(group, item, slug, index);
    const gallery = SANTEHNIK_OFFER_GALLERIES[slug];
    return gallery ? { ...offer, galleryImages: gallery } : offer;
  });

  return cachedOffers;
}

export function getSantehnikOffer(slug: string): ServiceOfferPage | undefined {
  return getSantehnikOffers().find((offer) => offer.slug === slug);
}

export function getAllSantehnikOfferSlugs(): string[] {
  return getSantehnikOffers().map((offer) => offer.slug);
}

export function getSantehnikOffersByGroup(): { title: string; offers: ServiceOfferPage[] }[] {
  const groups = new Map<string, ServiceOfferPage[]>();
  for (const offer of getSantehnikOffers()) {
    const list = groups.get(offer.priceGroup) ?? [];
    list.push(offer);
    groups.set(offer.priceGroup, list);
  }
  const prices = getFullPriceCatalog().santehnik;
  return prices
    .map((group) => ({
      title: group.title,
      offers: groups.get(group.title) ?? [],
    }))
    .filter((g) => g.offers.length > 0);
}
