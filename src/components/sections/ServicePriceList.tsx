"use client";

import { ConversionActions } from "@/components/landing/ConversionActions";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { formatPriceFrom } from "@/lib/format-price";
import { getServicePriceList } from "@/lib/service-prices";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

interface ServicePriceListProps {
  slug?: string | null;
  formAnchor?: string;
  sectionClass?: string;
  compact?: boolean;
  showOrderButtons?: boolean;
  sectionId?: string;
}

export function ServicePriceList({
  slug,
  formAnchor = "#lead-form",
  sectionClass,
  compact = false,
  showOrderButtons = true,
  sectionId,
}: ServicePriceListProps) {
  const groups = getServicePriceList(slug);

  if (groups.length === 0) return null;

  return (
    <Section id={sectionId} className={cn("bg-slate-50/80", sectionClass)}>
      <SectionHeader
        badge="Цены"
        title="Ориентировочные цены на работы"
        subtitle="Точную стоимость мастер назовёт после осмотра — звоните, проконсультируем бесплатно"
      />

      <div className={cn("grid gap-6", compact ? "lg:grid-cols-1" : "lg:grid-cols-2")}>
        {groups.map((group) => (
          <div
            key={group.title}
            className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm"
          >
            <div className="border-b border-slate-100 bg-brand-50/60 px-5 py-3.5">
              <h3 className="font-display text-base font-bold text-slate-900">{group.title}</h3>
            </div>
            <ul className="divide-y divide-slate-100">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className={cn(
                    "px-5 py-3.5 transition-colors hover:bg-slate-50/80",
                    showOrderButtons
                      ? "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
                      : "flex items-start justify-between gap-4"
                  )}
                >
                  {showOrderButtons ? (
                    <>
                      <div className="min-w-0 flex-1">
                        <span className="text-sm leading-snug text-slate-700">{item.name}</span>
                        <span className="mt-1 block whitespace-nowrap text-sm font-bold text-brand-700">
                          {formatPriceFrom(item.priceFrom)}
                          {item.unit && (
                            <span className="ml-1 text-xs font-normal text-slate-400">{item.unit}</span>
                          )}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        href={formAnchor}
                        className="w-full shrink-0 sm:w-auto"
                        aria-label={`Заказать: ${item.name}`}
                      >
                        Заказать
                      </Button>
                    </>
                  ) : (
                    <>
                      <span className="text-sm leading-snug text-slate-700">{item.name}</span>
                      <span className="shrink-0 text-right">
                        <span className="whitespace-nowrap text-sm font-bold text-brand-700">
                          {formatPriceFrom(item.priceFrom)}
                        </span>
                        {item.unit && (
                          <span className="mt-0.5 block text-xs text-slate-400">{item.unit}</span>
                        )}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-brand-200/80 bg-brand-50/50 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-semibold text-slate-900">Не нашли нужную услугу?</p>
            <p className="mt-1 text-sm text-slate-600">
              Позвоните — подскажем стоимость и запишем мастера на удобное время
            </p>
          </div>
        </div>
        {!compact && (
          <div className="mt-4 shrink-0 sm:mt-0">
            <ConversionActions size="large" formAnchor={formAnchor} />
          </div>
        )}
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        Цены указаны ориентировочно. Итоговая стоимость зависит от сложности, материалов и объёма
        работ — согласуется с мастером до начала.
      </p>
    </Section>
  );
}
