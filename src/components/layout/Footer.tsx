import { FOOTER_INFO, FOOTER_SERVICES, PHONES, SITE } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="container-custom section-padding !py-16">
        <div className="grid min-w-0 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="min-w-0">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm leading-relaxed">
              Профессиональный ремонт квартир, сантехника и электрика в Екатеринбурге.
              Работаем с 2012 года. Гарантия до 12 месяцев.
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Наши услуги
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Контакты
            </h3>
            <ul className="space-y-2.5 text-sm">
              {PHONES.map((phone) => (
                <li key={phone.raw}>
                  <a
                    href={`tel:${phone.raw}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <span aria-hidden="true">📞</span>
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <span className="block text-slate-500">Telegram</span>
                <a
                  href={SITE.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {SITE.telegram.username}
                </a>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Информация
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_INFO.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
