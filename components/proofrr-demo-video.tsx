"use client";

import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ProofrrDemoVideoProps = {
  src: string;
  poster: string;
  className?: string;
};

export function ProofrrDemoVideo({
  src,
  poster,
  className,
}: ProofrrDemoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const syncState = () => setIsPaused(video.paused);
    const attemptPlay = () => {
      video.muted = true;
      video.defaultMuted = true;

      void video.play().catch(() => {
        setIsPaused(true);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!video) {
          return;
        }

        if (entry.isIntersecting) {
          attemptPlay();
          return;
        }

        video.pause();
      },
      { threshold: 0.35 }
    );

    observer.observe(video);
    attemptPlay();

    video.addEventListener("play", syncState);
    video.addEventListener("pause", syncState);
    video.addEventListener("loadeddata", attemptPlay);
    video.addEventListener("canplay", attemptPlay);

    return () => {
      observer.disconnect();
      video.removeEventListener("play", syncState);
      video.removeEventListener("pause", syncState);
      video.removeEventListener("loadeddata", attemptPlay);
      video.removeEventListener("canplay", attemptPlay);
    };
  }, []);

  const handleManualPlay = () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    void video.play();
  };

  return (
    <div className={cn("group relative", className)}>
      <video
        ref={videoRef}
        key={src}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        className="block aspect-[16/10] w-full object-cover md:aspect-[16/9]"
      />

      {isPaused ? (
        <button
          type="button"
          onClick={handleManualPlay}
          className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle,rgba(16,16,17,0.08),rgba(16,16,17,0.22))] transition-opacity hover:bg-[radial-gradient(circle,rgba(16,16,17,0.12),rgba(16,16,17,0.28))]"
          aria-label="Play demo video"
        >
          <span className="flex items-center gap-3 rounded-full bg-white/94 px-5 py-3 text-sm font-semibold text-[#101011] shadow-[0_18px_40px_rgba(16,16,17,0.18)] backdrop-blur">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3563f0] text-white">
              <Play className="ml-0.5 h-4 w-4 fill-current" />
            </span>
            Play demo
          </span>
        </button>
      ) : null}
    </div>
  );
}
