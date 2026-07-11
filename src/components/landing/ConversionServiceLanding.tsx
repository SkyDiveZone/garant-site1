import { ServiceHero } from "@/components/landing/ServiceHero";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { ConversionActions } from "@/components/landing/ConversionActions";
import { ReviewsSection } from "@/components/reviews/ReviewsSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { LeadForm } from "@/components/ui/LeadForm";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { PhoneList } from "@/components/ui/PhoneList";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TelegramLink } from "@/components/ui/TelegramLink";
import { COPY } from "@/lib/copy";
import type { ServicePage } from "@/lib/services";
import { reviewServiceForSlug } from "@/lib/reviews/utils";
import { AlertCircle } from "lucide-react";

interface ConversionServiceLandingProps {
  service: ServicePage;
}

export function ConversionServiceLanding({ service }: ConversionServiceLandingProps) {
  const mainServices =
    service.mainServices ??
    service.prices.map((item) => ({
      name: item.name,
      description: "",
    }));

  const whenNeeded = service.whenNeeded ?? [];

  return (
    <>
      <ServiceHero service={service} />

      <Section>
        <SectionHeader
          badge="Услуги"
          title={`Что делает ${service.categoryLabel.toLowerCase()}`}
          subtitle={COPY.servicesSubtitle}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainServices.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{item.name}</h3>
              {item.description && (
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              )}
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-600">{COPY.costDependsOnScope}</p>
        <div className="mt-8 text-center">
          <ConversionActions formAnchor="#lead-form" />
        </div>
      </Section>

      {whenNeeded.length > 0 && (
        <Section className="bg-slate-50/80">
          <SectionHeader
            badge="Ситуации"
            title="Когда нужна помощь"
            subtitle="Узнали себя? Оставьте заявку — перезвоним за 5 минут"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whenNeeded.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                <div>
                  <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
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

      <ServiceFAQSection faq={service.faq} />

      <Section className="relative overflow-hidden">
        <div className="gradient-mesh absolute inset-0" />
        <LeadFormSplitLayout
          className="relative"
          content={
            <>
              <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
                Вызовите {service.categoryLabel.toLowerCase()} сейчас
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                {COPY.costAfterInspection} {COPY.callbackShort}
              </p>
              <div className="mt-8">
                <ConversionActions size="large" formAnchor="#final-lead-form" />
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
            </>
          }
          form={
            <LeadForm
              id="final-lead-form"
              variant="compact"
              title="Оставить заявку"
              subtitle={COPY.leadFormSubtitle}
            />
          }
        />
      </Section>

      <ServiceArea />
    </>
  );
}
