"use client";

import { TelegramCard } from "@/components/ui/TelegramCard";
import { LeadForm, type LeadFormProps } from "@/components/ui/LeadForm";
import { cn } from "@/lib/utils";
interface LeadFormWithExtrasProps extends LeadFormProps {
  id?: string;
  wrapperClassName?: string;
  showTelegramCard?: boolean;
  formFieldId?: string;
}

export function LeadFormWithExtras({
  id,
  wrapperClassName,
  className,
  showTelegramCard = true,
  formFieldId,
  ...formProps
}: LeadFormWithExtrasProps) {
  return (
    <div id={id} className={cn("flex flex-col gap-4", wrapperClassName)}>
      <LeadForm
        className={className}
        formFieldId={formFieldId ?? (id ? `${id}-form` : undefined)}
        {...formProps}
      />
      {showTelegramCard && <TelegramCard />}
    </div>
  );
}

export { HeroTrustInfo } from "@/components/ui/HeroTrustInfo";
export { HeroTrustInfo as HeroFormBenefits } from "@/components/ui/HeroTrustInfo";
