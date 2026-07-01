"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypingTextProps = {
  text: string;
  /** ms per character */
  speed?: number;
  /** delay before typing starts, ms */
  startDelay?: number;
  className?: string;
};

/**
 * Types `text` out character-by-character as a progressive enhancement.
 *
 * Hydration-safe: the server and the first client render both output the full
 * string (so there is no SSR/client mismatch and no-JS users still see the
 * title). The typing animation only begins after mount, inside an effect.
 * Users who prefer reduced motion get the full string with no animation.
 */
export function TypingText({
  text,
  speed = 55,
  startDelay = 350,
  className,
}: TypingTextProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);

    if (reduce) {
      setCount(text.length);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(startTimer);
      clearInterval(interval);
    };
  }, [text, speed, startDelay, reduce]);

  const done = count >= text.length;
  // Before mount → full text (matches server). After mount → animated slice.
  const visibleText = mounted ? text.slice(0, count) : text;

  return (
    <span className={className}>
      <span aria-hidden>{visibleText}</span>
      {/* Full text always available to screen readers */}
      <span className="sr-only">{text}</span>
      {mounted && !reduce && (
        <span
          aria-hidden
          className={`ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] bg-primary ${
            done ? "animate-pulse" : ""
          }`}
        />
      )}
    </span>
  );
}
