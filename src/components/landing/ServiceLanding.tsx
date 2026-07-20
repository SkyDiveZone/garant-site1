import { ConversionActions } from "@/components/landing/ConversionActions";
import { ServiceAboutSection } from "@/components/landing/ServiceAboutSection";
import { ServiceBottomCTA } from "@/components/landing/ServiceBottomCTA";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { getLeadFormLabels } from "@/lib/lead-form-labels";
import { SPACING } from "@/lib/spacing";
import { isAboutBeforeFaqSlug } from "@/lib/services/about-before-faq-slugs";
import type { ServicePage } from "@/lib/services";
import { CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

interface ServiceLandingProps {
  service: ServicePage;
}

export function ServiceLanding({ service }: ServiceLandingProps) {
  const formLabels = getLeadFormLabels(service.slug, service.categoryLabel);

  return (
    <>
      <section className="page-hero">
        <div className="gradient-mesh absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div className="page-hero__inner">
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

          <LeadFormSplitLayout
            content={
              <>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                  <Clock className="h-4 w-4" />
                  {ROUND_THE_CLOCK.badge}
                </div>
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
        <div className={SPACING.heroBelowGrid}>
          <LeadFormSellingBelow slug={service.slug} formAnchor="#lead-form" />
        </div>
      </section>

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

      <HowWeWorkSection />

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

      {isAboutBeforeFaqSlug(service.slug) && <ServiceAboutSection slug={service.slug} />}

      <ServiceFAQSection faq={service.faq} />

      <ServiceArea />

      <ServiceBottomCTA
        title="Вызовите мастера сейчас"
        subtitle={`${COPY.costAfterInspection} ${COPY.callbackShort}`}
      />
    </>
  );
}
