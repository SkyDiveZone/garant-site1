import { getFullPriceCatalog } from "@/lib/service-prices";
import { buildElektrikOfferFromPrice } from "@/lib/service-catalog/content-templates";
import { ELEKTRIK_OFFER_GALLERIES } from "@/lib/service-catalog/offer-galleries";
import { ELEKTRIK_OFFER_SLUGS } from "@/lib/service-catalog/slug-map";
import type { ServiceOfferPage } from "@/lib/service-catalog/types";

let cachedOffers: ServiceOfferPage[] | null = null;

export function getElektrikOffers(): ServiceOfferPage[] {
  if (cachedOffers) return cachedOffers;

  const prices = getFullPriceCatalog().elektrik;
  const allItems = prices.flatMap((group) =>
    group.items.map((item) => ({ group, item }))
  );

  if (allItems.length !== ELEKTRIK_OFFER_SLUGS.length) {
    throw new Error(
      `Elektrik slug count (${ELEKTRIK_OFFER_SLUGS.length}) !== price items (${allItems.length})`
    );
  }

  cachedOffers = allItems.map(({ group, item }, index) => {
    const slug = ELEKTRIK_OFFER_SLUGS[index];
    const offer = buildElektrikOfferFromPrice(group, item, slug, index);
    const gallery = ELEKTRIK_OFFER_GALLERIES[slug];
    return gallery ? { ...offer, galleryImages: gallery } : offer;
  });

  return cachedOffers;
}

export function getElektrikOffer(slug: string): ServiceOfferPage | undefined {
  return getElektrikOffers().find((offer) => offer.slug === slug);
}

export function getAllElektrikOfferSlugs(): string[] {
  return getElektrikOffers().map((offer) => offer.slug);
}

export function getElektrikOffersByGroup(): { title: string; offers: ServiceOfferPage[] }[] {
  const groups = new Map<string, ServiceOfferPage[]>();
  for (const offer of getElektrikOffers()) {
    const list = groups.get(offer.priceGroup) ?? [];
    list.push(offer);
    groups.set(offer.priceGroup, list);
  }
  const prices = getFullPriceCatalog().elektrik;
  return prices
    .map((group) => ({
      title: group.title,
      offers: groups.get(group.title) ?? [],
    }))
    .filter((g) => g.offers.length > 0);
}
