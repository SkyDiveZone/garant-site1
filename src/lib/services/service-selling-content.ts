import { COPY } from "@/lib/copy";
import { HOME_WORK_TYPES } from "@/lib/home-work-types";
import {
  ELEKTRIK_ABOUT,
  ELEKTRIK_PROBLEMS,
  ELEKTRIK_WHEN_TO_CALL,
  ELEKTRIK_WORK_TYPES,
} from "@/lib/services/elektrik-content";
import { MASTER_NA_CHAS_SELLING } from "@/lib/services/master-na-chas-content";
import {
  SANTEHNIK_ABOUT,
  SANTEHNIK_WORK_TYPES,
} from "@/lib/services/santehnik-content";
import { SANTEHNIK_POPULAR_PROBLEMS } from "@/lib/services/santehnik-popular-problems";
import { REPAIR_TYPES } from "@/lib/services/remont-data";
import type { ServiceSellingContent } from "@/lib/services/service-selling-types";
import type { ServiceCategory, ServicePage } from "@/lib/services/types";

const SANTEHNIK_SELLING: ServiceSellingContent = {
  badge: "Сантехник",
  about: {
    title: SANTEHNIK_ABOUT.title,
    subtitle: SANTEHNIK_ABOUT.subtitle,
    intro: SANTEHNIK_ABOUT.intro,
    highlights: SANTEHNIK_ABOUT.highlights,
  },
  workTypes: {
    title: "Виды сантехнических работ",
    subtitle:
      "Выполняем работы любой сложности — от замены смесителя до полной разводки труб",
    items: SANTEHNIK_WORK_TYPES,
  },
  problems: {
    title: SANTEHNIK_POPULAR_PROBLEMS.title,
    subtitle: SANTEHNIK_POPULAR_PROBLEMS.subtitle,
    items: SANTEHNIK_POPULAR_PROBLEMS.problems.map((item) => item.title),
  },
  whenToCall: {
    title: "Когда стоит вызвать сантехника",
    subtitle:
      "Не откладывайте решение проблемы — даже небольшая неисправность может привести к дорогостоящему ремонту.",
    items: [],
  },
};

const ELEKTRIK_SELLING: ServiceSellingContent = {
  badge: "Электрик",
  about: {
    title: ELEKTRIK_ABOUT.title,
    subtitle: ELEKTRIK_ABOUT.subtitle,
    intro: ELEKTRIK_ABOUT.intro,
    highlights: ELEKTRIK_ABOUT.highlights,
  },
  workTypes: {
    title: "Виды электромонтажных работ",
    subtitle: "Выполняем работы любой сложности — от замены розетки до полной замены проводки",
    items: ELEKTRIK_WORK_TYPES,
  },
  problems: {
    title: "Популярные проблемы, которые решает электрик",
    subtitle: "Узнали свою ситуацию? Оставьте заявку — перезвоним и согласуем выезд",
    items: ELEKTRIK_PROBLEMS,
  },
  whenToCall: {
    title: "Когда стоит вызвать электрика",
    subtitle: "Не откладывайте — многие неисправности опасны для жизни и имущества",
    items: ELEKTRIK_WHEN_TO_CALL,
  },
};

const HOME_SELLING: ServiceSellingContent = {
  badge: "Гарант Мастер",
  about: {
    title: "Чем занимается мастер",
    subtitle: "Сантехника, электрика, ремонт и мелкий быт — один вызов, профессиональный результат",
    intro:
      "«Гарант Мастер» — сервис вызова мастеров в Екатеринбурге. Наши специалисты выполняют сантехнические, электромонтажные и отделочные работы, а также решают бытовые задачи по дому и офису.",
    introSecondary:
      "Мастер приедет с инструментом в согласованное время, оценит объём работ на месте и выполнит задачу аккуратно — с официальной гарантией до 12 месяцев.",
    highlights: [
      {
        title: "Удобный выезд",
        description: "Согласуем время приезда — часто в день обращения.",
        icon: "Clock",
      },
      {
        title: "Опытные мастера",
        description: "50 специалистов в штате с опытом от 5 лет.",
        icon: "Users",
      },
      {
        title: "Смета после осмотра",
        description: "Стоимость работ определяется после осмотра мастера.",
        icon: "ShieldCheck",
      },
      {
        title: "Гарантия",
        description: "Официальная гарантия на все виды работ до 12 месяцев.",
        icon: "Award",
      },
    ],
  },
  workTypes: {
    title: "Виды работ",
    subtitle: COPY.servicesSubtitle,
    items: HOME_WORK_TYPES,
  },
  problems: {
    title: "Популярные проблемы",
    subtitle: "Узнали свою ситуацию? Оставьте заявку — перезвоним за 5 минут",
    items: [
      "Протечка или засор",
      "Не работают розетки",
      "Выбивает автомат",
      "Нужно собрать мебель",
      "Повесить телевизор или полки",
      "Заменить смеситель",
      "Подключить технику",
      "Нужен ремонт перед заселением",
      "Накопилось несколько мелких задач",
      "Нет времени или инструмента",
    ],
  },
  whenToCall: {
    title: "Когда стоит вызвать мастера",
    subtitle: "Не откладывайте — многие проблемы со временем только усугубляются",
    items: [
      {
        title: "При срочной неисправности",
        description: "Протечка, засор, отключение электричества — согласуем быстрый выезд.",
        icon: "AlertTriangle",
      },
      {
        title: "Когда нужен один специалист на несколько задач",
        description: "Мастер на час поможет закрыть список мелких работ за один визит.",
        icon: "Wrench",
      },
      {
        title: "Перед или после ремонта",
        description: "Подготовим коммуникации, освещение и финишные работы.",
        icon: "Paintbrush",
      },
      {
        title: "При покупке новой техники или мебели",
        description: "Подключим, соберём и установим — без риска для вашего имущества.",
        icon: "Plug",
      },
    ],
  },
};

const CATEGORY_PROBLEMS: Record<ServiceCategory, readonly string[]> = {
  plumbing: [
    "Протечка труб или смесителя",
    "Засор в раковине, ванне или унитазе",
    "Капает кран",
    "Нужно установить сантехнику",
    "Замена труб или подводки",
    "Не греет водонагреватель",
    "Плохой напор воды",
    "Нужна замена смесителя",
  ],
  electrical: [
    "Выбивает автомат",
    "Искрит розетка",
    "Не работает выключатель",
    "Пропало электричество",
    "Нужно подключить технику",
    "Мигает свет",
    "Нужна замена проводки",
  ],
  handyman: [
    "Нужно собрать мебель",
    "Повесить телевизор или полки",
    "Установить карниз или зеркало",
    "Заменить замок или ручку",
    "Нет инструмента или времени",
  ],
  repair: [
    "Нужен косметический ремонт",
    "Требуется капитальный ремонт",
    "Ремонт ванной или кухни",
    "Нужна отделка перед заселением",
    "Хочется обновить интерьер",
  ],
};

const CATEGORY_WHEN: Record<ServiceCategory, ServiceSellingContent["whenToCall"]["items"]> = {
  plumbing: [
    {
      title: "При протечке или засоре",
      description: "Согласуем срочный выезд — устраним проблему профессиональным оборудованием.",
      icon: "AlertTriangle",
    },
    {
      title: "При установке или замене сантехники",
      description: "Подключим, проверим герметичность и уберём за собой.",
      icon: "Wrench",
    },
    {
      title: "Перед ремонтом ванной или кухни",
      description: "Подготовим коммуникации и точки подключения под ваш проект.",
      icon: "Home",
    },
  ],
  electrical: [
    {
      title: "При признаках неисправности",
      description: "Искрение, запах гари, нагрев розеток — не откладывайте вызов мастера.",
      icon: "AlertTriangle",
    },
    {
      title: "При покупке новой техники",
      description: "Безопасное подключение духовки, варочной, стиральной машины.",
      icon: "Plug",
    },
    {
      title: "Перед ремонтом квартиры",
      description: "Спланируем разводку, освещение и мощность линий.",
      icon: "Paintbrush",
    },
  ],
  handyman: [
    {
      title: "Когда накопилось несколько мелких задач",
      description: "Один мастер закроет список работ за один выезд.",
      icon: "Wrench",
    },
    {
      title: "Когда нет инструмента или опыта",
      description: "Приедем с профессиональным инструментом и выполним аккуратно.",
      icon: "Users",
    },
  ],
  repair: [
    {
      title: "Когда нужен ремонт под ключ",
      description: "От демонтажа до чистовой отделки — один подрядчик.",
      icon: "Home",
    },
    {
      title: "Перед заселением или продажей",
      description: "Обновим отделку и подготовим квартиру к новому этапу.",
      icon: "Paintbrush",
    },
  ],
};

function buildFromService(service: ServicePage): ServiceSellingContent {
  const masterLabel = service.categoryLabel.toLowerCase();
  const workItems =
    service.mainServices?.map((item) => item.name) ??
    service.prices.map((item) => item.name);

  const problems =
    service.whenNeeded?.map((item) => item.title) ??
    CATEGORY_PROBLEMS[service.category] ??
    workItems.map((name) => `Нужна услуга: ${name}`);

  const whenItems =
    service.whenNeeded?.map((item) => ({
      title: item.title,
      description: item.description,
    })) ?? CATEGORY_WHEN[service.category];

  return {
    badge: service.categoryLabel,
    about: {
      title: `Чем занимается ${masterLabel}`,
      subtitle: service.heroSubtitle,
      intro: service.seoText[0] ?? service.heroSubtitle,
      introSecondary: service.seoText[1],
    },
    workTypes: {
      title: "Виды работ",
      subtitle: COPY.servicesSubtitle,
      items: workItems,
    },
    problems: {
      title: `Популярные проблемы, которые решает ${masterLabel}`,
      subtitle: "Узнали свою ситуацию? Оставьте заявку — перезвоним и согласуем выезд",
      items: problems,
    },
    whenToCall: {
      title: `Когда стоит вызвать ${masterLabel}`,
      subtitle: "Согласуем удобное время выезда — часто в день обращения",
      items: whenItems,
    },
  };
}

function buildRemontContent(service: ServicePage): ServiceSellingContent {
  return {
    badge: service.categoryLabel,
    about: {
      title: "Чем занимается мастер по ремонту",
      subtitle: service.heroSubtitle,
      intro: service.seoText[0] ?? service.heroSubtitle,
      introSecondary: service.seoText[1],
    },
    workTypes: {
      title: "Виды ремонта квартир",
      subtitle: COPY.servicesSubtitle,
      items: [
        ...REPAIR_TYPES.map((item) => item.title),
        ...service.prices.map((item) => item.name),
      ],
    },
    problems: {
      title: "Популярные задачи по ремонту",
      subtitle: "Оставьте заявку — выедем на замер и составим смету",
      items: [
        "Нужен косметический ремонт",
        "Требуется капитальный ремонт",
        "Ремонт ванной комнаты",
        "Ремонт кухни",
        "Ремонт одной или нескольких комнат",
        "Ремонт под ключ",
        "Нужна отделка перед заселением",
        "Хочется обновить интерьер",
      ],
    },
    whenToCall: {
      title: "Когда стоит вызвать мастера",
      subtitle: "Начнём с осмотра объекта и согласуем смету до начала работ",
      items: CATEGORY_WHEN.repair,
    },
  };
}

export function getSellingContent(
  slug: string | null | undefined,
  service?: ServicePage
): ServiceSellingContent {
  if (slug === "elektrik") return ELEKTRIK_SELLING;
  if (slug === "santehnik") return SANTEHNIK_SELLING;
  if (slug === "master-na-chas") return MASTER_NA_CHAS_SELLING;
  if (slug === "remont-kvartir") return buildRemontContent(service!);
  if (service) return buildFromService(service);
  return HOME_SELLING;
}
