"use client";

import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <ScrollReveal className={cn("mb-16", align === "center" && "text-center")}>
      <p
        className={cn(
          "mb-3 text-sm font-semibold tracking-[0.3em] uppercase",
          light ? "text-gold" : "text-gold"
        )}
      >
        {subtitle}
      </p>
      <h2
        className={cn(
          "font-[family-name:var(--font-montserrat)] text-3xl font-bold md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-base leading-relaxed",
            light ? "text-white/60" : "text-muted",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-0.5 w-16 bg-gradient-to-r from-gold to-gold-light",
          align === "center" && "mx-auto"
        )}
      />
    </ScrollReveal>
  );
}
