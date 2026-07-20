"use client";

import { ConversionActions } from "@/components/landing/ConversionActions";
import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { ServiceContactBlock } from "@/components/ui/ServiceContactBlock";
import { COPY } from "@/lib/copy";
import { HERO, SITE } from "@/lib/data";
import { getLeadFormLabels } from "@/lib/lead-form-labels";
import type { ServicePage } from "@/lib/services";
import { MapPin, Star } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  service: ServicePage;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const formLabels = getLeadFormLabels(service.slug, service.categoryLabel);

  return (
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
                <MapPin className="h-4 w-4" />
                {SITE.address} · {SITE.hours}
              </div>

              <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {service.h1}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">{service.heroSubtitle}</p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {COPY.costAfterInspection} {COPY.costAfterInspectionLong}
              </p>

              <div className="mt-8">
                <ConversionActions size="large" />
              </div>

              <ServiceContactBlock />

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-900">4.9</span>
                  <span className="text-sm text-slate-500">· рейтинг клиентов</span>
                </div>
              </div>

              <div className="mt-8">
                <HeroFormBenefits />
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {HERO.trustItems.map((item) => (
                  <div
                    key={item.sub}
                    className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 backdrop-blur-sm sm:p-4"
                  >
                    <div className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-500">{item.sub}</div>
                  </div>
                ))}
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
          belowGrid={
            <LeadFormSellingBelow slug={service.slug} formAnchor="#lead-form" />
          }
        />
      </div>
    </section>
  );
}
