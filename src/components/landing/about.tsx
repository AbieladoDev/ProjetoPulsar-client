"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { juliana } from "@/data/landing";
import { Brilho, FundoSeda, TituloSecao } from "./marca";

/*
 * 06 · Quem conduz o PULSAR: DEPOIS da metodologia e dos públicos — o site é
 * do projeto. Vinha depois das evidências; a cliente pediu em 26/10/2026 para
 * apresentá-la antes delas.
 *
 * Foto: recorte de terno branco (public/brand/fotos/), escolhido pelo Arthur
 * em 22/10/2026. ⚠️ É imagem gerada por IA segundo o próprio manual da marca
 * ("Imagens criadas IA") — a Juliana usa na apresentação dela, mas a direção
 * pede imagem real e aprovada: confirmar com ela. A foto real é /img/Perfil.jpeg.
 */
export function About() {
  return (
    <section id="juliana" className="relative scroll-mt-20 overflow-hidden py-24 font-corpo md:py-32">
      <FundoSeda className="opacity-70" />
      <div className="container-page relative">
        <TituloSecao titulo="Quem conduz o Pulsar" fantasma="sobre mim" />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          {/* Foto sobre o bloco sálvia deslocado. */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[440px]"
          >
            {/* Recorte sobre o quadrado sálvia, como o "sobre mim" da
                apresentação: a figura passa por cima do bloco. */}
            <div className="relative aspect-[4/5]">
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-[78%] bg-salvia-300" />
              <Image
                src="/brand/fotos/juliana-branco-sentada.png"
                alt="Juliana Freitas, idealizadora e facilitadora do Projeto Pulsar"
                fill
                sizes="(min-width: 1024px) 440px, 90vw"
                className="object-contain object-bottom"
              />
            </div>
            <Brilho className="absolute -right-4 -top-4 size-8 text-salvia-900" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Image
              src="/brand/logo/juliana-assinatura.png"
              alt={juliana.nome}
              width={1840}
              height={554}
              className="h-14 w-auto brightness-[0.45] contrast-125 md:h-16"
            />
            <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.24em] text-salvia-700">
              {juliana.papel}
            </p>

            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-salvia-900/85 md:text-base">
              {juliana.texto.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </div>

            <ul className="mt-9 space-y-3 border-t border-salvia-700/20 pt-7">
              {juliana.formacao.map((f) => (
                <li key={f} className="flex gap-3 text-[14px] leading-relaxed text-salvia-900">
                  <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-ouro" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
