import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HOME_MAIN_SERVICES } from "@/lib/home-main-services";
import { ArrowRight } from "lucide-react";

export function PopularServices() {
  return (
    <Section id="services" className="!pt-0">
      <SectionHeader
        badge="Направления"
        title="Выберите нужную услугу"
        subtitle="Отдельная страница под каждый запрос — для быстрого заказа"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {HOME_MAIN_SERVICES.map((service) => (
          <article
            key={service.slug}
            className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10 sm:p-6"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              <DynamicIcon name={service.icon} className="h-8 w-8" aria-hidden="true" />
            </span>

            <h3 className="mt-4 font-display text-xl font-bold text-slate-900 group-hover:text-brand-600">
              {service.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-base">
              {service.description}
            </p>

            <div className="mt-5 flex flex-col gap-2.5">
              <Button href={service.href} variant="outline" size="sm" className="w-full">
                Подробнее
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#lead-form" size="sm" className="w-full">
                Оставить заявку
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
