/** Константы мессенджеров — только статические значения, без process.env (гидрация). */
export const MESSENGER = {
  telegram: {
    username: "@garant_master_zayavki",
    label: "Telegram",
    url: "https://t.me/garant_master_zayavki",
  },
  max: {
    display: "8 (950) 202-32-28",
    label: "Max",
    phoneRaw: "+79502023228",
    url: "https://web.max.ru/456683052",
  },
} as const;
