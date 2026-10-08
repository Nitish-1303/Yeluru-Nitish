"use client";

import { useState } from "react";

interface OrgLogoProps {
  repo: string;
  localLogoUrl?: string;
  size?: number; // default 20px
  className?: string;
}

/**
 * Extracts organization or repository owner from a string (e.g., "magnitudedev/magnitude" -> "magnitudedev").
 */
export function getOrgFromRepo(repo: string): string {
  const parts = repo.split("/");
  return parts[0] || repo;
}

/**
 * Resolves the organization logo URL dynamically.
 * Priority:
 * 1. Pre-bundled local asset (/logos/...) for zero-latency static performance.
 * 2. Dynamic GitHub org avatar endpoint (https://github.com/${org}.png?size=64).
 */
export function resolveOrgLogoUrl(repo: string, localLogoUrl?: string): string {
  if (localLogoUrl && localLogoUrl.trim() !== "") {
    return localLogoUrl;
  }
  const org = getOrgFromRepo(repo);
  return `https://github.com/${org}.png?size=64`;
}

/**
 * OrgLogo component ensures:
 * 1. Consistent sizing (20x20px default) and styling across all cards.
 * 2. Two-tier fallback mechanism:
 *    - If local fails, attempts GitHub avatar dynamic fetch.
 *    - If dynamic fetch fails or network is offline, falls back to an elegant monogram badge.
 * 3. Never produces broken image icons or cumulative layout shifts.
 */
export function OrgLogo({ repo, localLogoUrl, size = 20, className = "" }: OrgLogoProps) {
  const org = getOrgFromRepo(repo);
  const primarySrc = resolveOrgLogoUrl(repo, localLogoUrl);

  const [currentSrc, setCurrentSrc] = useState<string>(primarySrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);

  const handleError = () => {
    // If the primary image failed (e.g. local file missing or offline), attempt GitHub org avatar
    if (!triedFallback && localLogoUrl) {
      setTriedFallback(true);
      setCurrentSrc(`https://github.com/${org}.png?size=64`);
    } else {
      // Both failed: switch to accessible fallback monogram badge
      setHasError(true);
    }
  };

  const initialLetter = org.charAt(0).toUpperCase() || "O";

  if (hasError) {
    return (
      <div
        className={`rounded-md flex items-center justify-center font-mono text-[11px] font-semibold bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 ring-1 ring-neutral-300/60 dark:ring-neutral-700/60 shrink-0 select-none ${className}`}
        style={{ width: `${size}px`, height: `${size}px` }}
        title={`${org} logo`}
        aria-label={`${org} logo`}
      >
        {initialLetter}
      </div>
    );
  }

  return (
    <img
      src={currentSrc}
      alt={`${org} original logo`}
      width={size}
      height={size}
      onError={handleError}
      className={`rounded-md object-contain bg-white dark:bg-neutral-900 ring-1 ring-neutral-200 dark:ring-neutral-800 shrink-0 shadow-xs ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      loading="lazy"
    />
  );
}
