"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in seconds */
  delay?: number;
  /** Travel direction of the entrance */
  from?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  /** Animate once (default) or every time it enters the viewport */
  once?: boolean;
};

const distance = 26;

/**
 * Scroll-reveal wrapper. Honors prefers-reduced-motion by rendering a static,
 * fully-visible element with no transform.
 */
export function Reveal({
  children,
  delay = 0,
  from = "up",
  className,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotion();

  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  }[from];

  // NOTE: the `hidden` variant must NOT depend on `reduce`, or the SSR inline
  // style diverges from the reduced-motion client render (hydration mismatch).
  // Reduced motion is handled by collapsing the transition to ~instant below,
  // which is applied client-side when the element animates into view.
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: reduce
        ? { duration: 0 }
        : {
            duration: 0.6,
            delay,
            ease: [0.21, 0.5, 0.27, 0.99],
          },
    },
  };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.25, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
}
