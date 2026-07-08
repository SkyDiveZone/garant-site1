"use client";



import { PriceCategoryPanel } from "@/components/pricing/PriceCards";

import { Button } from "@/components/ui/Button";

import { MotionItem, MotionSection } from "@/components/ui/Motion";

import { PhoneList } from "@/components/ui/PhoneList";

import { Section, SectionHeader } from "@/components/ui/Section";

import { COPY } from "@/lib/copy";
import { PRICE_CATALOG } from "@/lib/pricing";

import { cn } from "@/lib/utils";

import { Phone } from "lucide-react";

import { useState } from "react";



export function Pricing() {

  const [activeTab, setActiveTab] = useState(PRICE_CATALOG[0].id);

  const current = PRICE_CATALOG.find((g) => g.id === activeTab)!;



  return (

    <Section id="pricing">

      <MotionSection>

        <MotionItem>

          <SectionHeader

            badge="Прозрачные цены"

            title="Прайс-лист услуг"

            subtitle={COPY.pricingSubtitle}

          />

        </MotionItem>



        <MotionItem>

          <div

            className="mb-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"

            role="tablist"

            aria-label="Категории услуг"

          >

            {PRICE_CATALOG.map((tab) => (

              <button

                key={tab.id}

                type="button"

                role="tab"

                aria-selected={activeTab === tab.id}

                onClick={() => setActiveTab(tab.id)}

                className={cn(

                  "shrink-0 rounded-xl px-5 py-2.5 text-sm font-medium transition-all",

                  activeTab === tab.id

                    ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25"

                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"

                )}

              >

                {tab.label}

              </button>

            ))}

          </div>



          <div role="tabpanel" aria-label={current.label}>

            <PriceCategoryPanel group={current} orderHref="#lead-form" />

          </div>



          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-brand-100 bg-brand-50/50 p-6 sm:flex-row sm:justify-center">

            <p className="text-center text-sm text-slate-600 sm:text-left">

              {COPY.callbackWithSchedule}

            </p>

            <PhoneList

              variant="inline"

              linkClassName="text-brand-600 hover:underline"

              showIcon={false}

            />

            <Button href="#final-cta" size="sm">

              <Phone className="h-4 w-4" />

              Оставить заявку

            </Button>

          </div>

        </MotionItem>

      </MotionSection>

    </Section>

  );

}

