import { NextResponse } from "next/server";

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

function isValidPhone(phone: string): boolean {
  const digits = normalizePhone(phone);
  return digits.length >= 10 && digits.length <= 15;
}

async function notifyTelegram(name: string, phone: string): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) return;

  const text = [
    "🔔 Новая заявка с сайта",
    "",
    `👤 Имя: ${name}`,
    `📞 Телефон: ${phone}`,
    `🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Yekaterinburg" })}`,
  ].join("\n");

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone } = body as { name?: string; phone?: string };

    const trimmedName = name?.trim();
    const trimmedPhone = phone?.trim();

    if (!trimmedName || !trimmedPhone) {
      return NextResponse.json(
        { error: "Имя и телефон обязательны" },
        { status: 400 }
      );
    }

    if (trimmedName.length < 2) {
      return NextResponse.json(
        { error: "Укажите корректное имя" },
        { status: 400 }
      );
    }

    if (!isValidPhone(trimmedPhone)) {
      return NextResponse.json(
        { error: "Укажите корректный номер телефона" },
        { status: 400 }
      );
    }

    await notifyTelegram(trimmedName, trimmedPhone);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
