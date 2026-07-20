"use client";

import { ConversionActions } from "@/components/landing/ConversionActions";
import { LeadFormSplitLayout } from "@/components/ui/LeadFormSplitLayout";
import { LeadFormSellingBelow } from "@/components/ui/LeadFormSellingBelow";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { COPY, ROUND_THE_CLOCK } from "@/lib/copy";
import { HERO } from "@/lib/data";
import { SPACING } from "@/lib/spacing";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="page-hero">
      <div className="gradient-mesh absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,white_100%)]" />

      <div className="page-hero__inner">
        <LeadFormSplitLayout
          content={
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

              <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl">
                {HERO.title}
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                {HERO.subtitle}
              </p>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                {ROUND_THE_CLOCK.requests} {ROUND_THE_CLOCK.urgent}
              </p>

              <div className="mt-8">
                <ConversionActions size="large" contactAlign="start" showTrustInfo />
              </div>
            </motion.div>
          }
          form={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:sticky md:top-24"
            >
              <LeadFormWithExtras id="lead-form" subtitle={COPY.leadFormSubtitle} />
            </motion.div>
          }
        />
      </div>
      <div className={SPACING.heroBelowGrid}>
        <LeadFormSellingBelow formAnchor="#lead-form" />
      </div>
    </section>
  );
}
