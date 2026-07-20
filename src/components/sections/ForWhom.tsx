"use client";

import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SITE } from "@/lib/data";
import {
  HOME_FOR_WHOM_AUDIENCES,
  HOME_FOR_WHOM_CTA,
  HOME_FOR_WHOM_SELLING_TEXT,
} from "@/lib/home-for-whom";
import { HelpCircle, Phone } from "lucide-react";

export function ForWhom() {
  return (
    <Section className="bg-slate-50/80">
      <MotionSection className="space-y-8 lg:space-y-10">
        <MotionItem>
          <SectionHeader
            title="Для кого"
            subtitle="Решаем задачи любой сложности. От срочного вызова до полного ремонта квартиры под ключ."
          />
        </MotionItem>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {HOME_FOR_WHOM_AUDIENCES.map((item) => (
            <MotionItem key={item.title}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 sm:p-7">
                <div
                  className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-brand-500 to-cyan-500 transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden="true"
                />

                <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 shadow-inner shadow-brand-100/50 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/25">
                  <DynamicIcon name={item.icon} className="h-8 w-8" aria-hidden="true" />
                </span>

                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-brand-600 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {item.description}
                </p>
              </article>
            </MotionItem>
          ))}
        </div>

        <MotionItem>
          <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
            {HOME_FOR_WHOM_SELLING_TEXT}
          </p>
        </MotionItem>

        <MotionItem>
          <div className="relative overflow-hidden rounded-2xl border border-brand-200/80 bg-gradient-to-br from-brand-50 via-white to-sky-50 px-5 py-6 sm:px-8 sm:py-8">
            <div
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-200/30 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-sky-200/40 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4 lg:max-w-2xl">
                <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                  <HelpCircle className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    {HOME_FOR_WHOM_CTA.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {HOME_FOR_WHOM_CTA.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button size="lg" href="#lead-form" className="w-full sm:min-w-[220px]">
                  {HOME_FOR_WHOM_CTA.buttonLabel}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  href={`tel:${SITE.phoneRaw}`}
                  className="w-full sm:min-w-[220px]"
                >
                  <Phone className="h-4 w-4" />
                  Позвонить
                </Button>
              </div>
            </div>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
