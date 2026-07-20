"use client";

import { ContactBlock } from "@/components/ui/ContactBlock";
import { cn } from "@/lib/utils";

interface ServiceContactBlockProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  theme?: "light" | "dark" | "on-dark";
  align?: "start" | "center" | "end";
}

/** Блок контактов: телефон + Telegram и MAX — единая структура по всему сайту. */
export function ServiceContactBlock({
  className,
  size = "md",
  theme = "light",
  align = "start",
}: ServiceContactBlockProps) {
  return (
    <ContactBlock
      className={cn("mt-6", className)}
      size={size}
      theme={theme}
      align={align}
    />
  );
}
