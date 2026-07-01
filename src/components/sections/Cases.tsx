"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { CASES } from "@/lib/data";

export function Cases() {
  return (
    <Section className="bg-slate-50/80">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Кейсы"
            title="Реальные проекты — реальные результаты"
            subtitle="Примеры работ, которыми мы гордимся"
          />
        </MotionItem>

        <div className="grid gap-6 sm:grid-cols-2">
          {CASES.map((item) => (
            <MotionItem key={item.title}>
              <article className="card-hover group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-600/5 to-cyan-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative p-8">
                  <span className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                    {item.category}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.result}
                  </p>
                  <div className="mt-6 flex items-end gap-2 border-t border-slate-100 pt-6">
                    <span className="font-display text-3xl font-bold text-brand-600">
                      {item.metric}
                    </span>
                    <span className="mb-1 text-sm text-slate-500">
                      {item.metricLabel}
                    </span>
                  </div>
                </div>
              </article>
            </MotionItem>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
