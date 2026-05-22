import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { WhyUs } from "@/components/site/WhyUs";
import { Coaches } from "@/components/site/Coaches";
import { Schedule } from "@/components/site/Schedule";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Achievements } from "@/components/site/Achievements";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingUI, ScrollProgress } from "@/components/site/FloatingUI";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Crocodils Swimming Academy — Train Like a Champion" },
      {
        name: "description",
        content:
          "Professional swimming academy offering kids swimming classes, adult lessons, competitive training & private coaching with certified coaches in Olympic-standard heated pools.",
      },
      { name: "keywords", content: "swimming academy, swimming lessons, kids swimming classes, professional swim training, swimming coach, swimming school" },
      { property: "og:title", content: "Crocodils Swimming Academy — Train Like a Champion" },
      { property: "og:description", content: "Olympic-standard swimming coaching for kids, beginners and competitive athletes." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Crocodils Swimming Academy",
          description:
            "Professional swimming academy with certified coaches, modern heated indoor pools, and programs for kids, adults, and competitive athletes.",
          telephone: "+1-555-123-4567",
          email: "hello@crocodils.academy",
          address: {
            "@type": "PostalAddress",
            streetAddress: "24 Marina Boulevard",
            addressLocality: "Bay District",
          },
          openingHours: "Mo-Sa 08:00-20:00",
          priceRange: "$$",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Coaches />
        <Schedule />
        <Gallery />
        <Testimonials />
        <Achievements />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingUI />
    </div>
  );
}
