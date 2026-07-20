import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/data";
import { HelpCircle, Phone } from "lucide-react";

interface WorkTypesConsultationCTAProps {
  formAnchor?: string;
}

export function WorkTypesConsultationCTA({
  formAnchor = "#lead-form",
}: WorkTypesConsultationCTAProps) {
  return (
    <div className="section-cta-panel relative">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-200/30 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-sky-200/40 blur-2xl" aria-hidden="true" />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4 sm:max-w-xl">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
            <HelpCircle className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
              Не нашли нужную услугу?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Скорее всего, мы всё равно сможем помочь. Расскажите, какая у вас задача, и мы
              подберём подходящего специалиста или предложим решение.
            </p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:items-stretch sm:self-center">
          <Button size="lg" href={formAnchor} className="w-full sm:min-w-[220px]">
            Получить консультацию
          </Button>
          <Button
            size="lg"
            variant="outline"
            href={`tel:${SITE.phoneRaw}`}
            className="w-full sm:min-w-[220px]"
          >
            <Phone className="h-4 w-4" />
            Позвонить сейчас
          </Button>
        </div>
      </div>
    </div>
  );
}
