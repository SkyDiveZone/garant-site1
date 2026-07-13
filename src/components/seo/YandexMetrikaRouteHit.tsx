"use client";

import { YANDEX_METRIKA_ID } from "@/lib/yandex-metrika";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

function YandexMetrikaRouteHitInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstHit = useRef(true);

  useEffect(() => {
    if (typeof window.ym !== "function") return;

    const query = searchParams.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (isFirstHit.current) {
      isFirstHit.current = false;
      return;
    }

    window.ym(YANDEX_METRIKA_ID, "hit", url);
  }, [pathname, searchParams]);

  return null;
}

export function YandexMetrikaRouteHit() {
  return (
    <Suspense fallback={null}>
      <YandexMetrikaRouteHitInner />
    </Suspense>
  );
}
