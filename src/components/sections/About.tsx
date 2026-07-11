"use client";

import Image from "next/image";
import { Award, Users, Clock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";

export function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col justify-center overflow-x-hidden py-12 max-lg:overflow-y-visible lg:min-h-0 lg:justify-start lg:section-padding"
    >
      <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col justify-center px-4 max-lg:overflow-visible lg:px-8">
        <div className="max-lg:[&_.mb-16]:mb-6">
          <SectionHeader
            subtitle="About Us"
            title="Crafting Excellence Since 2014"
            description="Tanseer Sofa Repair is Mumbai's premier luxury furniture restoration service, bringing master craftsmanship directly to your doorstep."
          />
        </div>

        <div className="grid items-center gap-6 max-lg:gap-5 lg:grid-cols-2 lg:gap-12 lg:gap-20">
          <ScrollReveal animation="slideLeft" className="max-lg:-mx-4 max-lg:w-[calc(100%+2rem)]">
            <div className="relative w-full max-lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl max-lg:aspect-[16/10] max-lg:max-h-none max-lg:rounded-none">
                <Image
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=750&fit=crop"
                  alt="Expert craftsman at work"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="w-full rounded-none glass-card p-4 text-center light-sweep max-lg:relative max-lg:block max-lg:rounded-none lg:hidden">
                <p className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-gold">
                  10+
                </p>
                <p className="text-xs text-muted">Years of Excellence</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideRight" className="max-lg:min-w-0 max-lg:w-full">
            <div className="w-full min-w-0 space-y-4 max-lg:px-0 max-lg:text-center lg:space-y-6">
              <p className="w-full break-words text-base leading-relaxed text-muted max-lg:px-2 lg:text-lg">
                At Tanseer Sofa Repair, we believe every piece of furniture tells a story.
                Our master craftsmen combine traditional techniques with modern innovation
                to restore your sofas to their original glory — or better.
              </p>
              <p className="w-full break-words text-sm leading-relaxed text-muted max-lg:px-2 lg:text-base">
                From cherished family heirlooms to contemporary designer pieces, we treat
                every project with the same dedication to luxury quality. Our doorstep
                service eliminates the hassle of transportation while delivering
                showroom-quality results.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2 max-lg:gap-2 lg:gap-4 lg:pt-4">
                {[
                  { icon: Award, label: "Certified Experts" },
                  { icon: Users, label: "5000+ Clients" },
                  { icon: Clock, label: "24hr Service" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl glass-card p-3 text-center transition-all max-lg:p-2.5 hover:shadow-lg hover:shadow-gold/5 lg:p-4"
                  >
                    <item.icon className="mx-auto mb-1.5 h-5 w-5 text-gold lg:mb-2 lg:h-6 lg:w-6" />
                    <p className="text-[10px] font-medium leading-tight lg:text-xs">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
