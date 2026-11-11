"use client";

import { JobReviewSnippet } from "@/components/sections/JobReviewSnippet";
import { Button } from "@/components/ui/Button";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { COPY } from "@/lib/copy";
import { HERO, PHONES } from "@/lib/data";
import { formatPriceFrom } from "@/lib/format-price";
import { getStartPrice, START_PRICE_POINTS } from "@/lib/service-prices";
import { trackPhoneClick } from "@/lib/yandex-metrika";
import { MapPin, Phone, UserRound } from "lucide-react";
import Image from "next/image";

const HERO_START_PRICES = START_PRICE_POINTS.map((point) => getStartPrice(point.id)).filter(
  (item): item is NonNullable<ReturnType<typeof getStartPrice>> => Boolean(item)
);

export function Hero() {
  return (
    <section className="cookie-clearance relative overflow-hidden bg-graphite text-white">
      <div className="absolute inset-0">
        <Image
          src="/works/santehnik/02-plumber-work.png"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/90 to-graphite/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite via-transparent to-graphite/40" />
      </div>

      <div className="page-hero__inner relative z-10 grid gap-6 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:pt-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/85">
            <MapPin className="h-4 w-4 text-brand-500" aria-hidden />
            {HERO.badge}
          </div>

          <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
            {HERO.title}
            <br />
            <span className="text-brand-500">{HERO.titleHighlight}</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {HERO.subtitle}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {HERO_START_PRICES.map((item) => (
              <li
                key={item.label}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white"
              >
                {item.label}{" "}
                <span className="font-semibold text-brand-400">
                  {formatPriceFrom(item.priceFrom)}
                  {item.unit ? ` ${item.unit}` : ""}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 max-w-xl text-sm text-white/70">{COPY.priceBeforeStart}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={`tel:${PHONES[0].raw}`}
              size="lg"
              className="w-full sm:w-auto"
              onClick={trackPhoneClick}
            >
              <Phone className="h-5 w-5" />
              {HERO.primaryCta}
            </Button>
            <Button href="#lead-form" size="lg" variant="outlineLight" className="w-full sm:w-auto">
              <UserRound className="h-5 w-5" />
              {HERO.secondaryCta}
            </Button>
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {HERO.trustItems.map((item) => (
              <li
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5"
              >
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="mt-0.5 text-xs text-white/55">{item.sub}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <JobReviewSnippet />
          </div>
        </div>

        <div className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-1 text-ink shadow-2xl shadow-black/30">
            <LeadFormWithExtras id="lead-form" subtitle={COPY.leadFormSubtitle} />
          </div>
        </div>
      </div>
    </section>
  );
}
