import type { ServicePopularProblemsConfig } from "@/lib/service-popular-problems";
import { ROUND_THE_CLOCK } from "@/lib/copy";
import {
  DoorOpen,
  Hammer,
  Home,
  Monitor,
  Plug,
  Sofa,
  Tv,
  Wrench,
} from "lucide-react";

/** Богатые карточки проблем для страницы «Мастер на час» — эталон стиля для сервисных страниц. */
export const MASTER_NA_CHAS_POPULAR_PROBLEMS: ServicePopularProblemsConfig = {
  badge: "Проблемы",
  title: "Популярные проблемы",
  subtitle: "Узнали свою ситуацию? Оставьте заявку — перезвоним и согласуем выезд",
  iconClass: "bg-emerald-100 text-emerald-600",
  badgeClass: "bg-emerald-50 text-emerald-700 ring-emerald-200/80",
  badgeLabel: "Мастер на час",
  situationCta: {
    title: "Узнали свою ситуацию?",
    subtitle: "Оставьте заявку — перезвоним в течение 5 минут и подскажем решение.",
    primaryLabel: "Оставить заявку",
    secondaryLabel: "Позвонить",
  },
  bottomCta: {
    title: "Не нашли свою проблему?",
    subtitle:
      "Даже если вашей ситуации нет в списке, скорее всего мы сможем помочь. Опишите задачу, и мы подберём подходящего специалиста.",
    primaryLabel: "Получить консультацию",
    secondaryLabel: "Оставить заявку",
  },
  problems: [
    {
      title: "Нужно собрать новую мебель",
      description: "Соберём шкаф, кровать, комод или кухонный гарнитур аккуратно и по инструкции.",
      icon: Sofa,
    },
    {
      title: "Повесить телевизор на стену",
      description: "Надёжно смонтируем ТВ на стену или установим кронштейн.",
      icon: Tv,
    },
    {
      title: "Установить карниз или полки",
      description: "Закрепим карниз, полку или навесное хранение на любой поверхности.",
      icon: Home,
    },
    {
      title: "Прикрепить зеркало",
      description: "Аккуратно повесим зеркало, полку или декор на стену.",
      icon: Monitor,
    },
    {
      title: "Подключить бытовую технику",
      description: "Подключим и проверим работу техники на месте.",
      icon: Plug,
    },
    {
      title: "Отрегулировать дверь",
      description: "Устраним провисание, скрип и проблемы с закрыванием.",
      icon: DoorOpen,
    },
    {
      title: "Заменить дверную ручку",
      description: "Отремонтируем или заменим ручку, замок и фурнитуру.",
      icon: Wrench,
    },
    {
      title: "Установить жалюзи",
      description: "Смонтируем жалюзи, рулонные шторы или карниз.",
      icon: Home,
    },
    {
      title: "Собрать кухню",
      description: "Соберём кухонный гарнитур и проверим все крепления.",
      icon: Hammer,
    },
    {
      title: "Выполнить мелкий ремонт после переезда",
      description: "Закроем список бытовых задач за один визит мастера.",
      icon: Wrench,
    },
    {
      title: "Нет нужного инструмента",
      description: "Мастер приедет с профессиональным инструментом для вашей задачи.",
      icon: Hammer,
    },
    {
      title: "Нужно быстро решить бытовую проблему",
      description: `${ROUND_THE_CLOCK.urgent} Согласуем ближайший выезд.`,
      icon: Wrench,
    },
  ],
};
