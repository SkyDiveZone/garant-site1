"use client";

import { cn } from "@/lib/utils";
import { Maximize2, Pause, Play } from "lucide-react";
import { useRef, useState } from "react";

interface ReviewVideoPlayerProps {
  src: string;
  className?: string;
}

export function ReviewVideoPlayer({ src, className }: ReviewVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const enterFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      void video.requestFullscreen();
    } else if ("webkitEnterFullscreen" in video) {
      (video as HTMLVideoElement & { webkitEnterFullscreen: () => void }).webkitEnterFullscreen();
    }
  };

  return (
    <div className={cn("group relative overflow-hidden rounded-xl bg-slate-950 shadow-sm", className)}>
      <video
        ref={videoRef}
        src={src}
        controls
        playsInline
        preload="metadata"
        controlsList="nodownload"
        className="aspect-video w-full bg-black object-contain"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/50 to-transparent p-3 opacity-0 transition group-hover:opacity-100 sm:opacity-100">
        <button
          type="button"
          onClick={togglePlay}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow"
          aria-label={playing ? "Пауза" : "Воспроизвести"}
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5 fill-current" />}
        </button>
        <button
          type="button"
          onClick={enterFullscreen}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow"
          aria-label="Полноэкранный режим"
        >
          <Maximize2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
