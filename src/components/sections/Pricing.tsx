"use client";

import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { PRICING_PLANS } from "@/lib/constants";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden bg-off-white dark:bg-navy-light/30">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Pricing"
          title="Transparent Luxury Pricing"
          description="Premium quality at fair prices. Every package includes free consultation and warranty."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {PRICING_PLANS.map((plan, i) => (
            <ScrollReveal key={plan.name} animation="fadeUp" delay={i * 0.15}>
              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular
                    ? "bg-navy text-white shadow-2xl shadow-navy/30 gold-border"
                    : "glass-card hover:shadow-xl hover:shadow-gold/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy">
                    <Star className="h-3 w-3 fill-navy" />
                    MOST POPULAR
                  </div>
                )}

                <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold">
                  {plan.name}
                </h3>
                <div className="mt-4 mb-6">
                  <span className="font-[family-name:var(--font-montserrat)] text-4xl font-bold text-gold">
                    {plan.price}
                  </span>
                  <p className={`mt-1 text-sm ${plan.popular ? "text-white/60" : "text-muted"}`}>
                    {plan.period}
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      <span className={plan.popular ? "text-white/80" : "text-muted"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className="w-full"
                  magnetic
                  asChild
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
