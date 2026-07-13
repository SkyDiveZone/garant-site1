import type { ServicePopularProblemsConfig } from "@/lib/service-popular-problems";
import {
  Bath,
  Droplets,
  Flame,
  Gauge,
  ShowerHead,
  Toilet,
  Wrench,
  Waves,
} from "lucide-react";

export const SANTEHNIK_POPULAR_PROBLEMS: ServicePopularProblemsConfig = {
  badge: "Проблемы",
  title: "Популярные проблемы, которые решает сантехник",
  subtitle:
    "От небольших неисправностей до аварийных ситуаций — поможем быстро найти причину проблемы и предложим оптимальное решение.",
  iconClass: "bg-cyan-100 text-cyan-600",
  badgeClass: "bg-cyan-50 text-cyan-700 ring-cyan-200/80",
  badgeLabel: "Сантехник",
  situationCta: {
    title: "Узнали свою ситуацию?",
    subtitle: "Оставьте заявку — перезвоним в течение 5 минут и подскажем решение.",
    primaryLabel: "Вызвать сантехника",
    secondaryLabel: "Позвонить",
  },
  bottomCta: {
    title: "Не нашли свою проблему?",
    subtitle:
      "Даже если вашей ситуации нет в списке, скорее всего мы сможем помочь. Опишите задачу, и мы подберём подходящее решение.",
    primaryLabel: "Вызвать сантехника",
    secondaryLabel: "Получить консультацию",
  },
  problems: [
    {
      title: "Течет кран или смеситель",
      description: "Постоянная протечка приводит к перерасходу воды и повреждению мебели.",
      icon: Droplets,
    },
    {
      title: "Прорвало трубу",
      description: "Аварийная ситуация, которая может привести к затоплению квартиры и соседей.",
      icon: Droplets,
    },
    {
      title: "Засорился унитаз",
      description: "Вода плохо уходит или поднимается обратно.",
      icon: Toilet,
    },
    {
      title: "Не уходит вода в ванной или раковине",
      description: "Засор со временем становится только серьёзнее.",
      icon: Bath,
    },
    {
      title: "Течет труба или соединение",
      description: "Даже небольшая течь может привести к сырости и плесени.",
      icon: Wrench,
    },
    {
      title: "Протекает батарея отопления",
      description: "Проблема требует быстрого устранения.",
      icon: Flame,
    },
    {
      title: "Слабый напор воды",
      description: "Может говорить о скрытых неисправностях системы.",
      icon: Gauge,
    },
    {
      title: "Нужно заменить смеситель",
      description: "Установим и проверим работу всех соединений.",
      icon: Wrench,
    },
    {
      title: "Неприятный запах из канализации",
      description: "Найдём причину и устраним проблему.",
      icon: Waves,
    },
    {
      title: "Нужно установить новую сантехнику",
      description: "Подключим раковину, ванну, душевую кабину или унитаз.",
      icon: Bath,
    },
    {
      title: "Засорилась канализация",
      description: "Устраним засор и восстановим нормальный слив.",
      icon: ShowerHead,
    },
    {
      title: "Требуется замена труб",
      description: "Поможем заменить старые коммуникации и избежать аварий.",
      icon: Wrench,
    },
  ],
};
