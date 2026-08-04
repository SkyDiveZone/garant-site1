import type { ServiceWhenToCallConfig } from "@/lib/service-when-to-call";
import {
  Building2,
  CalendarClock,
  ClipboardList,
  Home,
  KeyRound,
  Paintbrush,
  Ruler,
  Search,
  TrendingUp,
  Truck,
} from "lucide-react";

export const REMONT_WHEN_TO_CALL: ServiceWhenToCallConfig = {
  badge: "Ситуации",
  title: "Когда стоит вызвать мастера по ремонту",
  subtitle:
    "Чем раньше согласуем объём и смету, тем проще уложиться в сроки и бюджет без переделок.",
  items: [
    {
      title: "Купили квартиру и хотите обновить отделку",
      description: "Сделаем замер, предложим варианты косметики или капремонта под ваш бюджет.",
      icon: KeyRound,
      iconStyle: "bg-amber-100 text-amber-600",
    },
    {
      title: "Готовите квартиру к продаже или аренде",
      description: "Обновим стены, полы и санузел — жильё выглядит аккуратнее и дороже.",
      icon: Building2,
      iconStyle: "bg-sky-100 text-sky-600",
    },
    {
      title: "Нужен ремонт одной комнаты",
      description: "Работаем точечно: спальня, кухня, ванная или коридор — без «разгрома» всей квартиры.",
      icon: Home,
      iconStyle: "bg-brand-100 text-brand-600",
    },
    {
      title: "Планируете ремонт под ключ",
      description: "Один подрядчик: демонтаж, черновые работы, чистовая отделка и сдача объекта.",
      icon: ClipboardList,
      iconStyle: "bg-violet-100 text-violet-600",
    },
    {
      title: "Важно уложиться в срок",
      description: "Согласуем график работ заранее и держим этапы под контролем.",
      icon: CalendarClock,
      iconStyle: "bg-orange-100 text-orange-600",
    },
    {
      title: "Нужна смета без сюрпризов",
      description: "После осмотра назовём ориентир по объёму и согласуем условия до старта.",
      icon: Ruler,
      iconStyle: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Старая отделка уже «не держится»",
      description: "Обои отходят, плитка трещит, потолок «поплыл» — подготовим основание и обновим.",
      icon: Paintbrush,
      iconStyle: "bg-rose-100 text-rose-600",
    },
    {
      title: "После переезда накопились задачи",
      description: "Закроем список отделочных работ за понятный этап — без поиска разных бригад.",
      icon: Truck,
      iconStyle: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Не уверены, с чего начать",
      description: "Мастер осмотрит объект и подскажет порядок работ: что делать сначала.",
      icon: Search,
      iconStyle: "bg-slate-100 text-slate-600",
    },
    {
      title: "Хотите избежать переделок",
      description: "Правильная подготовка стен и полов экономит деньги на финишной отделке.",
      icon: TrendingUp,
      iconStyle: "bg-teal-100 text-teal-600",
    },
  ],
  bottomCta: {
    title: "Не нашли свою ситуацию?",
    subtitle:
      "Опишите объект и задачу — подскажем объём работ, ориентир по срокам и согласуем выезд на замер.",
    primaryLabel: "Оставить заявку",
    secondaryLabel: "Получить консультацию",
  },
};
