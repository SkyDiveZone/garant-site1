import type { ServiceCategory } from "@/lib/services/types";

export interface PriceListItem {
  name: string;
  priceFrom: number;
  unit?: string;
}

export interface PriceListGroup {
  title: string;
  items: readonly PriceListItem[];
}

export type PriceListSlug =
  | "santehnik"
  | "elektrik"
  | "master-na-chas"
  | "remont-kvartir"
  | "home";

/** Ориентировочные цены «от» — прайс по уфимскому каталогу для garant-master-ekb.ru. */
const SANTEHNIK_PRICES: readonly PriceListGroup[] = [
  {
    title: "Смесители",
    items: [
      { name: "Установка смесителя (отечественный)", priceFrom: 390 },
      { name: "Установка смесителя (импортный)", priceFrom: 590 },
      { name: "Установка смесителя с терморегулятором", priceFrom: 990 },
      { name: "Установка гигиенического душа", priceFrom: 590 },
      { name: "Замена картриджа или прокладки", priceFrom: 390 },
      { name: "Установка эксцентриков", priceFrom: 290 },
      { name: "Демонтаж смесителя", priceFrom: 390 },
    ],
  },
  {
    title: "Унитазы и биде",
    items: [
      { name: "Установка унитаза", priceFrom: 990 },
      { name: "Установка подвесного унитаза", priceFrom: 1190 },
      { name: "Установка биде или писсуара", priceFrom: 990 },
      { name: "Установка инсталляции", priceFrom: 1190 },
      { name: "Установка гофры на унитаз", priceFrom: 490 },
      { name: "Установка сололифта", priceFrom: 1490 },
      { name: "Ремонт арматуры бачка", priceFrom: 390 },
      { name: "Установка гибкой подводки", priceFrom: 290 },
      { name: "Демонтаж унитаза", priceFrom: 590 },
    ],
  },
  {
    title: "Ванны и душевые",
    items: [
      { name: "Установка акриловой ванны", priceFrom: 990 },
      { name: "Установка ванны с гидромассажем", priceFrom: 1490 },
      { name: "Установка душевой кабины", priceFrom: 890 },
      { name: "Установка душевого поддона", priceFrom: 690 },
      { name: "Установка обвязки для ванны", priceFrom: 590 },
      { name: "Установка донного клапана", priceFrom: 390 },
      { name: "Установка экрана под ванну", priceFrom: 390 },
      { name: "Герметизация ванны или душевой", priceFrom: 390, unit: "за п.м." },
      { name: "Демонтаж ванны", priceFrom: 690 },
    ],
  },
  {
    title: "Раковины и сифоны",
    items: [
      { name: "Установка раковины", priceFrom: 690 },
      { name: "Установка раковины «Тюльпан»", priceFrom: 890 },
      { name: "Установка раковины «Мойдодыр»", priceFrom: 990 },
      { name: "Установка сифона", priceFrom: 390 },
      { name: "Установка металлического сифона", priceFrom: 690 },
      { name: "Демонтаж раковины", priceFrom: 490 },
    ],
  },
  {
    title: "Засоры и аварии",
    items: [
      { name: "Устранение засора", priceFrom: 890 },
      { name: "Устранение засора (химический способ)", priceFrom: 790 },
      { name: "Устранение засора с разбором труб", priceFrom: 2490 },
      { name: "Устранение засора электромеханическим способом", priceFrom: 4990 },
      { name: "Устранение засора гидродинамическим способом", priceFrom: 2990 },
      { name: "Прочистка канализации", priceFrom: 990 },
      { name: "Устранение протечки", priceFrom: 990 },
      { name: "Ремонт труб и стояков", priceFrom: 890 },
    ],
  },
  {
    title: "Трубы и инженерия",
    items: [
      { name: "Разводка труб", priceFrom: 290, unit: "за п.м." },
      { name: "Монтаж водорозетки", priceFrom: 390 },
      { name: "Монтаж байпаса", priceFrom: 1190 },
      { name: "Установка шарового крана", priceFrom: 390 },
      { name: "Установка обратного клапана", priceFrom: 390 },
      { name: "Установка редуктора давления", priceFrom: 490 },
      { name: "Установка коллектора", priceFrom: 590 },
      { name: "Установка счётчика воды", priceFrom: 590 },
      { name: "Опрессовка системы отопления", priceFrom: 4990 },
    ],
  },
  {
    title: "Водонагреватели и фильтры",
    items: [
      { name: "Установка водонагревателя до 50 л", priceFrom: 990 },
      { name: "Установка водонагревателя свыше 50 л", priceFrom: 1490 },
      { name: "Подключение проточного водонагревателя", priceFrom: 690 },
      { name: "Установка фильтра для воды", priceFrom: 890 },
    ],
  },
];

const ELEKTRIK_PRICES: readonly PriceListGroup[] = [
  {
    title: "Розетки и выключатели",
    items: [
      { name: "Установка розетки (открытая проводка)", priceFrom: 110 },
      { name: "Установка розетки (скрытая проводка)", priceFrom: 150 },
      { name: "Установка выключателя", priceFrom: 110 },
      { name: "Установка проходного выключателя", priceFrom: 290 },
      { name: "Блок розеток в ванной или на кухне", priceFrom: 390 },
      { name: "Установка розетки для электроплиты 220В", priceFrom: 390 },
      { name: "Установка розетки для электроплиты 380В", priceFrom: 490 },
      { name: "Установка подрозетника в готовое отверстие", priceFrom: 90 },
      { name: "Коммутация соединительной коробки", priceFrom: 290 },
      { name: "Установка дверного звонка", priceFrom: 390 },
      { name: "Установка терморегулятора тёплого пола", priceFrom: 390 },
    ],
  },
  {
    title: "Освещение",
    items: [
      { name: "Сборка люстры", priceFrom: 390 },
      { name: "Установка люстры (1–3 рожка)", priceFrom: 390 },
      { name: "Установка люстры (4 и более рожков)", priceFrom: 590 },
      { name: "Установка нестандартной люстры", priceFrom: 1490 },
      { name: "Установка бра или светильника", priceFrom: 290 },
      { name: "Установка точечного светильника", priceFrom: 190 },
      { name: "Установка светильника Армстронг", priceFrom: 290 },
      { name: "Монтаж LED-ленты", priceFrom: 90, unit: "за п.м." },
      { name: "Монтаж профиля для LED-ленты", priceFrom: 140, unit: "за п.м." },
      { name: "Монтаж шинопровода или трековой системы", priceFrom: 390, unit: "за п.м." },
    ],
  },
  {
    title: "Щит и автоматы",
    items: [
      { name: "Установка автомата (1 полюс)", priceFrom: 290 },
      { name: "Установка автомата (2 полюса) или УЗО", priceFrom: 390 },
      { name: "Установка автомата (3 полюса)", priceFrom: 590 },
      { name: "Монтаж электрощита до 12 модулей", priceFrom: 1490 },
      { name: "Монтаж электрощита 13–18 модулей", priceFrom: 1990 },
      { name: "Монтаж электрощита до 24 модулей", priceFrom: 2790 },
      { name: "Монтаж электрощита 25–36 модулей", priceFrom: 3990 },
      { name: "Устройство ниши под электрощит", priceFrom: 490 },
      { name: "Установка электросчётчика", priceFrom: 390 },
      { name: "Демонтаж электросчётчика", priceFrom: 590 },
    ],
  },
  {
    title: "Проводка и кабель",
    items: [
      { name: "Прокладка кабеля", priceFrom: 90, unit: "за п.м." },
      { name: "Прокладка кабеля в гофре", priceFrom: 90, unit: "за п.м." },
      { name: "Монтаж кабель-канала", priceFrom: 90, unit: "за п.м." },
      { name: "Штробление кирпичной стены", priceFrom: 590, unit: "за м²" },
      { name: "Штробление бетонной стены", priceFrom: 790, unit: "за м²" },
      { name: "Сверление отверстия под подрозетник", priceFrom: 290 },
    ],
  },
  {
    title: "Диагностика и монтаж",
    items: [
      { name: "Диагностика электросети", priceFrom: 990 },
      { name: "Поиск неисправности проводки", priceFrom: 990, unit: "за час" },
      { name: "Установка тёплого пола", priceFrom: 450, unit: "за м²" },
      { name: "Монтаж видеонаблюдения", priceFrom: 1490, unit: "за камеру" },
    ],
  },
  {
    title: "Демонтаж",
    items: [
      { name: "Демонтаж розетки или выключателя", priceFrom: 190 },
      { name: "Демонтаж люстры или светильника", priceFrom: 290 },
      { name: "Демонтаж автомата в щите", priceFrom: 290 },
      { name: "Демонтаж электрощита", priceFrom: 990 },
    ],
  },
];

const MASTER_PRICES: readonly PriceListGroup[] = [
  {
    title: "Мебель и интерьер",
    items: [
      { name: "Сборка мебели", priceFrom: 390 },
      { name: "Сборка кухонного гарнитура", priceFrom: 690 },
      { name: "Сборка шкафа-купе", priceFrom: 690 },
      { name: "Сборка тумбы под раковину", priceFrom: 990 },
      { name: "Установка карниза или гардин", priceFrom: 390 },
      { name: "Установка полок и зеркал", priceFrom: 290 },
      { name: "Крепление предметов интерьера", priceFrom: 290 },
    ],
  },
  {
    title: "Двери и фурнитура",
    items: [
      { name: "Установка замка", priceFrom: 390 },
      { name: "Замена дверной ручки", priceFrom: 290 },
      { name: "Регулировка двери", priceFrom: 390 },
      { name: "Установка доводчика", priceFrom: 490 },
    ],
  },
  {
    title: "Кухонная техника",
    items: [
      { name: "Подключение варочной панели", priceFrom: 690 },
      { name: "Установка варочной поверхности", priceFrom: 490 },
      { name: "Подключение духового шкафа", priceFrom: 690 },
      { name: "Установка духового шкафа", priceFrom: 490 },
      { name: "Подключение посудомоечной машины", priceFrom: 690 },
      { name: "Установка вытяжки", priceFrom: 690 },
      { name: "Установка воздухоотвода (гофра)", priceFrom: 190, unit: "за п.м." },
      { name: "Установка воздухоотвода (короб)", priceFrom: 290, unit: "за п.м." },
      { name: "Установка встроенного холодильника", priceFrom: 890 },
      { name: "Установка канального вентилятора", priceFrom: 390 },
      { name: "Демонтаж посудомоечной машины", priceFrom: 390 },
      { name: "Демонтаж вытяжки", priceFrom: 390 },
    ],
  },
  {
    title: "Бытовая техника",
    items: [
      { name: "Крепление телевизора на стену", priceFrom: 990 },
      { name: "Подключение телевизора", priceFrom: 690 },
      { name: "Подключение стиральной машины", priceFrom: 590 },
      { name: "Установка стиральной машины на готовые коммуникации", priceFrom: 690 },
      { name: "Установка водонагревателя", priceFrom: 990 },
      { name: "Демонтаж стиральной машины", priceFrom: 390 },
      { name: "Демонтаж бойлера", priceFrom: 590 },
    ],
  },
  {
    title: "Отопление и полотенцесушитель",
    items: [
      { name: "Установка полотенцесушителя", priceFrom: 890 },
      { name: "Перенос полотенцесушителя", priceFrom: 1490 },
      { name: "Демонтаж полотенцесушителя", priceFrom: 590 },
      { name: "Установка радиатора отопления", priceFrom: 990 },
      { name: "Демонтаж радиатора отопления", priceFrom: 690 },
    ],
  },
  {
    title: "Мелкий ремонт",
    items: [
      { name: "Сверление отверстий", priceFrom: 190 },
      { name: "Герметизация швов", priceFrom: 390, unit: "за п.м." },
      { name: "Замена смесителя", priceFrom: 390 },
      { name: "Замена розетки или выключателя", priceFrom: 110 },
      { name: "Установка люстры или светильника", priceFrom: 390 },
    ],
  },
  {
    title: "Вызов мастера",
    items: [
      { name: "Помощь после переезда", priceFrom: 990 },
      { name: "Почасовая оплата мастера", priceFrom: 500, unit: "за час" },
      { name: "Минимальный вызов мастера", priceFrom: 800 },
    ],
  },
];

const REMONT_PRICES: readonly PriceListGroup[] = [
  {
    title: "Ремонт квартир",
    items: [
      { name: "Косметический ремонт", priceFrom: 990, unit: "за м²" },
      { name: "Капитальный ремонт", priceFrom: 1990, unit: "за м²" },
      { name: "Ремонт под ключ", priceFrom: 2490, unit: "за м²" },
      { name: "Ремонт ванной комнаты", priceFrom: 1490, unit: "за м²" },
      { name: "Ремонт кухни", priceFrom: 1290, unit: "за м²" },
      { name: "Ремонт комнаты", priceFrom: 1190, unit: "за м²" },
      { name: "Ремонт гостиной", priceFrom: 1190, unit: "за м²" },
      { name: "Ремонт спальни", priceFrom: 1190, unit: "за м²" },
      { name: "Ремонт прихожей", priceFrom: 990, unit: "за м²" },
      { name: "Ремонт балкона", priceFrom: 1290, unit: "за м²" },
      { name: "Ремонт новостройки", priceFrom: 1890, unit: "за м²" },
      { name: "Ремонт однокомнатной квартиры", priceFrom: 1490, unit: "за м²" },
    ],
  },
];

const HOME_PRICES: readonly PriceListGroup[] = [
  {
    title: "Популярные услуги",
    items: [
      { name: "Установка смесителя", priceFrom: 390 },
      { name: "Устранение засора", priceFrom: 890 },
      { name: "Установка розетки", priceFrom: 110 },
      { name: "Монтаж люстры", priceFrom: 390 },
      { name: "Сборка мебели", priceFrom: 390 },
      { name: "Крепление телевизора", priceFrom: 990 },
      { name: "Подключение стиральной машины", priceFrom: 590 },
      { name: "Установка унитаза", priceFrom: 990 },
      { name: "Установка раковины", priceFrom: 690 },
      { name: "Установка водонагревателя", priceFrom: 990 },
      { name: "Замена электропроводки", priceFrom: 90, unit: "за п.м." },
      { name: "Косметический ремонт", priceFrom: 990, unit: "за м²" },
    ],
  },
];

export const PRICE_CATALOG_TABS = [
  { id: "santehnik" as const, label: "Сантехника", icon: "Droplets" },
  { id: "elektrik" as const, label: "Электрика", icon: "Zap" },
  { id: "master-na-chas" as const, label: "Мастер на час", icon: "Wrench" },
  { id: "remont-kvartir" as const, label: "Ремонт квартир", icon: "Paintbrush" },
] as const;

export type PriceCatalogTabId = (typeof PRICE_CATALOG_TABS)[number]["id"];

export function getFullPriceCatalog(): Record<PriceCatalogTabId, readonly PriceListGroup[]> {
  return {
    santehnik: SANTEHNIK_PRICES,
    elektrik: ELEKTRIK_PRICES,
    "master-na-chas": MASTER_PRICES,
    "remont-kvartir": REMONT_PRICES,
  };
}

const PRICE_LISTS: Record<PriceListSlug, readonly PriceListGroup[]> = {
  santehnik: SANTEHNIK_PRICES,
  elektrik: ELEKTRIK_PRICES,
  "master-na-chas": MASTER_PRICES,
  "remont-kvartir": REMONT_PRICES,
  home: HOME_PRICES,
};

const SLUG_TO_CATEGORY: Partial<Record<PriceListSlug, ServiceCategory>> = {
  santehnik: "plumbing",
  elektrik: "electrical",
  "master-na-chas": "handyman",
  "remont-kvartir": "repair",
};

export function getPriceListSlug(
  slug: string | null | undefined
): PriceListSlug | null {
  if (!slug) return "home";
  if (slug in PRICE_LISTS) return slug as PriceListSlug;
  if (slug.startsWith("zamena-") || slug.startsWith("ustanovka-") || slug.startsWith("ustranenie-")) {
    if (
      slug.includes("smesitel") ||
      slug.includes("unitaz") ||
      slug.includes("bojler") ||
      slug.includes("trub") ||
      slug.includes("rakovin") ||
      slug.includes("vann") ||
      slug.includes("dushev") ||
      slug.includes("zasor")
    ) {
      return "santehnik";
    }
    if (slug.includes("rozet") || slug.includes("vyklyuch") || slug.includes("lyustr") || slug.includes("avtomat") || slug.includes("provod") || slug.includes("kz")) {
      return "elektrik";
    }
  }
  return null;
}

export function getServicePriceList(
  slug: string | null | undefined
): readonly PriceListGroup[] {
  const key = getPriceListSlug(slug);
  if (!key) return [];
  return PRICE_LISTS[key];
}

export function getCategoryForPriceSlug(
  slug: PriceListSlug
): ServiceCategory | undefined {
  return SLUG_TO_CATEGORY[slug];
}

/** Находит позиции прайса по точному названию (для фокусного блока на подстраницах). */
export function getPriceItemsByNames(names: readonly string[]): PriceListItem[] {
  const catalog = [
    ...SANTEHNIK_PRICES,
    ...ELEKTRIK_PRICES,
    ...MASTER_PRICES,
    ...REMONT_PRICES,
  ];
  const all = catalog.flatMap((group) => group.items);
  return names
    .map((name) => all.find((item) => item.name === name))
    .filter((item): item is PriceListItem => item !== undefined);
}
