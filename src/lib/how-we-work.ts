import type { ServiceStep } from "@/lib/services/types";
import type { LucideIcon } from "lucide-react";
import { Car, ClipboardCheck, Phone, ShieldCheck } from "lucide-react";

export const HOW_WE_WORK_TITLE = "Как мы работаем";
export const HOW_WE_WORK_SUBTITLE =
  "От оформления заявки до выполнения работ и предоставления гарантии.";
export const HOW_WE_WORK_BADGE = "Этапы";

export interface HowWeWorkStep {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const HOW_WE_WORK_STEPS: HowWeWorkStep[] = [
  {
    step: "01",
    title: "Заявка",
    description: "Перезвоним в течение 5 минут.",
    icon: Phone,
  },
  {
    step: "02",
    title: "Выезд",
    description: "Приедем в согласованное время.",
    icon: Car,
  },
  {
    step: "03",
    title: "Осмотр",
    description: "Мастер оценит объём работ и согласует стоимость после осмотра.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Гарантия",
    description: "Работа выполнена, убрано за собой. Гарантия оформлена.",
    icon: ShieldCheck,
  },
];

export const DEFAULT_SERVICE_STEPS: ServiceStep[] = HOW_WE_WORK_STEPS.map(
  ({ title, description }) => ({ title, description })
);
