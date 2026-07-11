"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { GALLERY_ITEMS } from "@/lib/constants";

function BeforeAfterSlider({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <div className="relative aspect-[3/4] cursor-col-resize">
        <Image src={after} alt={`${title} - After`} fill className="object-cover" />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image src={before} alt={`${title} - Before`} fill className="object-cover" />
        </div>
        <div
          className="absolute top-0 bottom-0 z-10 w-0.5 bg-gold shadow-lg shadow-gold/50"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy shadow-lg">
            <ChevronLeft className="h-3 w-3" />
            <ChevronRight className="h-3 w-3" />
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-0 z-20 h-full w-full cursor-col-resize opacity-0"
        />
        <div className="absolute top-3 left-3 rounded-full bg-navy/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Before
        </div>
        <div className="absolute top-3 right-3 rounded-full bg-gold/90 px-3 py-1 text-xs font-medium text-navy backdrop-blur-sm">
          After
        </div>
      </div>
      <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
        <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
          {title}
        </p>
      </div>
    </div>
  );
}

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Gallery"
          title="Before & After Transformations"
          description="Witness the remarkable transformations our expert craftsmen achieve."
        />

        <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {GALLERY_ITEMS.map((item, i) => (
            <ScrollReveal key={item.title} animation="fadeUp" delay={i * 0.1}>
              <BeforeAfterSlider
                before={item.before}
                after={item.after}
                title={item.title}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gold"
              onClick={() => setLightbox(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <Image
              src={lightbox}
              alt="Gallery image"
              width={1200}
              height={800}
              className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
