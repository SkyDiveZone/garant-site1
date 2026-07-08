"use client";

import { Button } from "@/components/ui/Button";
import { LegalConsentCheckbox } from "@/components/ui/LegalConsentCheckbox";
import { COPY } from "@/lib/copy";
import { trackFormSubmit } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

export interface LeadFormProps {
  variant?: "default" | "compact" | "inline";
  className?: string;
  title?: string;
  subtitle?: string;
}

export function LeadForm({
  variant = "default",
  className,
  title = "Вызвать мастера",
  subtitle = COPY.leadFormSubtitle,
}: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!consent) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Не удалось отправить заявку");
      }

      trackFormSubmit();
      setStatus("success");
      setName("");
      setPhone("");
      setConsent(false);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Не удалось отправить заявку. Попробуйте позже."
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center",
          className
        )}
      >
        <CheckCircle2 className="mb-3 h-12 w-12 text-emerald-500" />
        <p className="text-lg font-semibold text-emerald-900">Заявка принята!</p>
        <p className="mt-1 text-sm text-emerald-700">{COPY.leadFormSuccessDetail}</p>
      </motion.div>
    );
  }

  const isCompact = variant === "compact";
  const isInline = variant === "inline";

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8",
        isInline && "border-0 bg-transparent p-0 shadow-none",
        className
      )}
    >
      {!isInline && (
        <div className="mb-6">
          <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div className={cn(isInline && "flex flex-col gap-3 sm:flex-row sm:items-end")}>
          <div className={cn("space-y-4", isInline && "flex flex-1 flex-col gap-3 sm:flex-row sm:space-y-0")}>
            <div className={cn(isInline && "flex-1")}>
              <label htmlFor={`name-${variant}`} className="sr-only">
                Ваше имя
              </label>
              <input
                id={`name-${variant}`}
                type="text"
                required
                minLength={2}
                autoComplete="name"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
            <div className={cn(isInline && "flex-1")}>
              <label htmlFor={`phone-${variant}`} className="sr-only">
                Телефон
              </label>
              <input
                id={`phone-${variant}`}
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="+7 (___) ___-__-__"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20"
              />
            </div>
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className={cn("w-full", isInline && "sm:w-auto sm:shrink-0")}
          >
            {status === "loading" ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Phone className="h-4 w-4" />
                Вызвать мастера
              </>
            )}
          </Button>
        </div>

        <LegalConsentCheckbox
          id={`consent-${variant}`}
          checked={consent}
          onChange={(value) => {
            setConsent(value);
            if (value) setConsentError(false);
          }}
          showError={consentError}
        />

        {status === "error" && errorMessage && (
          <div
            role="alert"
            className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
}
