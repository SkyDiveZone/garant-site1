import { HERO } from "@/lib/data";
import { Award, Clock, Users, Wrench } from "lucide-react";
import Link from "next/link";

const TRUST_ICONS = [Users, Award, Clock, Wrench] as const;

export function ServiceTrustStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-6">
      <div className="page-container">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {HERO.trustItems.map((item, index) => {
            const Icon = TRUST_ICONS[index % TRUST_ICONS.length];
            return (
              <div key={item.label} className="flex items-center gap-3 rounded-xl px-2 py-1">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold leading-none text-slate-900">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-4 text-center text-sm text-slate-600">
          Официальная гарантия до 12 месяцев ·{" "}
          <Link href="/otzyvy" className="font-medium text-brand-600 hover:underline">
            Читать отзывы клиентов
          </Link>
        </p>
      </div>
    </section>
  );
}
