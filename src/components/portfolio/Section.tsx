"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
  fullHeight = true,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
  /** Set false for sections with tall/variable content (e.g. a scrollable inner
   * list) so scroll-snap doesn't fight a fixed min-h-screen against natural
   * content height. */
  fullHeight?: boolean;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, filter: "blur(12px)", y: 30 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ once: false, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative mx-auto w-full max-w-6xl snap-start px-6 py-24 sm:py-32 ${
        fullHeight ? "flex min-h-screen flex-col justify-start sm:justify-center" : ""
      } ${className}`}
    >
      {(eyebrow || title) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 flex flex-col gap-4 sm:mb-20"
        >
          {eyebrow && (
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              <span className="h-px w-8 bg-hairline" />
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-display text-4xl leading-[1.05] text-balance sm:text-5xl md:text-6xl">
              {title}
            </h2>
          )}
        </motion.div>
      )}
      {children}
    </motion.section>
  );
}

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
