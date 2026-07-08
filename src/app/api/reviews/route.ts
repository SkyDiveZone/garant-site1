import { EKB_DISTRICTS } from "@/lib/data";
import { REVIEW_SERVICE_OPTIONS } from "@/lib/copy";
import {
  formatReviewDate,
  generateReviewId,
  getAllStoredReviews,
  saveStoredReviews,
} from "@/lib/reviews/store";
import type { Review } from "@/lib/reviews/types";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const service = searchParams.get("service") ?? undefined;

  const { getPublishedReviews } = await import("@/lib/reviews/store");
  const reviews = await getPublishedReviews(service || undefined);
  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";

    let name = "";
    let phone: string | undefined;
    let rating = 0;
    let service = "";
    let district = "";
    let text = "";
    const photos: string[] = [];

    if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      name = String(form.get("name") ?? "").trim();
      phone = String(form.get("phone") ?? "").trim() || undefined;
      rating = Number(form.get("rating"));
      service = String(form.get("service") ?? "").trim();
      district = String(form.get("district") ?? "").trim();
      text = String(form.get("text") ?? "").trim();

      const files = form.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
      for (const file of files.slice(0, 3)) {
        const url = await uploadReviewPhoto(file);
        if (url) photos.push(url);
      }
    } else {
      const body = (await request.json()) as {
        name?: string;
        phone?: string;
        rating?: number;
        service?: string;
        district?: string;
        text?: string;
      };
      name = body.name?.trim() ?? "";
      phone = body.phone?.trim() || undefined;
      rating = Number(body.rating);
      service = body.service?.trim() ?? "";
      district = body.district?.trim() ?? "";
      text = body.text?.trim() ?? "";
    }

    if (!name || name.length < 2) {
      return NextResponse.json({ error: "Укажите имя" }, { status: 400 });
    }
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: "Укажите оценку от 1 до 5" }, { status: 400 });
    }
    if (!service || !REVIEW_SERVICE_OPTIONS.includes(service as (typeof REVIEW_SERVICE_OPTIONS)[number])) {
      return NextResponse.json({ error: "Выберите услугу" }, { status: 400 });
    }
    if (!district || !EKB_DISTRICTS.includes(district as (typeof EKB_DISTRICTS)[number])) {
      return NextResponse.json({ error: "Выберите район" }, { status: 400 });
    }
    if (!text || text.length < 10) {
      return NextResponse.json({ error: "Напишите отзыв (минимум 10 символов)" }, { status: 400 });
    }

    const now = new Date().toISOString();
    const review: Review = {
      id: generateReviewId(),
      name,
      phone,
      rating,
      service,
      district,
      text,
      photos,
      status: "pending",
      createdAt: now,
      date: formatReviewDate(now),
    };

    const stored = await getAllStoredReviews();
    stored.push(review);
    await saveStoredReviews(stored);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Reviews] POST error:", error);
    return NextResponse.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}

async function uploadReviewPhoto(file: File): Promise<string | null> {
  const token = process.env.BLOB_READ_WRITE_TOKEN;
  const maxSize = 5 * 1024 * 1024;
  if (!file.type.startsWith("image/") || file.size > maxSize) return null;

  if (token) {
    try {
      const { put } = await import("@vercel/blob");
      const ext = file.name.split(".").pop() ?? "jpg";
      const blob = await put(`reviews/photos/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`, file, {
        access: "public",
        token,
      });
      return blob.url;
    } catch (error) {
      console.error("[Reviews] Photo upload failed:", error);
      return null;
    }
  }

  try {
    const { promises: fs } = await import("fs");
    const path = await import("path");
    const dir = path.join(process.cwd(), "data", "review-photos");
    await fs.mkdir(dir, { recursive: true });
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${file.name.split(".").pop() ?? "jpg"}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(dir, filename), buffer);
    return `/api/review-photos/${filename}`;
  } catch {
    return null;
  }
}
