import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 max-w-3xl sm:mb-10",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <span className="mb-3 inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
          {badge}
        </span>
      )}
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

export function Section({ children, id, className, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        dark ? "bg-slate-950 text-white" : "",
        className
      )}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
