"use client";

import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { ROUND_THE_CLOCK } from "@/lib/copy";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const STORAGE_KEY = "gm-welcome-lead-dismissed";
const OPEN_DELAY_MS = 2000;

export function WelcomeLeadPopup() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage errors
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      dismissed = false;
    }
    if (dismissed) return;

    const timer = window.setTimeout(() => {
      if (document.querySelector('[data-lead-form-modal="true"]')) return;
      setOpen(true);
    }, OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dismiss();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, dismiss]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/55 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-lead-title"
          aria-describedby="welcome-lead-subtitle"
          data-lead-form-modal="true"
          onClick={dismiss}
        >
          <motion.div
            ref={dialogRef}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            className="my-auto flex h-auto w-full max-w-lg flex-col rounded-[1.5rem] bg-cream shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-black/10 bg-cream px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:rounded-t-[1.5rem]">
              <div className="min-w-0">
                <h2
                  id="welcome-lead-title"
                  className="text-sm font-semibold text-ink"
                >
                  Нужен мастер в Екатеринбурге?
                </h2>
                <p id="welcome-lead-subtitle" className="mt-0.5 text-xs leading-snug text-muted">
                  Перезвоним за 5 минут. {ROUND_THE_CLOCK.hours}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={dismiss}
                className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 text-sm font-semibold text-ink shadow ring-1 ring-black/10"
                aria-label="Закрыть"
              >
                <X className="h-4 w-4" />
                Закрыть
              </button>
            </div>

            <div className="px-3 pb-4 pt-3 sm:px-4">
              <LeadFormWithExtras
                variant="inline"
                formFieldId="welcome-lead-form"
                className="border-0 bg-transparent p-3 shadow-none [&_input]:py-2.5 [&_select]:py-2.5 [&_textarea]:min-h-14 [&_textarea]:py-2.5"
                showTelegramCard={false}
                onSuccess={() => {
                  window.setTimeout(dismiss, 1500);
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
