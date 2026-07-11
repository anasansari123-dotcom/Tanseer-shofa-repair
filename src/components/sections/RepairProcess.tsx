"use client";

import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function RepairProcess() {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-off-white dark:bg-navy-light/30">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Process"
          title="How We Restore Your Furniture"
          description="A seamless five-step process designed for your convenience and our quality standards."
        />

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 right-0 left-0 hidden h-0.5 -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent lg:block" />

          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.step} animation="fadeUp" delay={i * 0.15}>
                <div className="group relative text-center">
                  <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30 bg-background transition-all duration-500 group-hover:border-gold group-hover:shadow-lg group-hover:shadow-gold/20">
                    <span className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gold">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mb-2 font-[family-name:var(--font-montserrat)] text-lg font-bold">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
