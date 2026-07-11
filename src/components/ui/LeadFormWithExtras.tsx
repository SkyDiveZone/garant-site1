"use client";

import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { TelegramCard } from "@/components/ui/TelegramCard";
import { LeadForm, type LeadFormProps } from "@/components/ui/LeadForm";
import { cn } from "@/lib/utils";

interface LeadFormWithExtrasProps extends LeadFormProps {
  id?: string;
  wrapperClassName?: string;
  showTelegramCard?: boolean;
}

export function LeadFormWithExtras({
  id,
  wrapperClassName,
  className,
  showTelegramCard = true,
  ...formProps
}: LeadFormWithExtrasProps) {
  return (
    <div id={id} className={cn("flex flex-col gap-4", wrapperClassName)}>
      <LeadForm className={className} {...formProps} />
      {showTelegramCard && <TelegramCard />}
    </div>
  );
}

export { HeroFormBenefits };
