"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BENEFITS } from "@/lib/data";
import { ArrowRight, X } from "lucide-react";

export function Benefits() {
  return (
    <Section>
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Что вы получаете"
            title="Выгоды, а не просто список услуг"
            subtitle="Мы решаем вашу проблему — быстро, честно и с гарантией"
          />
        </MotionItem>

        <div className="grid gap-6 lg:grid-cols-2">
          {BENEFITS.map((item) => (
            <MotionItem key={item.title}>
              <div className="card-hover relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-50 opacity-60" />
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                  <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                      <X className="h-3.5 w-3.5 text-red-500" />
                    </div>
                    <span className="text-sm text-slate-500 line-through">
                      {item.before}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-sm font-medium text-brand-700">
                      С нами — иначе
                    </span>
                  </div>
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
