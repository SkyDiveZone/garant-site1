import { ConversionActions } from "@/components/landing/ConversionActions";
import { Section } from "@/components/ui/Section";

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
          <ConversionActions
            size="large"
            formAnchor={formAnchor}
            showContacts={showContacts}
            contactAlign="center"
            showTrustInfo
          />
        </div>
      </div>
    </Section>
  );
}
