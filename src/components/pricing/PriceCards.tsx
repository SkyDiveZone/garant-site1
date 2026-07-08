"use client";

import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import type { PriceCategoryGroup, PriceItem } from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { Flame, Phone } from "lucide-react";
import Link from "next/link";

interface PriceCardProps {
  item: PriceItem;
  orderHref?: string;
  compact?: boolean;
}

export function PriceCard({ item, orderHref = "#lead-form", compact }: PriceCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10",
        compact && "p-4"
      )}
    >
      {item.popular && (
        <span className="absolute -top-2.5 right-4 inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
          <Flame className="h-3 w-3" />
          Популярно
        </span>
      )}
      <h3 className={cn("pr-16 font-medium text-slate-900", compact ? "text-sm" : "text-base")}>
        {item.name}
      </h3>
      <p className={cn("mt-2 font-display font-bold text-brand-700", compact ? "text-lg" : "text-xl")}>
        {item.price}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          size="sm"
          href={orderHref}
          className="flex-1 sm:flex-none"
          aria-label={`Заказать: ${item.name}`}
        >
          Заказать
        </Button>
        {item.slug && (
          <Link
            href={`/${item.slug}`}
            className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-brand-600"
          >
            Подробнее
          </Link>
        )}
      </div>
    </article>
  );
}

interface PriceCategoryPanelProps {
  group: PriceCategoryGroup;
  orderHref?: string;
}

export function PriceCategoryPanel({ group, orderHref }: PriceCategoryPanelProps) {
  const href = orderHref ?? group.ctaHref;

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
            <DynamicIcon name={group.icon} className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900">{group.label}</h3>
            <p className="mt-1 text-sm text-slate-600">{group.description}</p>
          </div>
        </div>
        <Button href={href} size="md" className="shrink-0">
          <Phone className="h-4 w-4" />
          Вызвать мастера
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {group.items.map((item) => (
          <PriceCard key={item.id} item={item} orderHref={href} />
        ))}
      </div>
    </div>
  );
}

interface PriceTableProps {
  items: { name: string; price: string; popular?: boolean }[];
  orderHref?: string;
}

/** Компактная таблица для страниц услуг — mobile-first */
export function PriceTable({ items, orderHref = "#lead-form" }: PriceTableProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              {item.popular && <Flame className="h-4 w-4 shrink-0 text-orange-500" aria-hidden="true" />}
              <span className="text-sm font-medium text-slate-800 sm:text-base">{item.name}</span>
            </div>
            <span className="mt-1 block font-display text-lg font-bold text-brand-700">{item.price}</span>
          </div>
          <Button size="sm" href={orderHref} className="w-full shrink-0 sm:w-auto">
            Заказать
          </Button>
        </div>
      ))}
    </div>
  );
}
