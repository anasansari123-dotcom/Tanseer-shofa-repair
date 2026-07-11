"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ScrollReveal } from "@/components/effects/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  const swiperRef = useRef(null);

  return (
    <section id="reviews" className="section-padding relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Trusted by thousands of homeowners for premium furniture restoration."
        />

        <ScrollReveal animation="fadeUp">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="h-full rounded-2xl glass-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold/5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-sm font-bold text-gold">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-xs text-muted">{review.date}</p>
                      </div>
                    </div>
                    <Quote className="h-8 w-8 text-gold/20" />
                  </div>

                  <div className="mb-3 flex gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed text-muted">{review.text}</p>

                  <div className="mt-4 flex items-center gap-1 text-xs text-muted">
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google Review
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
