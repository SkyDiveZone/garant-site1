"use client";

import { useEffect } from "react";

const RETRY_KEY = "garant-css-retry";

function stylesheetsLoaded(): boolean {
  const cssLinks = document.querySelectorAll<HTMLLinkElement>(
    'link[rel="stylesheet"][href*="/_next/static/css/"]'
  );

  if (cssLinks.length === 0) {
    return false;
  }

  for (const link of cssLinks) {
    if (!link.sheet) {
      continue;
    }

    try {
      if (link.sheet.cssRules.length > 0) {
        return true;
      }
    } catch {
      // sheet exists but rules not readable — treat as loaded
      return true;
    }
  }

  // Tailwind utility probe
  const probe = document.createElement("div");
  probe.className = "hidden";
  probe.style.position = "absolute";
  probe.style.visibility = "hidden";
  document.body.appendChild(probe);
  const hiddenWorks = getComputedStyle(probe).display === "none";
  document.body.removeChild(probe);

  return hiddenWorks;
}

function retryStylesheets(): void {
  document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || !href.includes("/_next/static/css/")) {
      return;
    }

    const retry = document.createElement("link");
    retry.rel = "stylesheet";
    retry.href = `${href.split("?")[0]}?retry=${Date.now()}`;
    retry.media = "all";
    document.head.appendChild(retry);
  });
}

/**
 * Если основной CSS не применился (сеть, TSPU, таймаут) — повторно подгружает стили
 * и один раз перезагружает страницу.
 */
export function CssLoadGuard() {
  useEffect(() => {
    const verify = () => {
      if (stylesheetsLoaded()) {
        return;
      }

      retryStylesheets();

      window.setTimeout(() => {
        if (stylesheetsLoaded()) {
          return;
        }

        if (!sessionStorage.getItem(RETRY_KEY)) {
          sessionStorage.setItem(RETRY_KEY, "1");
          window.location.reload();
        }
      }, 1500);
    };

    if (document.readyState === "complete") {
      verify();
    } else {
      window.addEventListener("load", verify, { once: true });
    }

    const lateCheck = window.setTimeout(verify, 3000);
    return () => window.clearTimeout(lateCheck);
  }, []);

  return null;
}
