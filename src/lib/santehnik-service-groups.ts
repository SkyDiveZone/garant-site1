import type { ServiceGroup } from "@/lib/service-group-types";

export type { ServiceGroupItem, ServiceGroup } from "@/lib/service-group-types";

/** Группы услуг сантехника — совпадают с разделами прайса. */
export const SANTEHNIK_SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Смесители",
    items: [
      {
        title: "Замена смесителя",
        description: "Установка на кухне или в ванной, проверка герметичности.",
        href: "/zamena-smesitelya",
      },
      {
        title: "Ремонт смесителя",
        description: "Замена картриджа, прокладки, эксцентриков.",
      },
    ],
  },
  {
    title: "Унитазы и биде",
    items: [
      {
        title: "Установка унитаза",
        description: "Напольный унитаз или инсталляция под ключ.",
        href: "/ustanovka-unitaza",
      },
      {
        title: "Ремонт арматуры бачка",
        description: "Устранение протечек и неисправностей слива.",
      },
    ],
  },
  {
    title: "Ванны и душевые",
    items: [
      {
        title: "Установка ванны",
        description: "Акриловая или чугунная ванна, подключение слива.",
        href: "/ustanovka-vanny",
      },
      {
        title: "Установка душевой кабины",
        description: "Сборка, подключение воды и канализации.",
        href: "/ustanovka-dushevoy-kabiny",
      },
      {
        title: "Герметизация ванны или душевой",
        description: "Герметизация по периметру, без протечек.",
      },
    ],
  },
  {
    title: "Раковины и сифоны",
    items: [
      {
        title: "Установка раковины",
        description: "Монтаж раковины, сифона и подключение.",
        href: "/ustanovka-rakoviny",
      },
      {
        title: "Установка сифона",
        description: "Замена или монтаж сифона под раковину.",
      },
    ],
  },
  {
    title: "Засоры и аварии",
    items: [
      {
        title: "Устранение засора",
        description: "Прочистка раковины, ванны или унитаза.",
        href: "/ustranenie-zasora",
      },
      {
        title: "Устранение протечки",
        description: "Срочный выезд при протечках и авариях.",
      },
      {
        title: "Ремонт труб и стояков",
        description: "Локальный ремонт или замена участка.",
      },
    ],
  },
  {
    title: "Отопление и инженерия",
    items: [
      {
        title: "Замена труб",
        description: "Замена водопровода и канализации.",
        href: "/zamena-trub",
      },
      {
        title: "Установка радиатора отопления",
        description: "Монтаж и подключение к системе отопления.",
      },
      {
        title: "Установка полотенцесушителя",
        description: "Монтаж и подключение к стояку.",
      },
    ],
  },
  {
    title: "Водонагреватели и техника",
    items: [
      {
        title: "Установка водонагревателя",
        description: "Монтаж и подключение бойлера.",
        href: "/ustanovka-bojlera",
      },
      {
        title: "Подключение стиральной машины",
        description: "Подключение к воде и канализации.",
      },
      {
        title: "Установка фильтра для воды",
        description: "Монтаж фильтра и замена картриджей.",
      },
    ],
  },
];
