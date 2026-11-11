import pagesJson from "./pages.json";

export type EkbCategoryKey = "santehnik" | "elektrik" | "master-na-chas" | "remont-kvartir";

export interface EkbPriceItem {
  nameKey: string;
  name: string;
  price: string;
}

export interface EkbPriceGroup {
  id: string;
  title: string;
  items: EkbPriceItem[];
}

export interface EkbChip {
  id: string;
  label: string;
}

export interface EkbStep {
  num: string;
  title: string;
  text: string;
}

export interface EkbReview {
  text: string;
  meta: string;
  extra: boolean;
}

export interface EkbPage {
  key: EkbCategoryKey;
  h1: string;
  lead: string;
  facts: string[];
  searchPlaceholder: string;
  chips: EkbChip[];
  groups: EkbPriceGroup[];
  stepsTitle: string;
  steps: EkbStep[];
  reviews: EkbReview[];
}

export const EKB_PAGES = pagesJson as Record<EkbCategoryKey, EkbPage>;

export const EKB_NAV: { href: string; label: string; key: EkbCategoryKey }[] = [
  { href: "/santehnik", label: "Сантехник", key: "santehnik" },
  { href: "/elektrik", label: "Электрик", key: "elektrik" },
  { href: "/master-na-chas", label: "Мастер на час", key: "master-na-chas" },
  { href: "/remont-kvartir", label: "Ремонт квартир", key: "remont-kvartir" },
];

export const EKB_DISTRICTS = [
  "Верх-Исетский",
  "Железнодорожный",
  "Кировский",
  "Ленинский",
  "Октябрьский",
  "Орджоникидзевский",
  "Чкаловский",
  "Академический",
] as const;

export function isEkbCategoryKey(value: string): value is EkbCategoryKey {
  return value in EKB_PAGES;
}
