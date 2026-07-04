import { SITE } from "@/lib/data";

interface TelegramResult {
  ok: boolean;
  error?: string;
}

export async function sendLeadToTelegram(
  name: string,
  phone: string
): Promise<TelegramResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return {
      ok: false,
      error: "Telegram не настроен: отсутствуют TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID",
    };
  }

  const phoneDigits = phone.replace(/\D/g, "");
  const time = new Date().toLocaleString("ru-RU", {
    timeZone: "Asia/Yekaterinburg",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const text = [
    "🔔 <b>Новая заявка с сайта</b>",
    "",
    `🏢 ${SITE.name}`,
    `👤 <b>Имя:</b> ${escapeHtml(name)}`,
    `📞 <b>Телефон:</b> <a href="tel:+${phoneDigits}">${escapeHtml(phone)}</a>`,
    `🕐 <b>Время:</b> ${time} (Екатеринбург)`,
    "",
    "↩️ Перезвоните клиенту в течение 5 минут",
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    }
  );

  const data = (await response.json()) as {
    ok: boolean;
    description?: string;
  };

  if (!data.ok) {
    return {
      ok: false,
      error: data.description ?? "Telegram API error",
    };
  }

  return { ok: true };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
