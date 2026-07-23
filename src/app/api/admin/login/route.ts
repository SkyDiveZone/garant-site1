import {
  adminCsrfCookieOptions,
  adminSessionCookieOptions,
  createAdminSessionToken,
  createCsrfToken,
  verifyAdminPassword,
  adminLogoutCookieOptions,
} from "@/lib/admin/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Админ-панель не настроена (ADMIN_PASSWORD)" },
      { status: 503 }
    );
  }

  const body = (await request.json()) as { password?: string };
  const password = body.password?.trim() ?? "";

  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "Неверный пароль" }, { status: 401 });
  }

  const token = createAdminSessionToken();
  const csrf = createCsrfToken();
  const cookieStore = await cookies();
  cookieStore.set(adminSessionCookieOptions(token));
  cookieStore.set(adminCsrfCookieOptions(csrf));

  return NextResponse.json({ success: true, csrfToken: csrf });
}

export async function DELETE() {
  const cookieStore = await cookies();
  for (const opts of adminLogoutCookieOptions()) {
    cookieStore.set(opts);
  }
  return NextResponse.json({ success: true });
}

export async function GET() {
  const cookieStore = await cookies();
  const csrf = cookieStore.get("admin_csrf")?.value ?? null;
  return NextResponse.json({ csrfToken: csrf });
}
