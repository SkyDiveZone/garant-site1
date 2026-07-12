"use client";

import { Button } from "@/components/ui/Button";
import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { PhoneList } from "@/components/ui/PhoneList";
import { Section } from "@/components/ui/Section";
import { COPY } from "@/lib/copy";
import { SITE } from "@/lib/data";
import { Clock, Phone, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <Section id="final-cta" className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <MotionSection className="relative">
        <LeadFormSplitLayout
          content={
            <MotionItem>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                <Clock className="h-4 w-4" />
                Мастер приедет за 60 минут
              </span>

              <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Любая бытовая проблема?{" "}
                <span className="gradient-text">Решим сегодня</span>
              </h2>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                Сантехника, электрика, отделка, мастер на час — один звонок и
                профессиональный мастер у вашей двери. {COPY.costAfterInspection}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Button size="lg" href="#final-cta-form">
                  <Phone className="h-4 w-4" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="secondary" href={`tel:${SITE.phoneRaw}`}>
                  Позвонить
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  href={SITE.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram
                </Button>
              </div>

              <div className="mt-6">
                <PhoneList
                  variant="stack"
                  linkClassName="text-brand-600 hover:underline"
                  iconClassName="text-brand-600"
                />
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <ShieldCheck className="h-5 w-5 text-emerald-500" />
                  Гарантия до 12 месяцев
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Clock className="h-5 w-5 text-brand-500" />
                  {SITE.hours}
                </div>
              </div>

              <p className="mt-6 text-sm text-slate-600">{SITE.address}</p>

              <div className="mt-8">
                <HeroFormBenefits />
              </div>
            </MotionItem>
          }
          form={
            <MotionItem id="final-cta-form" className="md:sticky md:top-24">
              <LeadFormWithExtras title="Оставьте заявку" subtitle={COPY.leadFormSubtitle} />
            </MotionItem>
          }
          belowGrid={<LeadFormSellingBelow formAnchor="#final-cta-form" />}
        />
      </MotionSection>
    </Section>
  );
}
