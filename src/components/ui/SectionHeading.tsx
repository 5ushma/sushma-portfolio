"use client";

import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <Reveal from="up">
        <span className="kicker">
          <span className="h-px w-6 bg-primary/60" aria-hidden />
          {kicker}
        </span>
      </Reveal>
      <Reveal from="up" delay={0.05}>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal from="up" delay={0.1}>
          <p
            className={`max-w-2xl text-base leading-relaxed text-muted ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
