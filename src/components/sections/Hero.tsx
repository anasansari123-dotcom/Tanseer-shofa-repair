"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Hammer, Scissors, Layers, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FloatingBackground } from "@/components/effects/FloatingBackground";
import { SITE } from "@/lib/constants";

const HERO_PARTICLES = [
  { left: "38%", top: "28%", duration: 2.4 },
  { left: "52%", top: "45%", duration: 3.1 },
  { left: "61%", top: "62%", duration: 2.8 },
  { left: "42%", top: "71%", duration: 3.5 },
  { left: "55%", top: "33%", duration: 2.2 },
  { left: "48%", top: "58%", duration: 3.8 },
  { left: "65%", top: "41%", duration: 2.6 },
  { left: "35%", top: "52%", duration: 3.3 },
];

const floatingTools = [
  { Icon: Hammer, x: "65%", y: "20%", delay: 0 },
  { Icon: Scissors, x: "80%", y: "45%", delay: 0.5 },
  { Icon: Layers, x: "70%", y: "70%", delay: 1 },
  { Icon: Wrench, x: "55%", y: "55%", delay: 1.5 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col overflow-hidden pt-24 pb-20 max-lg:h-[100dvh] lg:min-h-screen lg:items-start lg:justify-start lg:pt-28 lg:pb-16">
      <FloatingBackground />
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/images/Craftsman_stitching_leather_on_sofa_202607111308.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/55 via-navy/25 to-navy/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy/50" />
      </div>

      {/* Golden glow */}
      <div className="absolute top-1/4 right-1/4 h-96 w-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-gold/3 blur-[100px]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 max-lg:min-h-0 lg:grid lg:flex-none lg:grid-cols-2 lg:items-start lg:gap-8 lg:px-8 lg:pt-4">
        {/* Content */}
        <div className="z-10 flex flex-col items-center space-y-5 text-center max-lg:w-full lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 text-[10px] font-semibold tracking-wider text-gold uppercase max-lg:max-w-full max-lg:text-center sm:px-4 sm:text-xs sm:tracking-widest lg:px-4 lg:py-1.5 lg:text-sm lg:tracking-widest">
              Expert Restoration & Upholstery
            </span>
          </motion.div>

          <motion.h1
            className="w-full font-[family-name:var(--font-montserrat)] text-2xl leading-snug font-bold text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)] max-lg:whitespace-normal sm:text-3xl lg:text-[clamp(1.4rem,4.5vw,4.5rem)] lg:leading-tight lg:whitespace-nowrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            Premium Sofa Repair &{" "}
            <span className="gradient-text">Home <br className="hidden lg:block" /> Services</span> at Your Doorstep
          </motion.h1>

          <motion.p
            className="max-w-md text-base leading-relaxed text-white/90 max-lg:px-2 sm:text-lg lg:max-w-2xl lg:text-xl lg:px-0 lg:text-2xl [text-shadow:0_1px_10px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.4 }}
          >
            Professional sofa restoration with expert craftsmanship. We bring luxury
            furniture repair to your home.
          </motion.p>

          <motion.div
            className="flex w-full max-w-sm flex-col gap-3 max-lg:px-2 sm:max-w-md lg:max-w-none lg:flex-row lg:flex-wrap lg:gap-4 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.6 }}
          >
            <Button size="lg" magnetic data-cursor-hover className="w-full lg:w-auto" asChild>
              <a href="#contact">
                <CalendarCheck className="h-5 w-5" />
                Book Now
              </a>
            </Button>
            <Button variant="outline" size="lg" magnetic data-cursor-hover className="w-full lg:w-auto" asChild>
              <a href={`tel:${SITE.phoneRaw}`}>
                <Phone className="h-5 w-5" />
                Call Now
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right - Sofa Visual */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 3.3 }}
        >
          <div className="relative mx-auto aspect-square max-w-lg">
            <motion.div
              className="absolute inset-4 overflow-hidden rounded-3xl gold-border"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop"
                alt="Luxury Chesterfield sofa"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
            </motion.div>

            {floatingTools.map((tool, i) => (
              <motion.div
                key={i}
                className="absolute flex h-12 w-12 items-center justify-center rounded-xl glass text-gold shadow-lg"
                style={{ left: tool.x, top: tool.y }}
                animate={{
                  y: [0, -15, 5, -10, 0],
                  rotate: [0, 5, -5, 3, 0],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: tool.delay,
                  ease: "easeInOut",
                }}
              >
                <tool.Icon className="h-5 w-5" />
              </motion.div>
            ))}

            {HERO_PARTICLES.map((particle, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute h-1.5 w-1.5 rounded-full bg-gold"
                style={{ left: particle.left, top: particle.top }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
