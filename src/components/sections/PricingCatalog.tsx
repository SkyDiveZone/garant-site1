"use client";

import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { COPY } from "@/lib/copy";
import { formatPriceFrom } from "@/lib/format-price";
import {
  PRICE_CATALOG_TABS,
  getFullPriceCatalog,
  type PriceCatalogTabId,
} from "@/lib/service-prices";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const TAB_CTA: Record<PriceCatalogTabId, string> = {
  santehnik: "/santehnik",
  elektrik: "/elektrik",
  "master-na-chas": "/master-na-chas",
  "remont-kvartir": "/remont-kvartir",
};

export function PricingCatalog() {
  const [activeTab, setActiveTab] = useState<PriceCatalogTabId>("santehnik");
  const catalog = getFullPriceCatalog();
  const groups = catalog[activeTab];
  const orderHref = "#lead-form";

  return (
    <Section id="pricing" className="bg-slate-50/80">
      <SectionHeader
        badge="Прозрачные цены"
        title="Прайс-лист услуг в Екатеринбурге"
        subtitle={COPY.costAfterInspectionLong}
      />

      <div
        className="mb-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="tablist"
        aria-label="Категории услуг"
      >
        {PRICE_CATALOG_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
              activeTab === tab.id
                ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            )}
          >
            <DynamicIcon name={tab.icon} className="h-4 w-4" aria-hidden="true" />
            {tab.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" aria-label={PRICE_CATALOG_TABS.find((t) => t.id === activeTab)?.label}>
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            Ориентировочные цены «от» — точную сумму мастер назовёт после осмотра.
          </p>
          <Button href={`${TAB_CTA[activeTab]}#lead-form`} size="sm" variant="outline">
            Все услуги направления
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
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
                    className="flex flex-col gap-3 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between"
                  >
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
                      href={orderHref}
                      className="w-full shrink-0 sm:w-auto"
                      aria-label={`Заказать: ${item.name}`}
                    >
                      Заказать
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-brand-200/80 bg-brand-50/50 px-5 py-4 sm:flex-row sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-semibold text-slate-900">Не нашли нужную услугу?</p>
            <p className="mt-1 text-sm text-slate-600">{COPY.callbackWithSchedule}</p>
          </div>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
          <Button href={orderHref} size="sm">
            Оставить заявку
          </Button>
          <Link
            href={`${TAB_CTA[activeTab]}#lead-form`}
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100/60"
          >
            Страница направления
          </Link>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        Цены указаны ориентировочно. Итоговая стоимость зависит от сложности, материалов и объёма
        работ — согласуется с мастером до начала.
      </p>
    </Section>
  );
}
