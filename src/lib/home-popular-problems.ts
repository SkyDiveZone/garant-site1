import type { LucideIcon } from "lucide-react";
import {
  Bath,
  Bolt,
  Building2,
  DoorOpen,
  Droplets,
  Flame,
  Hammer,
  Home,
  Lamp,
  Lightbulb,
  Monitor,
  Paintbrush,
  Plug,
  ShowerHead,
  Sofa,
  ToggleLeft,
  Toilet,
  Tv,
  Wrench,
  Zap,
} from "lucide-react";

export type HomeProblemCategory = "elektrik" | "santehnik" | "master-na-chas" | "remont";

export interface HomePopularProblem {
  title: string;
  description: string;
  category: HomeProblemCategory;
  icon: LucideIcon;
}

export const HOME_PROBLEM_CATEGORY_LABELS: Record<HomeProblemCategory, string> = {
  elektrik: "Электрик",
  santehnik: "Сантехник",
  "master-na-chas": "Мастер на час",
  remont: "Ремонт квартир",
};

export const HOME_PROBLEM_CATEGORY_STYLES: Record<
  HomeProblemCategory,
  { badge: string; icon: string }
> = {
  elektrik: {
    badge: "bg-amber-50 text-amber-700 ring-amber-200/80",
    icon: "bg-amber-100 text-amber-600",
  },
  santehnik: {
    badge: "bg-cyan-50 text-cyan-700 ring-cyan-200/80",
    icon: "bg-cyan-100 text-cyan-600",
  },
  "master-na-chas": {
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200/80",
    icon: "bg-emerald-100 text-emerald-600",
  },
  remont: {
    badge: "bg-violet-50 text-violet-700 ring-violet-200/80",
    icon: "bg-violet-100 text-violet-600",
  },
};

export const HOME_POPULAR_PROBLEMS: HomePopularProblem[] = [
  // Электрик
  {
    title: "Выбивает автомат",
    description: "Найдём причину и восстановим электроснабжение безопасно.",
    category: "elektrik",
    icon: Zap,
  },
  {
    title: "Искрит розетка",
    description: "Устраним искрение — частая причина короткого замыкания.",
    category: "elektrik",
    icon: Bolt,
  },
  {
    title: "Не работает выключатель",
    description: "Заменим или отремонтируем выключатель и проверим проводку.",
    category: "elektrik",
    icon: ToggleLeft,
  },
  {
    title: "Пропало электричество",
    description: "Диагностируем линию и вернём свет в квартире или доме.",
    category: "elektrik",
    icon: Lightbulb,
  },
  {
    title: "Мигает свет",
    description: "Проверим контакты, лампы и проводку — устраним нестабильность.",
    category: "elektrik",
    icon: Lamp,
  },
  {
    title: "Запах горелой проводки",
    description: "Срочно проверим электрику — это может быть опасно.",
    category: "elektrik",
    icon: Flame,
  },
  {
    title: "Не хватает розеток",
    description: "Установим дополнительные розетки с аккуратным монтажом.",
    category: "elektrik",
    icon: Plug,
  },
  {
    title: "Нужно подключить технику",
    description: "Безопасно подключим плиту, духовку, стиральную машину и другое.",
    category: "elektrik",
    icon: Plug,
  },
  // Сантехник
  {
    title: "Протекает кран",
    description: "Устраним протечку или заменим смеситель — без затопления.",
    category: "santehnik",
    icon: Droplets,
  },
  {
    title: "Засорилась канализация",
    description: "Прочистим засор профессиональным оборудованием.",
    category: "santehnik",
    icon: ShowerHead,
  },
  {
    title: "Течет труба",
    description: "Локализуем протечку и выполним ремонт или замену участка.",
    category: "santehnik",
    icon: Droplets,
  },
  {
    title: "Не уходит вода",
    description: "Найдём причину и восстановим нормальный слив.",
    category: "santehnik",
    icon: Bath,
  },
  {
    title: "Сломался унитаз",
    description: "Отремонтируем или установим новый унитаз под ключ.",
    category: "santehnik",
    icon: Toilet,
  },
  {
    title: "Не работает смеситель",
    description: "Починим или заменим смеситель на кухне или в ванной.",
    category: "santehnik",
    icon: Wrench,
  },
  {
    title: "Протекает батарея",
    description: "Устраним течь отопительного прибора до сезона отопления.",
    category: "santehnik",
    icon: Flame,
  },
  {
    title: "Нужна замена сантехники",
    description: "Установим ванну, раковину, унитаз и подключим коммуникации.",
    category: "santehnik",
    icon: Bath,
  },
  // Мастер на час
  {
    title: "Нужно собрать мебель",
    description: "Соберём шкаф, кровать, комод или кухонный гарнитур.",
    category: "master-na-chas",
    icon: Sofa,
  },
  {
    title: "Повесить телевизор",
    description: "Надёжно смонтируем ТВ на стену или установим кронштейн.",
    category: "master-na-chas",
    icon: Tv,
  },
  {
    title: "Установить карниз",
    description: "Закрепим карниз для штор или жалюзи на любой поверхности.",
    category: "master-na-chas",
    icon: Home,
  },
  {
    title: "Повесить зеркало",
    description: "Аккуратно повесим зеркало, полку или декор на стену.",
    category: "master-na-chas",
    icon: Monitor,
  },
  {
    title: "Подключить технику",
    description: "Подключим и проверим работу бытовой техники на месте.",
    category: "master-na-chas",
    icon: Plug,
  },
  {
    title: "Починить дверную ручку",
    description: "Отрегулируем или заменим ручку, замок и фурнитуру.",
    category: "master-na-chas",
    icon: DoorOpen,
  },
  {
    title: "Прикрепить полку",
    description: "Закрепим полку, кронштейн или навесное хранение.",
    category: "master-na-chas",
    icon: Hammer,
  },
  {
    title: "Выполнить мелкий ремонт",
    description: "Закроем список бытовых задач за один визит мастера.",
    category: "master-na-chas",
    icon: Wrench,
  },
  // Ремонт квартир
  {
    title: "Нужно обновить квартиру",
    description: "Обновим интерьер — от одной комнаты до всей квартиры.",
    category: "remont",
    icon: Home,
  },
  {
    title: "Требуется косметический ремонт",
    description: "Покраска, обои, потолки — быстро и аккуратно.",
    category: "remont",
    icon: Paintbrush,
  },
  {
    title: "Нужно заменить полы",
    description: "Уложим ламинат, плитку или другое напольное покрытие.",
    category: "remont",
    icon: Hammer,
  },
  {
    title: "Ремонт ванной комнаты",
    description: "Отделка, сантехника и гидроизоляция под ключ.",
    category: "remont",
    icon: Bath,
  },
  {
    title: "Ремонт кухни",
    description: "Фартук, электрика, сантехника и финишная отделка.",
    category: "remont",
    icon: Wrench,
  },
  {
    title: "Подготовка квартиры к сдаче",
    description: "Приведём жильё в порядок для арендаторов или продажи.",
    category: "remont",
    icon: Building2,
  },
  {
    title: "Ремонт после покупки жилья",
    description: "Сделаем квартиру готовой к заселению под ваши задачи.",
    category: "remont",
    icon: Home,
  },
  {
    title: "Требуется комплексный ремонт",
    description: "Возьмём объект под ключ — от демонтажа до финиша.",
    category: "remont",
    icon: Building2,
  },
];
