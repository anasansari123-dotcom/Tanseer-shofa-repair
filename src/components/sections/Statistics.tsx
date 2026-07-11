"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { AnimatedCounter } from "@/components/effects/AnimatedCounter";
import { STATS } from "@/lib/constants";

export function Statistics() {
  return (
    <section className="relative overflow-hidden animated-gradient py-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} animation="zoom" delay={i * 0.15}>
              <div className="text-center">
                <p className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gold md:text-5xl lg:text-6xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm tracking-wider text-white/70 uppercase">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
