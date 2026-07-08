"use client";

import { Button } from "@/components/ui/Button";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { EKB_DISTRICTS } from "@/lib/data";
import { MapPin } from "lucide-react";

export function ServiceArea() {
  return (
    <Section id="service-area" className="bg-slate-50/80">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="География"
            title="Работаем по всему Екатеринбургу"
            subtitle="Выезжаем во все районы города и пригород"
          />
        </MotionItem>
        <MotionItem>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {EKB_DISTRICTS.map((district) => (
              <div
                key={district}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-brand-200 hover:text-brand-700"
              >
                <MapPin className="h-4 w-4 shrink-0 text-brand-500" aria-hidden="true" />
                {district}
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="#lead-form" size="lg">
              Вызвать мастера в мой район
            </Button>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
