import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Statistics } from "@/components/sections/Statistics";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { RepairProcess } from "@/components/sections/RepairProcess";
import { Gallery } from "@/components/sections/Gallery";
import { OurWork } from "@/components/sections/OurWork";
import { Testimonials } from "@/components/sections/Testimonials";
import { Warranty } from "@/components/sections/Warranty";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Statistics />
      <WhyChooseUs />
      <RepairProcess />
      <Gallery />
      <OurWork />
      <Testimonials />
      <Warranty />
      <FAQ />
      <Contact />
    </>
  );
}
