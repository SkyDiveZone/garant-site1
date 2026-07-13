/** Официальные параметры init для Next.js + Вебвизор (без лишних полей). */
export const YANDEX_METRIKA_INIT = {
  ssr: true,
  webvisor: true,
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  ecommerce: "dataLayer",
  defer: true,
} as const;

export const YANDEX_METRIKA_INIT_JSON = JSON.stringify(YANDEX_METRIKA_INIT);
