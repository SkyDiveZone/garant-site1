"use client";

import { Button } from "@/components/ui/Button";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { Section } from "@/components/ui/Section";
import { COPY } from "@/lib/copy";
import { PHONES } from "@/lib/data";
import { trackPhoneClick } from "@/lib/yandex-metrika";
import { Phone, UserRound } from "lucide-react";
import Image from "next/image";

export function FinalCTA() {
  return (
    <Section id="final-cta" className="bg-cream !pt-0">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-graphite text-white">
        <Image
          src="/works/santehnik/ustanovka-smesitelya-otechestvennyy/03-kitchen-faucet.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/92 to-graphite/75" />
        <div className="relative z-10 px-5 py-8 text-center sm:px-8 sm:py-10">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Нужен мастер?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            Оставьте заявку или позвоните — обсудим задачу в Екатеринбурге. {COPY.costAfterInspection}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#lead-form" size="lg">
              <UserRound className="h-5 w-5" />
              Вызвать мастера
            </Button>
            <Button
              href={`tel:${PHONES[0].raw}`}
              size="lg"
              variant="outlineLight"
              onClick={trackPhoneClick}
            >
              <Phone className="h-5 w-5" />
              Позвонить
            </Button>
          </div>
          <div className="mt-8 flex justify-center">
            <ContactBlock theme="dark" size="md" align="center" />
          </div>
        </div>
      </div>
    </Section>
  );
}
