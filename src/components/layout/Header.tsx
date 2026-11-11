"use client";

import { HeaderContacts } from "@/components/layout/HeaderContacts";
import { LeadFormWithExtras } from "@/components/ui/LeadFormWithExtras";
import { Logo } from "@/components/ui/Logo";
import { ContactBlock } from "@/components/ui/ContactBlock";
import { Button } from "@/components/ui/Button";
import { HEADER_PHONES, NAV_LINKS, SITE } from "@/lib/data";
import { OPEN_LEAD_FORM_EVENT } from "@/lib/lead-form-events";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || formOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, formOpen]);

  useEffect(() => {
    const onOpenLeadForm = () => {
      setMobileOpen(false);
      setFormOpen(true);
    };
    window.addEventListener(OPEN_LEAD_FORM_EVENT, onOpenLeadForm);
    return () => window.removeEventListener(OPEN_LEAD_FORM_EVENT, onOpenLeadForm);
  }, []);

  useEffect(() => {
    if (!formOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFormOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [formOpen]);

  const openForm = () => setFormOpen(true);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-[80] border-b border-[#e3dcd0] bg-[rgba(243,239,230,0.94)] text-ink backdrop-blur-md transition-shadow duration-300",
          scrolled && "shadow-sm shadow-black/5"
        )}
      >
        <div className="container-custom flex h-[4.25rem] min-w-0 items-center justify-between gap-3 lg:gap-5">
          <Logo variant="header" className="min-w-0 shrink" />

          <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Основная навигация">
            {NAV_LINKS.map((link) => {
              const current =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    "rounded-full px-2.5 py-2 text-sm font-semibold transition-colors",
                    current ? "bg-cream-dark text-ink" : "text-muted hover:text-ink"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <Button size="sm" className="whitespace-nowrap px-3 lg:hidden" href={`tel:${HEADER_PHONES[0].raw}`}>
              Позвонить
            </Button>
            <HeaderContacts onOpenForm={openForm} className="hidden lg:flex" />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#e3dcd0] bg-white text-ink lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-[#e3dcd0] bg-cream lg:hidden"
            >
              <nav className="container-custom flex flex-col gap-1 py-4" aria-label="Мобильная навигация">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-2 py-2.5 text-sm font-semibold text-ink hover:bg-cream-dark"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button className="mt-2 w-full" href={`tel:${HEADER_PHONES[0].raw}`}>
                  Позвонить · {HEADER_PHONES[0].display}
                </Button>
                <div className="mt-3 border-t border-[#e3dcd0] pt-3">
                  <p className="mb-2 text-xs text-muted">{SITE.hours}</p>
                  <ContactBlock theme="light" size="xs" align="start" phones={HEADER_PHONES} />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {formOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Заявка"
            className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto bg-black/55 p-4 sm:items-center"
            data-lead-form-modal="true"
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              className="my-auto flex max-h-[calc(100dvh-2rem)] w-full max-w-lg flex-col overflow-y-auto rounded-[1.5rem] bg-cream shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex shrink-0 items-center justify-between gap-3 border-b border-black/10 bg-cream px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:rounded-t-[1.5rem]">
                <p className="text-sm font-semibold text-ink">Заявка</p>
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 text-sm font-semibold text-ink shadow ring-1 ring-black/10"
                >
                  <X className="h-4 w-4" />
                  Закрыть
                </button>
              </div>
              <div className="px-3 pb-4 pt-3 sm:px-4">
                <LeadFormWithExtras
                  variant="inline"
                  className="border-0 bg-transparent p-3 shadow-none [&_input]:py-2.5 [&_select]:py-2.5 [&_textarea]:min-h-14 [&_textarea]:py-2.5"
                  showTelegramCard={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
