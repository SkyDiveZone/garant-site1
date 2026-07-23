import { isAdminAuthenticated, verifyCsrfToken } from "@/lib/admin/auth";
import { getAllReviews, saveAllReviews } from "@/lib/reviews/store";
import { deleteReviewVideo, MAX_VIDEO_SIZE, saveReviewVideo } from "@/lib/reviews/video-upload";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 120;

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

export async function POST(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  try {
    const form = await request.formData();
    const id = String(form.get("id") ?? "");
    const file = form.get("file");

    if (!id) {
      return NextResponse.json({ error: "id обязателен" }, { status: 400 });
    }
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: "Файл не выбран" }, { status: 400 });
    }

    const stored = await getAllReviews();
    const idx = stored.findIndex((r) => r.id === id);
    if (idx < 0) {
      return NextResponse.json({ error: "Отзыв не найден" }, { status: 404 });
    }

    const url = await saveReviewVideo(file);
    if (!url) {
      const maxMb = Math.round(MAX_VIDEO_SIZE / (1024 * 1024));
      return NextResponse.json(
        { error: `Недопустимый файл (mp4, webm, mov, до ${maxMb} МБ)` },
        { status: 400 }
      );
    }

    const current = stored[idx];
    if (current.video) {
      await deleteReviewVideo(current.video);
    }

    const updated = { ...current, video: url };
    stored[idx] = updated;
    await saveAllReviews(stored);

    return NextResponse.json({ review: updated, url });
  } catch (error) {
    console.error("[Admin review video] POST error:", error);
    return NextResponse.json({ error: "Ошибка загрузки видео" }, { status: 500 });
  }
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
  if (current.video) {
    await deleteReviewVideo(current.video);
  }

  const { video: _removed, ...rest } = current;
  stored[idx] = rest;
  await saveAllReviews(stored);

  return NextResponse.json({ review: stored[idx] });
}
