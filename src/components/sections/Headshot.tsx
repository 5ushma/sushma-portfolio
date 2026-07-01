"use client";

import { useState } from "react";

type HeadshotProps = {
  src: string;
  alt: string;
};

/**
 * Renders the headshot from `src`. If the image is missing (e.g. you haven't
 * dropped /assets/headshot.jpg yet), it gracefully falls back to a styled
 * initials placeholder instead of a broken image.
 */
export function Headshot({ src, alt }: HeadshotProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${alt} (placeholder, add /public${src})`}
        className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-surface-muted"
      >
        <span className="font-display text-5xl font-bold text-primary">S</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
          Add headshot.jpg
        </span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover object-center"
      loading="eager"
    />
  );
}
