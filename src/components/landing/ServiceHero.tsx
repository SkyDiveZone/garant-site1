"use client";

import { ConversionActions } from "@/components/landing/ConversionActions";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { getLeadFormLabels } from "@/lib/lead-form-labels";
import { SPACING } from "@/lib/spacing";
import type { ServicePage } from "@/lib/services";
import { Clock } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  service: ServicePage;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  const formLabels = getLeadFormLabels(service.slug, service.categoryLabel);

  return (
    <>
    <section className="page-hero bg-graphite text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_70%,#F7F5F0_100%)]" />

      <div className="page-hero__inner relative z-10">
        <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-white/60">
          <Link href="/" className="hover:text-white">
            Главная
          </Link>
          {service.parent && (
            <>
              <span className="mx-2">/</span>
              <Link href={service.parent.href} className="hover:text-white">
                {service.parent.label}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-white">{service.categoryLabel}</span>
        </nav>

        <LeadFormSplitLayout
          content={
            <>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/85">
                <Clock className="h-4 w-4 text-brand-500" />
                {ROUND_THE_CLOCK.badge}
              </div>

              <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
                {service.h1}
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-white/70">{service.heroSubtitle}</p>

              <p className="mt-4 text-base leading-relaxed text-white/60">
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
    </section>
    <div className={SPACING.heroBelowGrid}>
      <LeadFormSellingBelow slug={service.slug} formAnchor="#lead-form" />
    </div>
    </>
  );
}
