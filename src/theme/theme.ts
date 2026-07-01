/**
 * ──────────────────────────────────────────────────────────────────────────
 *  SINGLE THEME FILE — colors & fonts
 *  Change anything here and it propagates to Tailwind + CSS variables app-wide.
 *  Palette: deep "ink navy" base, refined amber/gold primary, soft indigo accent.
 * ──────────────────────────────────────────────────────────────────────────
 */

export const palette = {
  // Base / surfaces
  base: "#0A0F1E", // deep ink navy (page background)
  surface: "#111829", // raised panels / cards
  surfaceMuted: "#0E1424", // slightly recessed surface
  border: "#23304B", // hairline borders

  // Text
  foreground: "#E7ECF5", // primary text
  muted: "#9AA7C0", // secondary text
  faint: "#647089", // tertiary / captions

  // Accents
  primary: "#F5B544", // refined amber / gold (CTAs, highlights)
  primarySoft: "#FAD08A", // lighter gold for gradients
  accent: "#8B8CFB", // soft indigo / violet (secondary accent)
  accentSoft: "#B6B7FD",

  // Signal (used sparingly for "pass/quality" cues)
  signal: "#34D8A8", // refined teal-green
} as const;

export const fonts = {
  /** Display / headings */
  display: "var(--font-display)",
  /** Body / UI */
  body: "var(--font-body)",
  /** Monospace (code-ish accents, kicker labels) */
  mono: "var(--font-mono)",
} as const;

/** Emitted as CSS custom properties on :root (see globals.css consumer). */
export const cssVariables = {
  "--color-base": palette.base,
  "--color-surface": palette.surface,
  "--color-surface-muted": palette.surfaceMuted,
  "--color-border": palette.border,
  "--color-foreground": palette.foreground,
  "--color-muted": palette.muted,
  "--color-faint": palette.faint,
  "--color-primary": palette.primary,
  "--color-primary-soft": palette.primarySoft,
  "--color-accent": palette.accent,
  "--color-accent-soft": palette.accentSoft,
  "--color-signal": palette.signal,
} as const;

export type Palette = typeof palette;
