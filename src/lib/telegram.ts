import dns from "node:dns";
import { SITE } from "@/lib/data";
import {
  LEAD_SCHEDULE_CUSTOM,
  getLeadScheduleLabel,
  type LeadPayload,
} from "@/lib/lead-form";

dns.setDefaultResultOrder("ipv4first");

interface TelegramResult {
  ok: boolean;
  error?: string;
}

function formatDisplayDate(isoDate: string): string {
  const [year, month, day] = isoDate.split("-");
  if (!year || !month || !day) return isoDate;
  return `${day}.${month}.${year}`;
}

function formatDisplayTime(time: string): string {
  return time.slice(0, 5);
}

export async function sendLeadToTelegram(payload: LeadPayload): Promise<TelegramResult> {
  const token = process.env.TELEGRAM_BOT_TOKEN?.trim();
  const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

  if (!token || !chatId) {
    return {
      ok: false,
      error: "Telegram не настроен: отсутствуют TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID",
    };
  }

  const phoneDigits = payload.phone.replace(/\D/g, "");
  const scheduleLabel = getLeadScheduleLabel(payload.schedule);
  const isCustom = payload.schedule === LEAD_SCHEDULE_CUSTOM;
  const pagePath = payload.pageUrl?.startsWith("/") ? payload.pageUrl : `/${payload.pageUrl ?? ""}`;
  const pageFull = `${SITE.url}${pagePath === "/" ? "" : pagePath}`;

  const text = [
    "🔔 <b>Новая заявка с сайта</b>",
    "",
    `🏢 ${SITE.name}`,
    `👤 <b>Имя:</b> ${escapeHtml(payload.name)}`,
    `📞 <b>Телефон:</b> <a href="tel:+${phoneDigits}">${escapeHtml(payload.phone)}</a>`,
    `📍 <b>Адрес:</b> ${payload.address ? escapeHtml(payload.address) : "—"}`,
    `📝 <b>Описание проблемы:</b> ${payload.problem ? escapeHtml(payload.problem) : "—"}`,
    `🕐 <b>Удобное время:</b> ${escapeHtml(scheduleLabel)}`,
    `📅 <b>Дата:</b> ${isCustom && payload.customDate ? escapeHtml(formatDisplayDate(payload.customDate)) : "—"}`,
    `⏰ <b>Время:</b> ${isCustom && payload.customTime ? escapeHtml(formatDisplayTime(payload.customTime)) : "—"}`,
    `🌐 <b>Страница сайта:</b> <a href="${escapeHtml(pageFull)}">${escapeHtml(pageFull)}</a>`,
    "",
    "↩️ Перезвоните клиенту в течение 5 минут",
  ].join("\n");

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
      signal: AbortSignal.timeout(15_000),
    });

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
  } catch (error) {
    console.error("[Telegram] Network error:", error);
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Не удалось связаться с Telegram API",
    };
  }
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
