"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { requestLeadForm } from "@/lib/lead-form-events";

type RequestLeadFormButtonProps = Omit<ButtonProps, "onClick" | "href">;

export function RequestLeadFormButton({
  children,
  ...props
}: RequestLeadFormButtonProps) {
  return (
    <Button {...props} onClick={requestLeadForm}>
      {children}
    </Button>
  );
}
