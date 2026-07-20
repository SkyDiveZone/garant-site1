"use client";

import { Button } from "@/components/ui/Button";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  HOME_POPULAR_PROBLEMS,
  HOME_PROBLEM_CATEGORY_LABELS,
  HOME_PROBLEM_CATEGORY_STYLES,
} from "@/lib/home-popular-problems";
import { SITE } from "@/lib/data";
import { SPACING } from "@/lib/spacing";
import { HelpCircle, Phone } from "lucide-react";

interface HomePopularProblemsProps {
  formAnchor?: string;
  sectionClass?: string;
}

export function HomePopularProblems({
  formAnchor = "#lead-form",
  sectionClass,
}: HomePopularProblemsProps) {
  return (
    <Section className={`bg-slate-50/80 ${sectionClass ?? ""}`}>
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Проблемы"
            title="Популярные проблемы"
            subtitle="Узнали свою ситуацию? Оставьте заявку — перезвоним за 5 минут"
          />
        </MotionItem>

        <MotionItem>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {HOME_POPULAR_PROBLEMS.map((problem) => {
              const styles = HOME_PROBLEM_CATEGORY_STYLES[problem.category];
              const Icon = problem.icon;

              return (
                <article
                  key={problem.title}
                  className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span
                      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${styles.icon} group-hover:scale-105`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ring-inset ${styles.badge}`}
                    >
                      {HOME_PROBLEM_CATEGORY_LABELS[problem.category]}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold leading-snug text-slate-900">
                    {problem.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {problem.description}
                  </p>
                </article>
              );
            })}
          </div>
        </MotionItem>

        <MotionItem>
          <div className={SPACING.ctaCard}>
            <p className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
              Узнали свою ситуацию?
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Оставьте заявку — перезвоним в течение 5 минут и подскажем решение.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" href={formAnchor} className="w-full sm:w-auto sm:min-w-[220px]">
                Оставить заявку
              </Button>
              <Button
                size="lg"
                variant="outline"
                href={`tel:${SITE.phoneRaw}`}
                className="w-full sm:w-auto sm:min-w-[220px]"
              >
                <Phone className="h-4 w-4" />
                Позвонить
              </Button>
            </div>
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

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4 sm:max-w-xl">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
                  <HelpCircle className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    Не нашли свою проблему?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Даже если вашей ситуации нет в списке, скорее всего мы сможем помочь. Опишите
                    задачу, и мы подберём подходящего специалиста.
                  </p>
                </div>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:min-w-[220px]">
                <Button size="lg" href={formAnchor} className="w-full">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="secondary" href={formAnchor} className="w-full">
                  Оставить заявку
                </Button>
              </div>
            </div>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
