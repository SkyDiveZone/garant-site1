import { ConversionActions } from "@/components/landing/ConversionActions";
import { HeroFormBenefits } from "@/components/ui/HeroFormBenefits";
import { PhoneList } from "@/components/ui/PhoneList";
import { Section } from "@/components/ui/Section";
import { TelegramLink } from "@/components/ui/TelegramLink";

interface ServiceBottomCTAProps {
  title: string;
  subtitle: string;
  formAnchor?: string;
  showContacts?: boolean;
}

export function ServiceBottomCTA({
  title,
  subtitle,
  formAnchor = "#lead-form",
  showContacts = true,
}: ServiceBottomCTAProps) {
  return (
    <Section className="relative overflow-hidden">
      <div className="gradient-mesh absolute inset-0" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        <div className="mt-6 flex justify-center">
          <ConversionActions size="large" formAnchor={formAnchor} />
        </div>
        {showContacts && (
          <div className="mt-6 space-y-2">
            <PhoneList
              variant="stack"
              linkClassName="text-lg font-semibold text-brand-600 hover:underline"
              iconClassName="text-brand-600"
            />
            <TelegramLink className="text-sky-600 hover:text-sky-700" iconSize={20} />
          </div>
        )}
        <div className="mt-6">
          <HeroFormBenefits />
        </div>
      </div>
    </Section>
  );
}
