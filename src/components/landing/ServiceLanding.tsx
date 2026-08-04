import { ConversionActions } from "@/components/landing/ConversionActions";
import { ServiceAboutSection } from "@/components/landing/ServiceAboutSection";
import { ServiceBottomCTA } from "@/components/landing/ServiceBottomCTA";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { WorkGallery } from "@/components/landing/WorkGallery";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ElektrikOffersCatalog } from "@/components/sections/ElektrikOffersCatalog";
import { MasterNaChasOffersCatalog } from "@/components/sections/MasterNaChasOffersCatalog";
import { RemontOffersCatalog } from "@/components/sections/RemontOffersCatalog";
import { SantehnikOffersCatalog } from "@/components/sections/SantehnikOffersCatalog";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { ServiceRichSections } from "@/components/sections/ServiceRichSections";
import { ServiceTrustStrip } from "@/components/sections/ServiceTrustStrip";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { getLeadFormLabels } from "@/lib/lead-form-labels";
import { SPACING } from "@/lib/spacing";
import { isAboutBeforeFaqSlug } from "@/lib/services/about-before-faq-slugs";
import { isEnhancedLandingSlug } from "@/lib/services/enhanced-landing-slugs";
import type { ServicePage } from "@/lib/services";
import {
  getServiceRichContent,
  isRichServiceSlug,
} from "@/lib/services/service-rich-content";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock } from "lucide-react";
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

const HERO_H1_CLASS =
  "font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.08] xl:text-7xl xl:leading-[1.05]";

const CATALOG_SECTION_CLASS = "!pt-6 sm:!pt-8 lg:!pt-8";

export function ServiceLanding({ service }: ServiceLandingProps) {
  const formLabels = getLeadFormLabels(service.slug, service.categoryLabel);
  const isRich = isRichServiceSlug(service.slug);
  const richContent = getServiceRichContent(service.slug);
  const isEnhanced = isEnhancedLandingSlug(service.slug);
  const isCompactHero = COMPACT_HERO_SLUGS.has(service.slug);
  const isRemont = service.slug === "remont-kvartir";

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
      <section className="page-hero">
        <div className="gradient-mesh pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div
          className={cn(
            "page-hero__inner relative z-10",
            isCompactHero && "!pb-4 sm:!pb-5 lg:!pb-6"
          )}
        >
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">
              Главная
            </Link>
            {service.parent && (
              <>
                <span className="mx-2">/</span>
                <Link href={service.parent.href} className="hover:text-brand-600">
                  {service.parent.label}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-slate-700">{service.categoryLabel}</span>
          </nav>

          {isCompactHero ? (
            <div className="w-full max-w-5xl">
              {heroBadge}
              <h1 className={HERO_H1_CLASS}>{service.h1}</h1>
              <div className="mt-6 max-w-2xl">
                <ContactBlock size="md" align="start" className="max-w-none" />
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

      {(isRich || isEnhanced) && <ServiceTrustStrip />}

      {isRemont && service.galleryImages && service.galleryImages.length > 0 && (
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

      {!isEnhanced && (
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

      <ServiceBottomCTA
        title="Вызовите мастера сейчас"
        subtitle={`${COPY.costAfterInspection} ${COPY.callbackShort}`}
      />

      {isCompactHero && (
        <Section id="order" className="bg-slate-50/80">
          <div className="mx-auto max-w-xl">
            <SectionHeader
              badge="Заявка"
              title="Оставить заявку"
              subtitle="Перезвоним за 5 минут и согласуем выезд мастера"
            />
            {leadForm}
          </div>
        </Section>
      )}
    </>
  );
}
