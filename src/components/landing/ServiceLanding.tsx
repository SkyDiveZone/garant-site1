import { ConversionActions } from "@/components/landing/ConversionActions";
import { ServiceAboutSection } from "@/components/landing/ServiceAboutSection";
import { ServiceBottomCTA } from "@/components/landing/ServiceBottomCTA";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { WorkGallery } from "@/components/landing/WorkGallery";
import { JobReviewSnippet } from "@/components/sections/JobReviewSnippet";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ElektrikOffersCatalog } from "@/components/sections/ElektrikOffersCatalog";
import { MasterNaChasOffersCatalog } from "@/components/sections/MasterNaChasOffersCatalog";
import { RemontOffersCatalog } from "@/components/sections/RemontOffersCatalog";
import { SantehnikOffersCatalog } from "@/components/sections/SantehnikOffersCatalog";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServiceRichSections } from "@/components/sections/ServiceRichSections";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { PHONES } from "@/lib/data";
import { formatPriceFrom } from "@/lib/format-price";
import { getNamedPrice, getStartPrice, type StartPriceId } from "@/lib/service-prices";
import { getLeadFormLabels } from "@/lib/lead-form-labels";
import { SPACING } from "@/lib/spacing";
import { isAboutBeforeFaqSlug } from "@/lib/services/about-before-faq-slugs";
import { isEnhancedLandingSlug } from "@/lib/services/enhanced-landing-slugs";
import type { ServicePage } from "@/lib/services";
import {
  getServiceRichContent,
  isRichServiceSlug,
} from "@/lib/services/service-rich-content";
import type { ReviewCategory } from "@/lib/reviews/types";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, Phone, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ServiceLandingProps {
  service: ServicePage;
}

const COMPACT_HERO_SLUGS = new Set([
  "elektrik",
  "santehnik",
  "master-na-chas",
  "remont-kvartir",
]);

const CATALOG_SECTION_CLASS = "!pt-10";

const HUB_HERO_IMAGE: Record<string, string> = {
  santehnik: "/works/santehnik/groups/smesiteli.webp",
  elektrik: "/works/elektrik/groups/rozetki.webp",
  "master-na-chas": "/works/master-na-chas/groups/mebel.webp",
  "remont-kvartir": "/works/remont-kvartir/03-living-room.png",
};

const REMONT_HERO_PHOTOS = [
  {
    src: "/works/remont-kvartir/01-bedroom.png",
    alt: "Спальня после ремонта: деревянная стена и встроенный шкаф",
  },
  {
    src: "/works/remont-kvartir/kosmeticheskiy-remont/02-living-sofa.png",
    alt: "Гостиная после косметического ремонта",
  },
  {
    src: "/works/remont-kvartir/remont-vannoy-komnaty/01-beige-shower.png",
    alt: "Ванная комната после ремонта",
  },
] as const;

const HUB_CTA: Record<string, string> = {
  santehnik: "Вызвать сантехника",
  elektrik: "Вызвать электрика",
  "master-na-chas": "Вызвать мастера",
  "remont-kvartir": "Заказать ремонт",
};

export function ServiceLanding({ service }: ServiceLandingProps) {
  const formLabels = getLeadFormLabels(service.slug, service.categoryLabel);
  const isRich = isRichServiceSlug(service.slug);
  const richContent = getServiceRichContent(service.slug);
  const isEnhanced = isEnhancedLandingSlug(service.slug);
  const isCompactHero = COMPACT_HERO_SLUGS.has(service.slug);
  const isRemont = service.slug === "remont-kvartir";
  const isLeadHub =
    service.slug === "elektrik" ||
    service.slug === "santehnik" ||
    service.slug === "master-na-chas";
  const startPrice = isLeadHub ? getStartPrice(service.slug as StartPriceId) : undefined;
  const remontPrices = (
    [
      ["Косметический ремонт", "Косметика"],
      ["Капитальный ремонт", "Капремонт"],
    ] as const
  ).flatMap(([name, label]) => {
    const item = getNamedPrice("remont-kvartir", name);
    return item ? [{ label, priceFrom: item.priceFrom, unit: item.unit }] : [];
  });

  const heroBadge = (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
      <Clock className="h-4 w-4" />
      {ROUND_THE_CLOCK.badge}
    </div>
  );

  const heroIntro = (
    <>
      {heroBadge}
      <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
        {service.h1}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-slate-600">
        {service.heroSubtitle}
      </p>
      <p className="mt-4 text-base leading-relaxed text-slate-600">
        {COPY.costAfterInspection} {COPY.costAfterInspectionLong}
      </p>
      <div className="mt-8">
        <ConversionActions size="large" contactAlign="start" showTrustInfo />
      </div>
    </>
  );

  const leadForm = (
    <LeadFormWithExtras
      id="lead-form"
      title={formLabels.title}
      submitLabel={formLabels.submitLabel}
      subtitle={COPY.leadFormSubtitle}
    />
  );

  return (
    <>
      <section className={cn("cookie-clearance relative overflow-hidden", isCompactHero ? "bg-graphite text-white" : "page-hero")}>
        {isCompactHero && HUB_HERO_IMAGE[service.slug] && (
          <div className="absolute inset-0">
            <Image
              src={HUB_HERO_IMAGE[service.slug]}
              alt=""
              fill
              priority
              className="object-cover opacity-35"
              sizes="100vw"
              quality={70}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/88 to-graphite/55" />
          </div>
        )}
        {!isCompactHero && <div className="gradient-mesh pointer-events-none absolute inset-0" />}
        {!isCompactHero && (
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,#F7F5F0_100%)]" />
        )}
        <div
          className={cn(
            "page-hero__inner relative z-10",
            isCompactHero && "!pb-8 !pt-20 sm:!pb-10 sm:!pt-20"
          )}
        >
          <nav
            aria-label="Хлебные крошки"
            className={cn("mb-6 text-sm", isCompactHero ? "text-white/55" : "text-slate-500")}
          >
            <Link href="/" className={isCompactHero ? "hover:text-white" : "hover:text-brand-600"}>
              Главная
            </Link>
            {service.parent && (
              <>
                <span className="mx-2">/</span>
                <Link
                  href={service.parent.href}
                  className={isCompactHero ? "hover:text-white" : "hover:text-brand-600"}
                >
                  {service.parent.label}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className={isCompactHero ? "text-white/85" : "text-slate-700"}>{service.categoryLabel}</span>
          </nav>

          {isCompactHero ? (
            <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
              <div className="contents lg:block">
              <div className="order-1 lg:order-none">
                <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/80">
                  {ROUND_THE_CLOCK.badge} · Екатеринбург
                </p>
                <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                  {service.h1}
                </h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {service.heroSubtitle}
                </p>
                {isRemont && remontPrices.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {remontPrices.map((item) => (
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
                )}
                {startPrice && (
                  <p className="mt-4 text-sm text-white">
                    {startPrice.label}{" "}
                    <span className="font-semibold text-brand-400">
                      {formatPriceFrom(startPrice.priceFrom)}
                      {startPrice.unit ? ` ${startPrice.unit}` : ""}
                    </span>
                  </p>
                )}
                <p className="mt-3 max-w-xl text-sm text-white/70">
                  {isRemont
                    ? "Приедем на замер в течение часа. Комната — от нескольких дней, квартира — от 2–3 недель."
                    : "Приедем в течение часа."}{" "}
                  {COPY.priceBeforeStart}
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={`tel:${PHONES[0].raw}`} size="lg">
                    <Phone className="h-5 w-5" />
                    Позвонить
                  </Button>
                  <Button href="#lead-form" size="lg" variant="outlineLight">
                    <UserRound className="h-5 w-5" />
                    {HUB_CTA[service.slug] ?? "Оставить заявку"}
                  </Button>
                </div>
              </div>
              <div className="order-3 mt-4 lg:order-none">
                <JobReviewSnippet category={service.slug as ReviewCategory} />
              </div>
              {isRemont && (
                <ul className="order-3 grid grid-cols-3 gap-2 lg:order-none lg:mt-5">
                  {REMONT_HERO_PHOTOS.map((image) => (
                    <li key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 220px, 30vw"
                      />
                    </li>
                  ))}
                </ul>
              )}
              </div>
              <div className="order-2 lg:sticky lg:top-24 lg:order-none">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-1 text-ink shadow-2xl shadow-black/30">
                  <LeadFormWithExtras
                    id="lead-form"
                    title={formLabels.title}
                    submitLabel={formLabels.submitLabel}
                    subtitle={COPY.leadFormSubtitle}
                    showTelegramCard={false}
                  />
                </div>
              </div>
            </div>
          ) : (
            <LeadFormSplitLayout
              content={heroIntro}
              form={<div className="md:sticky md:top-24">{leadForm}</div>}
            />
          )}
        </div>
      </section>

      {service.slug === "elektrik" && (
        <ElektrikOffersCatalog
          formAnchor="#lead-form"
          headerAlign="left"
          className={CATALOG_SECTION_CLASS}
        />
      )}

      {service.slug === "santehnik" && (
        <SantehnikOffersCatalog
          formAnchor="#lead-form"
          headerAlign="left"
          className={CATALOG_SECTION_CLASS}
        />
      )}

      {service.slug === "master-na-chas" && (
        <MasterNaChasOffersCatalog
          formAnchor="#lead-form"
          headerAlign="left"
          className={CATALOG_SECTION_CLASS}
        />
      )}

      {isRemont && (
        <RemontOffersCatalog
          formAnchor="#lead-form"
          headerAlign="left"
          className={CATALOG_SECTION_CLASS}
        />
      )}

      {isCompactHero && !isRemont && service.galleryImages && service.galleryImages.length > 0 && (
        <WorkGallery label={service.galleryLabel} images={service.galleryImages} />
      )}

      {!isRich &&
        service.slug !== "elektrik" &&
        service.slug !== "santehnik" &&
        service.slug !== "master-na-chas" &&
        !isRemont && (
          <div className={SPACING.heroBelowGrid}>
            <LeadFormSellingBelow
              slug={service.slug}
              formAnchor="#lead-form"
              hideWorkTypes={isEnhanced}
            />
          </div>
        )}

      {isRich && richContent && (
        <ServiceRichSections
          content={richContent}
          formAnchor="#lead-form"
          categoryLabel={service.categoryLabel}
        />
      )}

      {!isCompactHero && (
        <Section>
          <SectionHeader badge="Преимущества" title="Почему выбирают нас" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <DynamicIcon name={item.icon} className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {!isRich && !isCompactHero && <HowWeWorkSection />}

      {!isEnhanced && !isCompactHero && (
        <Section className="bg-slate-50/80">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              {service.categoryLabel} в Екатеринбурге — подробнее
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
              {service.seoText.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-2">
              {[
                ROUND_THE_CLOCK.headline,
                ROUND_THE_CLOCK.requests,
                "Гарантия до 12 месяцев",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {isAboutBeforeFaqSlug(service.slug) && !isRich && !isEnhanced && (
        <ServiceAboutSection slug={service.slug} />
      )}

      <ServiceFAQSection faq={richContent?.faq ?? service.faq} />

      <ServiceArea />

      {!isCompactHero && (
        <ServiceBottomCTA
          title="Вызовите мастера сейчас"
          subtitle={`${COPY.costAfterInspection} ${COPY.callbackShort}`}
        />
      )}

      {isCompactHero && (
        <Section id="order" className="bg-cream-dark/50">
          <div className="mx-auto max-w-xl">
            <SectionHeader
              badge="Заявка"
              title={formLabels.title}
              subtitle={
              isRemont
                ? "Перезвоним за 5 минут. Приедем на замер в течение часа."
                : "Перезвоним за 5 минут. Приедем в течение часа."
            }
            />
            <div className="overflow-hidden rounded-[1.5rem] border border-black/[0.04] bg-white p-1 shadow-lg">
              <LeadFormWithExtras
                id="order-form"
                title={formLabels.title}
                submitLabel={formLabels.submitLabel}
                subtitle={COPY.leadFormSubtitle}
              />
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
