"use client";

import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { getServiceBySlug } from "@/lib/services";
import { getSellingContent } from "@/lib/services/service-selling-content";
import { cn } from "@/lib/utils";

interface ServiceAboutSectionProps {
  slug?: string | null;
  className?: string;
  sectionClass?: string;
}

export function ServiceAboutSection({
  slug,
  className,
  sectionClass,
}: ServiceAboutSectionProps) {
  const service = slug ? getServiceBySlug(slug) : undefined;
  const content = getSellingContent(slug, service);

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
    </div>
  );
}
