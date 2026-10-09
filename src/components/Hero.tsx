"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Youtube, Calendar, ArrowUpRight } from "lucide-react";
import { AppleHelloEffectNitish } from "@/components/apple-hello-effect-nitish";
import { userData } from "../data/user.ts";
import { WireframeBlocks } from "./WireframeBlocks.tsx";

// Clean custom X (formerly Twitter) icon
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    if (mq.matches) {
      setShowHello(false); // Skip animation for reduced motion
    }
    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) setShowHello(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % userData.hero.flippingPhrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section id="hero" className="pt-6 sm:pt-10 pb-8 border-b border-neutral-200 dark:border-neutral-800/80">
      {/* Apple Hello Effect - plays once on load, settles into the page */}
      {showHello && (
        <div className="mb-6">
          <AppleHelloEffectNitish
            onAnimationComplete={() => setShowHello(false)}
            durationScale={0.8}
          />
        </div>
      )}

      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8">
        {/* Left column: Name, Avatar fallback, Role, Flipping phrases, Socials */}
        <div className="flex-1 space-y-4">
          {/* Avatar and Name row */}
          <div className="flex items-center gap-3.5">
            {/* Circular photo slot with intentional NY monogram fallback */}
            <div
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center shrink-0 shadow-xs"
              aria-label="Nitish Yeluru avatar fallback"
            >
              {userData.hero.photoUrl ? (
                <img
                  src={userData.hero.photoUrl}
                  alt={userData.name}
                  className="w-full h-full object-cover object-[68%_center]"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100 font-mono font-bold text-sm tracking-tighter select-none">
                  NY
                </div>
              )}
            </div>

            <div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                NITISH
              </h1>
              <p className="mt-1 text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-300">
                Full-stack &amp; GenAI engineer - shipping voice AI in production
                at Ethos, with merged PRs in Reflex and Magnitude.
              </p>
            </div>
          </div>

          <a 
            href="#contact"
            className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
            <span>Open to founding engineer roles at US startups (remote from India)</span>
          </a>

          {/* Flipping one-liners ticker */}
          <div className="h-6 sm:h-7 overflow-hidden text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 flex items-center">
            {reducedMotion ? (
              <span className="truncate">{userData.hero.flippingPhrases[0]}</span>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="truncate flex items-center gap-1.5"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span>{userData.hero.flippingPhrases[phraseIndex]}</span>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Social links row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <a
              href={userData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (Nitish-1303)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={userData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (yeluru-nitish)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={userData.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X profile (@Vibe_User)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800 transition-colors"
            >
              <XIcon className="w-3.5 h-3.5" />
              <span>X</span>
            </a>

            <a
              href={userData.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube (@buildwithnitish)"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800 transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>

            <a
              href={userData.contact.topmate}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Topmate 1:1 sessions"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-neutral-50 hover:bg-neutral-200/80 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Topmate</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>

          <nav aria-label="Featured sections" className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-xs font-medium text-stone-700 dark:text-neutral-300">
            <a
              href="#work-with-me"
              className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-300 dark:focus-visible:outline-neutral-300"
            >
              Work with me
            </a>
            <a
              href="#what-im-building"
              className="underline decoration-stone-300 underline-offset-4 hover:decoration-stone-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-700 dark:decoration-neutral-700 dark:hover:decoration-neutral-300 dark:focus-visible:outline-neutral-300"
            >
              What I'm building
            </a>
          </nav>
        </div>

        {/* Right column: Original isometric wireframe blocks */}
        <div className="shrink-0 mx-auto sm:mx-0">
          <WireframeBlocks />
        </div>
      </div>
    </section>
  );
}
