"use client";

import { trackContactHref } from "@/lib/yandex-metrika";
import { type ComponentPropsWithoutRef, type MouseEvent } from "react";

type TrackedAnchorProps = ComponentPropsWithoutRef<"a">;

export function TrackedAnchor({ href, onClick, ...props }: TrackedAnchorProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    trackContactHref(href);
    onClick?.(event);
  };

  return <a href={href} onClick={handleClick} {...props} />;
}
