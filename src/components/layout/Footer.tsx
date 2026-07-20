import { FOOTER_INFO, FOOTER_SERVICES, PHONES, SITE } from "@/lib/data";
import { Logo } from "@/components/ui/Logo";
import { TrackedAnchor } from "@/components/ui/TrackedAnchor";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="container-custom section-padding !py-12">
        <div className="grid min-w-0 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="min-w-0">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm leading-relaxed">
              Профессиональный ремонт квартир, сантехника и электрика в Екатеринбурге.
              Работаем с 2012 года. Гарантия до 12 месяцев.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <span>{SITE.address}</span>
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
              <span>{SITE.hours}</span>
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
                  <TrackedAnchor
                    href={`tel:${phone.raw}`}
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <span aria-hidden="true">📞</span>
                    {phone.display}
                  </TrackedAnchor>
                </li>
              ))}
              <li>
                <span className="block text-slate-500">Telegram</span>
                <TrackedAnchor
                  href={SITE.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {SITE.telegram.username}
                </TrackedAnchor>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                <span>{SITE.hours}</span>
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

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
