import { Container } from "@radix-ui/themes";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Tutoring from "@/components/Tutoring";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Container style={{ background: "#f5f5f0" }}>
      <Navbar />
      <Hero />
      <Tutoring />
      <Pricing />
      <Testimonials />
      <Contact />
    </Container>
  );
}
