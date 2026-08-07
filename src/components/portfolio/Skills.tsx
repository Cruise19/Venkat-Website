import { Section, Reveal } from "./Section";
import { skills } from "@/data/portfolio";
import {
  Target,
  Compass,
  TrendingUp,
  Users,
  ClipboardList,
  Handshake,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Target,
  Compass,
  TrendingUp,
  Users,
  ClipboardList,
  Handshake,
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools of the trade.">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex items-center gap-4 rounded-3xl border border-hairline bg-card p-6 shadow-soft">
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="font-display text-lg leading-snug text-balance">{s.label}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
