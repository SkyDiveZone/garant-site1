export interface HomeMainService {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: "Zap" | "Droplets" | "Wrench" | "Home";
  image: string;
  imageAlt: string;
  orderLabel: string;
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
    image: "/works/elektrik/groups/osveshchenie.webp",
    imageAlt: "Установка люстры в Екатеринбурге",
    orderLabel: "Заказать электрика",
  },
  {
    slug: "santehnik",
    title: "Сантехник",
    description:
      "Устранение протечек, засоров, установка и ремонт сантехнического оборудования.",
    href: "/santehnik",
    icon: "Droplets",
    image: "/works/santehnik/groups/smesiteli.webp",
    imageAlt: "Сантехнические работы в Екатеринбурге",
    orderLabel: "Заказать сантехника",
  },
  {
    slug: "master-na-chas",
    title: "Мастер на час",
    description: "Сборка мебели, установка техники, мелкий ремонт и бытовые работы.",
    href: "/master-na-chas",
    icon: "Wrench",
    image: "/works/master-na-chas/groups/kuhnya.webp",
    imageAlt: "Установка вытяжки в Екатеринбурге",
    orderLabel: "Заказать мастера",
  },
  {
    slug: "remont-kvartir",
    title: "Ремонт квартир",
    description: "Косметический и комплексный ремонт квартир, домов и коммерческих помещений.",
    href: "/remont-kvartir",
    icon: "Home",
    image: "/works/remont-kvartir/03-living-room.png",
    imageAlt: "Ремонт квартиры в Екатеринбурге",
    orderLabel: "Заказать ремонт",
  },
];
