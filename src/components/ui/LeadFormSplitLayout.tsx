import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/** Десктоп/планшет: контент слева (col 1), форма справа (col 2). Мобильный: контент, затем форма. */
export const LEAD_FORM_SPLIT_GRID =
  "grid items-start gap-10 md:grid-cols-2 md:gap-12 lg:gap-16";

export const LEAD_FORM_SPLIT_CONTENT = "order-1 min-w-0 md:col-start-1";

export const LEAD_FORM_SPLIT_FORM =
  "order-2 min-w-0 md:col-start-2 md:row-start-1 w-full";

interface LeadFormSplitLayoutProps {
  content: ReactNode;
  form: ReactNode;
  belowForm?: ReactNode;
  className?: string;
  contentClassName?: string;
  formClassName?: string;
  belowFormClassName?: string;
}

export function LeadFormSplitLayout({
  content,
  form,
  belowForm,
  className,
  contentClassName,
  formClassName,
  belowFormClassName,
}: LeadFormSplitLayoutProps) {
  return (
    <div className={cn(LEAD_FORM_SPLIT_GRID, className)}>
      <div className={cn(LEAD_FORM_SPLIT_CONTENT, contentClassName)}>{content}</div>
      <div className={cn(LEAD_FORM_SPLIT_FORM, formClassName)}>
        {form}
        {belowForm && (
          <div className={cn("mt-8 md:mt-10", belowFormClassName)}>{belowForm}</div>
        )}
      </div>
    </div>
  );
}
