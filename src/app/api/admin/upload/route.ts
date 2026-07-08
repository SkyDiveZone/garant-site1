import { isAdminAuthenticated } from "@/lib/admin/auth";
import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const form = await request.formData();
    const file = form.get("file");
    if (!(file instanceof File) || !file.type.startsWith("image/") || file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "Некорректный файл" }, { status: 400 });
    }

    const dir = path.join(process.cwd(), "data", "review-photos");
    await fs.mkdir(dir, { recursive: true });
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${file.name.split(".").pop() ?? "jpg"}`;
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(dir, filename), buffer);
    return NextResponse.json({ url: `/api/review-photos/${filename}` });
  } catch (error) {
    console.error("[Admin upload] error:", error);
    return NextResponse.json({ error: "Ошибка загрузки" }, { status: 500 });
  }
}
