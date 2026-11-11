"use client";

import { EkbPricebook } from "@/components/ekb2/EkbPricebook";
import { EkbReviews } from "@/components/ekb2/EkbReviews";
import { EKB_DISTRICTS, EKB_PAGES, type EkbCategoryKey } from "@/lib/ekb2/pages";
import { SITE } from "@/lib/data";
import { trackMaxClick, trackPhoneClick, trackTelegramClick } from "@/lib/yandex-metrika";

interface EkbCategoryPageProps {
  category: EkbCategoryKey;
}

export function EkbCategoryPage({ category }: EkbCategoryPageProps) {
  const page = EKB_PAGES[category];

  return (
    <div className="wrap">
      <section className="hero">
        <div>
          <p className="kicker">Екатеринбург</p>
          <h1>{page.h1}</h1>
          <p className="lead">{page.lead}</p>
          <ul className="facts">
            {page.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
          <div className="actions">
            <a className="call" href={`tel:${SITE.phoneRaw}`} onClick={trackPhoneClick}>
              Позвонить · {SITE.phone}
            </a>
            <a
              className="ghost"
              href={SITE.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackTelegramClick}
            >
              Телеграм
            </a>
            <a
              className="ghost"
              href={SITE.max.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackMaxClick}
            >
              Макс
            </a>
            <a className="ghost" href="#price">
              Весь прайс
            </a>
          </div>
        </div>
      </section>

      <EkbPricebook page={page} />

      <section className="section">
        <h2>{page.stepsTitle}</h2>
        <div className="steps" style={{ marginTop: 14 }}>
          {page.steps.map((step) => (
            <article key={step.num} className="step">
              <span>{step.num}</span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Районы</h2>
        <div className="districts">
          {EKB_DISTRICTS.map((district) => (
            <span key={district}>{district}</span>
          ))}
        </div>
      </section>

      <EkbReviews reviews={page.reviews} />
    </div>
  );
}
