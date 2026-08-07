"use client";
import { Building2 } from "lucide-react";
import { Section, Reveal } from "./Section";
import { experience } from "@/data/portfolio";

// Logos that fill their own canvas with a solid, non-white color — the badge
// background is matched to these so the circular crop doesn't leave a
// mismatched white sliver in the corners.
const LOGO_BACKGROUND: Record<string, string> = {
  "/logos/aon.png": "#e71d1c",
  "/logos/deloitte.png": "#000000",
};

function RoleLogo({ logoUrl, company }: { logoUrl?: string; company: string }) {
  const background = (logoUrl && LOGO_BACKGROUND[logoUrl]) || "#ffffff";
  return (
    <div
      className="relative flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-full border border-border p-1 shadow-sm"
      style={{ backgroundColor: background }}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${company} logo`}
          className="h-full w-full object-contain"
          onError={(event) => {
            const img = event.currentTarget;
            img.style.display = "none";
            const fallback = img.nextElementSibling as HTMLElement | null;
            if (fallback) fallback.style.display = "flex";
          }}
        />
      ) : null}
      <Building2
        className="h-5 w-5 text-muted-foreground"
        style={{ display: logoUrl ? "none" : "flex" }}
      />
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Four decades. Twenty-two roles."
      fullHeight={false}
    >
      <div className="scrollbar-subtle max-h-[600px] overflow-y-auto pr-4 sm:pr-6">
        <ol className="relative border-l border-hairline pl-8 sm:pl-12">
          {experience.map((e, i) => (
            <Reveal
              key={e.role + e.period}
              delay={Math.min(i, 6) * 0.06}
              className="pb-16 last:pb-0"
            >
              <li className="relative">
                <span className="absolute -left-[41px] top-2 h-2.5 w-2.5 rounded-full bg-background ring-4 ring-accent/30 sm:-left-[49px]" />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                  <div className="flex items-center gap-4">
                    <RoleLogo logoUrl={e.logoUrl} company={e.company} />
                    <div>
                      <h3 className="font-display text-2xl leading-tight">{e.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.company}</p>
                    </div>
                  </div>
                  <span className="shrink-0 whitespace-nowrap rounded-full border border-hairline bg-card px-3 py-1 text-xs tracking-wide text-muted-foreground">
                    {e.period}
                  </span>
                </div>
                <ul className="mt-4 max-w-2xl space-y-2 pl-16">
                  {e.description.map((point, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2.5 h-1 w-1 flex-none rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
