import { ConversionActions } from "@/components/landing/ConversionActions";
import { ServiceFAQSection } from "@/components/landing/ServiceFAQSection";
import { WorkGallery } from "@/components/landing/WorkGallery";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { LeadForm } from "@/components/ui/LeadForm";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SITE } from "@/lib/data";
import type { ServicePage } from "@/lib/services";
import { Award, CheckCircle2, Clock, Phone, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";

interface ServiceLandingProps {
  service: ServicePage;
}

export function ServiceLanding({ service }: ServiceLandingProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
        <div className="gradient-mesh absolute inset-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,white_100%)]" />
        <div className="container-custom relative px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600">
              Главная
            </Link>
            {service.parent && (
              <>
                <span className="mx-2">/</span>
                <Link href={service.parent.href} className="hover:text-brand-600">
                  {service.parent.label}
                </Link>
              </>
            )}
            <span className="mx-2">/</span>
            <span className="text-slate-700">{service.categoryLabel}</span>
          </nav>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                <Clock className="h-4 w-4" />
                Выезд за 30–60 минут · {SITE.hours}
              </div>
              <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                {service.heroSubtitle}
              </p>
              <p className="mt-3 font-display text-2xl font-bold text-brand-600">
                {service.priceFrom}
              </p>

              <div className="mt-8">
                <ConversionActions size="large" />
              </div>

              <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  Гарантия 12 мес.
                </span>
                <span className="flex items-center gap-1.5">
                  <Award className="h-4 w-4 text-brand-500" />
                  Фикс. цена
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  4.9 рейтинг
                </span>
              </div>
            </div>

            <div id="lead-form">
              <LeadForm title="Вызвать мастера" subtitle="Перезвоним за 5 минут" />
              <p className="mt-3 text-center text-sm text-slate-500">
                <a href={`tel:${SITE.phoneRaw}`} className="font-semibold text-brand-600 hover:underline">
                  {SITE.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Section>
        <SectionHeader badge="Преимущества" title="Почему выбирают нас" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <DynamicIcon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Prices */}
      <Section id="pricing" className="bg-slate-50/80">
        <SectionHeader badge="Стоимость" title="Прозрачные цены" subtitle="Точную смету назовём до начала работ" />
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
          <table className="w-full">
            <tbody>
              {service.prices.map((item, i) => (
                <tr key={item.name} className={i > 0 ? "border-t border-slate-100" : ""}>
                  <td className="px-6 py-4 text-sm text-slate-700">{item.name}</td>
                  <td className="px-6 py-4 text-right text-sm font-semibold text-brand-700">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-center">
          <ConversionActions />
        </div>
      </Section>

      {/* Steps */}
      <Section>
        <SectionHeader badge="Этапы" title="Как мы работаем" subtitle="4 простых шага" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <WorkGallery label={service.galleryLabel} />

      {/* Reviews */}
      <Section id="reviews">
        <SectionHeader badge="Отзывы" title="Что говорят клиенты" />
        <div className="grid gap-5 md:grid-cols-3">
          {service.reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-2xl border border-slate-200/80 bg-white p-6"
            >
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{review.name}</p>
              <p className="text-xs text-slate-500">{review.date}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* SEO text */}
      <Section className="bg-slate-50/80">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">
            {service.categoryLabel} в Екатеринбурге — подробнее
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
            {service.seoText.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <ul className="mt-6 space-y-2">
            {["Срочный выезд 30–60 мин", "Гарантия до 12 месяцев", "Работаем без выходных"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </Section>

      <ServiceFAQSection faq={service.faq} />

      {/* Final CTA */}
      <Section className="relative overflow-hidden">
        <div className="gradient-mesh absolute inset-0" />
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Вызовите мастера сейчас
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {service.heroSubtitle} Перезвоним за 5 минут.
            </p>
            <div className="mt-8">
              <ConversionActions size="large" formAnchor="#lead-form" />
            </div>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-6 inline-flex items-center gap-2 text-lg font-semibold text-brand-600 hover:underline"
            >
              <Phone className="h-5 w-5" />
              {SITE.phone}
            </a>
          </div>
          <LeadForm variant="compact" title="Бесплатная консультация" />
        </div>
      </Section>
    </>
  );
}
