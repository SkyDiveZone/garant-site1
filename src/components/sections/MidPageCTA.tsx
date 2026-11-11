"use client";

import { Button } from "@/components/ui/Button";
import { ROUND_THE_CLOCK } from "@/lib/copy";
import { SITE } from "@/lib/data";
import { requestLeadForm } from "@/lib/lead-form-events";
import { HeroTrustInfo } from "@/components/ui/HeroTrustInfo";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { Section } from "@/components/ui/Section";
import { Phone } from "lucide-react";

export function MidPageCTA() {
  return (
    <Section className="!py-12">
      <MotionSection>
        <MotionItem>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center text-white">
              <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                Не откладывайте — мастер свободен сегодня
              </h2>
              <p className="mt-4 text-brand-100">{ROUND_THE_CLOCK.headline}</p>
              <p className="mt-2 text-sm text-brand-100/90">{ROUND_THE_CLOCK.urgent}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Button size="lg" variant="secondary" href={`tel:${SITE.phoneRaw}`}>
                  <Phone className="h-4 w-4" />
                  Позвонить
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={requestLeadForm}
                  className="border-white/70 text-white hover:bg-white/10 hover:border-white"
                >
                  Оставить заявку
                </Button>
              </div>
              <div className="mt-6 flex justify-center">
                <ContactBlock size="lg" theme="on-dark" align="center" />
              </div>
              <div className="mt-6">
                <HeroTrustInfo align="center" theme="on-dark" />
              </div>
            </div>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
