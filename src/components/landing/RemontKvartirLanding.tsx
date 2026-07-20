import { ConversionActions } from "@/components/landing/ConversionActions";
import { ServiceBottomCTA } from "@/components/landing/ServiceBottomCTA";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { ServicePage } from "@/lib/services";
import { REPAIR_TYPES } from "@/lib/services/remont-data";
import { Clock } from "lucide-react";
import Link from "next/link";

interface RemontKvartirLandingProps {
  service: ServicePage;
}

export function RemontKvartirLanding({ service }: RemontKvartirLandingProps) {
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
                  title="Заявка на ремонт"
                  subtitle={COPY.leadFormSubtitle}
                />
              </div>
            }
            belowGrid={
              <LeadFormSellingBelow
                slug={service.slug}
                formAnchor="#lead-form"
                hideWorkTypes
              />
            }
          />
        </div>
      </section>

      <Section>
        <SectionHeader
          badge="Услуги"
          title="Виды ремонта квартир"
          subtitle={COPY.servicesSubtitle}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REPAIR_TYPES.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="rounded-2xl border border-slate-200/80 bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <HowWeWorkSection />

      <ServiceFAQSection faq={service.faq} />

      <ServiceBottomCTA
        title="Оставьте заявку на ремонт"
        subtitle={`${COPY.costAfterInspection} ${COPY.callbackShort}`}
      />
    </>
  );
}
