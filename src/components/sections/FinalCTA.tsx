"use client";

import { Button } from "@/components/ui/Button";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { HeroTrustInfo } from "@/components/ui/HeroTrustInfo";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { Phone, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <Section id="final-cta" className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <MotionSection className="relative">
        <MotionItem className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
            <ShieldCheck className="h-4 w-4" />
            {ROUND_THE_CLOCK.badge}
          </span>

          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Любая бытовая проблема?{" "}
            <span className="gradient-text">Решим сегодня</span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Сантехника, электрика, отделка, мастер на час — один звонок и
            профессиональный мастер у вашей двери. {COPY.costAfterInspection}
          </p>

          <p className="mt-3 text-base text-slate-600">{ROUND_THE_CLOCK.urgent}</p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" href="#lead-form">
              <Phone className="h-4 w-4" />
              Вызвать мастера
            </Button>
          </div>

          <div className="mt-6 flex justify-center">
            <ContactBlock size="lg" align="center" />
          </div>

          <div className="mt-6">
            <HeroTrustInfo align="center" />
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
