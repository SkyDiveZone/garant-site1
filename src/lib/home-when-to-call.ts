import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle,
  Clock,
  ListChecks,
  Package,
  Paintbrush,
  TrendingUp,
} from "lucide-react";

export interface HomeWhenToCallItem {
  title: string;
  description: string;
  icon: LucideIcon;
  iconStyle: string;
}

export const HOME_WHEN_TO_CALL_ITEMS: HomeWhenToCallItem[] = [
  {
    title: "При срочной неисправности",
    description:
      "Протечка, засор, отключение электричества или поломка техники — поможем быстро решить проблему и согласуем ближайший выезд.",
    icon: AlertTriangle,
    iconStyle: "bg-red-100 text-red-600",
  },
  {
    title: "Когда накопилось несколько бытовых задач",
    description:
      "Собрать мебель, повесить полки, заменить смеситель или установить технику — один специалист выполнит всё за один визит.",
    icon: ListChecks,
    iconStyle: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Перед ремонтом или после него",
    description:
      "Подготовим коммуникации, установим сантехнику, подключим освещение и выполним финишные работы.",
    icon: Paintbrush,
    iconStyle: "bg-violet-100 text-violet-600",
  },
  {
    title: "При покупке новой техники или мебели",
    description:
      "Соберём, подключим и установим без риска для вашего имущества и с соблюдением всех требований.",
    icon: Package,
    iconStyle: "bg-sky-100 text-sky-600",
  },
  {
    title: "Когда проблема может стать серьёзнее",
    description:
      "Небольшая протечка, искрящая розетка или засор со временем могут привести к дорогому ремонту.",
    icon: TrendingUp,
    iconStyle: "bg-amber-100 text-amber-600",
  },
  {
    title: "Если нет времени или нужного инструмента",
    description:
      "Не тратьте выходные на ремонт — доверьте работу профессионалам и занимайтесь своими делами.",
    icon: Clock,
    iconStyle: "bg-brand-100 text-brand-600",
  },
];
