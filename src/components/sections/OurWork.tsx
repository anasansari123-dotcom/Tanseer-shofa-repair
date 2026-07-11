"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { WORK_ITEMS } from "@/lib/constants";

export function OurWork() {
  return (
    <section id="work" className="section-padding relative overflow-hidden bg-off-white dark:bg-navy-light/30">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Our Work"
          title="Craftsmanship in Every Detail"
          description="A showcase of our finest restoration projects and luxury upholstery work."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {WORK_ITEMS.map((src, i) => (
            <ScrollReveal key={i} animation="zoom" delay={i * 0.1}>
              <motion.div
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={src}
                  alt={`Our work ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy/0 transition-all duration-500 group-hover:bg-navy/40" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="rounded-full border border-gold px-4 py-2 text-sm font-medium text-gold">
                    View Project
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
