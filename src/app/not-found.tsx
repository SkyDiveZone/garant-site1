import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="page-hero__inner mx-auto max-w-2xl text-center">
        <p className="font-display text-6xl font-bold text-brand-600">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
          Страница не найдена
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Возможно, ссылка устарела или страница была перемещена. Перейдите на главную или
          выберите нужную услугу.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            На главную
          </Button>
          <Button href="/#services" variant="outline" size="lg">
            К услугам
          </Button>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Нужна помощь?{" "}
          <Link href="/#contacts" className="font-medium text-brand-600 hover:text-brand-700">
            Контакты
          </Link>
        </p>
      </div>
    </section>
  );
}
