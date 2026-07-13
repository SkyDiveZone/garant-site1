"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { HOME_GUARANTEE } from "@/lib/home-guarantee";
import { Check, ShieldCheck } from "lucide-react";

export function HomeGuaranteeSection() {
  return (
    <Section id="guarantee" className="bg-slate-50/80">
      <MotionSection>
        <MotionItem>
          <div className="relative overflow-hidden rounded-3xl border border-brand-200/80 bg-gradient-to-br from-white via-brand-50/40 to-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
            <div
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-200/30 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                <ShieldCheck className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
                {HOME_GUARANTEE.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {HOME_GUARANTEE.description}
              </p>
            </div>

            <ul className="relative mt-10 grid gap-4 sm:grid-cols-2">
              {HOME_GUARANTEE.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-5 py-4 shadow-sm"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-slate-800 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
