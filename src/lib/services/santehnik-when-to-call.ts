import type { ServiceWhenToCallConfig } from "@/lib/service-when-to-call";
import {
  Bath,
  Building2,
  Droplets,
  Flame,
  Gauge,
  Package,
  Paintbrush,
  Search,
  TrendingUp,
  Truck,
  Wrench,
} from "lucide-react";

export const SANTEHNIK_WHEN_TO_CALL: ServiceWhenToCallConfig = {
  badge: "Ситуации",
  title: "Когда стоит вызвать сантехника",
  subtitle:
    "Не откладывайте решение проблемы — даже небольшая неисправность может привести к дорогостоящему ремонту.",
  items: [
    {
      title: "При протечке воды",
      description:
        "Даже небольшая течь может привести к затоплению и повреждению ремонта.",
      icon: Droplets,
      iconStyle: "bg-sky-100 text-sky-600",
    },
    {
      title: "При засоре канализации",
      description: "Если вода плохо уходит или появился неприятный запах.",
      icon: Wrench,
      iconStyle: "bg-amber-100 text-amber-600",
    },
    {
      title: "При неисправности отопления",
      description: "Холодные батареи или протечки требуют быстрого вмешательства.",
      icon: Flame,
      iconStyle: "bg-orange-100 text-orange-600",
    },
    {
      title: "После покупки новой сантехники",
      description: "Поможем установить и подключить оборудование правильно.",
      icon: Package,
      iconStyle: "bg-violet-100 text-violet-600",
    },
    {
      title: "Перед ремонтом квартиры",
      description: "Подготовим коммуникации и выполним разводку труб.",
      icon: Paintbrush,
      iconStyle: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Если сантехника давно не обслуживалась",
      description: "Своевременная замена деталей помогает избежать аварий.",
      icon: Wrench,
      iconStyle: "bg-slate-100 text-slate-600",
    },
    {
      title: "При низком напоре воды",
      description: "Найдем причину и восстановим нормальную работу системы.",
      icon: Gauge,
      iconStyle: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "После переезда",
      description: "Подключим технику и приведем сантехнику в порядок.",
      icon: Truck,
      iconStyle: "bg-brand-100 text-brand-600",
    },
    {
      title: "При появлении влаги или плесени",
      description: "Часто причина скрывается в незаметной протечке.",
      icon: Bath,
      iconStyle: "bg-teal-100 text-teal-600",
    },
    {
      title: "Если проблема становится хуже с каждым днем",
      description:
        "Многие неисправности дешевле устранить сразу, чем устранять последствия аварии.",
      icon: TrendingUp,
      iconStyle: "bg-red-100 text-red-600",
    },
    {
      title: "Для квартир, домов и коммерческих помещений",
      description: "Работаем с объектами любой сложности.",
      icon: Building2,
      iconStyle: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Когда нужен профессиональный осмотр",
      description: "Проведем диагностику и предложим оптимальное решение.",
      icon: Search,
      iconStyle: "bg-brand-100 text-brand-600",
    },
  ],
  bottomCta: {
    title: "Не нашли свою ситуацию?",
    subtitle:
      "Даже если вашей проблемы нет в списке, скорее всего мы сможем помочь. Опишите задачу, и мы подберем подходящее решение.",
    primaryLabel: "Вызвать сантехника",
    secondaryLabel: "Получить консультацию",
  },
};
