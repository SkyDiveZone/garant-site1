import { AdminLoginForm } from "@/components/admin/AdminLoginForm";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  if (await isAdminAuthenticated()) {
    redirect("/admin/reviews");
  }

  return (
    <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h1 className="text-center font-display text-2xl font-bold text-slate-900">
        Вход в админ-панель
      </h1>
      <p className="mt-2 text-center text-sm text-slate-500">Гарант Мастер — модерация отзывов</p>
      <div className="mt-8">
        <AdminLoginForm />
      </div>
    </div>
  );
}
