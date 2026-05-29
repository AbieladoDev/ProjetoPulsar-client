import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { About } from "@/components/landing/about";
import { Nr1 } from "@/components/landing/nr1";
import { Audiences } from "@/components/landing/audiences";
import { Process } from "@/components/landing/process";
import { Testimonials } from "@/components/landing/testimonials";
import { PulsarProgram } from "@/components/landing/pulsar-program";
import { Footer } from "@/components/landing/footer";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Nr1 />
        <Audiences />
        <Testimonials />
        <Process />
        <PulsarProgram />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
