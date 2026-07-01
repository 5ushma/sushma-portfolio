"use client";

import { motion } from "framer-motion";
import { capabilities } from "@/data/content";
import { capabilityIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          kicker="What I Do"
          title="Capabilities I bring to a team"
          description="Six areas where I build, automate, and harden quality, from frameworks to pipelines."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => {
            const Icon = capabilityIcon[cap.icon];
            return (
              <Reveal key={cap.title} from="up" delay={(i % 3) * 0.06}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-surface/60 p-6 shadow-card"
                >
                  {/* hover glow */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  {/* top accent line on hover */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary to-transparent transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <div className="relative flex flex-col gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/12 text-primary ring-1 ring-primary/25 transition-all duration-300 group-hover:bg-primary group-hover:text-base">
                      <Icon width={22} height={22} />
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground">
                      {cap.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {cap.description}
                    </p>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
