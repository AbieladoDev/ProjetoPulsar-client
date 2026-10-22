"use client";

import { motion } from "motion/react";
import { desafios } from "@/data/landing";
import { Brilho, TituloSecao } from "./marca";

/*
 * 02 · Propósito e desafios (direção, item 2): por que o projeto existe e quais
 * desafios aborda. Texto da apresentação ("o que é o projeto", "nosso
 * propósito"). O aviso da NR-1 é o que já estava publicado no site.
 */
export function Proposito() {
  return (
    <section id="projeto" className="relative scroll-mt-20 pt-24 font-corpo md:pt-32">
      <div className="container-page">
        <TituloSecao
          titulo="O que é o Pulsar"
          fantasma="o que é o projeto"
        />
      </div>

      {/* A faixa sálvia da apresentação, de ponta a ponta. */}
      <div className="relative mt-12 bg-salvia-500 text-salvia-900 md:mt-16">
        <Brilho className="absolute left-[4%] top-0 size-9 -translate-y-1/2 text-salvia-900" />
        <div className="container-page grid gap-10 py-14 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-[15px] leading-relaxed md:text-base"
          >
            <p className="font-display text-[26px] font-normal leading-snug text-salvia-50 md:text-[30px]">
              Consciência, regulação emocional e humanização no ambiente de trabalho.
            </p>
            <p>
              O Pulsar nasceu da percepção de que ambientes de trabalho exigentes podem gerar
              sobrecarga emocional, afetar relações e impactar diretamente a saúde e o bem-estar
              das pessoas.
            </p>
            <p>
              A partir de uma experiência de escuta ativa com profissionais da área de oncologia,
              o projeto foi desenvolvido para criar espaços estruturados de pausa, reflexão e
              reconexão com o próprio ritmo interno.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between gap-8 border-salvia-900/20 md:border-l md:pl-12"
          >
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-salvia-50">
                Nosso propósito
              </p>
              <p className="mt-4 text-[15px] leading-relaxed md:text-base">
                Promover uma cultura de mais consciência, presença e cuidado nas relações de
                trabalho — reconhecendo que pessoas emocionalmente sobrecarregadas podem ter sua
                saúde, comunicação, produtividade e relações impactadas.
              </p>
            </div>
            <p className="font-display text-[22px] italic leading-snug text-salvia-50">
              “Porque, quando as pessoas estão bem, a organização também pulsa.”
            </p>
          </motion.div>
        </div>
      </div>

      {/* Os desafios que o Pulsar ajuda a olhar. */}
      <div className="container-page py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <h3 className="font-display text-[30px] font-light leading-tight text-salvia-700 md:text-[36px]">
              Desafios que o Pulsar ajuda a olhar
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-salvia-900/80">
              São os temas da avaliação inicial — e o ponto de partida de cada programa.
            </p>
          </div>

          <ol className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {desafios.map((d, i) => (
              <motion.li
                key={d.titulo}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-ouro/50 pt-5"
              >
                <span className="text-[11px] font-medium tracking-[0.2em] text-ouro">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-display text-[24px] font-normal text-petroleo">{d.titulo}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-salvia-900/80">{d.texto}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* NR-1 — o gancho que faz o RH procurar o programa. */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid gap-8 bg-petroleo px-7 py-10 text-salvia-50 md:mt-24 md:grid-cols-[auto_minmax(0,1fr)] md:gap-14 md:px-14 md:py-14"
        >
          <p className="font-display text-[64px] font-light leading-none text-ouro md:text-[88px]">
            NR-1
          </p>
          <div className="space-y-4">
            <p className="font-display text-[22px] leading-snug md:text-[26px]">
              A partir de 26 de maio de 2026, a NR-1 passa a incluir expressamente os fatores de
              risco psicossociais no Gerenciamento de Riscos Ocupacionais (GRO).
            </p>
            <p className="text-[14px] leading-relaxed text-salvia-100 md:text-[15px]">
              As organizações passam a olhar para estresse ocupacional, sobrecarga emocional,
              conflitos interpessoais e comunicação disfuncional. O Pulsar contribui para a
              prevenção e o cuidado com esses riscos, integrando saúde emocional e humanização à
              gestão de pessoas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
