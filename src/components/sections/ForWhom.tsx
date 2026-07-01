"use client";

import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { AUDIENCES } from "@/lib/data";

export function ForWhom() {
  return (
    <Section className="bg-slate-50/80">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Для кого"
            title="Решаем задачи любой сложности"
            subtitle="От срочного вызова до полного ремонта квартиры под ключ"
          />
        </MotionItem>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((item) => (
            <MotionItem key={item.title}>
              <div className="card-hover flex h-full items-start gap-4 rounded-2xl border border-slate-200/60 bg-white p-6">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <DynamicIcon name={item.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
