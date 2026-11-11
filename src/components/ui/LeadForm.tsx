"use client";

import { Button } from "@/components/ui/Button";
import { COPY } from "@/lib/copy";
import {
  LEAD_SCHEDULE_CUSTOM,
  LEAD_SCHEDULE_OPTIONS,
  type LeadScheduleValue,
} from "@/lib/lead-form";
import { LegalConsentCheckbox } from "@/components/ui/LegalConsentCheckbox";
import { getLeadFormLabelsFromPath } from "@/lib/lead-form-labels";
import { formatRuPhone } from "@/lib/phone-mask";
import { problemExampleForPath } from "@/lib/lead-problem-example";
import { trackFormSubmit } from "@/lib/yandex-metrika";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useId, type FormEvent } from "react";

export interface LeadFormProps {
  variant?: "default" | "compact" | "inline";
  className?: string;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  problemPlaceholder?: string;
  id?: string;
  formFieldId?: string;
  onSuccess?: () => void;
}

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 placeholder:text-slate-400 transition-colors focus:border-brand-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20";

const textareaClassName = `${inputClassName} min-h-[112px] resize-y`;
const compactTextareaClassName = `${inputClassName} min-h-[72px] resize-y py-3`;

const labelClassName = "mb-1.5 block text-sm font-medium text-slate-700";

function resetFormState(setters: {
  setName: (v: string) => void;
  setPhone: (v: string) => void;
  setAddress: (v: string) => void;
  setProblem: (v: string) => void;
  setSchedule: (v: LeadScheduleValue) => void;
  setCustomDate: (v: string) => void;
  setCustomTime: (v: string) => void;
  setConsent: (v: boolean) => void;
  setConsentError: (v: boolean) => void;
}) {
  setters.setName("");
  setters.setPhone("");
  setters.setAddress("");
  setters.setProblem("");
  setters.setSchedule("asap");
  setters.setCustomDate("");
  setters.setCustomTime("");
  setters.setConsent(false);
  setters.setConsentError(false);
}

export function LeadForm({
  variant = "default",
  className,
  title = "Вызвать мастера",
  subtitle = COPY.leadFormSubtitle,
  submitLabel,
  problemPlaceholder,
  onSuccess,
  ...props
}: LeadFormProps) {
  const pathname = usePathname();
  const resolvedSubmitLabel =
    submitLabel ?? getLeadFormLabelsFromPath(pathname).submitLabel;
  const resolvedProblemPlaceholder =
    problemPlaceholder ?? problemExampleForPath(pathname);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [problem, setProblem] = useState("");
  const [schedule, setSchedule] = useState<LeadScheduleValue>("asap");
  const [customDate, setCustomDate] = useState("");
  const [customTime, setCustomTime] = useState("");
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const showCustomDateTime = schedule === LEAD_SCHEDULE_CUSTOM;
  const uniqueId = useId();
  const fieldId = props.formFieldId ?? props.id ?? `${variant}-${uniqueId}`;
  const todayStr = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (showCustomDateTime && (!customDate.trim() || !customTime.trim())) {
      setStatus("error");
      setErrorMessage("Укажите дату и время для визита мастера");
      return;
    }

    if (!consent) {
      setConsentError(true);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          address: address.trim() || undefined,
          problem: problem.trim() || undefined,
          schedule,
          customDate: showCustomDateTime ? customDate.trim() : undefined,
          customTime: showCustomDateTime ? customTime.trim() : undefined,
          pageUrl: pathname || "/",
        }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        throw new Error(data.error ?? "Не удалось отправить заявку");
      }

      trackFormSubmit();
      setStatus("success");
      resetFormState({
        setName,
        setPhone,
        setAddress,
        setProblem,
        setSchedule,
        setCustomDate,
        setCustomTime,
        setConsent,
        setConsentError,
      });
      onSuccess?.();
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
      id={props.id}
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-200/50 sm:p-6",
        isInline && "border-0 bg-transparent p-0 shadow-none",
        isCompact && "border-0 bg-transparent p-0 shadow-none",
        className
      )}
    >
      {!isInline && !isCompact && (
        <div className="mb-6">
          <h3 className="font-display text-xl font-bold text-slate-900 sm:text-2xl">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={cn("space-y-4", isCompact && "space-y-3")} noValidate>
        <div className={cn(isInline && "space-y-4")}>
          <div className={cn("space-y-4", isInline && "sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0")}>
            <div>
              <label htmlFor={`name-${fieldId}`} className={labelClassName}>
                Ваше имя
              </label>
              <input
                id={`name-${fieldId}`}
                type="text"
                required
                minLength={2}
                autoComplete="name"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClassName}
              />
            </div>
            <div>
              <label htmlFor={`phone-${fieldId}`} className={labelClassName}>
                Телефон
              </label>
              <input
                id={`phone-${fieldId}`}
                type="tel"
                required
                autoComplete="tel"
                inputMode="tel"
                placeholder="+7 (___) ___-__-__"
                maxLength={18}
                value={phone}
                onChange={(e) => setPhone(formatRuPhone(e.target.value, phone))}
                className={inputClassName}
              />
            </div>
          </div>

          <details className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
            <summary className="cursor-pointer text-sm font-medium text-slate-700">
              Уточнить адрес и время
              <span className="ml-1 font-normal text-slate-500">(необязательно)</span>
            </summary>
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor={`address-${fieldId}`} className={labelClassName}>
                  Адрес выезда мастера
                </label>
                <input
                  id={`address-${fieldId}`}
                  type="text"
                  autoComplete="street-address"
                  placeholder="Улица, дом, квартира"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor={`problem-${fieldId}`} className={labelClassName}>
                  Опишите проблему
                </label>
                <textarea
                  id={`problem-${fieldId}`}
                  rows={isCompact ? 2 : 4}
                  maxLength={2000}
                  placeholder={resolvedProblemPlaceholder}
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  className={isCompact ? compactTextareaClassName : textareaClassName}
                />
              </div>

              <div>
                <label htmlFor={`schedule-${fieldId}`} className={labelClassName}>
                  Когда удобно принять мастера?
                </label>
                <select
                  id={`schedule-${fieldId}`}
                  value={schedule}
                  onChange={(e) => setSchedule(e.target.value as LeadScheduleValue)}
                  className={inputClassName}
                >
                  {LEAD_SCHEDULE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {showCustomDateTime && (
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`date-${fieldId}`} className={labelClassName}>
                      Дата
                    </label>
                    <input
                      id={`date-${fieldId}`}
                      type="date"
                      min={todayStr}
                      required
                      value={customDate}
                      onChange={(e) => setCustomDate(e.target.value)}
                      className={inputClassName}
                    />
                  </div>
                  <div>
                    <label htmlFor={`time-${fieldId}`} className={labelClassName}>
                      Время
                    </label>
                    <input
                      id={`time-${fieldId}`}
                      type="time"
                      required
                      value={customTime}
                      onChange={(e) => setCustomTime(e.target.value)}
                      className={inputClassName}
                    />
                  </div>
                </div>
              )}
            </div>
          </details>
        </div>

        <div className="mb-2">
          <LegalConsentCheckbox
            id={`consent-${fieldId}`}
            checked={consent}
            onChange={(checked) => {
              setConsent(checked);
              if (checked) setConsentError(false);
            }}
            showError={consentError}
          />
        </div>

        <Button type="submit" size="lg" disabled={status === "loading"} className="w-full">
          {status === "loading" ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Phone className="h-4 w-4" />
              {resolvedSubmitLabel}
            </>
          )}
        </Button>

        {!isCompact && (
          <p className="flex items-start gap-2 text-xs text-slate-500">
            <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            Адрес необязателен — можно уточнить по телефону после заявки
          </p>
        )}

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
