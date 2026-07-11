"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled
            ? "glass py-3 shadow-lg shadow-navy/5"
            : "bg-transparent py-5"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.8 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="group flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 lg:flex-none" data-cursor-hover>
            <Image
              src="/images/logo.png"
              alt={SITE.name}
              width={48}
              height={48}
              className="shrink-0 rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="min-w-0 sm:hidden">
              <p className="truncate font-[family-name:var(--font-montserrat)] text-xs font-bold leading-tight text-gold">
                {SITE.name}
              </p>
              <p
                className={cn(
                  "truncate text-[9px] tracking-wide",
                  scrolled ? "text-muted" : "text-white/70"
                )}
              >
                {SITE.tagline}
              </p>
            </div>
            <div className="hidden sm:block">
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-bold tracking-wider text-gold">
                TANSEER
              </p>
              <p
                className={cn(
                  "text-[10px] tracking-[0.2em]",
                  scrolled ? "text-muted" : "text-white/70"
                )}
              >
                SOFA REPAIR
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "group relative text-sm font-medium transition-colors hover:text-gold",
                  scrolled ? "text-foreground/90" : "text-white/90"
                )}
                data-cursor-hover
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={cn(
                  "rounded-full p-2 transition-colors hover:text-gold",
                  scrolled ? "text-foreground/70" : "text-white/80"
                )}
                aria-label="Toggle theme"
                data-cursor-hover
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}

            <Button
              variant="default"
              size="sm"
              className="hidden md:inline-flex"
              magnetic
              data-cursor-hover
              asChild
            >
              <a href="#contact">
                <Phone className="h-4 w-4" />
                Book Service
              </a>
            </Button>

            <button
              className={cn(
                "rounded-full p-2 lg:hidden",
                scrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 glass lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.nav
              className="flex h-full flex-col items-center justify-center gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
            >
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-2xl font-semibold text-foreground hover:text-gold"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <Button variant="default" size="lg" className="mt-4" asChild>
                <a href="#contact" onClick={() => setMobileOpen(false)}>
                  Book Service
                </a>
              </Button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
