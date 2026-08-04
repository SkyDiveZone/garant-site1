import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { WorkGallery } from "@/components/landing/WorkGallery";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { formatPriceFrom } from "@/lib/format-price";
import type { ServiceOfferPage } from "@/lib/service-catalog/types";
import { CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

interface ServiceOfferLandingProps {
  offer: ServiceOfferPage;
  formAnchor?: string;
}

export function ServiceOfferLanding({ offer }: ServiceOfferLandingProps) {
  const galleryLabel = `Фото работ: ${offer.serviceName.replace(/\s*\([^)]*\)/g, "").trim()}`;
  const formLabels = {
    title: "Вызвать мастера",
    submitLabel: "Вызвать мастера",
  };

  return (
    <>
      <section className="page-hero">
        <div className="gradient-mesh pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div className="page-hero__inner relative z-10 !pb-4 sm:!pb-5 lg:!pb-6">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href={offer.categoryHref} className="hover:text-brand-600">
              {offer.categoryLabel}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">
              {offer.serviceName.replace(/\s*\([^)]*\)/g, "").trim()}
            </span>
          </nav>

          <div className="w-full max-w-5xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <Clock className="h-4 w-4" />
              {ROUND_THE_CLOCK.badge}
            </div>
            <h1 className="font-display text-[1.85rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.1] lg:text-6xl lg:leading-[1.08]">
              {offer.h1}
            </h1>
            <div className="mt-6 max-w-2xl">
              <ContactBlock size="md" align="start" className="max-w-none" />
            </div>
          </div>
        </div>
      </section>

      <Section id="price" className="border-y border-brand-100/80 bg-gradient-to-b from-brand-50/70 to-white py-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-brand-600">Стоимость</p>
          <p className="mt-2 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            {formatPriceFrom(offer.priceFrom)}
            {offer.priceUnit && (
              <span className="ml-2 text-lg font-normal text-slate-500">{offer.priceUnit}</span>
            )}
          </p>
          <p className="mt-3 text-base text-slate-600">
            Точную стоимость мастер назовёт после осмотра на объекте
          </p>
        </div>
      </Section>

      <Section className="!py-8 sm:!py-10">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="border-b border-slate-100 bg-gradient-to-r from-brand-50/80 to-white px-5 py-4 sm:px-6">
              <div className="flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                    Услуга
                  </p>
                  <h2 className="mt-1 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                    Что входит
                  </h2>
                </div>
                <p className="text-sm text-slate-500">
                  {offer.includedWorks.length}{" "}
                  {offer.includedWorks.length === 1
                    ? "пункт"
                    : offer.includedWorks.length < 5
                      ? "пункта"
                      : "пунктов"}
                </p>
              </div>
              {offer.aboutIntro && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-3 sm:line-clamp-2">
                  {offer.aboutIntro}
                </p>
              )}
            </div>
            <ul className="grid gap-px bg-slate-100 sm:grid-cols-2">
              {offer.includedWorks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 bg-white px-4 py-3 text-sm leading-snug text-slate-700 sm:px-5"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <WorkGallery label={galleryLabel} images={offer.galleryImages} />

      <ServiceFAQSection faq={offer.faq} />

      <Section id="order" className="bg-slate-50/80">
        <div className="mx-auto max-w-xl">
          <SectionHeader
            badge="Заявка"
            title="Оставить заявку"
            subtitle="Перезвоним за 5 минут и согласуем выезд мастера"
          />
          <LeadFormWithExtras
            id="lead-form"
            title={formLabels.title}
            submitLabel={formLabels.submitLabel}
            subtitle={COPY.leadFormSubtitle}
          />
        </div>
      </Section>
    </>
  );
}
