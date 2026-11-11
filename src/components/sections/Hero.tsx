"use client";

import { PHONES, SITE } from "@/lib/data";
import { trackMaxClick, trackPhoneClick, trackTelegramClick } from "@/lib/yandex-metrika";
import Link from "next/link";

const FACTS = ["Выезд сегодня", "Круглосуточно", "Гарантия 4 года"] as const;

export function Hero() {
  return (
    <section className="cookie-clearance bg-cream text-ink">
      <div className="container-custom grid gap-8 pb-6 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-9 lg:pb-4 lg:pt-10">
        <div>
          <p className="mb-2.5 text-[13px] font-extrabold uppercase tracking-[0.08em] text-graphite">
            Екатеринбург
          </p>
          <h1 className="font-display text-[2.5rem] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[4.25rem]">
            Сантехник на дом сегодня
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Выберите, что случилось. Цену называем до того, как начать работу.
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {FACTS.map((fact) => (
              <li
                key={fact}
                className="rounded-full bg-cream-dark px-3 py-2 text-sm font-bold text-ink"
              >
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href={`tel:${PHONES[0].raw}`}
              onClick={trackPhoneClick}
              className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-4.5 py-3.5 text-sm font-extrabold tracking-tight text-white hover:bg-brand-600 sm:text-base"
            >
              Позвонить · {PHONES[0].display}
            </a>
            <a
              href={SITE.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackTelegramClick}
              className="px-2 py-2 text-sm font-semibold text-muted hover:text-ink"
            >
              Телеграм
            </a>
            <a
              href={SITE.max.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackMaxClick}
              className="px-2 py-2 text-sm font-semibold text-muted hover:text-ink"
            >
              Макс
            </a>
            <Link href="#pricing" className="px-2 py-2 text-sm font-semibold text-muted hover:text-ink">
              Весь прайс
            </Link>
          </div>
        </div>

        <aside className="rounded-[18px] border border-[#e3dcd0] bg-[#fffdf8] px-4 pb-4 pt-3 sm:px-5">
          <h2 className="pt-2 text-[15px] font-bold text-muted">Что делаем чаще всего</h2>
          <div className="mt-1 divide-y divide-[#e3dcd0]">
            {[
              ["Устранение засора", "от 890 ₽"],
              ["Установка смесителя", "от 390 ₽"],
              ["Установка унитаза", "от 990 ₽"],
              ["Установка розетки", "от 110 ₽"],
            ].map(([name, price]) => (
              <div key={name} className="flex items-start justify-between gap-4 py-3.5 text-sm font-semibold">
                <span>{name}</span>
                <b className="whitespace-nowrap font-extrabold tracking-tight">{price}</b>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[13px] text-muted">
            Итог мастер называет до начала. Оплата после работы.
          </p>
        </aside>
      </div>
    </section>
  );
}
