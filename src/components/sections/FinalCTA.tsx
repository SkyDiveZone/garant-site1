"use client";

import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/ui/LeadForm";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/data";
import { Clock, Phone, ShieldCheck } from "lucide-react";

export function FinalCTA() {
  return (
    <Section id="final-cta" className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh" />

      <MotionSection className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
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
              профессиональный мастер у вашей двери. Фиксированная цена,
              гарантия до 12 месяцев.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" href="#final-cta-form">
                <Phone className="h-4 w-4" />
                Вызвать мастера
              </Button>
              <Button
                size="lg"
                variant="secondary"
                href={`tel:${SITE.phoneRaw}`}
              >
                Позвонить: {SITE.phone}
              </Button>
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
          </MotionItem>

          <MotionItem id="final-cta-form">
            <LeadForm
              title="Оставьте заявку"
              subtitle="Перезвоним за 5 минут. Консультация бесплатно."
            />
          </MotionItem>
        </div>
      </MotionSection>
    </Section>
  );
}
