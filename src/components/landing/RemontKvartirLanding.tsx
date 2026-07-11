import { ConversionActions } from "@/components/landing/ConversionActions";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { COPY } from "@/lib/copy";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { PriceTable } from "@/components/pricing/PriceCards";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SITE } from "@/lib/data";
import type { ServicePage } from "@/lib/services";
import { REPAIR_TYPES } from "@/lib/services/remont-data";
import { reviewServiceForSlug } from "@/lib/reviews/utils";
import { Award, Clock, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

interface RemontKvartirLandingProps {
  service: ServicePage;
}

export function RemontKvartirLanding({ service }: RemontKvartirLandingProps) {
  return (
    <>
      {/* Первый экран */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        <div className="gradient-mesh absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div className="container-custom relative px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">
              Главная
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-700">{service.categoryLabel}</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                <Clock className="h-4 w-4" />
                Работаем ежедневно · {SITE.hours}
              </div>
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {service.heroSubtitle}
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-brand-600">
                {service.priceFrom}
              </p>

              <div className="mt-8">
                <ConversionActions size="large" />
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  Гарантия 12 мес.
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-brand-500" />
                  Фикс. цена
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  4.9 рейтинг
                </span>
              </div>
            </div>

            <LeadFormWithExtras id="lead-form" title="Заявка на ремонт" subtitle={COPY.leadFormSubtitle} />
          </div>
        </div>
      </section>

      {/* Виды ремонта */}
      <Section>
        <SectionHeader
          badge="Услуги"
          title="Виды ремонта квартир"
          subtitle="Косметический, капитальный и отдельные помещения"
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
              <p className="mt-4 font-display text-lg font-bold text-brand-600">{item.price}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Цены */}
      <Section id="pricing" className="bg-slate-50/80">
        <SectionHeader
          badge="Стоимость"
          title="Цены на ремонт"
          subtitle={COPY.pricingSubtitle}
        />
        <PriceTable items={service.prices} orderHref="#lead-form" />
        <div className="mt-6 text-center">
          <ConversionActions />
        </div>
      </Section>

      <HowWeWorkSection />

      <ReviewsSection
        service={reviewServiceForSlug(service.slug)}
        title="Отзывы клиентов"
        showForm
      />

      {/* FAQ */}
      <ServiceFAQSection faq={service.faq} />

      {/* Форма заявки */}
      <Section className="relative overflow-hidden">
        <div className="gradient-mesh absolute inset-0" />
        <div className="relative grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Оставьте заявку на ремонт
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {service.heroSubtitle} {COPY.callbackWithSchedule}
            </p>
            <div className="mt-8">
              <ConversionActions size="large" formAnchor="#lead-form-bottom" />
            </div>
          </div>
          <LeadFormWithExtras
            id="lead-form-bottom"
            variant="compact"
            title="Оставить заявку"
            subtitle={COPY.leadFormSubtitle}
          />
        </div>
      </Section>
    </>
  );
}
