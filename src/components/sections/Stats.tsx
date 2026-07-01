"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { Section } from "@/components/ui/Section";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <Section dark className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_70%)]" />

      <MotionSection className="relative">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <MotionItem key={stat.label}>
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  {stat.label}
                </p>
              </div>
            </MotionItem>
          ))}
        </div>
      </MotionSection>
    </Section>
  );
}
