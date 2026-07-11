import { ConversionActions } from "@/components/landing/ConversionActions";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { PhoneList } from "@/components/ui/PhoneList";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TelegramLink } from "@/components/ui/TelegramLink";
import { COPY } from "@/lib/copy";
import { SITE } from "@/lib/data";
import type { ServicePage } from "@/lib/services";
import { reviewServiceForSlug } from "@/lib/reviews/utils";
import { Award, CheckCircle2, Clock, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

interface ServiceLandingProps {
  service: ServicePage;
}

export function ServiceLanding({ service }: ServiceLandingProps) {
  return (
    <>
      <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        <div className="gradient-mesh absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div className="container-custom relative px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
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
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {COPY.costAfterInspection} {COPY.costAfterInspectionLong}
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
                  Смета после осмотра
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  4.9 рейтинг
                </span>
              </div>

              <p className="mt-6 text-sm text-slate-600">{SITE.address}</p>

              <div className="mt-8">
                <HeroFormBenefits />
              </div>
            </div>

            <LeadFormWithExtras
              id="lead-form"
              title="Вызвать мастера"
              subtitle={COPY.leadFormSubtitle}
            />
          </div>
        </div>
      </section>

      {service.prices.length > 0 && (
        <Section>
          <SectionHeader
            badge="Услуги"
            title="Основные работы"
            subtitle={COPY.servicesSubtitle}
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {service.prices.map((item) => (
              <li
                key={item.name}
                className="rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-sm font-medium text-slate-800"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-slate-600">{COPY.costDependsOnScope}</p>
        </Section>
      )}

      <Section>
        <SectionHeader badge="Преимущества" title="Почему выбирают нас" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <DynamicIcon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <HowWeWorkSection />

      <ReviewsSection
        service={reviewServiceForSlug(service.slug)}
        title="Что говорят клиенты"
        showForm
      />

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
            {["Гарантия до 12 месяцев", "Работаем ежедневно", COPY.helpScheduleVisit].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </Section>

      <ServiceFAQSection faq={service.faq} />

      <ServiceArea />

      <Section className="relative overflow-hidden">
        <div className="gradient-mesh absolute inset-0" />
        <div className="relative grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Вызовите мастера сейчас
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {COPY.costAfterInspection} {COPY.callbackShort}
            </p>
            <div className="mt-8">
              <ConversionActions size="large" formAnchor="#lead-form" />
            </div>
            <div className="mt-6 space-y-2">
              <PhoneList
                variant="stack"
                linkClassName="text-lg font-semibold text-brand-600 hover:underline"
                iconClassName="text-brand-600"
              />
              <TelegramLink className="text-sky-600 hover:text-sky-700" iconSize={20} />
            </div>
            <div className="mt-8">
              <HeroFormBenefits />
            </div>
          </div>
          <LeadFormWithExtras
            variant="compact"
            title="Оставить заявку"
            subtitle={COPY.leadFormSubtitle}
          />
        </div>
      </Section>
    </>
  );
}
