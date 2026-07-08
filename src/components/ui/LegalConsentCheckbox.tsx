"use client";

import { LEGAL_CONSENT_ERROR, LEGAL_URLS } from "@/lib/legal";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LegalConsentCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  showError?: boolean;
  className?: string;
}

export function LegalConsentCheckbox({
  id,
  checked,
  onChange,
  showError,
  className,
}: LegalConsentCheckboxProps) {
  return (
    <div className={cn(className)}>
      <label htmlFor={id} className="flex cursor-pointer items-start gap-2.5">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
        />
        <span className="text-xs leading-relaxed text-slate-600">
          Нажимая кнопку, я соглашаюсь с{" "}
          <Link href={LEGAL_URLS.privacyPolicy} className="text-brand-600 hover:underline">
            Политикой конфиденциальности
          </Link>{" "}
          и{" "}
          <Link href={LEGAL_URLS.userAgreement} className="text-brand-600 hover:underline">
            Пользовательским соглашением
          </Link>
          .
        </span>
      </label>
      {showError && (
        <p role="alert" className="mt-2 text-xs text-red-600">
          {LEGAL_CONSENT_ERROR}
        </p>
      )}
    </div>
  );
}
