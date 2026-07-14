import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import {
  About,
  Courses,
  Fees,
  Batches,
  WhyUs,
  Stats,
  Testimonials,
} from "@/components/landing/Sections";
import { AiCounselorSection } from "@/components/landing/AiCounselorSection";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Courses />
        <Fees />
        <Batches />
        <WhyUs />
        <Stats />
        <AiCounselorSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
