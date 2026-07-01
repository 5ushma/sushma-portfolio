"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 border-y border-white/5 bg-surface-muted/40 py-24 sm:py-28"
    >
      <div className="container-px">
        <SectionHeading
          kicker="Skills"
          title="The toolkit, grouped by purpose"
          description="The tools and practices I work with day to day, grouped by where they fit in the process."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.category} from="up" delay={(gi % 2) * 0.06}>
              <div className="h-full rounded-2xl border border-white/8 bg-surface/60 p-6 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-primary">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {group.category}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <span className="inline-flex cursor-default items-center rounded-full border border-white/10 bg-base/50 px-3.5 py-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-foreground">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
