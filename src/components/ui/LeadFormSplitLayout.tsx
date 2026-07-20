import { SPACING } from "@/lib/spacing";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Десктоп/планшет: контент слева (col 1), форма справа (col 2). Мобильный: контент, затем форма. */
export const LEAD_FORM_SPLIT_GRID = cn(
  "grid items-start md:grid-cols-2",
  SPACING.splitGrid
);

export const LEAD_FORM_SPLIT_CONTENT = "order-1 min-w-0 md:col-start-1";

export const LEAD_FORM_SPLIT_FORM =
  "order-2 min-w-0 md:col-start-2 md:row-start-1 w-full";

interface LeadFormSplitLayoutProps {
  content: ReactNode;
  /** Правая колонка: только форма и «Есть вопросы?» (LeadFormWithExtras). */
  form: ReactNode;
  /** Полная ширина под двухколоночным блоком — продающие секции и т.п. */
  belowGrid?: ReactNode;
  className?: string;
  contentClassName?: string;
  formClassName?: string;
  belowGridClassName?: string;
}

export function LeadFormSplitLayout({
  content,
  form,
  belowGrid,
  className,
  contentClassName,
  formClassName,
  belowGridClassName,
}: LeadFormSplitLayoutProps) {
  return (
    <>
      <div className={cn(LEAD_FORM_SPLIT_GRID, className)}>
        <div className={cn(LEAD_FORM_SPLIT_CONTENT, contentClassName)}>{content}</div>
        <div className={cn(LEAD_FORM_SPLIT_FORM, formClassName)}>{form}</div>
      </div>
      {belowGrid && (
        <div className={cn(SPACING.heroBelowGrid, belowGridClassName)}>{belowGrid}</div>
      )}
    </>
  );
}
