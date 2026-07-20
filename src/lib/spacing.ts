/** Единая сетка отступов сайта (Tailwind-классы). */
export const SPACING = {
  /** Горизонтальные поля контейнера — совпадают с .container-custom */
  gutter: "px-4 sm:px-6 lg:px-8",
  /** Компактные секции под формой заявки */
  sectionCompact: "!py-8 sm:!py-10",
  /** Сетка hero: контент + форма */
  splitGrid: "gap-8 md:gap-10 lg:gap-12",
  /** Отступ перед блоком под двухколоночным hero */
  heroBelowGrid: "mt-8 md:mt-10 lg:mt-12",
  /** Отступ перед CTA-панелью внутри секции */
  ctaPanel: "mt-8 sm:mt-10",
  /** Внутренние отступы CTA-панели */
  ctaPanelPadding: "p-5 sm:p-6",
  /** Отступ перед центрированной CTA-карточкой */
  ctaCard: "mt-8 rounded-2xl border border-brand-100 bg-white px-5 py-6 text-center shadow-sm sm:mt-10 sm:px-8 sm:py-7",
} as const;
