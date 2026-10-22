"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { cicloContinuo, etapas, formatos, whatsapp } from "@/data/landing";
import { TituloSecao, botao } from "./marca";

/*
 * 04 · Metodologia (direção, item 4): as etapas reais, com a nomenclatura
 * oficial da apresentação. As cinco cores são a escala da própria
 * apresentação — do sálvia escuro ao creme, a etapa 1 mais densa.
 */
const TOM: { fundo: string; numero: string; titulo: string }[] = [
  { fundo: "bg-salvia-900", numero: "text-salvia-300", titulo: "text-salvia-50" },
  { fundo: "bg-salvia-500", numero: "text-salvia-50", titulo: "text-salvia-50" },
  { fundo: "bg-salvia-300", numero: "text-salvia-50", titulo: "text-salvia-900" },
  { fundo: "bg-salvia-100", numero: "text-salvia-500", titulo: "text-salvia-900" },
  { fundo: "bg-salvia-50", numero: "text-salvia-500", titulo: "text-salvia-900" },
];

export function Metodologia() {
  return (
    <section id="metodologia" className="scroll-mt-20 py-24 font-corpo md:py-32">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <TituloSecao
            titulo="Metodologia Pulsar"
            fantasma="metodologia"
          />
          <p className="text-[15px] leading-relaxed text-salvia-900/85 md:text-base">
            Uma jornada progressiva de conscientização, escuta, regulação emocional e
            acompanhamento. Cada etapa parte do que a anterior revelou sobre a equipe.
          </p>
        </div>

        <ol className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {etapas.map((etapa, i) => (
            <motion.li
              key={etapa.numero}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn("flex flex-col", i === 4 && "sm:col-span-2 lg:col-span-1")}
            >
              <div className={cn("flex min-h-[150px] flex-col justify-between p-6", TOM[i].fundo)}>
                <span className={cn("font-display text-[44px] font-light leading-none", TOM[i].numero)}>
                  {etapa.numero}
                </span>
                <p
                  className={cn(
                    "mt-6 text-[12px] font-semibold uppercase leading-snug tracking-[0.14em]",
                    TOM[i].titulo,
                  )}
                >
                  {etapa.titulo}
                </p>
              </div>
              <p className="border-b border-salvia-700/15 px-1 py-5 text-[14px] leading-relaxed text-salvia-900/80 lg:border-b-0 lg:px-6">
                {etapa.texto}
              </p>
            </motion.li>
          ))}
        </ol>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[13px] text-salvia-900">
          <span className="font-semibold uppercase tracking-[0.14em]">Um processo contínuo:</span>
          {cicloContinuo.map((passo, i) => (
            <span key={passo} className="inline-flex items-center gap-3">
              <span className="font-display text-[20px] italic text-salvia-700">{passo}</span>
              {i < cicloContinuo.length - 1 && <span className="text-ouro">→</span>}
            </span>
          ))}
        </p>

        {/* Por onde começar: os dois formatos. */}
        <div className="mt-24">
          <h3 className="font-display text-[32px] font-light text-salvia-700 md:text-[40px]">
            Você escolhe onde começar
          </h3>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-salvia-900/80">
            A empresa não precisa passar por todas as etapas de uma vez. Ela escolhe o tempo de
            jornada que atende ao seu momento — a metodologia é a mesma nos dois formatos. As ações
            podem ser presenciais, online ou híbridas.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {formatos.map((f, i) => (
              <motion.article
                key={f.nome}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={cn(
                  "flex flex-col p-8 md:p-10",
                  i === 0 ? "bg-salvia-100/70" : "bg-petroleo text-salvia-50",
                )}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p className={cn("font-display text-[40px] font-light", i === 0 ? "text-salvia-700" : "text-salvia-50")}>
                    {f.nome}
                  </p>
                  <span
                    className={cn(
                      "text-[11px] font-semibold uppercase tracking-[0.22em]",
                      i === 0 ? "text-salvia-700" : "text-ouro",
                    )}
                  >
                    {f.duracao}
                  </span>
                </div>
                <p className={cn("mt-4 text-[15px] leading-relaxed", i === 0 ? "text-salvia-900/85" : "text-salvia-100")}>
                  {f.resumo}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {f.itens.map((item) => (
                    <li key={item} className="flex gap-3 text-[14px] leading-relaxed">
                      <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-ouro" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsapp(f.mensagem)}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(i === 0 ? botao.primario : botao.claro, "mt-8 self-start")}
                >
                  Conversar sobre o {f.nome}
                  <ArrowRight className="size-4" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
