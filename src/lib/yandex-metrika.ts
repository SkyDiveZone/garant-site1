export const YANDEX_METRIKA_ID = 110512304;

export type YandexMetrikaGoal =
  | "form_submit"
  | "phone_click"
  | "telegram_click";

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    __garantMetrikaInited?: boolean;
  }
}

export function trackYandexGoal(goal: YandexMetrikaGoal) {
  if (typeof window === "undefined" || typeof window.ym !== "function") {
    return;
  }
  window.ym(YANDEX_METRIKA_ID, "reachGoal", goal);
}

export function trackPhoneClick() {
  trackYandexGoal("phone_click");
}

export function trackTelegramClick() {
  trackYandexGoal("telegram_click");
}

export function trackFormSubmit() {
  trackYandexGoal("form_submit");
}

export function trackContactHref(href?: string) {
  if (!href) return;
  if (href.startsWith("tel:")) {
    trackPhoneClick();
    return;
  }
  if (href.includes("t.me") || href.includes("telegram")) {
    trackTelegramClick();
  }
}
