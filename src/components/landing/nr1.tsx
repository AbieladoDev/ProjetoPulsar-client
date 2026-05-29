"use client";

import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

export function Nr1() {
  return (
    <section id="nr1" className="py-16 lg:py-20">
      <div className="container-page">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 border-b border-border pb-5"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            NR-1
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Atualização NR-1 | Saúde Mental nas Empresas
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16"
        >
          {/* Left — highlight quote */}
          <div className="flex flex-col gap-6">
            <div className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary">
              <ShieldCheck className="size-6" />
            </div>

            <blockquote className="border-l-2 border-primary/60 pl-5 text-base font-semibold leading-relaxed text-foreground md:text-lg">
              &ldquo;A partir de 26 de maio de 2026, a Norma Regulamentadora nº
              1 (NR-1) passa a incluir expressamente os fatores de risco
              psicossociais no Gerenciamento de Riscos Ocupacionais
              (GRO).&rdquo;
            </blockquote>
          </div>

          {/* Right — body text */}
          <div className="flex flex-col gap-5 text-sm leading-relaxed text-foreground/75 md:text-[15px]">
            <p>
              Com isso, as organizações passam a ampliar o olhar sobre fatores
              relacionados à saúde emocional no ambiente de trabalho, incluindo
              estresse ocupacional, sobrecarga emocional, conflitos
              interpessoais, comunicação disfuncional e impactos psicossociais
              nas equipes.
            </p>
            <p>
              O{" "}
              <strong className="font-semibold text-foreground">
                Projeto Pulsar
              </strong>{" "}
              atua no desenvolvimento humano e emocional dentro das
              organizações, promovendo palestras, vivências e estratégias
              voltadas ao fortalecimento da saúde emocional, das relações
              interpessoais e da cultura organizacional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
