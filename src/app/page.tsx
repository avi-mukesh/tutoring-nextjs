import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Ticker />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>

      {/* Sticky "Book a free call" — shown by ClientEffects once past the hero */}
      <div className="sticky-cta" id="stickyCta">
        <a href="#contact">
          <span className="pulse" />
          Book a free call
        </a>
      </div>

      <Footer />
      <ClientEffects />
    </>
  );
}
