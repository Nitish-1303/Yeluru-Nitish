import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export function Testimonial({ className, ...props }: ComponentProps<"figure">) {
  return (
    <figure
      className={cn("flex h-full flex-col justify-between gap-5 p-5", className)}
      {...props}
    />
  );
}

export function TestimonialQuote({
  className,
  ...props
}: ComponentProps<"blockquote">) {
  return (
    <blockquote
      className={cn(
        "text-sm leading-relaxed text-stone-800 dark:text-neutral-200",
        className,
      )}
      {...props}
    />
  );
}

export function TestimonialAuthor({
  className,
  ...props
}: ComponentProps<"figcaption">) {
  return (
    <figcaption
      className={cn(
        "grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-0 border-t border-stone-200 pt-3 dark:border-neutral-800",
        className,
      )}
      {...props}
    />
  );
}

export function TestimonialAvatar({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "relative row-span-2 flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-stone-200 text-sm font-medium text-stone-600 dark:bg-neutral-800 dark:text-neutral-300",
        className,
      )}
      {...props}
    />
  );
}

export function TestimonialAvatarImg({
  className,
  alt = "",
  ...props
}: ComponentProps<"img">) {
  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      className={cn("absolute inset-0 size-full object-cover", className)}
      alt={alt}
      {...props}
    />
  );
}

export function TestimonialAvatarRing({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 rounded-full ring-1 ring-stone-300/60 ring-inset dark:ring-neutral-700/60",
        className,
      )}
      {...props}
    />
  );
}

export function TestimonialAuthorName({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "self-end text-sm font-semibold text-stone-900 dark:text-neutral-100",
        className,
      )}
      {...props}
    />
  );
}

export function TestimonialAuthorTagline({
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "self-start text-xs text-stone-600 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}
