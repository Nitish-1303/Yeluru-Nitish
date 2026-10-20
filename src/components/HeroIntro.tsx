"use client";

import { useEffect, useState } from "react";
import { AppleHelloEffectNitish } from "@/components/apple-hello-effect-nitish";

export function HeroIntro() {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    if (mq.matches) setShowHello(false);
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) setShowHello(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return showHello && !reducedMotion ? (
    <div className="mb-6">
      <AppleHelloEffectNitish
        onAnimationComplete={() => setShowHello(false)}
        durationScale={0.8}
      />
    </div>
  ) : null;
}
