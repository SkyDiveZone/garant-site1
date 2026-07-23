import { isAdminAuthenticated, verifyCsrfToken } from "@/lib/admin/auth";
import { createAdminReply } from "@/lib/reviews/publish-date";
import { getAllReviews, saveAllReviews } from "@/lib/reviews/store";
import { sanitizeText, validateAdminReplyText } from "@/lib/reviews/validation";
import { NextResponse } from "next/server";

async function requireAdmin(request: Request) {
  const ok = await isAdminAuthenticated();
  if (!ok) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const csrf = request.headers.get("x-csrf-token");
  if (!(await verifyCsrfToken(csrf))) {
    return NextResponse.json({ error: "Invalid CSRF token" }, { status: 403 });
  }

  return null;
}

export async function PUT(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  const body = (await request.json()) as { id?: string; text?: string };
  if (!body.id) {
    return NextResponse.json({ error: "id обязателен" }, { status: 400 });
  }
  if (body.text === undefined) {
    return NextResponse.json({ error: "text обязателен" }, { status: 400 });
  }

  const err = validateAdminReplyText(body.text);
  if (err) return NextResponse.json({ error: err }, { status: 400 });

  const stored = await getAllReviews();
  const idx = stored.findIndex((r) => r.id === body.id);
  if (idx < 0) {
    return NextResponse.json({ error: "Отзыв не найден" }, { status: 404 });
  }

  const current = stored[idx];
  if (current.status !== "approved") {
    return NextResponse.json(
      { error: "Ответ можно добавить только к опубликованному отзыву" },
      { status: 400 }
    );
  }

  const updated = {
    ...current,
    adminReply: createAdminReply(sanitizeText(body.text, 3000)),
  };

  stored[idx] = updated;
  await saveAllReviews(stored);

  return NextResponse.json({ review: updated });
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
  const idx = stored.findIndex((r) => r.id === id);
  if (idx < 0) {
    return NextResponse.json({ error: "Отзыв не найден" }, { status: 404 });
  }

  const current = stored[idx];
  const { adminReply: _removed, ...rest } = current;
  stored[idx] = rest;
  await saveAllReviews(stored);

  return NextResponse.json({ review: stored[idx] });
}
