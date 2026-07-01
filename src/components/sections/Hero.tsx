"use client";

import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/ui/LeadForm";
import { HERO, SITE } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Phone, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="gradient-mesh absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,white_100%)]" />

      <div className="container-custom relative px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              {HERO.badge}
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Ремонт без стресса —{" "}
              <span className="gradient-text">мастер у вас уже сегодня</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              {HERO.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                href="#lead-form"
                className="group"
              >
                {HERO.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                href={`tel:${SITE.phoneRaw}`}
              >
                <Phone className="h-4 w-4" />
                {HERO.secondaryCta}
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-sm font-semibold text-slate-900">4.9</span>
                <span className="text-sm text-slate-500">рейтинг</span>
              </div>
              <div className="hidden h-4 w-px bg-slate-300 sm:block" />
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Гарантия до 12 месяцев
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {HERO.trustItems.map((item) => (
                <div
                  key={item.sub}
                  className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-bold text-slate-900">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">{item.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            id="lead-form"
          >
            <LeadForm />
            <p className="mt-4 text-center text-sm text-slate-500">
              Или позвоните:{" "}
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="font-semibold text-brand-600 hover:underline"
              >
                {SITE.phone}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
