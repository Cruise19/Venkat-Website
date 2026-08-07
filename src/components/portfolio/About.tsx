import { Section, Reveal } from "./Section";
import { about } from "@/data/portfolio";
import { Shield, ClipboardCheck, GraduationCap, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Shield,
  ClipboardCheck,
  GraduationCap,
};

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Four decades.
          <br className="hidden sm:block" /> Three disciplines.
        </>
      }
    >
      <div className="space-y-16">
        <Reveal>
          <p className="max-w-3xl text-xl leading-relaxed text-foreground text-balance sm:text-2xl">
            {about.lead}
          </p>
        </Reveal>

        <div>
          <Reveal className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-px w-8 bg-hairline" />
            Key Highlights
          </Reveal>
          <div className="max-w-3xl space-y-10">
            {about.highlights.map((h, i) => {
              const Icon = icons[h.icon];
              return (
                <Reveal key={h.title} delay={i * 0.08} className="flex gap-5">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-hairline bg-secondary">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-xl">{h.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{h.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
