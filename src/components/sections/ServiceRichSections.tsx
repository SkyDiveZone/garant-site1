import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { formatPriceFrom } from "@/lib/format-price";
import { getPriceItemsByNames } from "@/lib/service-prices";
import type { ServiceRichContent } from "@/lib/services/service-rich-content";
import { AlertCircle, CheckCircle2, Clock, Link2, ListChecks } from "lucide-react";
import Link from "next/link";

interface ServiceRichSectionsProps {
  content: ServiceRichContent;
  formAnchor?: string;
  categoryLabel: string;
}

export function ServiceRichSections({
  content,
  formAnchor = "#lead-form",
  categoryLabel,
}: ServiceRichSectionsProps) {
  const prices = getPriceItemsByNames(content.focusedPriceNames);

  return (
    <>
      {prices.length > 0 && (
        <Section id="service-prices" className="bg-slate-50/80">
          <SectionHeader
            badge="Цены"
            title={`Стоимость: ${categoryLabel.toLowerCase()}`}
            subtitle="Ориентировочные цены «от» — точную сумму мастер назовёт после осмотра"
          />
          <ul className="mx-auto max-w-3xl divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
            {prices.map((item) => (
              <li
                key={item.name}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0 flex-1">
                  <span className="text-sm font-medium text-slate-800">{item.name}</span>
                  <span className="mt-1 block text-sm font-bold text-brand-700">
                    {formatPriceFrom(item.priceFrom)}
                    {item.unit && (
                      <span className="ml-1 text-xs font-normal text-slate-400">{item.unit}</span>
                    )}
                  </span>
                </div>
                <Button size="sm" href={formAnchor} className="w-full shrink-0 sm:w-auto">
                  Заказать
                </Button>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center">
            <Link
              href={content.fullPriceHref}
              className="text-sm font-medium text-brand-600 hover:underline"
            >
              Полный прайс сантехника →
            </Link>
          </p>
        </Section>
      )}

      <Section>
        <SectionHeader
          badge="Ситуации"
          title="Когда нужна эта услуга"
          subtitle="Узнали свою ситуацию? Оставьте заявку — перезвоним за 5 минут"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {content.whenNeeded.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <AlertCircle className="h-4 w-4" aria-hidden="true" />
              </span>
              <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/80">
        <SectionHeader
          badge="Состав работ"
          title="Что входит в услугу"
          subtitle="Мастер приедет с инструментом и выполнит работу под ключ"
        />
        <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
          {content.includedWorks.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
              <span className="text-sm leading-snug text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeader
          badge="Процесс"
          title="Как проходит выезд мастера"
          subtitle={`Понятные этапы — без сюрпризов по ${categoryLabel.toLowerCase()}`}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.visitSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
            >
              <span className="font-display text-3xl font-bold text-slate-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-50/80">
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900">Срок выполнения</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{content.duration}</p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <ListChecks className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900">От чего зависит цена</h3>
            <ul className="mt-3 space-y-2">
              {content.priceFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {factor}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {content.relatedServices.length > 0 && (
        <Section>
          <SectionHeader
            badge="Ещё услуги"
            title="Похожие услуги сантехника"
            subtitle="Можем выполнить несколько работ за один выезд"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {content.relatedServices.map((item) => (
              <article
                key={item.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm"
              >
                <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Link2 className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{item.description}</p>
                <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                  <Button href={item.href} variant="outline" size="sm" className="flex-1">
                    Подробнее
                  </Button>
                  <Button href={`${item.href}${formAnchor}`} size="sm" className="flex-1">
                    Заказать
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
