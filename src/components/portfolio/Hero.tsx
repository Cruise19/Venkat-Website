"use client";
import { motion } from "motion/react";
import { hero } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

/* Fades the portrait out toward the bottom of the hero so it melts into the page. */
const PHOTO_FADE =
  "linear-gradient(to bottom, #000 0%, #000 46%, rgba(0,0,0,0.5) 66%, rgba(0,0,0,0.14) 84%, transparent 96%)";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen snap-start flex-col justify-end overflow-hidden pt-32 pb-16 sm:pb-24"
    >
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 22%, transparent), transparent)",
        }}
      />

      {/* Full portrait, sitting behind the text and fading out toward the bottom */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 top-[119px] z-0 flex justify-center sm:top-auto sm:bottom-0"
      >
        <img
          src="/profile-cutout.webp"
          alt="Col V. Venkatraman (Retd)"
          draggable={false}
          className="h-[40vh] w-auto max-w-none select-none object-contain object-top sm:h-[78vh] sm:object-bottom lg:h-[88vh]"
          style={{ maskImage: PHOTO_FADE, WebkitMaskImage: PHOTO_FADE }}
        />
      </motion.div>

      {/* Keeps the headline legible where it crosses the portrait */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[58%] bg-gradient-to-t from-background via-background/82 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/70 px-3.5 py-1.5 text-xs text-muted-foreground shadow-soft backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {hero.eyebrow}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display mt-6 text-5xl leading-[1.02] text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-balance sm:text-xl"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={hero.cta.href}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
          >
            {hero.cta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={hero.secondary.href}
            className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
          >
            {hero.secondary.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
