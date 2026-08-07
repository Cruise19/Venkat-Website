"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState, type RefObject } from "react";
import { nav, site } from "@/data/portfolio";

export function Navbar({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLElement | null>;
}) {
  const [active, setActive] = useState("");
  const { scrollY } = useScroll({ container: scrollContainerRef });
  const y = useTransform(scrollY, [0, 80], [0, 6]);
  const scale = useTransform(scrollY, [0, 80], [1, 0.98]);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{ y, scale }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-4"
    >
      <nav
        className="flex items-center gap-1 rounded-full border border-hairline bg-background/70 px-1.5 py-1.5 shadow-soft backdrop-blur-xl sm:px-2 sm:py-2"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="ml-1.5 mr-2 flex items-center gap-1.5 text-xs font-medium tracking-tight sm:ml-2 sm:mr-3 sm:gap-2 sm:text-sm"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
          <span>{site.name}</span>
        </a>
        <div className="hidden items-center gap-0.5 sm:flex">
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </a>
            );
          })}
        </div>
        <a
          href="#contact"
          className="ml-1 rounded-full bg-foreground px-2.5 py-1 text-xs font-medium text-background transition-transform hover:-translate-y-px sm:px-3.5 sm:py-1.5 sm:text-sm"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
