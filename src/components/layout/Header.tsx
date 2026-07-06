"use client";

import { Button } from "@/components/ui/Button";
import { LeadForm } from "@/components/ui/LeadForm";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || formOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, formOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-custom flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <Logo variant="header" />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-600"
                >
                  {link.label}
                </Link>
              ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="hidden items-center gap-2 text-sm font-semibold text-slate-900 transition-colors hover:text-brand-600 md:flex"
            >
              <Phone className="h-4 w-4 text-brand-600" />
              {SITE.phone}
            </a>
            <Button
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => setFormOpen(true)}
            >
              Вызвать мастера
            </Button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white lg:hidden"
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
              className="border-t border-slate-200 bg-white lg:hidden"
            >
              <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Мобильная навигация">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-brand-600"
                >
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </a>
                <Button
                  className="mt-2 w-full"
                  onClick={() => {
                    setMobileOpen(false);
                    setFormOpen(true);
                  }}
                >
                  Вызвать мастера
                </Button>
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
            className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-900/60 p-4 backdrop-blur-sm sm:items-center"
            onClick={() => setFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <LeadForm />
              <button
                type="button"
                onClick={() => setFormOpen(false)}
                className="mt-3 w-full rounded-xl py-2 text-sm text-white/80 hover:text-white"
              >
                Закрыть
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
