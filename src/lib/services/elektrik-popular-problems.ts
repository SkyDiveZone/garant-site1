import type { ServicePopularProblemsConfig } from "@/lib/service-popular-problems";
import {
  Cable,
  Flame,
  Home,
  Lamp,
  Lightbulb,
  Plug,
  Power,
  ToggleLeft,
  Zap,
} from "lucide-react";

export const ELEKTRIK_POPULAR_PROBLEMS: ServicePopularProblemsConfig = {
  badge: "Проблемы",
  title: "Популярные проблемы, которые решает электрик",
  subtitle:
    "От неисправности розетки до замены проводки — быстро найдём причину и предложим безопасное решение.",
  iconClass: "bg-amber-100 text-amber-600",
  badgeClass: "bg-amber-50 text-amber-700 ring-amber-200/80",
  badgeLabel: "Электрик",
  situationCta: {
    title: "Узнали свою ситуацию?",
    subtitle: "Оставьте заявку — перезвоним в течение 5 минут и подскажем решение.",
    primaryLabel: "Вызвать электрика",
    secondaryLabel: "Позвонить",
  },
  bottomCta: {
    title: "Не нашли свою проблему?",
    subtitle:
      "Даже если вашей ситуации нет в списке, скорее всего мы сможем помочь. Опишите задачу, и мы подберём подходящее решение.",
    primaryLabel: "Вызвать электрика",
    secondaryLabel: "Получить консультацию",
  },
  problems: [
    {
      title: "Выбивает автомат",
      description: "Найдём перегрузку или дефект линии и восстановим электроснабжение.",
      icon: Zap,
    },
    {
      title: "Искрит розетка",
      description: "Искрение опасно — проверим контакты и устраним неисправность.",
      icon: Zap,
    },
    {
      title: "Не работает выключатель",
      description: "Заменим выключатель или найдём обрыв в проводке.",
      icon: ToggleLeft,
    },
    {
      title: "Пропало электричество",
      description: "Диагностируем щит и линии — вернём свет в квартире или доме.",
      icon: Power,
    },
    {
      title: "Мигает свет",
      description: "Проверим контакты, лампы и соединения — устраним нестабильность.",
      icon: Lightbulb,
    },
    {
      title: "Запах горелой проводки",
      description: "Срочный выезд — перегрев изоляции может привести к пожару.",
      icon: Flame,
    },
    {
      title: "Перегреваются розетки",
      description: "Ослабленный контакт или перегрузка — заменим или разведём линии.",
      icon: Plug,
    },
    {
      title: "Не работает часть квартиры",
      description: "Локализуем обрыв или неисправность автомата на линии.",
      icon: Home,
    },
    {
      title: "Не хватает розеток",
      description: "Установим дополнительные точки с аккуратным монтажом.",
      icon: Plug,
    },
    {
      title: "Нужно подключить технику",
      description: "Безопасно подключим плиту, духовку, стиральную или посудомоечную машину.",
      icon: Plug,
    },
    {
      title: "Нужно заменить старую проводку",
      description: "Особенно алюминиевая проводка — заменим на медную по нормам ПУЭ.",
      icon: Cable,
    },
    {
      title: "Нужно установить освещение",
      description: "Повесим люстру, бра или точечные светильники с проверкой заземления.",
      icon: Lamp,
    },
  ],
};
