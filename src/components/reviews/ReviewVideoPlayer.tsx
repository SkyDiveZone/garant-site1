"use client";

import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

interface ReviewVideoPlayerProps {
  src: string;
  className?: string;
}

export function ReviewVideoPlayer({ src, className }: ReviewVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setStarted(true);
  };

  return (
    <div className={cn("relative overflow-hidden rounded-xl bg-slate-950 shadow-sm", className)}>
      <video
        ref={videoRef}
        src={src}
        controls={started}
        playsInline
        preload="metadata"
        controlsList="nodownload"
        className="aspect-video w-full bg-black object-contain"
        onPlay={() => setStarted(true)}
      />

      {!started && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/35 transition hover:bg-black/45"
          aria-label="Воспроизвести видео"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-brand-700 shadow-lg transition hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
