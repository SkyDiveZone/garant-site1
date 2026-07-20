export const YANDEX_METRIKA_ID = 110512304;

export type YandexMetrikaGoal =
  | "form_submit"
  | "phone_click"
  | "telegram_click"
  | "max_click";

declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    __garantMetrikaInited?: boolean;
  }
}

export function trackYandexGoal(goal: YandexMetrikaGoal) {
  if (typeof window === "undefined") return;

  if (typeof window.ym !== "function") {
    window.ym = function (...args: unknown[]) {
      const ymFn = window.ym as { a?: unknown[][]; l?: number } & ((...a: unknown[]) => void);
      const queue = ymFn.a ?? (ymFn.a = []);
      queue.push(args);
    };
    (window.ym as { l?: number }).l = Date.now();
  }

  window.ym!(YANDEX_METRIKA_ID, "reachGoal", goal);
}

export function trackPhoneClick() {
  trackYandexGoal("phone_click");
}

export function trackTelegramClick() {
  trackYandexGoal("telegram_click");
}

export function trackMaxClick() {
  trackYandexGoal("max_click");
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
    return;
  }
  if (href.includes("max.ru") || href.includes("web.max.ru")) {
    trackMaxClick();
  }
}
