"use client";

import { Button } from "@/components/ui/Button";
import { COPY } from "@/lib/copy";
import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { PhoneList } from "@/components/ui/PhoneList";
import { Section } from "@/components/ui/Section";
import { TelegramLink } from "@/components/ui/TelegramLink";
import { Phone } from "lucide-react";

export function MidPageCTA() {
  return (
    <Section className="!py-16">
      <MotionSection>
        <MotionItem>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-12 sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center text-white">
              <h2 className="font-display text-2xl font-bold sm:text-3xl lg:text-4xl">
                Не откладывайте — мастер свободен сегодня
              </h2>
              <p className="mt-4 text-brand-100">{COPY.callbackWithSchedule}</p>
              <div className="mt-8 flex justify-center">
                <Button size="lg" variant="secondary" href="#lead-form">
                  <Phone className="h-4 w-4" />
                  Оставить заявку
                </Button>
              </div>
              <div className="mt-6 space-y-2">
                <PhoneList
                  variant="stack"
                  linkClassName="text-lg font-semibold text-white hover:underline"
                  iconClassName="text-white"
                />
                <TelegramLink className="text-sky-200 hover:text-white" iconSize={20} />
              </div>
              <div className="mt-8">
                <HeroFormBenefits />
              </div>
            </div>
          </div>
        </MotionItem>
      </MotionSection>
    </Section>
  );
}
