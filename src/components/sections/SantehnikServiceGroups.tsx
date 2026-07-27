import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SANTEHNIK_SERVICE_GROUPS } from "@/lib/santehnik-service-groups";
import { ArrowRight } from "lucide-react";

interface SantehnikServiceGroupsProps {
  formAnchor?: string;
}

export function SantehnikServiceGroups({ formAnchor = "#lead-form" }: SantehnikServiceGroupsProps) {
  return (
    <Section id="service-groups" className="bg-white">
      <SectionHeader
        badge="Услуги"
        title="Группы сантехнических работ"
        subtitle="Выберите нужную услугу — у каждой популярной задачи есть отдельная страница с ценами"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {SANTEHNIK_SERVICE_GROUPS.map((group) => (
          <div
            key={group.title}
            className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50 shadow-sm"
          >
            <div className="border-b border-slate-100 bg-brand-50/60 px-5 py-3.5">
              <h3 className="font-display text-base font-bold text-slate-900">{group.title}</h3>
            </div>
            <ul className="divide-y divide-slate-100 bg-white">
              {group.items.map((item) => (
                <li key={item.title} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    {item.href && (
                      <Button href={item.href} variant="outline" size="sm" className="w-full sm:w-auto">
                        Подробнее
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      href={item.href ? `${item.href}${formAnchor}` : formAnchor}
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      Заказать
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
