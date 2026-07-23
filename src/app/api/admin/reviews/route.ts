import { isAdminAuthenticated, verifyCsrfToken } from "@/lib/admin/auth";
import {
  filterReviewsForAdmin,
  getAllReviews,
  saveAllReviews,
  saveReviewsWithNaturalDates,
} from "@/lib/reviews/store";
import { deleteReviewPhoto } from "@/lib/reviews/upload";
import type { Review, ReviewAdminFilters, ReviewStatus } from "@/lib/reviews/types";
import { isReviewCategory } from "@/lib/reviews/categories";
import {
  sanitizeText,
  validateReviewName,
  validateReviewRating,
  validateReviewText,
} from "@/lib/reviews/validation";
import { NextResponse } from "next/server";

async function requireAdmin(request: Request) {
  const ok = await isAdminAuthenticated();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (request.method !== "GET") {
    const csrf = request.headers.get("x-csrf-token");
    if (!(await verifyCsrfToken(csrf))) {
      return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 });
    }
  }

  return null;
}

function parseFilters(searchParams: URLSearchParams): ReviewAdminFilters {
  const category = searchParams.get("category");
  const status = searchParams.get("status");
  const rating = searchParams.get("rating");

  return {
    search: searchParams.get("search") ?? undefined,
    category:
      category && isReviewCategory(category)
        ? category
        : category === "all"
          ? "all"
          : undefined,
    status:
      status === "pending" || status === "approved" || status === "rejected"
        ? status
        : status === "all"
          ? "all"
          : undefined,
    rating: rating && rating !== "all" ? Number(rating) : rating === "all" ? "all" : undefined,
    dateFrom: searchParams.get("dateFrom") ?? undefined,
    dateTo: searchParams.get("dateTo") ?? undefined,
  };
}

export async function GET(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const filters = parseFilters(searchParams);
  const all = await getAllReviews();
  const reviews = filterReviewsForAdmin(all, filters);

  return NextResponse.json({ reviews, total: all.length });
}

export async function PATCH(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  const body = (await request.json()) as Partial<Review> & { id?: string };
  if (!body.id) {
    return NextResponse.json({ error: "id обязателен" }, { status: 400 });
  }

  const stored = await getAllReviews();
  const idx = stored.findIndex((r) => r.id === body.id);
  if (idx < 0) {
    return NextResponse.json({ error: "Отзыв не найден" }, { status: 404 });
  }

  const current = stored[idx];

  if (body.name !== undefined) {
    const err = validateReviewName(body.name);
    if (err) return NextResponse.json({ error: err }, { status: 400 });
  }
  if (body.rating !== undefined) {
    const err = validateReviewRating(body.rating);
    if (err) return NextResponse.json({ error: err }, { status: 400 });
  }
  if (body.text !== undefined) {
    const err = validateReviewText(body.text);
    if (err) return NextResponse.json({ error: err }, { status: 400 });
  }
  if (body.category !== undefined && !isReviewCategory(body.category)) {
    return NextResponse.json({ error: "Неверная категория" }, { status: 400 });
  }
  if (
    body.status !== undefined &&
    body.status !== "pending" &&
    body.status !== "approved" &&
    body.status !== "rejected"
  ) {
    return NextResponse.json({ error: "Неверный статус" }, { status: 400 });
  }

  const removedPhotos = current.photos.filter(
    (p) => body.photos && !body.photos.includes(p)
  );

  const updated: Review = {
    ...current,
    name: body.name !== undefined ? sanitizeText(body.name, 80) : current.name,
    rating: body.rating ?? current.rating,
    category: body.category ?? current.category,
    text: body.text !== undefined ? sanitizeText(body.text, 5000) : current.text,
    photos: body.photos ?? current.photos,
    status: (body.status as ReviewStatus) ?? current.status,
    date: body.date?.trim() || current.date,
  };

  stored[idx] = updated;

  const saved =
    updated.status === "approved" || current.status === "approved"
      ? await saveReviewsWithNaturalDates(stored)
      : stored;

  if (updated.status !== "approved" && current.status !== "approved") {
    await saveAllReviews(stored);
  }

  const finalReview = saved.find((r) => r.id === body.id) ?? updated;

  for (const photo of removedPhotos) {
    await deleteReviewPhoto(photo);
  }

  return NextResponse.json({ review: finalReview });
}

export async function DELETE(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id обязателен" }, { status: 400 });
  }

  const stored = await getAllReviews();
  const review = stored.find((r) => r.id === id);
  if (!review) {
    return NextResponse.json({ error: "Отзыв не найден" }, { status: 404 });
  }

  const filtered = stored.filter((r) => r.id !== id);
  await saveAllReviews(filtered);

  for (const photo of review.photos) {
    await deleteReviewPhoto(photo);
  }

  return NextResponse.json({ success: true });
}
