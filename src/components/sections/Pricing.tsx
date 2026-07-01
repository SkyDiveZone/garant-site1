"use client";

import { Button } from "@/components/ui/Button";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PRICING_TABS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Flame, Phone } from "lucide-react";
import { useState } from "react";

export function Pricing() {
  const [activeTab, setActiveTab] = useState(PRICING_TABS[0].id);
  const current = PRICING_TABS.find((t) => t.id === activeTab)!;

  return (
    <Section id="pricing">
      <MotionSection>
        <MotionItem>
          <SectionHeader
            badge="Прозрачные цены"
            title="Фиксированная стоимость — без сюрпризов"
            subtitle="Все материалы по оптовым ценам. Консультация по телефону — бесплатно"
          />
        </MotionItem>

        <MotionItem>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {PRICING_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "rounded-xl px-5 py-2.5 text-sm font-medium transition-all",
                  activeTab === tab.id
                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[500px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/80">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">
                      Услуга
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold text-slate-900">
                      Цена
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {current.items.map((item, i) => (
                    <tr
                      key={item.name}
                      className={cn(
                        "border-b border-slate-50 transition-colors hover:bg-brand-50/30",
                        i === current.items.length - 1 && "border-0"
                      )}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-slate-700">
                          {item.popular && (
                            <Flame className="h-4 w-4 shrink-0 text-orange-500" />
                          )}
                          {item.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-sm font-semibold text-brand-700">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <p className="text-sm text-slate-600">
              Нужна точная смета? Звоните:{" "}
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {SITE.phone}
              </a>
            </p>
            <Button href="#final-cta" size="sm">
              <Phone className="h-4 w-4" />
              Получить расчёт
            </Button>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
