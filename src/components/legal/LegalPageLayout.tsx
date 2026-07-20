import Link from "next/link";
import { LEGAL_URLS } from "@/lib/legal";

interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <section className="section-padding pt-24 sm:pt-28">
      <div className="container-custom mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h1>
        <div className="prose-legal mt-6 space-y-5 text-sm leading-relaxed text-slate-600 sm:text-base">
          {children}
        </div>
        <Link
          href="/"
          className="mt-8 inline-block text-sm font-medium text-brand-600 hover:underline"
        >
          ← На главную
        </Link>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold text-slate-900">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function LegalLink({
  href,
  children,
}: {
  href: (typeof LEGAL_URLS)[keyof typeof LEGAL_URLS];
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-brand-600 hover:underline">
      {children}
    </Link>
  );
}
