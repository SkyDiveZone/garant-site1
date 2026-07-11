import { Section, SectionHeader } from "@/components/ui/Section";
import { POPULAR_SERVICES } from "@/lib/services";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PopularServices() {
  return (
    <Section className="!pt-0">
      <SectionHeader
        badge="Популярные услуги"
        title="Выберите нужную услугу"
        subtitle="Отдельная страница под каждый запрос — для быстрого заказа"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POPULAR_SERVICES.map((service) => (
          <Link
            key={service.slug}
            href={`/${service.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10"
          >
            <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-brand-600">
              {service.categoryLabel}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-2">
              {service.heroSubtitle}
            </p>
            <div className="mt-4 flex items-center justify-end">
              <span className="flex items-center gap-1 text-sm font-medium text-slate-500 group-hover:text-brand-600">
                Подробнее
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
