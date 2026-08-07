import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Footprints,
  Flower,
  Mountain,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { Section, Reveal } from "./Section";
import { contact, site, hobbies } from "@/data/portfolio";

const hobbyIcons: Record<string, LucideIcon> = {
  Footprints,
  Flower,
  Mountain,
  HandHeart,
};

const socialIcons: Record<string, LucideIcon> = {
  LinkedIn: Linkedin,
};

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact">
      <div className="relative overflow-hidden rounded-[2rem] border border-hairline bg-card p-10 shadow-card sm:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 30%, transparent), transparent)",
          }}
        />
        <Reveal className="relative">
          <h2 className="font-display max-w-3xl text-4xl leading-[1.05] text-balance sm:text-5xl md:text-6xl">
            {contact.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">{contact.body}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-float"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-4 py-3 text-sm backdrop-blur transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
            <span className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-4 py-3 text-sm backdrop-blur">
              <MapPin className="h-4 w-4" />
              {contact.location}
            </span>
            {site.social.map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-background/60 px-4 py-3 text-sm backdrop-blur transition-colors hover:bg-secondary"
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {s.label}
                </a>
              );
            })}
          </div>

          <div className="mt-12 border-t border-hairline pt-10">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Hobbies & Interests
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {hobbies.map((h) => {
                const Icon = hobbyIcons[h.icon];
                return (
                  <div
                    key={h.label}
                    className="flex items-start gap-3 rounded-2xl border border-hairline bg-background/60 p-4 backdrop-blur"
                  >
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-secondary">
                      <Icon className="h-4 w-4 text-foreground" />
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{h.label}</p>
                      {h.detail && (
                        <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
                          {h.detail}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
