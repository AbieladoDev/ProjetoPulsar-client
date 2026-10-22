"use client";

import { motion } from "motion/react";
import { audiences } from "@/data/landing";
import { TituloSecao } from "./marca";

/*
 * 05 · Para quem é o projeto (direção, item 5): os segmentos atendidos e as
 * necessidades de cada um, falando com quem decide (gestão, RH, liderança).
 */
export function Audiences() {
  return (
    <section id="para-quem" className="scroll-mt-20 bg-salvia-50 py-24 font-corpo md:py-32">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <TituloSecao titulo="Onde há pessoas trabalhando com pessoas" />
          <p className="text-[15px] leading-relaxed text-salvia-900/85 md:text-base">
            Para gestores, profissionais de RH, lideranças e representantes de instituições que
            querem cuidar do ambiente de trabalho — e de quem faz a organização acontecer.
          </p>
        </div>

        <ul className="mt-14 border-t border-salvia-700/20">
          {audiences.map((a, i) => (
            <motion.li
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative grid gap-3 border-b border-salvia-700/20 py-7 md:grid-cols-[56px_minmax(0,0.9fr)_minmax(0,1.3fr)] md:items-center md:gap-8"
            >
              <span
                aria-hidden
                className="absolute bottom-[-1px] left-0 h-px w-0 bg-ouro transition-all duration-500 group-hover:w-full"
              />
              <span className="flex size-11 items-center justify-center rounded-full border border-salvia-700/25 text-salvia-700 transition-colors group-hover:border-ouro group-hover:text-ouro">
                <a.icon className="size-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-[28px] font-normal leading-tight text-petroleo md:text-[32px]">
                {a.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-salvia-900/80 md:text-[15px]">{a.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
