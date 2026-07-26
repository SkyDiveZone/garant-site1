import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { POPULAR_SUB_SERVICES } from "@/lib/popular-sub-services";
import { ArrowRight } from "lucide-react";

export function PopularSubServices() {
  return (
    <Section className="!pt-0">
      <SectionHeader
        badge="Популярное"
        title="Частые заявки"
        subtitle="Отдельная страница под каждый запрос — цены и форма заказа"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {POPULAR_SUB_SERVICES.map((service) => (
          <article
            key={service.slug}
            className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <DynamicIcon name={service.icon} className="h-6 w-6" aria-hidden="true" />
            </span>

            <h3 className="mt-4 font-display text-lg font-bold text-slate-900 group-hover:text-brand-600">
              {service.title}
            </h3>

            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.description}</p>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Button href={`/${service.slug}`} variant="outline" size="sm" className="flex-1">
                Подробнее
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={`/${service.slug}#lead-form`} size="sm" className="flex-1">
                Заказать
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
