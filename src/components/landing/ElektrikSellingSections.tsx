import { ConversionActions } from "@/components/landing/ConversionActions";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Section, SectionHeader } from "@/components/ui/Section";
import {
  ELEKTRIK_ABOUT,
  ELEKTRIK_PROBLEMS,
  ELEKTRIK_WHEN_TO_CALL,
  ELEKTRIK_WORK_TYPES,
} from "@/lib/services/elektrik-content";
import {
  AlertCircle,
  Cable,
  CheckCircle2,
  Home,
  Lightbulb,
  Plug,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const WORK_ICONS: LucideIcon[] = [Zap, Cable, Plug, Lightbulb, Wrench, Home];

const WHEN_ICONS: Record<string, LucideIcon> = {
  AlertTriangle: AlertCircle,
  Paintbrush: Wrench,
  Plug,
  Home,
  Zap,
  Cable,
};

export function ElektrikSellingSections() {
  return (
    <>
      <Section className="bg-slate-50/80">
        <SectionHeader
          badge="Электрик"
          title={ELEKTRIK_ABOUT.title}
          subtitle={ELEKTRIK_ABOUT.subtitle}
        />
        <p className="mx-auto max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg">
          {ELEKTRIK_ABOUT.intro}
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ELEKTRIK_ABOUT.highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <DynamicIcon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          badge="Услуги"
          title="Виды электромонтажных работ"
          subtitle="Выполняем работы любой сложности — от замены розетки до полной замены проводки"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ELEKTRIK_WORK_TYPES.map((name, index) => {
            const Icon = WORK_ICONS[index % WORK_ICONS.length];
            return (
              <article
                key={name}
                className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/30"
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="text-sm font-semibold leading-snug text-slate-800">{name}</h3>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <ConversionActions formAnchor="#lead-form" />
        </div>
      </Section>

      <Section className="bg-slate-50/80">
        <SectionHeader
          badge="Проблемы"
          title="Популярные проблемы, которые решает электрик"
          subtitle="Узнали свою ситуацию? Оставьте заявку — перезвоним и согласуем выезд"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ELEKTRIK_PROBLEMS.map((problem) => (
            <article
              key={problem}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3.5 shadow-sm"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-500" aria-hidden="true" />
              <p className="text-sm font-medium text-slate-800">{problem}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          badge="Ситуации"
          title="Когда стоит вызвать электрика"
          subtitle="Не откладывайте — многие неисправности опасны для жизни и имущества"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ELEKTRIK_WHEN_TO_CALL.map((item) => {
            const Icon = WHEN_ICONS[item.icon] ?? Zap;
            return (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <ConversionActions size="large" formAnchor="#lead-form" />
        </div>
      </Section>
    </>
  );
}
