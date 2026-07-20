import { SITE } from "@/lib/data";
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

const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 3;

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    let ip = "unknown";
    if (forwardedFor) {
      ip = forwardedFor.split(",")[0].trim();
    } else if (realIp) {
      ip = realIp.trim();
    }

    const now = Date.now();
    const record = rateLimit.get(ip);

    if (record) {
      if (now - record.timestamp < RATE_LIMIT_WINDOW) {
        if (record.count >= MAX_REQUESTS) {
          return NextResponse.json(
            { error: "Слишком много запросов. Попробуйте позже." },
            { status: 429 }
          );
        }
        record.count++;
      } else {
        rateLimit.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }

    if (rateLimit.size > 1000) {
      for (const [key, val] of rateLimit.entries()) {
        if (now - val.timestamp > RATE_LIMIT_WINDOW) {
          rateLimit.delete(key);
        }
      }
      if (rateLimit.size > 1000) rateLimit.clear();
    }

    const body = (await request.json()) as Partial<LeadPayload>;
    const trimmedName = body.name?.trim();
    const trimmedPhone = body.phone?.trim();
    const trimmedAddress = body.address?.trim() ?? "";
    const trimmedProblem = body.problem?.trim() ?? "";
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

    if (trimmedProblem.length > 2000) {
      return NextResponse.json({ error: "Описание проблемы слишком длинное" }, { status: 400 });
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

      const requestedDate = new Date(`${customDate}T${customTime}:00`);
      if (isNaN(requestedDate.getTime())) {
        return NextResponse.json({ error: "Неверный формат даты или времени" }, { status: 400 });
      }

      if (requestedDate.getTime() < Date.now() - 3600000) {
        return NextResponse.json(
          { error: "Нельзя выбрать прошедшую дату или время" },
          { status: 400 }
        );
      }
    }

    const payload: LeadPayload = {
      name: trimmedName,
      phone: trimmedPhone,
      address: trimmedAddress || undefined,
      problem: trimmedProblem || undefined,
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
              ? "Сервис временно недоступен. Позвоните нам или напишите в Telegram / MAX."
              : `Заявка не отправлена. Позвоните нам: ${SITE.phone}`,
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
