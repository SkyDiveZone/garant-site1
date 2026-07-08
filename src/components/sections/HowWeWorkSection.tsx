"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  HOW_WE_WORK_BADGE,
  HOW_WE_WORK_STEPS,
  HOW_WE_WORK_SUBTITLE,
  HOW_WE_WORK_TITLE,
} from "@/lib/how-we-work";
import { cn } from "@/lib/utils";

interface HowWeWorkSectionProps {
  id?: string;
  className?: string;
}

export function HowWeWorkSection({ id, className }: HowWeWorkSectionProps) {
  return (
    <Section id={id} className={cn("bg-slate-50/80", className)}>
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge={HOW_WE_WORK_BADGE}
            title={HOW_WE_WORK_TITLE}
            subtitle={HOW_WE_WORK_SUBTITLE}
          />
        </MotionItem>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {HOW_WE_WORK_STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <MotionItem key={item.step} className="h-full">
                <article className="group flex h-full flex-col rounded-[22px] border border-slate-200/80 bg-white p-6 shadow-md shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-200/80 hover:shadow-xl hover:shadow-brand-500/10">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-9 w-9" strokeWidth={1.75} aria-hidden />
                    </div>
                    <span
                      className="font-display text-4xl font-bold leading-none text-slate-100 transition-colors duration-300 group-hover:text-brand-100"
                      aria-hidden
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem]">
                    {item.description}
                  </p>
                </article>
              </MotionItem>
            );
          })}
        </div>
      </MotionSection>
    </Section>
  );
}
