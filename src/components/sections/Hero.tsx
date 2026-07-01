"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/content";
import { DownloadIcon, PlayIcon, MapPinIcon } from "@/components/ui/Icons";
import { TypingText } from "@/components/ui/TypingText";
import { Headshot } from "./Headshot";
import { VideoModal } from "./VideoModal";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.5, 0.27, 0.99] },
  },
};

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 sm:pt-24"
    >
      {/* Decorative background: faint grid + glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-faint bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-24 top-40 h-96 w-96 rounded-full bg-accent/20 blur-[130px]" />
      </div>

      <div className="container-px relative grid items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Available for senior QA roles
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="block text-muted/90 text-2xl font-semibold sm:text-3xl">
              Hi, I&apos;m
            </span>
            <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="font-display text-lg font-semibold text-foreground sm:text-xl"
          >
            <TypingText text={site.title} />
          </motion.p>

          <motion.p
            variants={item}
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.valueProp}
          </motion.p>

          <motion.div
            variants={item}
            className="flex items-center gap-2 text-sm text-faint"
          >
            <MapPinIcon width={16} height={16} className="text-primary" />
            {site.location}
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <a
              href={site.cvUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-base shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <DownloadIcon
                width={18}
                height={18}
                className="transition-transform group-hover:translate-y-0.5"
              />
              Download CV
            </a>

            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group inline-flex items-center gap-2.5 rounded-xl border border-white/12 bg-surface/50 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary/40 hover:bg-surface"
            >
              <span className="grid h-7 w-7 place-items-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30 transition-transform group-hover:scale-110">
                <PlayIcon width={13} height={13} />
              </span>
              Play Intro
            </button>
          </motion.div>
        </motion.div>

        {/* Right: headshot with floating parallax shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.5, 0.27, 0.99] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Floating shapes behind the headshot.
              (CSS animations are neutralized by the global
              prefers-reduced-motion rule in globals.css.) */}
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 animate-float-slow rounded-[2rem] bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent blur-2xl"
          />
          <div
            aria-hidden
            className="absolute -right-6 -top-6 h-20 w-20 animate-float rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur"
          />
          <div
            aria-hidden
            className="absolute -bottom-7 -left-7 h-24 w-24 animate-float-slow rounded-full border border-accent/30 bg-accent/10 backdrop-blur"
          />

          <div className="relative flex flex-col items-center gap-7 rounded-[1.75rem] border border-white/10 bg-surface/70 p-7 shadow-card backdrop-blur sm:p-8">
            {/* Circular headshot frame — object-cover keeps the face centred and
                undistorted; the frame scales responsively. */}
            <div className="relative aspect-square w-56 max-w-full sm:w-64 lg:w-72">
              <div
                aria-hidden
                className="absolute -inset-3 rounded-full bg-gradient-to-tr from-primary/40 via-accent/25 to-transparent blur-xl"
              />
              <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 shadow-card ring-2 ring-primary/30">
                <Headshot src={site.headshot} alt={`Portrait of ${site.name}`} />
              </div>
            </div>

            {/* "quality" badge bar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-base/60 px-4 py-3 backdrop-blur-md"
            >
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-foreground">
                  6+ yrs
                </span>
                <span className="text-[11px] text-muted">QA Automation</span>
              </div>
              <div className="h-9 w-px bg-white/10" />
              <div className="flex flex-col text-right">
                <span className="font-display text-lg font-bold text-signal">
                  M.S. CS
                </span>
                <span className="text-[11px] text-muted">SMU · 2024</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/15 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-primary"
            animate={reduce ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>

      <VideoModal
        open={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoUrl={site.videoUrl}
      />
    </section>
  );
}
