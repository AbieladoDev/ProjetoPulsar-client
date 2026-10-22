"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MENSAGENS, whatsapp } from "@/data/landing";
import { Brilho, FundoSeda, Orbita, botao } from "./marca";

/*
 * 01 · Abertura institucional (direção, item 1): apresentar o Projeto PULSAR, o
 * público e a transformação, com a chamada comercial. O projeto é o
 * protagonista — a Juliana aparece só como assinatura, como na capa da
 * apresentação.
 */
export function Hero() {
  return (
    <section
      id="inicio"
      // Sobe por baixo do cabeçalho transparente para a seda começar no topo.
      className="relative -mt-[72px] flex min-h-[92svh] flex-col overflow-hidden pt-[72px] font-corpo"
    >
      <FundoSeda className="opacity-90" />
      {/* Véu sálvia nas bordas, como o degradê da capa da apresentação. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgb(146_158_119/0.22)_100%)]"
      />

      <Orbita
        animado
        traco={1}
        className="absolute -left-[10%] top-[52%] w-[120%] max-w-none opacity-70 md:top-[46%]"
      />
      <Brilho className="absolute right-[8%] top-[18%] size-5 text-salvia-900/70 md:size-7" />
      <Brilho className="absolute right-[6.5%] top-[14%] size-2.5 text-salvia-900/60 md:size-3" />

      <div className="container-page relative flex flex-1 flex-col items-center justify-center py-16 text-center md:py-20">
        <h1 className="sr-only">Projeto Pulsar — saúde mental e desenvolvimento humano nas empresas</h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-[640px]"
        >
          <Image
            src="/brand/logo/pulsar-logo-subtitulo.png"
            alt="Projeto Pulsar — saúde mental e desenvolvimento humano nas empresas"
            width={1075}
            height={364}
            priority
            className="h-auto w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-10 flex flex-col items-center"
        >
          <p className="font-display text-[28px] font-light italic leading-tight text-salvia-700 md:text-[36px]">
            Pessoas mais conscientes. Empresas mais fortes.
          </p>

          <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-salvia-900/85 md:text-base">
            Programa de desenvolvimento humano para empresas e instituições: espaços estruturados
            de pausa, escuta e regulação emocional, que contribuem para a prevenção e o cuidado com
            os riscos psicossociais previstos na <strong className="font-semibold">NR-1</strong>.
          </p>

          <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <a
              href={whatsapp(MENSAGENS.proposta)}
              target="_blank"
              rel="noreferrer"
              className={botao.primario}
            >
              Solicitar uma proposta
              <ArrowRight className="size-4" />
            </a>
            <a
              href={whatsapp(MENSAGENS.equipe)}
              target="_blank"
              rel="noreferrer"
              className={cn(botao.secundario, "bg-seda/40 backdrop-blur-sm")}
            >
              Conversar sobre as necessidades da equipe
            </a>
          </div>

          <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.3em] text-salvia-700">
            Consciência · Cuidado · Relações · Humanização
          </p>
        </motion.div>
      </div>

      {/* Assinatura, como no canto da capa: quem idealizou, sem roubar a cena. */}
      <a
        href="#juliana"
        className="container-page relative flex items-center justify-center gap-3 pb-8 text-[12px] text-salvia-900/70 transition-colors hover:text-petroleo md:justify-end"
      >
        <span>Idealizado e conduzido por</span>
        <Image
          src="/brand/logo/juliana-assinatura.png"
          alt="Juliana Freitas"
          width={1840}
          height={554}
          className="h-9 w-auto brightness-[0.55] contrast-125"
        />
      </a>
    </section>
  );
}
