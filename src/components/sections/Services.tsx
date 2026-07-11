"use client";

import { motion } from "framer-motion";
import {
  Sofa,
  Scissors,
  Armchair,
  Square,
  Shield,
  TreePine,
  Layers,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  sofa: Sofa,
  fabric: Scissors,
  recliner: Armchair,
  cushion: Square,
  leather: Shield,
  wood: TreePine,
  foam: Layers,
  restore: Sparkles,
};

export function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-off-white dark:bg-navy-light/30">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Services"
          title="Premium Repair Solutions"
          description="Comprehensive sofa and furniture services delivered with luxury craftsmanship at your doorstep."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Sofa;
            return (
              <ScrollReveal key={service.title} animation="fadeUp" delay={i * 0.1}>
                <motion.div
                  className="group relative h-full rounded-2xl glass-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-gold/10"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 gold-border" />

                  <div className="relative">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:shadow-lg group-hover:shadow-gold/30">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-[family-name:var(--font-montserrat)] text-lg font-bold">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
