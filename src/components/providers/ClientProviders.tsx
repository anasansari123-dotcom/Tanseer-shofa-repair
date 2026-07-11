"use client";

import { ThemeProvider } from "./ThemeProvider";
import { SmoothScrollProvider } from "./SmoothScrollProvider";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { LuxuryCursor } from "@/components/effects/LuxuryCursor";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { PageTransition } from "@/components/effects/PageTransition";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <SmoothScrollProvider>
        <LoadingScreen />
        <LuxuryCursor />
        <MouseGlow />
        <PageTransition>{children}</PageTransition>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
