"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export type PublicFeedback = {
  id: string;
  nome: string;
  empresa: string | null;
  mensagem: string;
  nota: number | null;
};

export function FeedbacksCarousel({ items }: { items: PublicFeedback[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items.length]);

  function scrollBy(dir: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 16 : el.clientWidth * 0.9;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  }

  // Sem depoimento aprovado, a seção não aparece: "em breve" num site
  // institucional passa a impressão de projeto vazio.
  if (items.length === 0) return null;

  return (
    <section className="bg-salvia-50 py-20 font-corpo md:py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-salvia-700">
              Depoimentos
            </p>
            <h3 className="mt-3 font-display text-[34px] font-light leading-tight text-salvia-700 md:text-[44px]">
              O que dizem sobre o Pulsar
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Anterior"
              className="flex size-10 items-center justify-center rounded-full border border-petroleo/25 text-petroleo transition-colors hover:border-petroleo disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Próximo"
              className="flex size-10 items-center justify-center rounded-full border border-petroleo/25 text-petroleo transition-colors hover:border-petroleo disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <div
            ref={scrollerRef}
            className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((f) => (
              <article
                key={f.id}
                data-card
                className="flex w-[85%] shrink-0 snap-start flex-col justify-between gap-6 bg-white/70 p-7 sm:w-[420px] md:p-8"
              >
                <Quote className="size-6 text-ouro" strokeWidth={1.5} />
                {f.nota !== null && (
                  <div className="flex items-center gap-0.5" aria-label={`Nota ${f.nota} de 5`}>
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star
                        key={k}
                        className={
                          "size-3.5 " +
                          (k < (f.nota ?? 0) ? "fill-ouro text-ouro" : "text-salvia-300")
                        }
                      />
                    ))}
                  </div>
                )}
                <p className="font-display text-[20px] leading-snug text-petroleo">“{f.mensagem}”</p>
                <div className="border-t border-salvia-700/15 pt-4">
                  <p className="text-[14px] font-semibold text-salvia-900">{f.nome}</p>
                  {f.empresa && <p className="text-[12px] text-salvia-700">{f.empresa}</p>}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
