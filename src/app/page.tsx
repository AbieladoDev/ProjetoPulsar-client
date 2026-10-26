import type { Metadata } from "next";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Proposito } from "@/components/landing/proposito";
import { PropostaValor } from "@/components/landing/proposta-valor";
import { Metodologia } from "@/components/landing/metodologia";
import { Audiences } from "@/components/landing/audiences";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { About } from "@/components/landing/about";
import { Contato } from "@/components/landing/contato";
import { Footer } from "@/components/landing/footer";
import { WhatsAppFloat } from "@/components/landing/whatsapp-float";
import { INSTAGRAM } from "@/data/landing";

/*
 * Landing do Projeto Pulsar — remodelada em out/2026 pela "DIREÇÃO para
 * Remodelação" (public/). Ordem das seções = estrutura sugerida pela direção:
 * 01 abertura · 02 propósito e desafios · 03 proposta de valor · 04
 * metodologia · 05 para quem é · 06 quem conduz · 07 na prática (vídeos por
 * último, depois dos depoimentos) · 08 contato. Juliana antes das experiências
 * e vídeos no fim foram pedidos da cliente em 26/10/2026.
 */

export const metadata: Metadata = {
  title: "Projeto Pulsar | Saúde mental e desenvolvimento humano nas empresas — NR-1",
  description:
    "Programa de desenvolvimento humano para empresas e instituições em Porto Alegre e região: pausa, escuta e regulação emocional, com cuidado dos riscos psicossociais previstos na NR-1. Idealizado e conduzido por Juliana Freitas.",
  icons: {
    icon: [{ url: "/brand/logo/pulsar-icone.svg", type: "image/svg+xml" }],
    apple: "/brand/logo/pulsar-icone.svg",
  },
  openGraph: {
    title: "Projeto Pulsar — Pessoas mais conscientes. Empresas mais fortes.",
    description:
      "Saúde mental e desenvolvimento humano nas empresas. Consciência, regulação emocional e humanização no ambiente de trabalho.",
    locale: "pt_BR",
    type: "website",
    images: ["/brand/logo/pulsar-logo-completo.png"],
  },
};

// Dados estruturados para o Google. Sem endereço de propósito: o programa vai
// até a empresa, e a base declarada nos materiais é Porto Alegre.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Projeto Pulsar",
  description:
    "Saúde mental e desenvolvimento humano nas empresas: avaliação, palestras de sensibilização, sessões de descompressão e acompanhamento, com cuidado dos riscos psicossociais da NR-1.",
  telephone: "+55-51-98514-0070",
  areaServed: { "@type": "City", name: "Porto Alegre" },
  founder: { "@type": "Person", name: "Juliana Freitas", jobTitle: "Facilitadora de Desenvolvimento Humano" },
  sameAs: [INSTAGRAM.href],
};

export default function HomePage() {
  return (
    <div className="bg-seda text-salvia-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Proposito />
        <PropostaValor />
        <Metodologia />
        <Audiences />
        <About />
        <TestimonialsSection />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
