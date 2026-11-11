"use client";

import { OrderPriceActions } from "@/components/ui/OrderPriceActions";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY } from "@/lib/copy";
import { formatPriceFrom } from "@/lib/format-price";
import { groupCover, servicePhotos } from "@/lib/service-photos";
import { getCategoryOffersGrouped, getServiceOfferPath } from "@/lib/service-catalog";
import type { ServiceCatalogCategory } from "@/lib/service-catalog";
import type { ServiceOfferPage } from "@/lib/service-catalog/types";
import { SERVICE_SHOWCASE, SHOWCASE_TITLES } from "@/lib/service-showcase";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

interface CategoryOffersCatalogProps {
  category: ServiceCatalogCategory;
  title: string;
  formAnchor?: string;
  className?: string;
  headerAlign?: "left" | "center";
}

export function CategoryOffersCatalog({
  category,
  title,
  formAnchor = "#lead-form",
  className,
  headerAlign = "center",
}: CategoryOffersCatalogProps) {
  const groups = getCategoryOffersGrouped(category);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const showcase = SERVICE_SHOWCASE[category];
    const source = showcase
      ? showcase.map((group) => {
          const offersBySlug = new Map(
            (groups.find((item) => item.title === group.priceGroup)?.offers ?? []).map((offer) => [
              offer.slug,
              offer,
            ])
          );
          const offers = group.lead
            .map((slug) => offersBySlug.get(slug))
            .filter((offer): offer is ServiceOfferPage => Boolean(offer));
          return { title: group.title, image: group.image, offers };
        })
      : groups.map((group) => ({ title: group.title, image: undefined as string | undefined, offers: [...group.offers] }));

    if (!q) return source.filter((group) => group.offers.length > 0);
    return source
      .map((group) => ({
        ...group,
        offers: group.offers.filter((offer) => {
          const label = SHOWCASE_TITLES[offer.slug] ?? offer.serviceName;
          return label.toLowerCase().includes(q) || group.title.toLowerCase().includes(q);
        }),
      }))
      .filter((group) => group.offers.length > 0);
  }, [category, groups, query]);

  return (
    <Section id="service-catalog" className={cn("bg-cream", className)}>
      <SectionHeader
        badge="Каталог"
        title={title}
        subtitle={COPY.priceBeforeStart}
        align={headerAlign}
      />

      <div className="relative mb-6">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Поиск услуги…"
          className="w-full rounded-[14px] border border-black/8 bg-white py-3 pl-11 pr-4 text-sm text-ink outline-none ring-brand-500/30 placeholder:text-muted focus:ring-2"
        />
      </div>

      <div className="space-y-5">
        {filtered.map((group) => {
          const coverSrc =
            group.image ??
            groupCover(group.title) ??
            group.offers.find((offer) => offer.galleryImages[0])?.galleryImages[0]?.src;
          return (
            <article key={group.title} className="card-surface overflow-hidden">
              <div className="grid md:grid-cols-[240px_1fr]">
                <div className="relative min-h-44 md:min-h-full">
                  {coverSrc ? (
                    <Image
                      src={coverSrc}
                      alt={group.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 240px"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-graphite" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent md:bg-gradient-to-r" />
                  <h3 className="absolute bottom-3 left-4 right-4 font-display text-xl font-bold text-white">
                    {group.title}
                  </h3>
                </div>
                <ul className="divide-y divide-black/[0.06]">
                  {group.offers.map((offer) => {
                    const href = getServiceOfferPath(category, offer.slug);
                    const label = SHOWCASE_TITLES[offer.slug] ?? offer.serviceName;
                    const dedicated = servicePhotos(category, offer.slug);
                    const photos = dedicated
                      ? dedicated.map((src) => ({ src }))
                      : offer.galleryImages.slice(0, 3);
                    return (
                      <li
                        key={offer.slug}
                        className="flex flex-wrap items-center gap-3 px-3 py-3 sm:px-4"
                      >
                        {photos.length > 0 && (
                          <div className="flex shrink-0 gap-1.5">
                            {photos.map((photo) => (
                              <div
                                key={photo.src}
                                className="relative h-14 w-[4.25rem] overflow-hidden rounded-lg sm:h-16 sm:w-[4.75rem]"
                              >
                                <Image
                                  src={photo.src}
                                  alt=""
                                  fill
                                  className="object-cover"
                                  sizes="76px"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                        <Link
                          href={href}
                          className="min-w-[10rem] flex-1 font-semibold leading-snug text-ink hover:text-brand-700"
                        >
                          {label}
                        </Link>
                        <OrderPriceActions
                          orderHref={`${href}${formAnchor}`}
                          priceLabel={
                            offer.priceUnit
                              ? `${formatPriceFrom(offer.priceFrom)} ${offer.priceUnit}`
                              : formatPriceFrom(offer.priceFrom)
                          }
                          className="shrink-0 flex-col min-[420px]:flex-row"
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
