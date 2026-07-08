import type { ServiceCategory } from "@/lib/services/types";

export type PriceCategory = "repair" | "plumbing" | "electrical" | "handyman";

export interface PriceItem {
  id: string;
  name: string;
  price: string;
  popular?: boolean;
  /** Связь со страницей услуги */
  slug?: string;
  category: PriceCategory;
}

export interface PriceCategoryGroup {
  id: PriceCategory;
  label: string;
  description: string;
  icon: string;
  ctaHref: string;
  items: PriceItem[];
}

/** Полный прайс-лист с garantekb.ru/#prices */
export const PRICE_CATALOG: PriceCategoryGroup[] = [
  {
    id: "repair",
    label: "Ремонт квартир",
    description: "Отделка, потолки, полы и комплексный ремонт под ключ",
    icon: "Paintbrush",
    ctaHref: "/remont-kvartir#lead-form",
    items: [
      { id: "r1", name: "Поклейка обоев", price: "от 200 ₽/м²", popular: true, category: "repair" },
      { id: "r2", name: "Укладка ламината", price: "от 300 ₽/м²", popular: true, category: "repair" },
      { id: "r3", name: "Укладка плитки", price: "от 900 ₽/м²", popular: true, category: "repair" },
      { id: "r4", name: "Штукатурка стен", price: "от 350 ₽/м²", category: "repair" },
      { id: "r5", name: "Шпаклевка стен", price: "от 250 ₽/м²", category: "repair" },
      { id: "r6", name: "Монтаж натяжных потолков", price: "от 400 ₽/м²", popular: true, category: "repair" },
      { id: "r7", name: "Монтаж гипсокартона", price: "от 350 ₽/м²", category: "repair" },
      { id: "r8", name: "Выравнивание пола", price: "от 300 ₽/м²", popular: true, category: "repair" },
      { id: "r9", name: "Грунтовка поверхностей", price: "от 50 ₽/м²", category: "repair" },
      { id: "r10", name: "Покраска стен и потолков", price: "от 150 ₽/м²", popular: true, category: "repair" },
      { id: "r11", name: "Демонтажные работы", price: "от 200 ₽/м²", category: "repair" },
      { id: "r12", name: "Комплексный ремонт комнаты", price: "от 3 500 ₽/м²", popular: true, category: "repair" },
      { id: "r13", name: "Комплексный ремонт квартиры", price: "от 5 000 ₽/м²", popular: true, category: "repair" },
    ],
  },
  {
    id: "plumbing",
    label: "Сантехника",
    description: "Установка, ремонт, протечки, засоры и замена труб",
    icon: "Droplets",
    ctaHref: "/santehnik#lead-form",
    items: [
      { id: "p1", name: "Установка смесителя", price: "от 800 ₽", popular: true, slug: "zamena-smesitelya", category: "plumbing" },
      { id: "p2", name: "Установка унитаза", price: "от 1 500 ₽", popular: true, slug: "ustanovka-unitaza", category: "plumbing" },
      { id: "p3", name: "Установка раковины", price: "от 1 200 ₽", category: "plumbing" },
      { id: "p4", name: "Замена труб (1 точка)", price: "от 1 000 ₽", slug: "zamena-trub", category: "plumbing" },
      { id: "p5", name: "Устранение засора", price: "от 700 ₽", popular: true, slug: "ustranenie-zasora", category: "plumbing" },
      { id: "p6", name: "Установка фильтра для воды", price: "от 900 ₽", category: "plumbing" },
      { id: "p7", name: "Установка водонагревателя", price: "от 2 500 ₽", popular: true, slug: "ustanovka-bojlera", category: "plumbing" },
      { id: "p8", name: "Замена радиатора отопления", price: "от 2 800 ₽", category: "plumbing" },
      { id: "p9", name: "Монтаж полотенцесушителя", price: "от 1 500 ₽", popular: true, category: "plumbing" },
      { id: "p10", name: "Установка душевой кабины", price: "от 3 500 ₽", category: "plumbing" },
      { id: "p11", name: "Замена гибкой подводки", price: "от 400 ₽", slug: "zamena-smesitelya", category: "plumbing" },
      { id: "p12", name: "Установка инсталляции", price: "от 4 000 ₽", slug: "ustanovka-unitaza", category: "plumbing" },
    ],
  },
  {
    id: "electrical",
    label: "Электрика",
    description: "Проводка, розетки, освещение и безопасность",
    icon: "Zap",
    ctaHref: "/elektrik#lead-form",
    items: [
      { id: "e1", name: "Замена розетки", price: "от 250 ₽/шт", popular: true, slug: "ustanovka-rozetok", category: "electrical" },
      { id: "e2", name: "Замена выключателя", price: "от 280 ₽/шт", popular: true, slug: "ustanovka-vyklyuchateley", category: "electrical" },
      { id: "e3", name: "Монтаж люстры", price: "от 550 ₽/шт", popular: true, slug: "ustanovka-lyustry", category: "electrical" },
      { id: "e4", name: "Установка светильника", price: "от 400 ₽/шт", slug: "ustanovka-lyustry", category: "electrical" },
      { id: "e5", name: "Замена электропроводки", price: "от 200 ₽/м", popular: true, slug: "zamena-provodki", category: "electrical" },
      { id: "e6", name: "Установка электросчётчика", price: "от 1 600 ₽/шт", category: "electrical" },
      { id: "e7", name: "Монтаж распределительного щита", price: "от 2 200 ₽/шт", slug: "zamena-provodki", category: "electrical" },
      { id: "e8", name: "Установка автоматов защиты", price: "от 300 ₽/шт", popular: true, slug: "zamena-avtomata", category: "electrical" },
      { id: "e9", name: "Поиск и устранение неисправностей", price: "от 600 ₽/вызов", popular: true, slug: "poisk-kz", category: "electrical" },
      { id: "e10", name: "Подключение электроплиты", price: "от 1 000 ₽/шт", category: "electrical" },
      { id: "e11", name: "Установка тёплого пола", price: "от 450 ₽/м²", popular: true, category: "electrical" },
      { id: "e12", name: "Подключение стиральной машины", price: "от 800 ₽/шт", category: "electrical" },
      { id: "e13", name: "Монтаж видеонаблюдения", price: "от 1 500 ₽/камера", popular: true, category: "electrical" },
    ],
  },
  {
    id: "handyman",
    label: "Мастер на час",
    description: "Сборка мебели, мелкий ремонт и бытовые услуги",
    icon: "Wrench",
    ctaHref: "/master-na-chas#lead-form",
    items: [
      { id: "h1", name: "Сборка мебели IKEA", price: "от 600 ₽/час", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h2", name: "Установка карниза", price: "от 350 ₽/шт", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h3", name: "Установка люстры", price: "от 650 ₽/шт", slug: "master-na-chas", category: "handyman" },
      { id: "h4", name: "Навес полок", price: "от 250 ₽/шт", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h5", name: "Установка зеркала", price: "от 400 ₽/шт", category: "handyman" },
      { id: "h6", name: "Замена замков (врезка)", price: "от 750 ₽/шт", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h7", name: "Ремонт мебели", price: "от 500 ₽/шт", category: "handyman" },
      { id: "h8", name: "Установка жалюзи", price: "от 600 ₽/шт", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h9", name: "Установка телевизора на стену", price: "от 1 200 ₽/шт", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h10", name: "Сборка кухни под ключ", price: "от 8 000 ₽/комплект", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h11", name: "Установка дверного звонка", price: "от 400 ₽/шт", category: "handyman" },
      { id: "h12", name: "Монтаж натяжного потолка", price: "от 350 ₽/м²", popular: true, category: "handyman" },
      { id: "h13", name: "Вызов мастера (минимальный заказ)", price: "от 800 ₽", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h14", name: "Почасовая оплата работы мастера", price: "от 500 ₽/час", popular: true, slug: "master-na-chas", category: "handyman" },
      { id: "h15", name: "Комплексные работы", price: "от 2 000 ₽", popular: true, category: "handyman" },
      { id: "h16", name: "Срочный вызов мастера (в течение часа)", price: "от 1 200 ₽", category: "handyman" },
      { id: "h17", name: "Диагностика проблемы", price: "от 300 ₽", popular: true, slug: "poisk-kz", category: "handyman" },
      { id: "h18", name: "Выезд за пределы города", price: "от 12 ₽/км", category: "handyman" },
      { id: "h19", name: "Консультация по телефону", price: "—", popular: true, category: "handyman" },
      { id: "h20", name: "Мелкий ремонт квартиры", price: "от 1 500 ₽/день", popular: true, category: "handyman" },
      { id: "h21", name: "Установка бытовой техники", price: "от 600 ₽/единица", category: "handyman" },
      { id: "h22", name: "Ремонт после затопления", price: "от 3 000 ₽/комната", category: "handyman" },
    ],
  },
];

const CATEGORY_BY_PARENT_SLUG: Record<string, PriceCategory> = {
  santehnik: "plumbing",
  elektrik: "electrical",
  "master-na-chas": "handyman",
  "remont-kvartir": "repair",
};

const CATEGORY_BY_SERVICE: Record<string, PriceCategory> = {
  plumbing: "plumbing",
  electrical: "electrical",
  handyman: "handyman",
  repair: "repair",
};

export function getAllPriceItems(): PriceItem[] {
  return PRICE_CATALOG.flatMap((g) => g.items);
}

export function getPriceCategoryGroup(id: PriceCategory): PriceCategoryGroup | undefined {
  return PRICE_CATALOG.find((g) => g.id === id);
}

/** Цены для страницы услуги — из единого каталога */
export function getPricesForServiceSlug(
  slug: string,
  category?: ServiceCategory
): { name: string; price: string; popular?: boolean }[] {
  const all = getAllPriceItems();

  const bySlug = all.filter((item) => item.slug === slug);
  if (bySlug.length > 0) {
    return bySlug.map(({ name, price, popular }) => ({ name, price, popular }));
  }

  const parentCategory = CATEGORY_BY_PARENT_SLUG[slug];
  if (parentCategory) {
    return all
      .filter((item) => item.category === parentCategory)
      .map(({ name, price, popular }) => ({ name, price, popular }));
  }

  if (category) {
    const priceCategory = CATEGORY_BY_SERVICE[category];
    if (priceCategory) {
      const related = all.filter((item) => item.category === priceCategory);
      const primary = related.filter((item) =>
        item.name.toLowerCase().includes(slug.replace(/-/g, " ").slice(0, 8))
      );
      if (primary.length > 0) {
        return primary.map(({ name, price, popular }) => ({ name, price, popular }));
      }
    }
  }

  return [];
}

/** Минимальная цена для hero-блока */
export function getPriceFromForSlug(slug: string, fallback: string): string {
  const prices = getPricesForServiceSlug(slug);
  if (prices.length === 0) return fallback;
  return prices[0].price;
}

/** Legacy export для совместимости */
export const PRICING_TABS = PRICE_CATALOG.map((g) => ({
  id: g.id,
  label: g.label.replace(" квартир", "").replace("Мастер на час", "Мастер"),
  items: g.items.map(({ name, price, popular }) => ({ name, price, popular: !!popular })),
}));
