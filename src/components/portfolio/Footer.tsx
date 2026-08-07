"use client";
import { motion } from "motion/react";
import { site, contact } from "@/data/portfolio";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: false, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="snap-start border-t border-hairline"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          <span className="text-foreground">{site.name}</span>
          <span>— {contact.location}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {site.social.map((s) => (
            <a key={s.label} href={s.href} className="transition-colors hover:text-foreground">
              {s.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          © 2026 Col V. Venkatraman. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
