import { ROUND_THE_CLOCK } from "@/lib/copy";
import { DEFAULT_SERVICE_STEPS } from "@/lib/how-we-work";
import type { PriceListGroup, PriceListItem } from "@/lib/service-prices";
import type {
  ServiceOfferPage,
  ServiceOfferProblem,
  ServiceOfferSituation,
} from "@/lib/service-catalog/types";
import {
  AlertTriangle,
  Cable,
  Lightbulb,
  Plug,
  ShieldCheck,
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

function defaultIncluded(serviceName: string): string[] {
  const short = shortServiceName(serviceName);
  return [
    "Выезд мастера в согласованное время",
    `Выполнение работ: ${short}`,
    "Проверка безопасности и работоспособности",
    "Консультация по эксплуатации",
    "Уборка рабочей зоны после завершения",
  ];
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
    includedWorks: defaultIncluded(serviceName),
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
    reviewCategory: "elektrik",
    reviewKeywords: [short.toLowerCase(), group.title.toLowerCase()],
  };
}
