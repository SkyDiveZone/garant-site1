"use client";

import { SITE } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 left-4 right-4 z-40 flex gap-2 sm:hidden"
        >
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-4 py-4 text-sm font-semibold text-white shadow-2xl shadow-brand-600/40"
          >
            <Phone className="h-4 w-4" />
            Позвонить
          </a>
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-2xl bg-emerald-500 px-4 py-4 text-white shadow-2xl shadow-emerald-500/40"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
