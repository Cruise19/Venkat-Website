"use client";
import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Col V. Venkatraman (Retd) - Professional Portfolio" },
      {
        name: "description",
        content:
          "Official professional portfolio of Col V. Venkatraman (Retd) — Retired Army Engineer, Corporate Assessor, Certified ICF Coach, and Academician.",
      },
      { property: "og:title", content: "Col V. Venkatraman (Retd) - Professional Portfolio" },
      {
        property: "og:description",
        content:
          "Official professional portfolio of Col V. Venkatraman (Retd) — Retired Army Engineer, Corporate Assessor, Certified ICF Coach, and Academician.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollContainerRef = useRef<HTMLElement>(null);

  return (
    <main
      ref={scrollContainerRef}
      className="relative h-screen snap-y snap-mandatory overflow-y-auto scroll-smooth bg-background text-foreground antialiased"
    >
      <Navbar scrollContainerRef={scrollContainerRef} />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
