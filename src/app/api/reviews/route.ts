import {
  formatReviewDate,
  generateReviewId,
  getAllReviews,
  getPublishedReviews,
  saveAllReviews,
} from "@/lib/reviews/store";
import { saveReviewPhotos, MAX_PHOTOS } from "@/lib/reviews/upload";
import type { Review } from "@/lib/reviews/types";
import {
  validateReviewCategory,
  validateReviewName,
  validateReviewPhone,
  validateReviewRating,
  validateReviewText,
  sanitizeText,
} from "@/lib/reviews/validation";
import { NextResponse } from "next/server";

const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (category && !validateReviewCategory(category)) {
    return NextResponse.json({ error: "Неверная категория" }, { status: 400 });
  }

  const reviews = await getPublishedReviews(
    category && validateReviewCategory(category) ? category : undefined
  );
  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Слишком много запросов. Попробуйте позже." },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json(
        { error: "Используйте multipart/form-data" },
        { status: 400 }
      );
    }

    const form = await request.formData();
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const rating = Number(form.get("rating"));
    const category = String(form.get("category") ?? "");
    const text = String(form.get("text") ?? "");

    const nameError = validateReviewName(name);
    if (nameError) return NextResponse.json({ error: nameError }, { status: 400 });

    const phoneError = validateReviewPhone(phone);
    if (phoneError) return NextResponse.json({ error: phoneError }, { status: 400 });

    const ratingError = validateReviewRating(rating);
    if (ratingError) return NextResponse.json({ error: ratingError }, { status: 400 });

    if (!validateReviewCategory(category)) {
      return NextResponse.json({ error: "Выберите категорию" }, { status: 400 });
    }

    const textError = validateReviewText(text);
    if (textError) return NextResponse.json({ error: textError }, { status: 400 });

    const files = form
      .getAll("photos")
      .filter((f): f is File => f instanceof File && f.size > 0)
      .slice(0, MAX_PHOTOS);

    const photos = await saveReviewPhotos(files);
    const now = new Date().toISOString();

    const review: Review = {
      id: generateReviewId(),
      name: sanitizeText(name, 80),
      phone: sanitizeText(phone, 20),
      rating,
      category,
      text: sanitizeText(text, 5000),
      photos,
      status: "pending",
      createdAt: now,
      date: formatReviewDate(now),
    };

    const stored = await getAllReviews();
    stored.push(review);
    await saveAllReviews(stored);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Reviews] POST error:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
