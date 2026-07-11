"use client";

import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES } from "@/lib/data";
import { ArrowRight, Check } from "lucide-react";

export function Features() {
  return (
    <Section id="services">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Услуги"
            title="Всё для вашего дома — в одном месте"
            subtitle="Профессиональный ремонт и обслуживание с гарантией до 12 месяцев"
          />
        </MotionItem>

        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <MotionItem key={service.id}>
              <div className="card-hover group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-500/25">
                  <DynamicIcon name={service.icon} className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-brand-500" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="mt-8 w-full group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600"
                  href={`/${service.id === "repair" ? "remont-kvartir" : service.id === "plumbing" ? "santehnik" : service.id === "electrical" ? "elektrik" : "master-na-chas"}`}
                >
                  Подробнее об услуге
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
