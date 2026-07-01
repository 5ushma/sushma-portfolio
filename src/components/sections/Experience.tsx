"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative scroll-mt-24 border-y border-white/5 bg-surface-muted/40 py-24 sm:py-28"
    >
      <div className="container-px">
        <SectionHeading
          kicker="Experience"
          title="A track record across global teams"
          description="Six years of QA and automation work across teams in India and the United States, from enterprise consulting to senior automation engineering."
        />

        <div className="relative mt-14">
          {/* Vertical spine */}
          <div
            aria-hidden
            className="absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="flex flex-col gap-10">
            {experience.map((role, i) => {
              const sideRight = i % 2 === 1;
              return (
                <li key={i} className="relative md:grid md:grid-cols-2 md:gap-10">
                  {/* Node */}
                  <span className="absolute left-[18px] top-2 z-10 -translate-x-1/2 md:left-1/2">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 320, damping: 18, delay: 0.1 }
                      }
                      className="block h-3.5 w-3.5 rounded-full bg-primary ring-4 ring-primary/20"
                    />
                  </span>

                  {/* Card — alternate sides on desktop */}
                  <div
                    className={`pl-12 md:pl-0 ${
                      sideRight
                        ? "md:col-start-2"
                        : "md:col-start-1 md:text-left"
                    }`}
                  >
                    <Reveal from={sideRight ? "left" : "right"}>
                      <article
                        className={`group rounded-2xl border border-white/8 bg-surface/70 p-6 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-glow ${
                          sideRight ? "" : "md:mr-2"
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <h3 className="font-display text-lg font-bold text-foreground">
                            {role.title}
                          </h3>
                          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
                            {role.dates}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-semibold text-accent-soft">
                          {role.company}
                          {role.location ? (
                            <span className="font-normal text-faint">
                              {" "}
                              · {role.location}
                            </span>
                          ) : null}
                        </p>

                        <ul className="mt-4 flex flex-col gap-2.5">
                          {role.bullets.map((b, bi) => (
                            <li
                              key={bi}
                              className="flex gap-2.5 text-sm leading-relaxed text-muted"
                            >
                              <span
                                aria-hidden
                                className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary/70"
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
