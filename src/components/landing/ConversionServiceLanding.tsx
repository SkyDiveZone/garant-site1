import { ServiceHero } from "@/components/landing/ServiceHero";
import { ServiceAboutSection } from "@/components/landing/ServiceAboutSection";
import { ServiceBottomCTA } from "@/components/landing/ServiceBottomCTA";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY } from "@/lib/copy";
import { isAboutBeforeFaqSlug } from "@/lib/services/about-before-faq-slugs";
import type { ServicePage } from "@/lib/services";

interface ConversionServiceLandingProps {
  service: ServicePage;
}

export function ConversionServiceLanding({ service }: ConversionServiceLandingProps) {
  return (
    <>
      <ServiceHero service={service} />

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

      {isAboutBeforeFaqSlug(service.slug) && <ServiceAboutSection slug={service.slug} />}

      <ServiceFAQSection faq={service.faq} />

      <ServiceBottomCTA
        title={`Вызовите ${service.categoryLabel.toLowerCase()} сейчас`}
        subtitle={`${COPY.costAfterInspection} ${COPY.callbackShort}`}
      />

      <ServiceArea />
    </>
  );
}
