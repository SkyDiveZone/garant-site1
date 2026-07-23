import { isAdminAuthenticated, verifyCsrfToken } from "@/lib/admin/auth";
import { saveReviewPhoto } from "@/lib/reviews/upload";
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

export async function POST(request: Request) {
  const denied = await requireAdmin(request);
  if (denied) return denied;

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: "Файл не выбран" }, { status: 400 });
    }

    const url = await saveReviewPhoto(file);
    if (!url) {
      return NextResponse.json(
        { error: "Недопустимый файл (jpg, png, webp, до 10 МБ)" },
        { status: 400 }
      );
    }

    return NextResponse.json({ url });
  } catch (error) {
    console.error("[Admin upload] error:", error);
    return NextResponse.json({ error: "Ошибка загрузки" }, { status: 500 });
  }
}
