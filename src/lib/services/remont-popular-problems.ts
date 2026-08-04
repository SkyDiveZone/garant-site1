import type { ServicePopularProblemsConfig } from "@/lib/service-popular-problems";
import {
  Bath,
  BrickWall,
  Home,
  KeyRound,
  Layers,
  Paintbrush,
  PanelTop,
  Sofa,
  SquareStack,
  Wallpaper,
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
      title: "Нужен косметический ремонт",
      description: "Обновим стены, потолки и полы без перепланировки — быстро и аккуратно.",
      icon: Paintbrush,
    },
    {
      title: "Требуется капитальный ремонт",
      description: "Черновые и чистовые работы, подготовка поверхностей, отделка под ключ.",
      icon: BrickWall,
    },
    {
      title: "Ремонт ванной комнаты",
      description: "Плитка, гидроизоляция, подготовка под сантехнику и чистовая отделка.",
      icon: Bath,
    },
    {
      title: "Ремонт кухни",
      description: "Стены, пол, потолок и зоны под технику — подготовка к установке кухни.",
      icon: Home,
    },
    {
      title: "Поклейка обоев",
      description: "Подготовка стен и аккуратная поклейка без пузырей и перекосов.",
      icon: Wallpaper,
    },
    {
      title: "Укладка плитки",
      description: "Ровная укладка на пол и стены с соблюдением швов и углов.",
      icon: SquareStack,
    },
    {
      title: "Натяжной потолок",
      description: "Монтаж полотна, обход труб и закладные под освещение.",
      icon: PanelTop,
    },
    {
      title: "Выравнивание стен и потолков",
      description: "Штукатурка, шпаклёвка и подготовка под покраску или обои.",
      icon: Layers,
    },
    {
      title: "Ремонт перед заселением",
      description: "Приведём квартиру в порядок к переезду: отделка, мелкий ремонт, уборка зоны работ.",
      icon: KeyRound,
    },
    {
      title: "Обновление интерьера",
      description: "Точечный ремонт комнат: акцентные стены, замена покрытий, освещение.",
      icon: Sofa,
    },
  ],
};
