"use client";

import { motion } from "motion/react";
import { beneficios, estrutura } from "@/data/landing";
import { Brilho, FundoSeda, TituloSecao } from "./marca";

/*
 * 03 · Proposta de valor (direção, item 3): o que caracteriza o Pulsar e como
 * ele se diferencia de uma ação pontual — SEM prometer resultado não
 * comprovado. Benefícios na redação da apresentação ("contribui para").
 */
export function PropostaValor() {
  return (
    <section className="relative overflow-hidden py-24 font-corpo md:py-32">
      <FundoSeda className="opacity-60" />
      <div className="container-page relative">
        <TituloSecao
          titulo={
            <>
              Um processo contínuo,
              <br className="hidden md:block" /> não uma ação pontual.
            </>
          }
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
          <div>
            <p className="max-w-xl text-[15px] leading-relaxed text-salvia-900/85 md:text-base">
              Uma palestra isolada passa. O Pulsar acompanha a empresa ao longo de todo o ano,
              combinando avaliação, encontros coletivos, momentos de descompressão e
              acompanhamento — para que o cuidado vire prática da cultura, e não um evento no
              calendário.
            </p>

            {/* A estrutura do ano, ligada pelo fio dourado. */}
            <ol className="relative mt-10 space-y-8 border-l border-ouro/50 pl-8">
              {estrutura.map((item, i) => (
                <motion.li
                  key={item.titulo}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative"
                >
                  <span
                    aria-hidden
                    className="absolute -left-[37px] top-1.5 size-[9px] rounded-full bg-ouro ring-4 ring-seda"
                  />
                  <p className="font-display text-[24px] text-petroleo">{item.titulo}</p>
                  <p className="mt-1.5 max-w-lg text-[14px] leading-relaxed text-salvia-900/80">
                    {item.texto}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative self-start bg-salvia-50/90 p-8 shadow-[0_30px_60px_-40px_rgb(18_52_48/0.35)] md:p-10"
          >
            <Brilho className="absolute -right-3 -top-3 size-7 text-salvia-900" />
            <p className="font-display text-[30px] font-light text-salvia-700">Benefícios</p>
            <p className="mt-3 text-[14px] leading-relaxed text-salvia-900/80">
              Ao investir em uma cultura de cuidado e consciência emocional, a organização cria
              condições para:
            </p>
            <ul className="mt-6 space-y-4">
              {beneficios.map((b) => (
                <li key={b} className="flex gap-3 text-[14px] leading-relaxed text-salvia-900">
                  <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-ouro" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>

        <p className="mt-16 max-w-3xl border-t border-salvia-700/20 pt-6 text-[12px] leading-relaxed text-salvia-900/65">
          Nas sessões de descompressão, o Access Consciousness® é usado como recurso complementar de
          pausa, presença e percepção de si. É uma prática de bem-estar e não substitui
          acompanhamento médico, psicológico ou qualquer tratamento de saúde.
        </p>
      </div>
    </section>
  );
}
