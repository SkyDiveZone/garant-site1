"use client";

import { ConversionActions } from "@/components/landing/ConversionActions";
import { LeadForm } from "@/components/ui/LeadForm";
import { PhoneList } from "@/components/ui/PhoneList";
import { TelegramLink } from "@/components/ui/TelegramLink";
import { COPY } from "@/lib/copy";
import { HERO, SITE } from "@/lib/data";
import type { ServicePage } from "@/lib/services";
import { MapPin, Star } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  service: ServicePage;
}

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="gradient-mesh absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />

      <div className="container-custom relative px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-brand-600">
            Главная
          </Link>
          {service.parent && (
            <>
              <span className="mx-2">/</span>
              <Link href={service.parent.href} className="hover:text-brand-600">
                {service.parent.label}
              </Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-slate-700">{service.categoryLabel}</span>
        </nav>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <MapPin className="h-4 w-4" />
              Екатеринбург · {SITE.hours}
            </div>

            <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {service.h1}
            </h1>

            <div className="mt-5 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4">
              <p className="font-display text-2xl font-bold text-brand-700 sm:text-3xl">
                {COPY.visitFee}
              </p>
              <p className="mt-1 text-sm text-slate-600">{COPY.visitFeeNote}</p>
            </div>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">{service.heroSubtitle}</p>

            <div className="order-3 mt-8 lg:order-none">
              <ConversionActions size="large" />
            </div>

            <div className="mt-6 space-y-2">
              <PhoneList
                variant="stack"
                linkClassName="text-base font-semibold text-brand-600 hover:underline sm:text-lg"
                iconClassName="text-brand-600"
              />
              <TelegramLink className="text-sky-600 hover:text-sky-700" iconSize={18} />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-sm font-semibold text-slate-900">4.9</span>
                <span className="text-sm text-slate-500">· рейтинг клиентов</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {HERO.trustItems.map((item) => (
                <div
                  key={item.sub}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-3 backdrop-blur-sm sm:p-4"
                >
                  <div className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-2 lg:order-none">
            <LeadForm
              id="lead-form"
              title={`Вызвать ${service.categoryLabel.toLowerCase()}`}
              subtitle={COPY.leadFormSubtitle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
