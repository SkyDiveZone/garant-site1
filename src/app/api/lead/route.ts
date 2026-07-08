import { PHONES, SITE } from "@/lib/data";
import { sendLeadToTelegram } from "@/lib/telegram";
import { NextResponse } from "next/server";

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

function isValidPhone(phone: string): boolean {
  const digits = normalizePhone(phone);
  return digits.length >= 10 && digits.length <= 15;
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

    const telegram = await sendLeadToTelegram(trimmedName, trimmedPhone);

    if (!telegram.ok) {
      console.error("[Lead] Telegram delivery failed:", telegram.error);
      return NextResponse.json(
        {
          error:
            telegram.error?.includes("Telegram не настроен")
              ? "Сервис временно недоступен. Позвоните нам или напишите в Telegram."
              : `Заявка не отправлена. Позвоните нам: ${PHONES.map((p) => p.display).join(", ")}`,
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Lead] Server error:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
