"use client";

import { ReviewLightbox } from "@/components/reviews/ReviewLightbox";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

interface ReviewGalleryProps {
  photos: string[];
  variant?: "card" | "inline";
  className?: string;
}

export function ReviewGallery({ photos, variant = "card", className }: ReviewGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + photos.length) % photos.length);
  }, [photos.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % photos.length);
  }, [photos.length]);

  const openLightbox = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLightboxOpen(true);
  };

  if (photos.length === 0) return null;

  const heightClass = variant === "card" ? "h-56 sm:h-64 md:h-72" : "h-48 sm:h-56";

  return (
    <>
      <div className={cn("group relative w-full overflow-hidden bg-slate-100", className)}>
        <button
          type="button"
          onClick={openLightbox}
          className={cn("relative block w-full cursor-zoom-in", heightClass)}
          aria-label="Открыть фотографию"
        >
          <Image
            src={photos[index]}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 400px"
            unoptimized
            draggable={false}
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/20">
            <ZoomIn className="h-8 w-8 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
        </button>

        {photos.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md transition hover:bg-white"
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="h-5 w-5 text-slate-700" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-1.5 shadow-md transition hover:bg-white"
              aria-label="Следующее фото"
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
            <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {photos.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    i === index ? "w-5 bg-white" : "w-1.5 bg-white/60"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <ReviewLightbox
        photos={photos}
        initialIndex={index}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
