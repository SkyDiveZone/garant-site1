import { ROUND_THE_CLOCK } from "@/lib/copy";
import { DEFAULT_SERVICE_STEPS } from "@/lib/how-we-work";
import { getIncludedWorks } from "@/lib/service-catalog/included-works";
import type { PriceListGroup, PriceListItem } from "@/lib/service-prices";
import type {
  ServiceOfferPage,
  ServiceOfferProblem,
  ServiceOfferSituation,
} from "@/lib/service-catalog/types";
import {
  AlertTriangle,
  Cable,
  Droplets,
  Hammer,
  Lightbulb,
  Paintbrush,
  Plug,
  ShieldCheck,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const DEFAULT_BENEFITS = [
  {
    title: "Круглосуточный выезд",
    description: `${ROUND_THE_CLOCK.urgent} Работаем по Екатеринбургу без выходных.`,
    icon: "Clock",
  },
  {
    title: "Смета после осмотра",
    description: "Назовём точную стоимость на месте — без скрытых доплат.",
    icon: "ShieldCheck",
  },
  {
    title: "Гарантия до 12 месяцев",
    description: "Официальная гарантия на выполненные электромонтажные работы.",
    icon: "Award",
  },
  {
    title: "Опытные электрики",
    description: "Мастера с профильной подготовкой и практикой от 5 лет.",
    icon: "Users",
  },
] as const;

const PROBLEM_ICONS: LucideIcon[] = [Zap, Plug, Lightbulb, Cable, AlertTriangle, ShieldCheck];

const ELEKTRIK_GALLERY = [
  { src: "/works/elektrik/01-before-after.png", alt: "Пример электромонтажных работ" },
  { src: "/works/elektrik/02-electrician-panel.png", alt: "Монтаж электрощита" },
  { src: "/works/elektrik/03-wiring.png", alt: "Прокладка электропроводки" },
] as const;

const SANTEHNIK_GALLERY = [
  { src: "/works/santehnik/01-before-after.png", alt: "Пример сантехнических работ" },
  { src: "/works/santehnik/02-plumber-work.png", alt: "Сантехник выполняет монтаж" },
  { src: "/works/santehnik/03-bathroom.png", alt: "Обновление санузла" },
] as const;

const SANTEHNIK_BENEFITS = [
  {
    title: "Круглосуточный выезд",
    description: `${ROUND_THE_CLOCK.urgent} Работаем по Екатеринбургу без выходных.`,
    icon: "Clock",
  },
  {
    title: "Смета после осмотра",
    description: "Назовём точную стоимость на месте — без скрытых доплат.",
    icon: "ShieldCheck",
  },
  {
    title: "Гарантия до 12 месяцев",
    description: "Официальная гарантия на выполненные сантехнические работы.",
    icon: "Award",
  },
  {
    title: "Опытные сантехники",
    description: "Мастера с профильной подготовкой и практикой от 5 лет.",
    icon: "Users",
  },
] as const;

const SANTEHNIK_PROBLEM_ICONS: LucideIcon[] = [Droplets, Wrench, AlertTriangle, ShieldCheck];

function shortServiceName(fullName: string): string {
  return fullName.replace(/\s*\([^)]*\)/g, "").trim();
}

function buildKeywords(serviceName: string): string[] {
  const base = shortServiceName(serviceName).toLowerCase();
  return [
    `${base} екатеринбург`,
    `${base} на дом`,
    `вызов электрика ${base}`,
    "электрик екатеринбург",
    "электромонтаж",
  ];
}

function defaultWhenNeeded(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: `Нужен мастер для: ${short}`,
      description: "Вызовите электрика — приедем с инструментом и выполним работу под ключ.",
    },
    {
      title: "После покупки оборудования",
      description: "Подключим и проверим безопасность — по нормам ПУЭ.",
    },
    {
      title: "При неисправности или поломке",
      description: "Диагностируем причину и устраним неисправность.",
    },
    {
      title: "Во время ремонта квартиры",
      description: "Выполним монтаж в срок и согласуем с другими отделочниками.",
    },
  ];
}

function defaultWhenToCall(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: "Не откладывайте проблему",
      description: `По услуге «${short}» лучше вызвать мастера сразу — неисправности электрики опасны.`,
    },
    {
      title: "Искрит или пахнет гарью",
      description: "Срочно отключите линию и вызовите электрика.",
    },
    {
      title: "Выбивает автомат",
      description: "Не включайте снова без диагностики — найдём причину.",
    },
    {
      title: "Нужна работа сегодня",
      description: "Согласуем ближайшее время выезда — часто в день обращения.",
    },
  ];
}

function defaultProblems(serviceName: string): ServiceOfferProblem[] {
  const templates = [
    {
      title: "Неисправность при эксплуатации",
      description: `При выполнении «${shortServiceName(serviceName)}» часто обнаруживаем скрытые дефекты проводки.`,
    },
    {
      title: "Старые соединения",
      description: "Окисленные или ослабленные контакты — частая причина отключений.",
    },
    {
      title: "Неправильный монтаж ранее",
      description: "Исправим ошибки предыдущих мастеров и приведём к нормам.",
    },
    {
      title: "Перегрузка линии",
      description: "Подберём сечение кабеля и защиту по нагрузке.",
    },
  ];
  return templates.map((item, i) => ({
    ...item,
    icon: PROBLEM_ICONS[i % PROBLEM_ICONS.length],
  }));
}

function defaultHowItWorks(serviceName: string): string[] {
  return [
    `Осмотр объекта и оценка объёма работ по услуге «${shortServiceName(serviceName)}»`,
    "Согласование стоимости до начала — без сюрпризов",
    "Выполнение работ с соблюдением норм ПУЭ",
    "Проверка результата и сдача работ",
  ];
}

function defaultFaq(serviceName: string, priceFrom: number, unit?: string): ServiceOfferPage["faq"] {
  const unitText = unit ? ` ${unit}` : "";
  const short = shortServiceName(serviceName);
  return [
    {
      question: `Сколько стоит ${short.toLowerCase()}?`,
      answer: `Ориентировочно от ${priceFrom} ₽${unitText}. Точную сумму мастер назовёт после осмотра на объекте.`,
    },
    {
      question: "Как быстро приедет электрик?",
      answer: `${ROUND_THE_CLOCK.urgent} Часто выезжаем в тот же день по Екатеринбургу.`,
    },
    {
      question: "Даёте гарантию?",
      answer: "Да, официальная гарантия до 12 месяцев на выполненные работы.",
    },
    {
      question: "Нужно покупать материалы заранее?",
      answer: "Можете подготовить сами или согласовать закупку с мастером после осмотра.",
    },
  ];
}

function buildSantehnikKeywords(serviceName: string): string[] {
  const base = shortServiceName(serviceName).toLowerCase();
  return [
    `${base} екатеринбург`,
    `${base} на дом`,
    `вызов сантехника ${base}`,
    "сантехник екатеринбург",
    "сантехнические работы",
  ];
}

function defaultSantehnikWhenNeeded(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: `Нужен мастер для: ${short}`,
      description: "Вызовите сантехника — приедем с инструментом и выполним работу под ключ.",
    },
    {
      title: "После покупки сантехники",
      description: "Установим и проверим герметичность — без протечек.",
    },
    {
      title: "При протечке или засоре",
      description: "Срочно устраним аварию и восстановим работу системы.",
    },
    {
      title: "Во время ремонта квартиры",
      description: "Выполним монтаж в срок и согласуем с другими отделочниками.",
    },
  ];
}

function defaultSantehnikWhenToCall(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: "Не откладывайте проблему",
      description: `По услуге «${short}» лучше вызвать мастера сразу — протечки быстро приводят к порче ремонта.`,
    },
    {
      title: "Появилась протечка",
      description: "Перекройте воду и вызовите сантехника — найдём и устраним причину.",
    },
    {
      title: "Засор или плохой слив",
      description: "Не используйте агрессивную химию — прочистим безопасно и эффективно.",
    },
    {
      title: "Нужна работа сегодня",
      description: "Согласуем ближайшее время выезда — часто в день обращения.",
    },
  ];
}

function defaultSantehnikProblems(serviceName: string): ServiceOfferProblem[] {
  const templates = [
    {
      title: "Износ подводки и соединений",
      description: `При выполнении «${shortServiceName(serviceName)}» часто обнаруживаем изношенные шланги и прокладки.`,
    },
    {
      title: "Неправильный монтаж ранее",
      description: "Исправим ошибки предыдущих мастеров и приведём к нормам.",
    },
    {
      title: "Засоры и отложения",
      description: "Прочистим и восстановим нормальный слив.",
    },
    {
      title: "Несовместимость фитингов",
      description: "Подберём правильные комплектующие и выполним надёжное соединение.",
    },
  ];
  return templates.map((item, i) => ({
    ...item,
    icon: SANTEHNIK_PROBLEM_ICONS[i % SANTEHNIK_PROBLEM_ICONS.length],
  }));
}

function defaultSantehnikHowItWorks(serviceName: string): string[] {
  return [
    `Осмотр объекта и оценка объёма работ по услуге «${shortServiceName(serviceName)}»`,
    "Согласование стоимости до начала — без сюрпризов",
    "Выполнение работ с соблюдением технологии монтажа",
    "Проверка результата и сдача работ",
  ];
}

function defaultSantehnikFaq(
  serviceName: string,
  priceFrom: number,
  unit?: string
): ServiceOfferPage["faq"] {
  const unitText = unit ? ` ${unit}` : "";
  const short = shortServiceName(serviceName);
  return [
    {
      question: `Сколько стоит ${short.toLowerCase()}?`,
      answer: `Ориентировочно от ${priceFrom} ₽${unitText}. Точную сумму мастер назовёт после осмотра на объекте.`,
    },
    {
      question: "Как быстро приедет сантехник?",
      answer: `${ROUND_THE_CLOCK.urgent} Часто выезжаем в тот же день по Екатеринбургу.`,
    },
    {
      question: "Даёте гарантию?",
      answer: "Да, официальная гарантия до 12 месяцев на выполненные работы.",
    },
    {
      question: "Нужно покупать материалы заранее?",
      answer: "Можете подготовить сами или согласовать закупку с мастером после осмотра.",
    },
  ];
}

export function buildSantehnikOfferFromPrice(
  group: PriceListGroup,
  item: PriceListItem,
  slug: string,
  galleryOffset = 0
): ServiceOfferPage {
  const serviceName = item.name;
  const short = shortServiceName(serviceName);

  return {
    slug,
    category: "santehnik",
    categoryLabel: "Сантехник",
    categoryHref: "/santehnik",
    serviceName,
    h1: `${short} в Екатеринбурге`,
    title: `${short} в Екатеринбурге — цены, выезд | Гарант Мастер`,
    description: `${short} в Екатеринбурге. Выезд мастера, аккуратный монтаж, гарантия до 12 месяцев. Оставьте заявку — перезвоним за 5 минут.`,
    keywords: buildSantehnikKeywords(serviceName),
    heroSubtitle: `Выполним «${short}» аккуратно и без протечек. Согласуем стоимость после осмотра.`,
    priceFrom: item.priceFrom,
    priceUnit: item.unit,
    priceGroup: group.title,
    aboutIntro: `«Гарант Мастер» выполняет ${serviceName.toLowerCase()} в квартирах, частных домах и коммерческих помещениях Екатеринбурга. Мастер приедет с инструментом, оценит объём работ на месте и согласует стоимость до начала.`,
    includedWorks: getIncludedWorks("santehnik", slug, serviceName),
    howItWorks: defaultSantehnikHowItWorks(serviceName),
    whenNeeded: defaultSantehnikWhenNeeded(serviceName),
    whenToCall: defaultSantehnikWhenToCall(serviceName),
    popularProblems: defaultSantehnikProblems(serviceName),
    benefits: [...SANTEHNIK_BENEFITS],
    steps: DEFAULT_SERVICE_STEPS,
    galleryImages: [
      SANTEHNIK_GALLERY[galleryOffset % SANTEHNIK_GALLERY.length],
      SANTEHNIK_GALLERY[(galleryOffset + 1) % SANTEHNIK_GALLERY.length],
      SANTEHNIK_GALLERY[(galleryOffset + 2) % SANTEHNIK_GALLERY.length],
    ],
    faq: defaultSantehnikFaq(serviceName, item.priceFrom, item.unit),
  };
}

export function buildElektrikOfferFromPrice(
  group: PriceListGroup,
  item: PriceListItem,
  slug: string,
  galleryOffset = 0
): ServiceOfferPage {
  const serviceName = item.name;
  const short = shortServiceName(serviceName);

  return {
    slug,
    category: "elektrik",
    categoryLabel: "Электрик",
    categoryHref: "/elektrik",
    serviceName,
    h1: `${short} в Екатеринбурге`,
    title: `${short} в Екатеринбурге — цены, выезд | Гарант Мастер`,
    description: `${short} в Екатеринбурге. Выезд мастера, работа по ПУЭ, гарантия до 12 месяцев. Оставьте заявку — перезвоним за 5 минут.`,
    keywords: buildKeywords(serviceName),
    heroSubtitle: `Выполним «${short}» аккуратно и безопасно. Согласуем стоимость после осмотра.`,
    priceFrom: item.priceFrom,
    priceUnit: item.unit,
    priceGroup: group.title,
    aboutIntro: `«Гарант Мастер» выполняет ${serviceName.toLowerCase()} в квартирах, частных домах и коммерческих помещениях Екатеринбурга. Мастер приедет с инструментом, оценит объём работ на месте и согласует стоимость до начала.`,
    includedWorks: getIncludedWorks("elektrik", slug, serviceName),
    howItWorks: defaultHowItWorks(serviceName),
    whenNeeded: defaultWhenNeeded(serviceName),
    whenToCall: defaultWhenToCall(serviceName),
    popularProblems: defaultProblems(serviceName),
    benefits: [...DEFAULT_BENEFITS],
    steps: DEFAULT_SERVICE_STEPS,
    galleryImages: [
      ELEKTRIK_GALLERY[galleryOffset % ELEKTRIK_GALLERY.length],
      ELEKTRIK_GALLERY[(galleryOffset + 1) % ELEKTRIK_GALLERY.length],
      ELEKTRIK_GALLERY[(galleryOffset + 2) % ELEKTRIK_GALLERY.length],
    ],
    faq: defaultFaq(serviceName, item.priceFrom, item.unit),
  };
}

const MASTER_GALLERY = [
  { src: "/works/master-na-chas/01-light-install.png", alt: "Пример работ мастера на час" },
  { src: "/works/master-na-chas/02-wardrobe-assembly.png", alt: "Сборка мебели мастером" },
  { src: "/works/master-na-chas/03-door-install.png", alt: "Монтажные работы в квартире" },
] as const;

const MASTER_BENEFITS = [
  {
    title: "Круглосуточный выезд",
    description: `${ROUND_THE_CLOCK.urgent} Работаем по Екатеринбургу без выходных.`,
    icon: "Clock",
  },
  {
    title: "Смета после осмотра",
    description: "Назовём точную стоимость на месте — без скрытых доплат.",
    icon: "ShieldCheck",
  },
  {
    title: "Гарантия до 12 месяцев",
    description: "Официальная гарантия на выполненные монтажные работы.",
    icon: "Award",
  },
  {
    title: "Универсальный мастер",
    description: "Один специалист с инструментом — несколько бытовых задач за выезд.",
    icon: "Users",
  },
] as const;

function buildMasterKeywords(serviceName: string): string[] {
  const base = shortServiceName(serviceName).toLowerCase();
  return [
    `${base} екатеринбург`,
    `${base} на дом`,
    `мастер на час ${base}`,
    "мастер на час екатеринбург",
    "подключение техники",
  ];
}

function defaultMasterWhenNeeded(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: `Нужен мастер для: ${short}`,
      description: "Вызовите мастера на час — приедем с инструментом и выполним работу под ключ.",
    },
    {
      title: "После покупки техники",
      description: "Подключим и проверим работоспособность — без сюрпризов.",
    },
    {
      title: "Нужно аккуратно вписать в интерьер",
      description: "Учтём размеры, коммуникации и требования производителя.",
    },
    {
      title: "Во время ремонта или переезда",
      description: "Выполним монтаж в удобное время и согласуем с другими работами.",
    },
  ];
}

function defaultMasterWhenToCall(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: "Не откладывайте установку",
      description: `По услуге «${short}» лучше вызвать мастера сразу — так техника работает безопасно и без протечек.`,
    },
    {
      title: "Нет времени разбираться самим",
      description: "Мастер приедет с инструментом и выполнит подключение за один визит.",
    },
    {
      title: "Нужна проверка после монтажа",
      description: "Проверим герметичность, крепления и запуск — сдадим работу готовой к использованию.",
    },
    {
      title: "Нужна работа сегодня",
      description: "Согласуем ближайшее время выезда — часто в день обращения.",
    },
  ];
}

function defaultMasterProblems(serviceName: string): ServiceOfferProblem[] {
  const short = shortServiceName(serviceName);
  const templates = [
    {
      title: "Неправильный самостоятельный монтаж",
      description: `При «${short}» часто исправляем ошибки предыдущей установки.`,
    },
    {
      title: "Нехватка комплектующих",
      description: "Подскажем, что нужно докупить, или согласуем закупку после осмотра.",
    },
    {
      title: "Неудобный доступ к коммуникациям",
      description: "Аккуратно подключим в ограниченном пространстве кухни или ванной.",
    },
    {
      title: "Нужен надёжный результат",
      description: "Закрепим, подключим и проверим работу без повторных выездов.",
    },
  ];
  return templates.map((item, i) => ({
    ...item,
    icon: SANTEHNIK_PROBLEM_ICONS[i % SANTEHNIK_PROBLEM_ICONS.length],
  }));
}

function defaultMasterFaq(
  serviceName: string,
  priceFrom: number,
  unit?: string
): ServiceOfferPage["faq"] {
  const unitText = unit ? ` ${unit}` : "";
  const short = shortServiceName(serviceName);
  return [
    {
      question: `Сколько стоит ${short.toLowerCase()}?`,
      answer: `Ориентировочно от ${priceFrom} ₽${unitText}. Точную сумму мастер назовёт после осмотра на объекте.`,
    },
    {
      question: "Как быстро приедет мастер?",
      answer: `${ROUND_THE_CLOCK.urgent} Часто выезжаем в тот же день по Екатеринбургу.`,
    },
    {
      question: "Даёте гарантию?",
      answer: "Да, официальная гарантия до 12 месяцев на выполненные работы.",
    },
    {
      question: "Нужно покупать материалы заранее?",
      answer: "Можете подготовить сами или согласовать закупку с мастером после осмотра.",
    },
  ];
}

export function buildMasterNaChasOfferFromPrice(
  group: PriceListGroup,
  item: PriceListItem,
  slug: string,
  galleryOffset = 0
): ServiceOfferPage {
  const serviceName = item.name;
  const short = shortServiceName(serviceName);

  return {
    slug,
    category: "master-na-chas",
    categoryLabel: "Мастер на час",
    categoryHref: "/master-na-chas",
    serviceName,
    h1: `${short} в Екатеринбурге`,
    title: `${short} в Екатеринбурге — цены, выезд | Гарант Мастер`,
    description: `${short} в Екатеринбурге. Выезд мастера на час, аккуратный монтаж, гарантия до 12 месяцев. Оставьте заявку — перезвоним за 5 минут.`,
    keywords: buildMasterKeywords(serviceName),
    heroSubtitle: `Выполним «${short}» аккуратно и в срок. Согласуем стоимость после осмотра.`,
    priceFrom: item.priceFrom,
    priceUnit: item.unit,
    priceGroup: group.title,
    aboutIntro: `«Гарант Мастер» выполняет ${serviceName.toLowerCase()} в квартирах, частных домах и коммерческих помещениях Екатеринбурга. Мастер на час приедет с инструментом, оценит объём работ на месте и согласует стоимость до начала.`,
    includedWorks: getIncludedWorks("master-na-chas", slug, serviceName),
    howItWorks: [
      `Осмотр объекта и оценка объёма работ по услуге «${short}»`,
      "Согласование стоимости до начала — без сюрпризов",
      "Выполнение работ с аккуратным монтажом",
      "Проверка результата и сдача работ",
    ],
    whenNeeded: defaultMasterWhenNeeded(serviceName),
    whenToCall: defaultMasterWhenToCall(serviceName),
    popularProblems: defaultMasterProblems(serviceName),
    benefits: [...MASTER_BENEFITS],
    steps: DEFAULT_SERVICE_STEPS,
    galleryImages: [
      MASTER_GALLERY[galleryOffset % MASTER_GALLERY.length],
      MASTER_GALLERY[(galleryOffset + 1) % MASTER_GALLERY.length],
      MASTER_GALLERY[(galleryOffset + 2) % MASTER_GALLERY.length],
    ],
    faq: defaultMasterFaq(serviceName, item.priceFrom, item.unit),
  };
}

const REMONT_GALLERY = [
  { src: "/works/remont-kvartir/01-bedroom.png", alt: "Пример ремонта квартиры — спальня" },
  { src: "/works/remont-kvartir/02-accent-wall.png", alt: "Пример ремонта квартиры — акцентная стена" },
  { src: "/works/remont-kvartir/03-living-room.png", alt: "Пример ремонта квартиры — гостиная" },
] as const;

const REMONT_BENEFITS = [
  {
    title: "Круглосуточный выезд",
    description: `${ROUND_THE_CLOCK.urgent} Работаем по Екатеринбургу без выходных.`,
    icon: "Clock",
  },
  {
    title: "Смета после осмотра",
    description: "Назовём точную стоимость на месте — без скрытых доплат.",
    icon: "ShieldCheck",
  },
  {
    title: "Гарантия до 12 месяцев",
    description: "Официальная гарантия на выполненные отделочные работы.",
    icon: "Award",
  },
  {
    title: "Опытные отделочники",
    description: "Мастера с практикой от 5 лет — аккуратно и в срок.",
    icon: "Users",
  },
] as const;

const REMONT_PROBLEM_ICONS: LucideIcon[] = [Paintbrush, Hammer, Wrench, AlertTriangle];

function buildRemontKeywords(serviceName: string): string[] {
  const base = shortServiceName(serviceName).toLowerCase();
  return [
    `${base} екатеринбург`,
    `ремонт квартир ${base}`,
    "ремонт квартир екатеринбург",
    "отделочные работы екатеринбург",
    base,
  ];
}

function defaultRemontWhenNeeded(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: `Планируете: ${short}`,
      description: "Составим смету после осмотра и согласуем этапы работ до старта.",
    },
    {
      title: "Обновление отделки",
      description: "Поклеим, покрасим, выровняем — без лишней пыли и с уборкой после работ.",
    },
    {
      title: "Ремонт одной комнаты или всей квартиры",
      description: "Работаем точечно или комплексно — под ваш бюджет и сроки.",
    },
    {
      title: "Нужен понятный результат",
      description: "Фиксируем объём, материалы и сроки — сдаём работу готовой к проживанию.",
    },
  ];
}

function defaultRemontWhenToCall(serviceName: string): ServiceOfferSituation[] {
  const short = shortServiceName(serviceName);
  return [
    {
      title: "Хотите начать без сюрпризов",
      description: `По услуге «${short}» мастер приедет на замер и согласует условия до начала.`,
    },
    {
      title: "Нет времени искать бригаду",
      description: "Один подрядчик: отделка, подготовка и сдача объекта.",
    },
    {
      title: "Нужен ремонт к сроку",
      description: "Согласуем график работ и приедем в удобное время.",
    },
    {
      title: "Важно качество отделки",
      description: "Работаем аккуратно, с контролем геометрии и чистотой на объекте.",
    },
  ];
}

function defaultRemontProblems(serviceName: string): ServiceOfferProblem[] {
  const short = shortServiceName(serviceName);
  const templates = [
    {
      title: "Неровные стены или потолок",
      description: `Перед «${short}» подготовим основание — иначе отделка ляжет плохо.`,
    },
    {
      title: "Старая отделка мешает",
      description: "Аккуратно демонтируем и подготовим поверхности под новый слой.",
    },
    {
      title: "Сроки поджимают",
      description: "Спланируем этапы так, чтобы уложиться в оговорённые сроки.",
    },
    {
      title: "Нужен предсказуемый бюджет",
      description: "Согласуем объём и материалы после осмотра — без скрытых доплат.",
    },
  ];
  return templates.map((item, i) => ({
    ...item,
    icon: REMONT_PROBLEM_ICONS[i % REMONT_PROBLEM_ICONS.length],
  }));
}

function defaultRemontFaq(
  serviceName: string,
  priceFrom: number,
  unit?: string
): ServiceOfferPage["faq"] {
  const unitText = unit ? ` ${unit}` : "";
  const short = shortServiceName(serviceName);
  return [
    {
      question: `Сколько стоит ${short.toLowerCase()}?`,
      answer: `Ориентировочно от ${priceFrom} ₽${unitText}. Точную сумму мастер назовёт после осмотра и замера.`,
    },
    {
      question: "Сколько длится ремонт?",
      answer: "Срок зависит от площади и объёма работ. Ориентир по срокам дадим после осмотра.",
    },
    {
      question: "Даёте гарантию?",
      answer: "Да, официальная гарантия до 12 месяцев на выполненные работы.",
    },
    {
      question: "Материалы ваши или мои?",
      answer: "Можете закупить сами или согласовать закупку с мастером после осмотра.",
    },
  ];
}

export function buildRemontKvartirOfferFromPrice(
  group: PriceListGroup,
  item: PriceListItem,
  slug: string,
  galleryOffset = 0
): ServiceOfferPage {
  const serviceName = item.name;
  const short = shortServiceName(serviceName);

  return {
    slug,
    category: "remont-kvartir",
    categoryLabel: "Ремонт квартир",
    categoryHref: "/remont-kvartir",
    serviceName,
    h1: `${short} в Екатеринбурге`,
    title: `${short} в Екатеринбурге — цены, выезд | Гарант Мастер`,
    description: `${short} в Екатеринбурге. Отделочные работы, смета после осмотра, гарантия до 12 месяцев. Оставьте заявку — перезвоним за 5 минут.`,
    keywords: buildRemontKeywords(serviceName),
    heroSubtitle: `Выполним «${short}» аккуратно и в срок. Согласуем стоимость после осмотра.`,
    priceFrom: item.priceFrom,
    priceUnit: item.unit,
    priceGroup: group.title,
    aboutIntro: `«Гарант Мастер» выполняет ${serviceName.toLowerCase()} в квартирах Екатеринбурга. Выедем на замер, оценим объём отделочных работ и согласуем смету до начала.`,
    includedWorks: getIncludedWorks("remont-kvartir", slug, serviceName),
    howItWorks: [
      `Замер объекта и оценка объёма по услуге «${short}»`,
      "Согласование сметы и этапов до начала работ",
      "Выполнение отделки с контролем качества на каждом этапе",
      "Сдача работ и уборка зоны после завершения",
    ],
    whenNeeded: defaultRemontWhenNeeded(serviceName),
    whenToCall: defaultRemontWhenToCall(serviceName),
    popularProblems: defaultRemontProblems(serviceName),
    benefits: [...REMONT_BENEFITS],
    steps: DEFAULT_SERVICE_STEPS,
    galleryImages: [
      REMONT_GALLERY[galleryOffset % REMONT_GALLERY.length],
      REMONT_GALLERY[(galleryOffset + 1) % REMONT_GALLERY.length],
      REMONT_GALLERY[(galleryOffset + 2) % REMONT_GALLERY.length],
    ],
    faq: defaultRemontFaq(serviceName, item.priceFrom, item.unit),
  };
}
