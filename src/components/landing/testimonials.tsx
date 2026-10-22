"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { testimonials } from "@/data/landing";
import { TituloSecao } from "./marca";

type Item = (typeof testimonials)[number];

/*
 * 06 · O Pulsar na prática (direção, item 6): experiências e registros REAIS e
 * autorizados, com contexto. Só entra aqui foto/vídeo do trabalho de verdade —
 * as imagens geradas por IA do manual da marca ficam de fora desta seção.
 */
export function Testimonials() {
  return (
    <section id="experiencias" className="scroll-mt-20 py-24 font-corpo md:py-32">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-16">
          <TituloSecao titulo="O Pulsar na prática" fantasma="na prática" />
          <p className="text-[15px] leading-relaxed text-salvia-900/85 md:text-base">
            O Pulsar já é aplicado em ambiente hospitalar, na oncologia — um contexto de alta
            exigência emocional. A metodologia nasceu da escuta real desses profissionais.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Celula key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Celula({ item, index }: { item: Item; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group relative aspect-[4/3] overflow-hidden bg-salvia-100"
    >
      {item.type === "text" && (
        <div className="flex h-full flex-col justify-end bg-salvia-500 p-7 text-salvia-900">
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-salvia-50">Relato</p>
          <h3 className="mt-3 font-display text-[30px] font-normal leading-tight text-salvia-50">
            {item.title}
          </h3>
          <p className="mt-3 text-[14px] leading-relaxed">{item.body}</p>
        </div>
      )}

      {item.type === "video" && (
        <>
          <video controls preload="metadata" playsInline className="h-full w-full bg-petroleo object-cover">
            <source src={item.src} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-1.5 bg-petroleo/85 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-salvia-50">
            <Play className="size-3" /> {item.legenda}
          </div>
        </>
      )}

      {item.type === "image" && (
        <>
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-petroleo/85 via-petroleo/35 to-transparent p-5 pt-16">
            <p className="text-[13px] font-medium text-salvia-50">{item.alt}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}
