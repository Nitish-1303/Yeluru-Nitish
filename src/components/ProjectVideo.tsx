"use client";

import { useEffect, useRef, useState } from "react";

/** Attach media only as its card approaches the viewport, not during page load. */
export function ProjectVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (!("IntersectionObserver" in window)) {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setActive(true);
        observer.disconnect();
      }
    }, { rootMargin: "0px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      controls
      src={active ? src : undefined}
      preload="metadata"
      playsInline
      poster={poster}
      onPlay={() => { if (!active) setActive(true); }}
      className="aspect-video w-full rounded-lg border border-stone-200 bg-stone-950/5"
    >
    </video>
  );
}
