import { Section, Reveal } from "./Section";
import { education, certifications } from "@/data/portfolio";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic Foundation & Professional Credentials"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-3xl border border-hairline bg-card p-8 shadow-soft">
          <h3 className="font-display text-2xl">Academic Foundation</h3>
          <ul className="mt-8 space-y-6">
            {education.map((e) => (
              <li key={e.degree} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-hairline bg-secondary">
                  <GraduationCap className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg leading-snug">{e.degree}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08} className="rounded-3xl border border-hairline bg-card p-8 shadow-soft">
          <h3 className="font-display text-2xl">Professional Credentials</h3>
          <ul className="mt-8 space-y-6">
            {certifications.map((c) => (
              <li key={c.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-hairline bg-secondary">
                  <Award className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg leading-snug">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.institution}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
