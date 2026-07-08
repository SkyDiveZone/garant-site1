import { isAdminAuthenticated } from "@/lib/admin/auth";
import { redirect } from "next/navigation";

export default async function AdminIndexPage() {
  const ok = await isAdminAuthenticated();
  redirect(ok ? "/admin/reviews" : "/admin/login");
}
