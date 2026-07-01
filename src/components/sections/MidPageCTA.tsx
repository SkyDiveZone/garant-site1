"use client";

import { LeadForm } from "@/components/ui/LeadForm";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { SITE } from "@/lib/data";
import { Phone } from "lucide-react";

export function MidPageCTA() {
  return (
    <Section className="!py-16">
      <MotionSection>
        <MotionItem>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div className="text-white">
                <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                  Не откладывайте — мастер свободен сегодня
                </h2>
                <p className="mt-4 text-brand-100">
                  Оставьте заявку или позвоните — перезвоним за 5 минут и
                  назовём точную цену до начала работ.
                </p>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-white hover:underline"
                >
                  <Phone className="h-5 w-5" />
                  {SITE.phone}
                </a>
              </div>
              <LeadForm
                variant="compact"
                className="border-0 bg-white shadow-2xl"
              />
            </div>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
