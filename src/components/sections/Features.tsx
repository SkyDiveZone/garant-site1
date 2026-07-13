"use client";

import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES_PAGE } from "@/lib/services-page-content";
import { ArrowRight, Check, ChevronDown, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Features() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <Section id="services">
      <MotionSection className="space-y-16 lg:space-y-20">
        <MotionItem>
          <SectionHeader
            badge="Услуги"
            title={SERVICES_PAGE.offer.title}
            subtitle={SERVICES_PAGE.offer.subtitle}
          />
        </MotionItem>

        <MotionItem>
          <div className="grid gap-4 sm:grid-cols-2">
            {SERVICES_PAGE.services.map((service) => (
              <article
                key={service.href}
                className="rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <h3 className="font-display text-xl font-bold text-slate-900">{service.title}</h3>
                <ul className="mt-4 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:underline"
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </MotionItem>

        <MotionItem>
          <SectionHeader badge="Преимущества" title="Почему выбирают нас" align="left" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_PAGE.whyUs.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </MotionItem>

        <MotionItem>
          <SectionHeader badge="Этапы" title="Как мы работаем" align="left" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_PAGE.steps.map((step, index) => (
              <article
                key={step.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <span className="font-display text-2xl font-bold text-brand-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </MotionItem>

        <MotionItem>
          <div className="rounded-2xl border border-brand-200/80 bg-brand-50/60 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {SERVICES_PAGE.guarantee.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                  {SERVICES_PAGE.guarantee.description}
                </p>
              </div>
            </div>
          </div>
        </MotionItem>

        <MotionItem>
          <SectionHeader badge="FAQ" title="Частые вопросы" align="left" />
          <div className="mx-auto max-w-3xl space-y-3">
            {SERVICES_PAGE.faq.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-semibold text-slate-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-slate-400 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-4 pt-2 text-sm leading-relaxed text-slate-600">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </MotionItem>

        <MotionItem>
          <div className="mx-auto max-w-xl">
            <SectionHeader
              title="Оставьте заявку"
              subtitle="Перезвоним за 5 минут и согласуем выезд мастера"
            />
            <LeadFormWithExtras id="services-lead-form" />
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
