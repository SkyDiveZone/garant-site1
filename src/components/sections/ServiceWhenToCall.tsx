"use client";

import { Button } from "@/components/ui/Button";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import type { ServiceWhenToCallConfig } from "@/lib/service-when-to-call";
import { HelpCircle } from "lucide-react";

interface ServiceWhenToCallProps {
  config: ServiceWhenToCallConfig;
  formAnchor?: string;
  sectionClass?: string;
}

export function ServiceWhenToCall({
  config,
  formAnchor = "#lead-form",
  sectionClass,
}: ServiceWhenToCallProps) {
  return (
    <Section className={sectionClass ?? ""}>
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge={config.badge ?? "Ситуации"}
            title={config.title}
            subtitle={config.subtitle}
          />
        </MotionItem>

        <MotionItem>
          <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {config.items.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
                >
                  <span
                    className={`mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${item.iconStyle}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </MotionItem>

        <MotionItem>
          <div className="section-cta-panel relative">
            <div
              className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-200/30 blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-sky-200/40 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex gap-4 lg:max-w-2xl">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                  <HelpCircle className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    {config.bottomCta.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {config.bottomCta.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0">
                <Button size="lg" href={formAnchor} className="w-full sm:min-w-[220px] lg:w-auto">
                  {config.bottomCta.primaryLabel}
                </Button>
                {config.bottomCta.secondaryLabel && (
                  <Button
                    size="lg"
                    variant="outline"
                    href={formAnchor}
                    className="w-full sm:min-w-[220px] lg:w-auto"
                  >
                    {config.bottomCta.secondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
