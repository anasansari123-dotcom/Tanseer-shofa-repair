"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="section-padding relative overflow-hidden">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our premium sofa repair services."
        />

        <ScrollReveal animation="fadeUp">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
