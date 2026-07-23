"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ReviewLightboxProps {
  photos: string[];
  initialIndex?: number;
  open: boolean;
  onClose: () => void;
}

export function ReviewLightbox({
  photos,
  initialIndex = 0,
  open,
  onClose,
}: ReviewLightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const ignoreBackdropClose = useRef(true);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (open) {
      setIndex(initialIndex);
      ignoreBackdropClose.current = true;
      const timer = window.setTimeout(() => {
        ignoreBackdropClose.current = false;
      }, 350);
      return () => window.clearTimeout(timer);
    }
    ignoreBackdropClose.current = true;
  }, [open, initialIndex]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % photos.length);
  }, [photos.length]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, handleClose, prev, next]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (ignoreBackdropClose.current) return;
    handleClose();
  };

  if (!mounted || photos.length === 0) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="review-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Просмотр фотографии"
          className="fixed inset-0 z-[200] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-hidden="true"
          />

          <button
            type="button"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/25"
            aria-label="Закрыть"
          >
            <X className="h-6 w-6" />
          </button>

          {photos.length > 1 && (
            <>
              <button
                type="button"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
                aria-label="Предыдущее фото"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>
              <button
                type="button"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/25"
                aria-label="Следующее фото"
              >
                <ChevronRight className="h-7 w-7" />
              </button>
            </>
          )}

          <motion.div
            key={photos[index]}
            className="relative z-10 h-[min(80vh,720px)] w-[min(92vw,960px)]"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onPointerDown={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[index]}
              alt=""
              fill
              className="object-contain"
              sizes="100vw"
              unoptimized
              priority
            />
          </motion.div>

          <p
            className="absolute bottom-6 z-20 rounded-full bg-black/50 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm"
            onPointerDown={(e) => e.stopPropagation()}
          >
            {index + 1} из {photos.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
