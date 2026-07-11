"use client";

import { Award, Home, Gem, Receipt, Zap, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  craft: Award,
  doorstep: Home,
  materials: Gem,
  pricing: Receipt,
  speed: Zap,
  warranty: ShieldCheck,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-off-white dark:bg-transparent">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Why Choose Us"
          title="The Tanseer Difference"
          description="Experience luxury furniture repair that sets the gold standard in craftsmanship and service."
        />

        <ScrollReveal animation="fadeUp">
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-navy shadow-2xl shadow-black/20">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-gold/5" />
            <div className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {WHY_CHOOSE_US.map((item, i) => {
                const Icon = ICON_MAP[item.icon] || Award;
                const isLast = i === WHY_CHOOSE_US.length - 1;
                const isLastInRowLg = i % 3 === 2;
                const isLastInRowMd = i % 2 === 1;
                const isTopRowLg = i < 3;

                return (
                  <div
                    key={item.title}
                    className={cn(
                      "flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-gold/5 sm:px-6 sm:py-6",
                      "border-white/10",
                      !isLast && "border-b",
                      "md:border-b md:border-r",
                      isLastInRowMd && "md:border-r-0",
                      i >= 4 && "md:border-b-0",
                      "lg:border-b lg:border-r",
                      isLastInRowLg && "lg:border-r-0",
                      !isTopRowLg && "lg:border-b-0"
                    )}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-light text-navy shadow-lg shadow-gold/25 sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold leading-tight text-white sm:text-base">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-white/65 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
