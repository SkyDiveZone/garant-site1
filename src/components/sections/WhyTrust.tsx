"use client";

import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { TRUST_REASONS } from "@/lib/data";

export function WhyTrust() {
  return (
    <Section>
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Почему нам доверяют"
            title="Серьёзная компания — серьёзные гарантии"
            subtitle="1 200+ клиентов выбрали нас за прозрачность, скорость и качество работ"
          />
        </MotionItem>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_REASONS.map((item) => (
            <MotionItem key={item.title}>
              <div className="card-hover group h-full rounded-2xl border border-slate-200/80 bg-white p-7">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <DynamicIcon name={item.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
