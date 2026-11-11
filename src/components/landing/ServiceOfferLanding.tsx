import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { WorkGallery } from "@/components/landing/WorkGallery";
import { Button } from "@/components/ui/Button";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { PHONES } from "@/lib/data";
import { problemExampleForService } from "@/lib/lead-problem-example";
import { formatPriceFrom } from "@/lib/format-price";
import type { ServiceCatalogCategory, ServiceOfferPage } from "@/lib/service-catalog/types";
import { CheckCircle2, Clock, Phone, UserRound } from "lucide-react";
import Link from "next/link";

const OFFER_CTA: Record<ServiceCatalogCategory, { title: string; submitLabel: string; button: string }> = {
  santehnik: {
    title: "Вызвать сантехника",
    submitLabel: "Вызвать сантехника",
    button: "Вызвать сантехника",
  },
  elektrik: {
    title: "Вызвать электрика",
    submitLabel: "Вызвать электрика",
    button: "Вызвать электрика",
  },
  "master-na-chas": {
    title: "Вызвать мастера",
    submitLabel: "Вызвать мастера",
    button: "Вызвать мастера",
  },
  "remont-kvartir": {
    title: "Заявка на ремонт",
    submitLabel: "Оставить заявку",
    button: "Заказать ремонт",
  },
};

interface ServiceOfferLandingProps {
  offer: ServiceOfferPage;
  formAnchor?: string;
}

export function ServiceOfferLanding({ offer }: ServiceOfferLandingProps) {
  const galleryLabel = `Фото работ: ${offer.serviceName.replace(/\s*\([^)]*\)/g, "").trim()}`;
  const formLabels = OFFER_CTA[offer.category];
  const problemPlaceholder = problemExampleForService(offer.serviceName);
  const arrival =
    offer.category === "remont-kvartir"
      ? "Приедем на замер в течение часа."
      : "Приедем в течение часа.";

  return (
    <>
      <section className="cookie-clearance relative overflow-hidden bg-graphite text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(255,106,0,0.18),transparent_55%)]" />
        <div className="page-hero__inner relative z-10 pt-20 lg:pt-24">
          <nav aria-label="Хлебные крошки" className="mb-4 text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <Link href={offer.categoryHref} className="hover:text-white">
              {offer.categoryLabel}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">
              {offer.serviceName.replace(/\s*\([^)]*\)/g, "").trim()}
            </span>
          </nav>

          <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-white/85">
                <Clock className="h-4 w-4 text-brand-500" />
                {ROUND_THE_CLOCK.badge}
              </div>
              <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
                {offer.h1}
              </h1>
              <p className="mt-4 font-display text-3xl font-bold text-brand-400">
                {formatPriceFrom(offer.priceFrom)}
                {offer.priceUnit && (
                  <span className="ml-2 text-base font-medium text-white/60">{offer.priceUnit}</span>
                )}
              </p>
              <p className="mt-3 max-w-xl text-sm text-white/70">
                {arrival} {COPY.priceBeforeStart}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={`tel:${PHONES[0].raw}`} size="lg">
                  <Phone className="h-5 w-5" />
                  Позвонить
                </Button>
                <Button href="#lead-form" size="lg" variant="outlineLight">
                  <UserRound className="h-5 w-5" />
                  {formLabels.button}
                </Button>
              </div>
            </div>
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white p-1 text-ink shadow-2xl shadow-black/30">
                <LeadFormWithExtras
                  id="lead-form"
                  title={formLabels.title}
                  submitLabel={formLabels.submitLabel}
                  subtitle={COPY.leadFormSubtitle}
                  problemPlaceholder={problemPlaceholder}
                  showTelegramCard={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
            subtitle={`Перезвоним за 5 минут. ${arrival}`}
          />
          <LeadFormWithExtras
            id="order-form"
            title={formLabels.title}
            submitLabel={formLabels.submitLabel}
            subtitle={COPY.leadFormSubtitle}
            problemPlaceholder={problemPlaceholder}
          />
        </div>
      </Section>
    </>
  );
}
