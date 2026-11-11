/** Константы мессенджеров — только статические значения, без process.env (гидрация). */
export const MESSENGER = {
  telegram: {
    username: "@garant_master_zayavki",
    label: "Telegram",
    url: "https://t.me/garant_master_zayavki",
  },
  max: {
    display: "8 (922) 938-57-88",
    label: "Max",
    phoneRaw: "+79229385788",
    url: "https://web.max.ru/456683052",
  },
} as const;
