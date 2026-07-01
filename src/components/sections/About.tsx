"use client";

import { about, site } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";
import { Counter } from "@/components/ui/Counter";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  { label: "M.S. Computer Science", value: "SMU · 2024" },
  { label: "Based in", value: site.location },
  { label: "Focus", value: "Web · API · Mobile" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="container-px grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left: counter + highlight panel */}
        <div className="flex flex-col gap-6">
          <Reveal from="left">
            <div className="glass relative overflow-hidden rounded-3xl p-8">
              <div
                aria-hidden
                className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
              />
              <div className="flex items-end gap-2">
                <Counter
                  to={about.years}
                  className="font-display text-7xl font-extrabold leading-none text-gradient sm:text-8xl"
                />
                <span className="mb-2 font-display text-5xl font-extrabold text-primary">
                  +
                </span>
              </div>
              <p className="mt-2 font-mono text-sm uppercase tracking-[0.2em] text-muted">
                {about.yearsLabel}
              </p>

              <div className="mt-8 flex flex-col divide-y divide-white/8">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="text-sm text-faint">{h.label}</span>
                    <span className="text-sm font-semibold text-foreground">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right: story */}
        <div className="flex flex-col gap-7">
          <SectionHeading
            kicker="About"
            title="Quality that ships with confidence"
          />
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} from="up" delay={i * 0.05}>
                <p className="text-base leading-relaxed text-muted sm:text-[1.05rem]">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
