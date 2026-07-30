import { ConversionActions } from "@/components/landing/ConversionActions";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { WorkGallery } from "@/components/landing/WorkGallery";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
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

export function ServiceOfferLanding({ offer, formAnchor = "#lead-form" }: ServiceOfferLandingProps) {
  const galleryLabel = `Фото работ: ${offer.serviceName.replace(/\s*\([^)]*\)/g, "").trim()}`;
  const formLabels = {
    title: "Вызвать мастера",
    submitLabel: "Вызвать мастера",
  };
  const whenToCallSubtitle =
    offer.category === "santehnik"
      ? "Типичные случаи, когда нужна помощь сантехника"
      : "Типичные случаи, когда нужна помощь электрика";

  return (
    <>
      <section className="page-hero">
        <div className="gradient-mesh pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div className="page-hero__inner relative z-10">
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

          <LeadFormSplitLayout
            content={
              <>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                  <Clock className="h-4 w-4" />
                  {ROUND_THE_CLOCK.badge}
                </div>
                <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                  {offer.h1}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">{offer.heroSubtitle}</p>
                <div className="mt-8">
                  <ConversionActions size="large" contactAlign="start" showTrustInfo />
                </div>
              </>
            }
            form={
              <div className="md:sticky md:top-24">
                <LeadFormWithExtras
                  id="lead-form"
                  title={formLabels.title}
                  submitLabel={formLabels.submitLabel}
                  subtitle={COPY.leadFormSubtitle}
                />
              </div>
            }
          />
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

      <Section>
        <SectionHeader badge="Услуга" title="Описание услуги" subtitle={offer.aboutIntro} />
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-slate-900">Что входит</h3>
            <ul className="mt-4 space-y-2">
              {offer.includedWorks.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-slate-900">Как выполняется</h3>
            <ul className="mt-4 space-y-2">
              {offer.howItWorks.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm">
            <h3 className="font-display text-lg font-bold text-slate-900">Когда необходима</h3>
            <ul className="mt-4 space-y-3">
              {offer.whenNeeded.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50/80">
        <SectionHeader
          badge="Ситуации"
          title="Когда стоит вызвать мастера"
          subtitle={whenToCallSubtitle}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.whenToCall.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader badge="Проблемы" title="Популярные проблемы" subtitle="Что чаще всего происходит" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.popularProblems.map((problem) => {
            const Icon = problem.icon;
            return (
              <article
                key={problem.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display font-bold text-slate-900">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{problem.description}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section className="bg-slate-50/80">
        <SectionHeader badge="Преимущества" title="Почему выбирают нас" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offer.benefits.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200/80 bg-white p-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <DynamicIcon name={item.icon} className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader badge="Этапы" title="Этапы работы" subtitle="От заявки до выполнения" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {offer.steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <span className="font-display text-3xl font-bold text-slate-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
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
            title={formLabels.title}
            submitLabel={formLabels.submitLabel}
            subtitle={COPY.leadFormSubtitle}
          />
        </div>
      </Section>
    </>
  );
}
