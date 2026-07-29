export interface PopularSubService {
  slug: string;
  href?: string;
  title: string;
  description: string;
  icon: "Droplets" | "Zap" | "Wrench";
}

/** Популярные узкие услуги — отдельные посадочные для быстрого заказа. */
export const POPULAR_SUB_SERVICES: PopularSubService[] = [
  {
    slug: "ustranenie-zasora",
    href: "/santehnik/ustranenie-zasora",
    title: "Устранение засора",
    description: "Прочистка раковины, ванны или унитаза — выезд в день обращения.",
    icon: "Droplets",
  },
  {
    slug: "zamena-smesitelya",
    href: "/santehnik/ustanovka-smesitelya-otechestvennyy",
    title: "Замена смесителя",
    description: "Установка на кухне или в ванной, проверка герметичности.",
    icon: "Droplets",
  },
  {
    slug: "ustanovka-unitaza",
    href: "/santehnik/ustanovka-unitaza",
    title: "Установка унитаза",
    description: "Монтаж напольного унитаза или инсталляции под ключ.",
    icon: "Droplets",
  },
  {
    slug: "ustanovka-rakoviny",
    href: "/santehnik/ustanovka-rakoviny",
    title: "Установка раковины",
    description: "Монтаж раковины, сифона и подключение к водопроводу.",
    icon: "Droplets",
  },
  {
    slug: "ustanovka-rozetki-skrytaya-provodka",
    href: "/elektrik/ustanovka-rozetki-skrytaya-provodka",
    title: "Установка розеток",
    description: "Замена или монтаж розеток с проверкой заземления.",
    icon: "Zap",
  },
  {
    slug: "ustanovka-lyustry",
    href: "/elektrik/ustanovka-lyustry",
    title: "Установка люстры",
    description: "Крепление и подключение люстры или светильника.",
    icon: "Zap",
  },
];
