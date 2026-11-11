"use client";

import { EkbLogo } from "@/components/ekb2/EkbLogo";
import { EKB_NAV } from "@/lib/ekb2/pages";
import { SITE } from "@/lib/data";
import { trackMaxClick, trackPhoneClick, trackTelegramClick } from "@/lib/yandex-metrika";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function EkbHeader() {
  const pathname = usePathname();

  return (
    <header>
      <div className="wrap bar">
        <EkbLogo />
        <nav aria-label="Основная навигация">
          {EKB_NAV.map((link) => {
            const current =
              pathname === link.href ||
              pathname.startsWith(`${link.href}/`) ||
              (link.key === "santehnik" && pathname === "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={current ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div>
          <a className="phone" href={`tel:${SITE.phoneRaw}`} onClick={trackPhoneClick}>
            {SITE.phone}
          </a>
          <div className="hours">круглосуточно, без выходных</div>
          <div className="messengers">
            <a
              href={SITE.telegram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackTelegramClick}
            >
              Телеграм
            </a>
            <a href={SITE.max.url} target="_blank" rel="noopener noreferrer" onClick={trackMaxClick}>
              Макс
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
