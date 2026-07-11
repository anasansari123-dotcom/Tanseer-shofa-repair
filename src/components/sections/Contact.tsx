"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { SITE } from "@/lib/constants";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-off-white py-12 dark:bg-navy-light/30 max-lg:pb-28 lg:section-padding"
    >
      <div className="relative mx-auto max-w-7xl max-lg:min-w-0 max-lg:px-4 lg:px-8">
        <div className="max-lg:[&_.mb-16]:mb-6 max-lg:text-center">
          <SectionHeader
            subtitle="Contact Us"
            title="Book Your Free Consultation"
            description="Get in touch for a free doorstep assessment. We're here to restore your furniture to perfection."
          />
        </div>

        <div className="grid min-w-0 gap-6 max-lg:gap-5 lg:grid-cols-2 lg:gap-12">
          <ScrollReveal animation="slideLeft" className="max-lg:order-2 max-lg:min-w-0">
            <div className="space-y-4 max-lg:space-y-3 lg:space-y-6">
              {[
                { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneRaw}` },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: MapPin, label: "Address", value: SITE.address },
                { icon: Clock, label: "Hours", value: SITE.hours },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-2xl glass-card p-4 transition-all max-lg:gap-3 max-lg:p-4 hover:shadow-lg hover:shadow-gold/5 lg:gap-4 lg:p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold lg:h-12 lg:w-12">
                    <item.icon className="h-4 w-4 lg:h-5 lg:w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-gold lg:text-sm">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm break-words text-muted hover:text-gold max-lg:text-xs lg:text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm break-words text-muted max-lg:text-xs lg:text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-2 gap-3 max-lg:grid-cols-2">
                <Button
                  variant="default"
                  className="h-11 w-full bg-[#25D366] text-white hover:bg-[#20BD5A] max-lg:px-2 max-lg:text-xs lg:flex-1"
                  asChild
                >
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=Hi, I'd like to book a sofa repair service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" />
                    WhatsApp
                  </a>
                </Button>
                <Button variant="outline" className="h-11 w-full max-lg:px-2 max-lg:text-xs lg:flex-1" asChild>
                  <a href={`tel:${SITE.phoneRaw}`}>
                    <Phone className="h-4 w-4 shrink-0" />
                    Call Now
                  </a>
                </Button>
              </div>

              <div className="overflow-hidden rounded-2xl max-lg:-mx-4 max-lg:h-[200px] max-lg:w-[calc(100%+2rem)] max-lg:rounded-none">
                <iframe
                  src="https://maps.google.com/maps?q=Mumbai+Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tanseer Sofa Repair Location"
                  className="h-full min-h-[180px] w-full grayscale transition-all duration-500 hover:grayscale-0"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideRight" className="max-lg:order-1 max-lg:min-w-0">
            <form
              onSubmit={handleSubmit}
              className="box-border w-full min-w-0 rounded-2xl glass-card p-4 max-lg:w-full lg:p-8"
            >
              <h3 className="mb-4 font-[family-name:var(--font-montserrat)] text-lg font-bold max-lg:text-center lg:mb-6 lg:text-xl">
                Book a Service
              </h3>

              <div className="space-y-3 max-lg:space-y-3 lg:space-y-4">
                <div className="grid gap-3 max-lg:grid-cols-1 sm:grid-cols-2 lg:gap-4">
                  <div className="min-w-0">
                    <label className="mb-1.5 block text-sm font-medium">Full Name</label>
                    <Input
                      className="w-full max-lg:h-11"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="min-w-0">
                    <label className="mb-1.5 block text-sm font-medium">Phone</label>
                    <Input
                      className="w-full max-lg:h-11"
                      placeholder="+91 XXXXX XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="min-w-0">
                  <label className="mb-1.5 block text-sm font-medium">Email</label>
                  <Input
                    className="w-full max-lg:h-11"
                    type="email"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-1.5 block text-sm font-medium">Service Needed</label>
                  <Input
                    className="w-full max-lg:h-11"
                    placeholder="e.g. Leather sofa repair"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    required
                  />
                </div>

                <div className="min-w-0">
                  <label className="mb-1.5 block text-sm font-medium">Message</label>
                  <Textarea
                    className="w-full min-h-[100px] resize-none max-lg:min-h-[90px]"
                    placeholder="Describe your furniture and the issue..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <Button type="submit" size="lg" className="h-12 w-full" magnetic>
                  {submitted ? (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      Request Sent!
                    </motion.span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Booking Request
                    </>
                  )}
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
