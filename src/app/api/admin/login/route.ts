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

const loginAttempts = new Map<string, { count: number; resetAt: number }>();
const LOGIN_LIMIT = 5;
const LOGIN_WINDOW_MS = 15 * 60 * 1000;

function getClientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isLoginRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = loginAttempts.get(ip);
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + LOGIN_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > LOGIN_LIMIT;
}

export async function POST(request: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Админ-панель не настроена (ADMIN_PASSWORD)" },
      { status: 503 }
    );
  }

  const ip = getClientIp(request);
  if (isLoginRateLimited(ip)) {
    return NextResponse.json(
      { error: "Слишком много попыток входа. Попробуйте позже." },
      { status: 429 }
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
