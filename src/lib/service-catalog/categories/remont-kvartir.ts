import { getFullPriceCatalog } from "@/lib/service-prices";
import { buildRemontKvartirOfferFromPrice } from "@/lib/service-catalog/content-templates";
import { REMONT_KVARTIR_OFFER_GALLERIES } from "@/lib/service-catalog/offer-galleries";
import { REMONT_KVARTIR_OFFER_SLUGS } from "@/lib/service-catalog/slug-map";
import type { ServiceOfferPage } from "@/lib/service-catalog/types";

let cachedOffers: ServiceOfferPage[] | null = null;

export function getRemontKvartirOffers(): ServiceOfferPage[] {
  if (cachedOffers) return cachedOffers;

  const prices = getFullPriceCatalog()["remont-kvartir"];
  const allItems = prices.flatMap((group) =>
    group.items.map((item) => ({ group, item }))
  );

  if (allItems.length !== REMONT_KVARTIR_OFFER_SLUGS.length) {
    throw new Error(
      `Remont-kvartir slug count (${REMONT_KVARTIR_OFFER_SLUGS.length}) !== price items (${allItems.length})`
    );
  }

  cachedOffers = allItems.map(({ group, item }, index) => {
    const slug = REMONT_KVARTIR_OFFER_SLUGS[index];
    const offer = buildRemontKvartirOfferFromPrice(group, item, slug, index);
    const gallery = REMONT_KVARTIR_OFFER_GALLERIES[slug];
    return gallery ? { ...offer, galleryImages: gallery } : offer;
  });

  return cachedOffers;
}

export function getRemontKvartirOffer(slug: string): ServiceOfferPage | undefined {
  return getRemontKvartirOffers().find((offer) => offer.slug === slug);
}

export function getAllRemontKvartirOfferSlugs(): string[] {
  return getRemontKvartirOffers().map((offer) => offer.slug);
}

export function getRemontKvartirOffersByGroup(): {
  title: string;
  offers: ServiceOfferPage[];
}[] {
  const groups = new Map<string, ServiceOfferPage[]>();
  for (const offer of getRemontKvartirOffers()) {
    const list = groups.get(offer.priceGroup) ?? [];
    list.push(offer);
    groups.set(offer.priceGroup, list);
  }
  const prices = getFullPriceCatalog()["remont-kvartir"];
  return prices
    .map((group) => ({
      title: group.title,
      offers: groups.get(group.title) ?? [],
    }))
    .filter((g) => g.offers.length > 0);
}
