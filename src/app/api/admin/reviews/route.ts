import { isAdminAuthenticated } from "@/lib/admin/auth";
import {
  getAllReviewsForAdmin,
  getAllStoredReviews,
  saveStoredReviews,
} from "@/lib/reviews/store";
import type { Review, ReviewStatus } from "@/lib/reviews/types";
import { NextResponse } from "next/server";

async function requireAdmin() {
  const ok = await isAdminAuthenticated();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;

  const reviews = await getAllReviewsForAdmin();
  return NextResponse.json({ reviews });
}

export async function PATCH(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const body = (await request.json()) as Partial<Review> & { id?: string };
  if (!body.id) {
    return NextResponse.json({ error: "id обязателен" }, { status: 400 });
  }

  const stored = await getAllStoredReviews();
  const all = await getAllReviewsForAdmin();
  const current = all.find((r) => r.id === body.id);
  if (!current) {
    return NextResponse.json({ error: "Отзыв не найден" }, { status: 404 });
  }

  const updated: Review = {
    ...current,
    name: body.name?.trim() || current.name,
    rating: body.rating ?? current.rating,
    service: body.service?.trim() || current.service,
    district: body.district?.trim() || current.district,
    text: body.text?.trim() || current.text,
    photos: body.photos ?? current.photos,
    status: (body.status as ReviewStatus) ?? current.status,
    date: body.date?.trim() || current.date,
  };

  const idx = stored.findIndex((r) => r.id === body.id);
  if (idx >= 0) {
    stored[idx] = updated;
  } else {
    stored.push(updated);
  }

  await saveStoredReviews(stored);
  return NextResponse.json({ review: updated });
}

export async function DELETE(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "id обязателен" }, { status: 400 });
  }

  if (id.startsWith("seed-")) {
    const stored = await getAllStoredReviews();
    const tombstone: Review = {
      id,
      name: "[удалён]",
      district: "—",
      date: "",
      rating: 1,
      service: "—",
      text: "",
      photos: [],
      status: "rejected",
      createdAt: new Date().toISOString(),
    };
    const idx = stored.findIndex((r) => r.id === id);
    if (idx >= 0) stored[idx] = tombstone;
    else stored.push(tombstone);
    await saveStoredReviews(stored);
    return NextResponse.json({ success: true });
  }

  const stored = await getAllStoredReviews();
  const filtered = stored.filter((r) => r.id !== id);
  await saveStoredReviews(filtered);
  return NextResponse.json({ success: true });
}
