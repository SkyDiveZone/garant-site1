import { AdminReviewsPanel } from "@/components/admin/AdminReviewsPanel";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Модерация отзывов — Админ",
  robots: { index: false, follow: false },
};

export default async function AdminReviewsPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return <AdminReviewsPanel />;
}
