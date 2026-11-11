"use client";

import {
  HOME_DESIGN_BODY,
  HOME_DESIGN_CSS,
  HOME_DESIGN_SCRIPT,
} from "@/components/home-design/content";
import { HomeReviews } from "@/components/home-design/HomeReviews";
import { trackContactHref, trackFormSubmit } from "@/lib/yandex-metrika";
import { memo, useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const HomeMarkup = memo(function HomeMarkup({
  onReviewsSlot,
}: {
  onReviewsSlot: (slot: HTMLElement | null) => void;
}) {
  useEffect(() => {
    const run = new Function(
      "trackFormSubmit",
      "trackContactHref",
      `const homeRoot = document.querySelector(".home-design");
       if (!homeRoot || homeRoot.dataset.bound === "1") return;
       homeRoot.dataset.bound = "1";
       ${HOME_DESIGN_SCRIPT}`
    );
    run(trackFormSubmit, trackContactHref);
    onReviewsSlot(document.getElementById("home-reviews-slot"));
  }, [onReviewsSlot]);

  return <div className="home-design" dangerouslySetInnerHTML={{ __html: HOME_DESIGN_BODY }} />;
});

export function HomeDesign() {
  const [reviewsSlot, setReviewsSlot] = useState<HTMLElement | null>(null);
  const onReviewsSlot = useCallback((slot: HTMLElement | null) => {
    setReviewsSlot(slot);
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HOME_DESIGN_CSS }} />
      <HomeMarkup onReviewsSlot={onReviewsSlot} />
      {reviewsSlot ? createPortal(<HomeReviews />, reviewsSlot) : null}
    </>
  );
}
