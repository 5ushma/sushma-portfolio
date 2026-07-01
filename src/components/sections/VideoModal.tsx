"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CloseIcon } from "@/components/ui/Icons";

type VideoModalProps = {
  open: boolean;
  onClose: () => void;
  videoUrl: string;
};

export function VideoModal({ open, onClose, videoUrl }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const isPlaceholder = !videoUrl || videoUrl === "VIDEO_URL";

  // Close on Escape, lock body scroll, and move focus into the dialog.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Intro video"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close video"
            onClick={onClose}
            className="absolute inset-0 cursor-default bg-base/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-card"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Intro
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close video"
                className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-foreground"
              >
                <CloseIcon width={20} height={20} />
              </button>
            </div>

            <div className="aspect-video w-full bg-black">
              {isPlaceholder ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="font-display text-lg font-semibold text-foreground">
                    Add your intro video
                  </p>
                  <p className="max-w-md text-sm text-muted">
                    Set{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-primary-soft">
                      videoUrl
                    </code>{" "}
                    in{" "}
                    <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-primary-soft">
                      src/data/content.ts
                    </code>{" "}
                    to an embeddable URL (e.g. a YouTube{" "}
                    <span className="text-foreground">/embed/</span> link).
                  </p>
                </div>
              ) : (
                <iframe
                  className="h-full w-full"
                  src={videoUrl}
                  title="Intro video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
