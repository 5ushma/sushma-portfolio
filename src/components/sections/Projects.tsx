"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlusIcon } from "@/components/ui/Icons";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const panelId = `project-panel-${index}`;

  return (
    <Reveal from="up" delay={(index % 3) * 0.06} className="h-full">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface/60 shadow-card transition-colors duration-300 hover:border-primary/30"
      >
        {/* Accent header strip */}
        <div className="relative h-1.5 w-full bg-gradient-to-r from-primary/70 via-accent/60 to-transparent" />

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              {project.tagline}
            </span>
            <h3 className="font-display text-lg font-bold leading-snug text-foreground">
              {project.title}
            </h3>
          </div>

          <p className="text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          {/* Tech chips */}
          <ul className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-white/8 bg-base/50 px-2.5 py-1 font-mono text-[11px] text-faint"
              >
                {t}
              </li>
            ))}
          </ul>

          {/* Expandable details */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id={panelId}
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.21, 0.5, 0.27, 0.99] }}
                className="overflow-hidden"
              >
                <ul className="mt-1 flex flex-col gap-2.5 border-t border-white/8 pt-4">
                  {project.details.map((d, di) => (
                    <li
                      key={di}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-signal"
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer / toggle */}
          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-soft"
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-md bg-primary/12 ring-1 ring-primary/25 transition-transform duration-300 ${
                  open ? "rotate-45" : ""
                }`}
              >
                <PlusIcon width={14} height={14} />
              </span>
              {open ? "Hide details" : "View details"}
            </button>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          kicker="Projects"
          title="Selected work in test automation"
          description="Three builds that show how I approach reliability, web automation, and performance across the delivery pipeline."
        />

        <div className="mt-14 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
