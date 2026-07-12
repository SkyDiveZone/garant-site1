import { PHONES, SITE } from "@/lib/data";
import {
  LEAD_SCHEDULE_CUSTOM,
  LEAD_SCHEDULE_OPTIONS,
  type LeadPayload,
  type LeadScheduleValue,
} from "@/lib/lead-form";
import { sendLeadToTelegram } from "@/lib/telegram";
import { NextResponse } from "next/server";

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

function isValidPhone(phone: string): boolean {
  const digits = normalizePhone(phone);
  return digits.length >= 10 && digits.length <= 15;
}

function isValidSchedule(value: string): boolean {
  return LEAD_SCHEDULE_OPTIONS.some((option) => option.value === value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadPayload>;
    const trimmedName = body.name?.trim();
    const trimmedPhone = body.phone?.trim();
    const trimmedAddress = body.address?.trim() ?? "";
    const schedule = body.schedule?.trim() ?? "asap";
    const customDate = body.customDate?.trim() ?? "";
    const customTime = body.customTime?.trim() ?? "";
    const pageUrl = body.pageUrl?.trim() || "/";

    if (!trimmedName || !trimmedPhone) {
      return NextResponse.json({ error: "Имя и телефон обязательны" }, { status: 400 });
    }

    if (trimmedName.length < 2) {
      return NextResponse.json({ error: "Укажите корректное имя" }, { status: 400 });
    }

    if (!isValidPhone(trimmedPhone)) {
      return NextResponse.json({ error: "Укажите корректный номер телефона" }, { status: 400 });
    }

    if (!isValidSchedule(schedule)) {
      return NextResponse.json({ error: "Выберите удобное время из списка" }, { status: 400 });
    }

    if (schedule === LEAD_SCHEDULE_CUSTOM) {
      if (!customDate || !customTime) {
        return NextResponse.json(
          { error: "Укажите дату и время для визита мастера" },
          { status: 400 }
        );
      }
    }

    const payload: LeadPayload = {
      name: trimmedName,
      phone: trimmedPhone,
      address: trimmedAddress || undefined,
      schedule: schedule as LeadScheduleValue,
      customDate: schedule === LEAD_SCHEDULE_CUSTOM ? customDate : undefined,
      customTime: schedule === LEAD_SCHEDULE_CUSTOM ? customTime : undefined,
      pageUrl,
    };

    const telegram = await sendLeadToTelegram(payload);

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
