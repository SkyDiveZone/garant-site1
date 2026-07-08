"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { ShieldCheck } from "lucide-react";

export function Certificates() {
  return (
    <Section id="certificates">
      <MotionSection>
        <MotionItem>
          <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white via-white to-brand-50/40 p-8 text-center shadow-sm sm:p-10">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-brand-600">
                <ShieldCheck className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
                Гарантия и сертификаты
              </h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              Официальная гарантия до 12 месяцев на все виды работ.
            </p>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
