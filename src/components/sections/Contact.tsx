"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MailIcon,
  MapPinIcon,
  LinkedInIcon,
  GitHubIcon,
  ArrowUpRightIcon,
} from "@/components/ui/Icons";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const isPlaceholder =
    !site.formspreeEndpoint ||
    site.formspreeEndpoint.includes("FORMSPREE_ID");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Until a real Formspree endpoint is set, simulate success locally.
    if (isPlaceholder) {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      {/* glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-12 h-64 w-[36rem] max-w-[90vw] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]"
      />

      <div className="container-px relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: invite + links */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            kicker="Contact"
            title="Let's build reliable releases together"
            description="Open to senior QA automation roles and collaboration. Drop a note and I'll get back to you."
          />

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-surface/60 p-4 transition-colors hover:border-primary/30"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25">
                <MailIcon width={20} height={20} />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-faint">Email</span>
                <span className="text-sm font-semibold text-foreground">
                  {site.email}
                </span>
              </span>
              <ArrowUpRightIcon
                width={18}
                height={18}
                className="ml-auto text-faint transition-colors group-hover:text-primary"
              />
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/8 bg-surface/60 p-4">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent ring-1 ring-accent/25">
                <MapPinIcon width={20} height={20} />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-faint">Location</span>
                <span className="text-sm font-semibold text-foreground">
                  {site.location}
                </span>
              </span>
            </div>

            <div className="mt-2 flex gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn profile"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-surface/60 py-3 text-sm font-semibold text-muted transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <LinkedInIcon className="text-[#0A66C2] transition-colors group-hover:text-primary" />
                LinkedIn
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub profile"
                className="group inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-surface/60 py-3 text-sm font-semibold text-muted transition-colors hover:border-primary/30 hover:text-foreground"
              >
                <GitHubIcon className="transition-colors group-hover:text-primary" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <Reveal from="up">
          <form
            onSubmit={handleSubmit}
            className="glass flex flex-col gap-5 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" htmlFor="name">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="form-input"
                />
              </Field>
              <Field label="Email" htmlFor="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="form-input"
                />
              </Field>
            </div>

            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project…"
                className="form-input resize-none"
              />
            </Field>

            <motion.button
              type="submit"
              disabled={status === "submitting"}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-base shadow-glow transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Sending…" : "Send message"}
            </motion.button>

            {/* Status messages (polite live region for screen readers) */}
            <div aria-live="polite" className="min-h-[1.25rem]">
              {status === "success" && (
                <p className="text-sm font-medium text-signal">
                  Thanks, your message is on its way.{" "}
                  {isPlaceholder && (
                    <span className="text-faint">
                      (Demo mode. Set your Formspree endpoint to receive it.)
                    </span>
                  )}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm font-medium text-red-400">
                  Something went wrong. Please email me directly instead.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>

      <style jsx>{`
        :global(.form-input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(10, 15, 30, 0.6);
          padding: 0.75rem 0.9rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        :global(.form-input::placeholder) {
          color: var(--color-faint);
        }
        :global(.form-input:focus) {
          outline: none;
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px rgba(245, 181, 68, 0.18);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-xs font-medium uppercase tracking-wide text-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
