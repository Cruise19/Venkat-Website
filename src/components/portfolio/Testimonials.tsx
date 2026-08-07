"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./Section";
import { testimonials } from "@/data/portfolio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelected(api.selectedScrollSnap());
    const onReInit = () => {
      setSnapCount(api.scrollSnapList().length);
      onSelect();
    };

    onReInit();
    api.on("select", onSelect);
    api.on("reInit", onReInit);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onReInit);
    };
  }, [api]);

  return (
    <Section id="testimonials" eyebrow="Kind Words" title="Recommendations & Endorsements">
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {testimonials.map((t) => (
            <CarouselItem key={t.author} className="md:basis-1/2">
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-hairline bg-card p-8 shadow-soft">
                <blockquote className="flex min-h-0 flex-col">
                  <span className="font-display text-4xl leading-none text-accent">“</span>
                  <div className="mt-2 max-h-48 overflow-y-auto pr-2 text-base leading-relaxed text-foreground [scrollbar-width:thin]">
                    <p>{t.quote}</p>
                  </div>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-hairline pt-5">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-secondary text-xs font-medium text-foreground">
                    {initials(t.author)}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t.author}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </figcaption>
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={() => api?.scrollPrev()}
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-background/60 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-secondary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2">
          {Array.from({ length: snapCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === selected ? "w-6 bg-accent" : "w-1.5 bg-hairline"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => api?.scrollNext()}
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-background/60 text-foreground shadow-soft backdrop-blur transition-colors hover:bg-secondary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </Section>
  );
}
