"use client";

import { useEffect, useState, useRef } from "react";

export function WireframeBlocks() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    // Subtle parallax clamped within +/- 12px
    setOffset({
      x: Math.max(-12, Math.min(12, deltaX * 10)),
      y: Math.max(-12, Math.min(12, deltaY * 10)),
    });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center select-none overflow-visible group"
      aria-label="Original isometric wireframe blocks illustration with subtle parallax"
      role="img"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 rounded-full bg-neutral-200/40 dark:bg-neutral-800/25 blur-2xl pointer-events-none -z-10 transition-opacity" />

      <div
        className="transition-transform duration-300 ease-out will-change-transform"
        style={{
          transform: reducedMotion
            ? "none"
            : `translate3d(${offset.x}px, ${offset.y}px, 0px) rotateY(${offset.x * 0.8}deg) rotateX(${-offset.y * 0.8}deg)`,
        }}
      >
        <svg
          viewBox="0 0 240 240"
          className="w-40 h-40 sm:w-44 sm:h-44 overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Pattern 1: 45° diagonal hatching (left faces) */}
            <pattern
              id="hatch-left"
              width="6"
              height="6"
              patternTransform="rotate(45 0 0)"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="6"
                className="stroke-neutral-400/80 dark:stroke-neutral-500/80"
                strokeWidth="1.2"
              />
            </pattern>

            {/* Pattern 2: 135° diagonal hatching (right faces) */}
            <pattern
              id="hatch-right"
              width="7"
              height="7"
              patternTransform="rotate(-45 0 0)"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="7"
                className="stroke-neutral-300 dark:stroke-neutral-600"
                strokeWidth="1.1"
              />
            </pattern>

            {/* Pattern 3: Dot grid for top surfaces */}
            <pattern
              id="hatch-top"
              width="5"
              height="5"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="2.5"
                cy="2.5"
                r="0.75"
                className="fill-neutral-400 dark:fill-neutral-500"
              />
            </pattern>
          </defs>

          {/* Isometric Block 1: Base Anchor Block (Center-Left) */}
          <g className="transition-all duration-300 group-hover:stroke-neutral-900 dark:group-hover:stroke-neutral-200">
            {/* Top face */}
            <polygon
              points="100,75 145,50 190,75 145,100"
              className="fill-neutral-100/70 dark:fill-neutral-900/70 stroke-neutral-800 dark:stroke-neutral-300"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Left face with 45° hatching */}
            <polygon
              points="100,75 145,100 145,150 100,125"
              fill="url(#hatch-left)"
              className="stroke-neutral-800 dark:stroke-neutral-300"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Right face with cross hatching */}
            <polygon
              points="145,100 190,75 190,125 145,150"
              fill="url(#hatch-right)"
              className="stroke-neutral-800 dark:stroke-neutral-300"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>

          {/* Isometric Block 2: Offset Lower Tier (Foreground Left) */}
          <g
            className="transition-transform duration-300"
            style={{
              transform: reducedMotion ? "none" : `translate(${offset.x * 0.4}px, ${offset.y * 0.4}px)`,
            }}
          >
            {/* Top face */}
            <polygon
              points="45,130 85,107 125,130 85,153"
              className="fill-neutral-200/50 dark:fill-neutral-800/50 stroke-neutral-700 dark:stroke-neutral-400"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Left face */}
            <polygon
              points="45,130 85,153 85,190 45,167"
              fill="url(#hatch-left)"
              className="stroke-neutral-700 dark:stroke-neutral-400"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            {/* Right face */}
            <polygon
              points="85,153 125,130 125,167 85,190"
              fill="url(#hatch-right)"
              className="stroke-neutral-700 dark:stroke-neutral-400"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </g>

          {/* Isometric Block 3: Floating Monolith Unit (Upper Floating Corner) */}
          <g
            className="transition-transform duration-300"
            style={{
              transform: reducedMotion ? "none" : `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)`,
            }}
          >
            {/* Top face */}
            <polygon
              points="55,60 90,40 125,60 90,80"
              className="fill-neutral-50 dark:fill-neutral-900 stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Left face */}
            <polygon
              points="55,60 90,80 90,105 55,85"
              fill="url(#hatch-left)"
              className="stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Right face */}
            <polygon
              points="90,80 125,60 125,85 90,105"
              className="fill-neutral-200/80 dark:fill-neutral-800/80 stroke-neutral-800 dark:stroke-neutral-200"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </g>

          {/* Architectural Axis Guidelines & Datum Marks */}
          <line
            x1="145"
            y1="30"
            x2="145"
            y2="50"
            strokeDasharray="2 3"
            className="stroke-neutral-400 dark:stroke-neutral-600"
            strokeWidth="1"
          />
          <line
            x1="190"
            y1="125"
            x2="215"
            y2="139"
            strokeDasharray="2 3"
            className="stroke-neutral-400 dark:stroke-neutral-600"
            strokeWidth="1"
          />
          <circle
            cx="145"
            cy="100"
            r="2"
            className="fill-neutral-900 dark:fill-neutral-100"
          />
        </svg>
      </div>
    </div>
  );
}
