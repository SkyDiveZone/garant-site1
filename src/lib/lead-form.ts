export const LEAD_SCHEDULE_CUSTOM = "custom" as const;

export const LEAD_SCHEDULE_OPTIONS = [
  { value: "asap", label: "Как можно скорее" },
  { value: "2h", label: "В течение двух часов" },
  { value: "today", label: "В течение дня" },
  { value: "today_evening", label: "Сегодня вечером" },
  { value: "tomorrow_morning", label: "Завтра утром" },
  { value: "tomorrow_day", label: "Завтра днем" },
  { value: "tomorrow_evening", label: "Завтра вечером" },
  { value: LEAD_SCHEDULE_CUSTOM, label: "Выбрать дату и время" },
] as const;

export type LeadScheduleValue = (typeof LEAD_SCHEDULE_OPTIONS)[number]["value"];

export interface LeadPayload {
  name: string;
  phone: string;
  address?: string;
  problem?: string;
  schedule: LeadScheduleValue;
  customDate?: string;
  customTime?: string;
  pageUrl?: string;
}

export function getLeadScheduleLabel(value: string): string {
  return LEAD_SCHEDULE_OPTIONS.find((o) => o.value === value)?.label ?? value;
}
