"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/data";
import { ArrowRight, Award, ShieldCheck, UserCog, Users, Wrench } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const STAT_META: {
  icon: LucideIcon;
  iconGradient: string;
  shadow: string;
}[] = [
  {
    icon: Users,
    iconGradient: "from-brand-500 to-cyan-500",
    shadow: "shadow-brand-500/20",
  },
  {
    icon: Award,
    iconGradient: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/25",
  },
  {
    icon: UserCog,
    iconGradient: "from-violet-500 to-brand-600",
    shadow: "shadow-violet-500/20",
  },
  {
    icon: Wrench,
    iconGradient: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/20",
  },
];

export function ServiceTrustStrip() {
  return (
    <section
      aria-label="Наши показатели"
      className="relative overflow-hidden border-y border-brand-100/60 bg-gradient-to-b from-brand-50/70 via-white to-white py-8 sm:py-10"
    >
      <div className="gradient-mesh pointer-events-none absolute inset-0 opacity-70" />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map((stat, index) => {
            const meta = STAT_META[index % STAT_META.length];
            const Icon = meta.icon;

            return (
              <article
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-white/90 bg-white/85 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200/80 hover:shadow-lg hover:shadow-brand-500/10 sm:p-5"
              >
                <div
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${meta.iconGradient} text-white shadow-lg ${meta.shadow} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <p className="mt-3 font-display text-2xl font-bold leading-none tracking-tight sm:text-3xl">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      className="gradient-text"
                    />
                  </p>

                  <p className="mt-2 text-xs leading-snug text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center">
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-4 py-2.5 text-sm text-emerald-800 shadow-sm">
            <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
            Официальная гарантия до 12 месяцев
          </span>

          <Link
            href="/otzyvy"
            className="group inline-flex items-center justify-center gap-1.5 rounded-full border border-brand-200/80 bg-white px-4 py-2.5 text-sm font-medium text-brand-700 shadow-sm transition-colors hover:border-brand-300 hover:bg-brand-50"
          >
            Читать отзывы клиентов
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
