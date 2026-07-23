"use client";

import { Button } from "@/components/ui/Button";
import {
  COOKIE_CONSENT_EVENT,
  getCookieConsent,
  setCookieConsent,
} from "@/lib/cookie-consent";
import { LEGAL_URLS } from "@/lib/legal";
import Link from "next/link";
import { useEffect, useState } from "react";

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getCookieConsent() === null);

    const onChange = () => {
      setVisible(getCookieConsent() === null);
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление об использовании cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-slate-200 bg-white/95 p-4 shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur sm:p-5"
    >
      <div className="container-custom flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
          Мы используем файлы cookie и сервис Яндекс.Метрика для анализа посещаемости сайта.
          Продолжая пользоваться сайтом после нажатия «Принять», вы соглашаетесь на их
          использование. Подробнее — в{" "}
          <Link href={LEGAL_URLS.privacyPolicy} className="text-brand-600 hover:underline">
            Политике конфиденциальности
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setCookieConsent("declined")}
          >
            Отклонить
          </Button>
          <Button type="button" size="sm" onClick={() => setCookieConsent("accepted")}>
            Принять
          </Button>
        </div>
      </div>
    </div>
  );
}
