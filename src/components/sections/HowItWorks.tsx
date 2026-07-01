"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HOW_IT_WORKS } from "@/lib/data";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-slate-50/80">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Процесс"
            title="4 шага — и проблема решена"
            subtitle="От заявки до готового результата с гарантией"
          />
        </MotionItem>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent lg:block" />

          {HOW_IT_WORKS.map((item, index) => (
            <MotionItem key={item.step}>
              <div className="relative text-center">
                <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-brand-100" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand-600 font-display text-xl font-bold text-white shadow-lg shadow-brand-600/30">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                {index < HOW_IT_WORKS.length - 1 && (
                  <div className="mx-auto mt-6 h-8 w-px bg-brand-200 lg:hidden" />
                )}
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
