import type { ServicePopularProblemsConfig } from "@/lib/service-popular-problems";
import {
  Bath,
  BedDouble,
  BrickWall,
  Building2,
  DoorOpen,
  Home,
  KeyRound,
  Paintbrush,
  Sofa,
  SunMedium,
  UtensilsCrossed,
} from "lucide-react";

export const REMONT_POPULAR_PROBLEMS: ServicePopularProblemsConfig = {
  badge: "Задачи",
  title: "Популярные задачи по ремонту квартир",
  subtitle:
    "От косметического обновления до ремонта под ключ — подберём объём работ под ваш бюджет и сроки.",
  iconClass: "bg-orange-100 text-orange-600",
  badgeClass: "bg-orange-50 text-orange-700 ring-orange-200/80",
  badgeLabel: "Ремонт",
  situationCta: {
    title: "Узнали свою задачу?",
    subtitle: "Оставьте заявку — перезвоним за 5 минут и согласуем выезд на замер.",
    primaryLabel: "Оставить заявку",
    secondaryLabel: "Позвонить",
  },
  bottomCta: {
    title: "Не нашли свою задачу?",
    subtitle:
      "Опишите объект и пожелания — мастер подскажет, с чего начать и какой объём работ нужен.",
    primaryLabel: "Оставить заявку",
    secondaryLabel: "Получить консультацию",
  },
  problems: [
    {
      title: "Косметический ремонт",
      description: "Обновим стены, потолки и полы без перепланировки — быстро и аккуратно.",
      icon: Paintbrush,
    },
    {
      title: "Капитальный ремонт",
      description: "Черновые и чистовые работы, подготовка поверхностей, отделка под ключ.",
      icon: BrickWall,
    },
    {
      title: "Ремонт под ключ",
      description: "Один подрядчик: от демонтажа до сдачи готовой квартиры.",
      icon: KeyRound,
    },
    {
      title: "Ремонт ванной комнаты",
      description: "Плитка, гидроизоляция, подготовка под сантехнику и чистовая отделка.",
      icon: Bath,
    },
    {
      title: "Ремонт кухни",
      description: "Стены, пол, потолок и зоны под технику — подготовка к установке кухни.",
      icon: UtensilsCrossed,
    },
    {
      title: "Ремонт комнаты",
      description: "Комплексный ремонт одной комнаты: стены, полы, потолки.",
      icon: Home,
    },
    {
      title: "Ремонт гостиной",
      description: "Отделка гостиной: стены, пол, потолок, зоны под ТВ и освещение.",
      icon: Sofa,
    },
    {
      title: "Ремонт спальни",
      description: "Спокойная отделка спальни: подготовка стен, полы и потолки.",
      icon: BedDouble,
    },
    {
      title: "Ремонт прихожей",
      description: "Износостойкая отделка коридора и прихожей с аккуратным освещением.",
      icon: DoorOpen,
    },
    {
      title: "Ремонт балкона",
      description: "Утепление и отделка балкона под хранение или зону отдыха.",
      icon: SunMedium,
    },
    {
      title: "Ремонт новостройки",
      description: "Отделка с нуля в новой квартире: черновые работы и чистовая отделка.",
      icon: Building2,
    },
    {
      title: "Ремонт однокомнатной квартиры",
      description: "Комплексный ремонт однушки: комнаты, кухня, санузел и прихожая.",
      icon: Home,
    },
  ],
};
