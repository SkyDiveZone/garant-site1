import { AdminReviewsPanel } from "@/components/admin/AdminReviewsPanel";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Отзывы | Админ-панель",
  robots: { index: false, follow: false },
};

export default async function AdminReviewsPage() {
  const ok = await isAdminAuthenticated();
  if (!ok) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-24">
      <div className="container-custom mx-auto max-w-6xl">
        <AdminReviewsPanel />
      </div>
    </div>
  );
}
