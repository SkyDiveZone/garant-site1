"use client";

import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import { HOME_MAIN_SERVICES } from "@/lib/home-main-services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function PopularServices() {
  return (
    <Section id="services" className="bg-cream">
      <SectionHeader
        badge="Наши услуги"
        title="Четыре направления в Екатеринбурге"
        subtitle="Выберите нужную услугу — откройте список работ и оставьте заявку"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {HOME_MAIN_SERVICES.map((service) => (
          <article
            key={service.slug}
            className="card-surface card-hover group grid overflow-hidden sm:grid-cols-[1.05fr_0.95fr]"
          >
            <div className="flex flex-col p-4 sm:p-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <DynamicIcon name={service.icon} className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink sm:text-2xl">{service.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Button href={service.href} variant="outline" size="sm" className="w-full sm:w-auto">
                  Подробнее
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  href="#lead-form"
                  size="sm"
                  className="w-full sm:w-auto"
                  aria-label={service.orderLabel}
                >
                  Заказать
                </Button>
              </div>
            </div>
            <div className="relative min-h-[180px] sm:min-h-full">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 92vw, 420px"
              />
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
