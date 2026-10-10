"use client";

import type { ComponentProps } from "react";
import FastMarquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

export type MarqueeProps = ComponentProps<"div">;

export function Marquee({ className, ...props }: MarqueeProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    />
  );
}

export type MarqueeContentProps = ComponentProps<typeof FastMarquee>;

export function MarqueeContent({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) {
  return (
    <FastMarquee
      loop={loop}
      autoFill={autoFill}
      pauseOnHover={pauseOnHover}
      {...props}
    />
  );
}

export type MarqueeFadeProps = ComponentProps<"div"> & {
  side: "left" | "right";
};

export function MarqueeFade({ className, side, ...props }: MarqueeFadeProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 bottom-0 z-10 h-full w-20 from-neutral-50 to-transparent dark:from-neutral-950",
        side === "left"
          ? "left-0 bg-gradient-to-r"
          : "right-0 bg-gradient-to-l",
        className,
      )}
      {...props}
    />
  );
}

export type MarqueeItemProps = ComponentProps<"div">;

export function MarqueeItem({ className, ...props }: MarqueeItemProps) {
  return (
    <div
      className={cn("mx-2 shrink-0 object-contain", className)}
      {...props}
    />
  );
}
