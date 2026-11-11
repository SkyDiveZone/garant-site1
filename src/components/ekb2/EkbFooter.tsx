import { SITE } from "@/lib/data";
import Link from "next/link";

export function EkbFooter() {
  return (
    <footer className="site">
      <div className="wrap">
        <p>
          Гарант Мастер · Екатеринбург · <a href={`tel:${SITE.phoneRaw}`}>{SITE.phone}</a> ·{" "}
          <a href={SITE.telegram.url} target="_blank" rel="noopener noreferrer">
            Телеграм
          </a>{" "}
          ·{" "}
          <a href={SITE.max.url} target="_blank" rel="noopener noreferrer">
            Макс
          </a>
        </p>
        <p className="legal-links">
          <Link href="/privacy-policy">Система безопасности</Link>
          <Link href="/privacy-policy">Политика конфиденциальности</Link>
          <Link href="/user-agreement">Пользовательское соглашение</Link>
        </p>
      </div>
    </footer>
  );
}
