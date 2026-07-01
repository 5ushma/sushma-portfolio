"use client";

import { nav, site } from "@/data/content";
import { LinkedInIcon, GitHubIcon, MailIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-surface-muted/50">
      <div className="container-px flex flex-col gap-8 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <a
              href="#home"
              className="flex items-center gap-2.5 font-display text-lg font-bold"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/15 font-mono text-primary ring-1 ring-primary/30">
                S
              </span>
              <span className="whitespace-nowrap text-foreground">{site.name}</span>
            </a>
            <p className="text-sm leading-relaxed text-muted">
              {site.valueProp}
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-2">
            <span className="mb-1 font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Navigate
            </span>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-1.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              Connect
            </span>
            <div className="flex gap-3">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-surface/60 text-muted transition-colors hover:border-primary/30 hover:text-primary"
              >
                <LinkedInIcon />
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-surface/60 text-muted transition-colors hover:border-primary/30 hover:text-primary"
              >
                <GitHubIcon />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-surface/60 text-muted transition-colors hover:border-primary/30 hover:text-primary"
              >
                <MailIcon width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-xs text-faint sm:flex-row">
          <p>
            © {2026} {site.name}. All rights reserved.
          </p>
          <p>
            Built with Next.js, Tailwind &amp; Framer Motion · Deployed on
            Netlify
          </p>
        </div>
      </div>
    </footer>
  );
}
