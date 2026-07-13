export interface HomeMainService {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: "Zap" | "Droplets" | "Wrench" | "Home";
}

/** Четыре основных направления на главной — блок «Выберите нужную услугу». */
export const HOME_MAIN_SERVICES: HomeMainService[] = [
  {
    slug: "elektrik",
    title: "Электрик",
    description:
      "Устранение неисправностей, замена проводки, розетки, освещение и подключение техники.",
    href: "/elektrik",
    icon: "Zap",
  },
  {
    slug: "santehnik",
    title: "Сантехник",
    description:
      "Устранение протечек, засоров, установка и ремонт сантехнического оборудования.",
    href: "/santehnik",
    icon: "Droplets",
  },
  {
    slug: "master-na-chas",
    title: "Мастер на час",
    description: "Сборка мебели, установка техники, мелкий ремонт и бытовые работы.",
    href: "/master-na-chas",
    icon: "Wrench",
  },
  {
    slug: "remont-kvartir",
    title: "Ремонт квартир",
    description: "Косметический и комплексный ремонт квартир, домов и коммерческих помещений.",
    href: "/remont-kvartir",
    icon: "Home",
  },
];
