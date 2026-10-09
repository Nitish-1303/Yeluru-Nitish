"use client"

import type { ComponentProps } from "react"
import type { TargetAndTransition } from "motion/react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
}

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
}

export type AppleHelloEffectNitishProps = Omit<
  ComponentProps<typeof motion.svg>,
  "durationScale" | "onAnimationComplete"
> & {
  /**
   * Scales the duration and delay of the handwriting animation.
   * Values below 1 speed up, values above 1 slow down.
   * @defaultValue 1
   */
  durationScale?: number
  /** Called when the full handwriting animation completes. */
  onAnimationComplete?: () => void
}

export function AppleHelloEffectNitish({
  className,
  durationScale = 1,
  onAnimationComplete,
  ...props
}: AppleHelloEffectNitishProps) {
  const calc = (x: number) => x * durationScale

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>Nitish</title>

      {/* N */}
      <motion.path
        d="M80 280 L80 120 Q85 115 90 115 L90 260 Q115 190 140 140 Q165 90 190 80 Q200 75 205 85 L205 280"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          opacity: { duration: 0.3 },
        }}
      />

      {/* i stem */}
      <motion.path
        d="M290 280 L290 160 Q292 155 295 155 L295 280"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.2, delay: calc(0.4) },
        }}
      />

      {/* i dot */}
      <motion.path
        d="M290 125 Q292 122 295 125"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.1),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.1, delay: calc(0.7) },
        }}
      />

      {/* t stem */}
      <motion.path
        d="M370 280 L370 110 Q372 105 375 105 L375 280"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.35),
          ease: "easeInOut",
          delay: calc(0.8),
          opacity: { duration: 0.2, delay: calc(0.8) },
        }}
      />

      {/* t cross */}
      <motion.path
        d="M345 150 L405 150"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.15),
          ease: "easeInOut",
          delay: calc(1.15),
          opacity: { duration: 0.1, delay: calc(1.15) },
        }}
      />

      {/* i stem */}
      <motion.path
        d="M485 280 L485 160 Q487 155 490 155 L490 280"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          delay: calc(1.3),
          opacity: { duration: 0.2, delay: calc(1.3) },
        }}
      />

      {/* i dot */}
      <motion.path
        d="M485 125 Q487 122 490 125"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.1),
          ease: "easeInOut",
          delay: calc(1.6),
          opacity: { duration: 0.1, delay: calc(1.6) },
        }}
      />

      {/* s */}
      <motion.path
        d="M600 175 Q580 160 565 165 Q555 170 555 180 Q555 195 570 205 Q590 215 600 220 Q610 227 610 240 Q610 255 595 260 Q580 265 565 250"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          delay: calc(1.7),
          opacity: { duration: 0.25, delay: calc(1.7) },
        }}
      />

      {/* h */}
      <motion.path
        d="M680 280 L680 110 Q682 105 685 105 L685 210 Q690 175 705 165 Q720 155 735 160 Q745 165 745 180 L745 280"
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeInOut",
          delay: calc(2.1),
          opacity: { duration: 0.3, delay: calc(2.1) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  )
}
