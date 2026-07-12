"use client";

import { ConversionActions } from "@/components/landing/ConversionActions";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getServiceBySlug } from "@/lib/services";
import { getSellingContent } from "@/lib/services/service-selling-content";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  Cable,
  CheckCircle2,
  Hammer,
  Home,
  Lightbulb,
  Plug,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const WORK_ICONS: LucideIcon[] = [Wrench, Hammer, Plug, Lightbulb, Home, Zap, Cable];

const WHEN_ICONS: Record<string, LucideIcon> = {
  AlertTriangle: AlertCircle,
  Paintbrush: Wrench,
  Plug,
  Home,
  Zap,
  Cable,
  Wrench,
  Users: Wrench,
};

interface MasterSellingSectionsProps {
  slug?: string;
  formAnchor?: string;
  className?: string;
  compact?: boolean;
}

export function MasterSellingSections({
  slug,
  formAnchor = "#lead-form",
  className,
  compact = false,
}: MasterSellingSectionsProps) {
  const pathname = usePathname();
  const resolvedSlug =
    slug ?? (pathname === "/" ? null : pathname.replace(/^\//, "").split("/")[0] || null);
  const service = resolvedSlug ? getServiceBySlug(resolvedSlug) : undefined;
  const content = getSellingContent(resolvedSlug, service);

  const sectionClass = compact ? "!py-10 sm:!py-12" : undefined;
  const gridGap = compact ? "gap-2.5" : "gap-3";

  return (
    <div className={cn("w-full", className)}>
      <Section className={cn("bg-slate-50/80", sectionClass, "!px-0")}>
        <SectionHeader
          badge={content.badge}
          title={content.about.title}
          subtitle={content.about.subtitle}
        />
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          {content.about.intro}
        </p>
        {content.about.introSecondary && (
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            {content.about.introSecondary}
          </p>
        )}
        {content.about.highlights && content.about.highlights.length > 0 && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.about.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <DynamicIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        )}
      </Section>

      <Section className={cn(sectionClass, "!px-0")}>
        <SectionHeader
          badge="Услуги"
          title={content.workTypes.title}
          subtitle={content.workTypes.subtitle}
        />
        <div
          className={cn(
            "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
            gridGap
          )}
        >
          {content.workTypes.items.map((name, index) => {
            const Icon = WORK_ICONS[index % WORK_ICONS.length];
            return (
              <article
                key={name}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold leading-snug text-slate-800">{name}</h3>
              </article>
            );
          })}
        </div>
        {!compact && (
          <div className="mt-8 text-center">
            <ConversionActions formAnchor={formAnchor} />
          </div>
        )}
      </Section>

      <Section className={cn("bg-slate-50/80", sectionClass, "!px-0")}>
        <SectionHeader
          badge="Проблемы"
          title={content.problems.title}
          subtitle={content.problems.subtitle}
        />
        <div className={cn("grid sm:grid-cols-2 lg:grid-cols-3", gridGap)}>
          {content.problems.items.map((problem) => (
            <article
              key={problem}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
              <p className="text-sm font-medium text-slate-800">{problem}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className={cn(sectionClass, "!px-0")}>
        <SectionHeader
          badge="Ситуации"
          title={content.whenToCall.title}
          subtitle={content.whenToCall.subtitle}
        />
        <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", compact && "gap-3")}>
          {content.whenToCall.items.map((item) => {
            const Icon = item.icon ? (WHEN_ICONS[item.icon] ?? CheckCircle2) : CheckCircle2;
            return (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
                  {item.description && (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
        {!compact && (
          <div className="mt-8 text-center">
            <ConversionActions size="large" formAnchor={formAnchor} />
          </div>
        )}
      </Section>
    </div>
  );
}
