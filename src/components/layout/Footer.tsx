import { NAV_LINKS, SITE } from "@/lib/data";
import { POPULAR_SERVICES } from "@/lib/services";
import { Logo } from "@/components/ui/Logo";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer id="contacts" className="border-t border-slate-200 bg-slate-950 text-slate-400">
      <div className="container-custom section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Logo variant="footer" />
            </div>
            <p className="text-sm leading-relaxed">
              Профессиональный ремонт, сантехника и электрика в Екатеринбурге.
              Работаем с 2012 года.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Навигация
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Услуги
            </h3>
            <ul className="space-y-2.5 text-sm">
              {POPULAR_SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="transition-colors hover:text-white">
                    {s.categoryLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-brand-400" />
                {SITE.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} {SITE.name}. Все права защищены.
          </p>
          <p className="text-xs text-slate-500">
            Ремонт квартир, сантехника и электрика в Екатеринбурге
          </p>
        </div>
      </div>
    </footer>
  );
}
