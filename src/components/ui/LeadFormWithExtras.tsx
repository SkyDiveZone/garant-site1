"use client";

import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { LeadForm, type LeadFormProps } from "@/components/ui/LeadForm";
import { TelegramCard } from "@/components/ui/TelegramCard";
import { cn } from "@/lib/utils";

interface LeadFormWithExtrasProps extends LeadFormProps {
  id?: string;
  wrapperClassName?: string;
}

export function LeadFormWithExtras({
  id,
  wrapperClassName,
  className,
  ...formProps
}: LeadFormWithExtrasProps) {
  return (
    <div id={id} className={cn("flex flex-col gap-4", wrapperClassName)}>
      <LeadForm className={className} {...formProps} />
      <TelegramCard />
      <HeroFormBenefits />
    </div>
  );
}
