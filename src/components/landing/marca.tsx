"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/*
 * Peças da identidade do Pulsar usadas em toda a landing.
 *
 * A ÓRBITA é o elemento da marca: o arco dourado com o ponto, tirado do logo.
 * Ela aparece grande no topo (com o ponto percorrendo o arco — a ÚNICA
 * animação contínua da página) e pequena como divisor entre seções.
 */

/** Arco + ponto do logo. `animado` faz o ponto correr o arco (respeita "reduzir movimento"). */
export function Orbita({
  className,
  animado = false,
  traco = 1.2,
}: {
  className?: string;
  animado?: boolean;
  traco?: number;
}) {
  const reduzir = useReducedMotion();
  const caminho = "M20 260 Q 520 -60 1180 210";

  return (
    <svg
      viewBox="0 0 1200 280"
      fill="none"
      aria-hidden
      className={cn("pointer-events-none", className)}
    >
      <defs>
        {/* O arco do logo clareia nas pontas e é mais forte no topo. */}
        <linearGradient id="orbita-ouro" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#b48c54" stopOpacity="0" />
          <stop offset="0.35" stopColor="#b48c54" stopOpacity="0.9" />
          <stop offset="0.7" stopColor="#c9a877" stopOpacity="0.8" />
          <stop offset="1" stopColor="#b48c54" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={caminho} stroke="url(#orbita-ouro)" strokeWidth={traco} strokeLinecap="round" />
      {animado && !reduzir ? (
        <circle r="7" fill="#b48c54">
          <animateMotion
            dur="14s"
            repeatCount="indefinite"
            path={caminho}
            keyPoints="0.55;0.8;0.55"
            keyTimes="0;0.5;1"
            calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
        </circle>
      ) : (
        <circle cx="905" cy="62" r="7" fill="#b48c54" />
      )}
    </svg>
  );
}

/** A estrelinha de quatro pontas da apresentação (canto das páginas). */
export function Brilho({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={cn("pointer-events-none", className)}>
      <path
        d="M24 0 C25.5 16 32 22.5 48 24 C32 25.5 25.5 32 24 48 C22.5 32 16 25.5 0 24 C16 22.5 22.5 16 24 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Cabeçalho de seção no desenho da apresentação: título em serifa fina e o
 * MESMO título, enorme e quase transparente, por trás ("sobre mim", "nosso
 * propósito" na apresentação). Sem número nem rótulo desde que o sumário saiu
 * do topo (pedido do Arthur, 22/10/2026).
 */
export function TituloSecao({
  titulo,
  fantasma,
  claro = false,
  className,
}: {
  titulo: React.ReactNode;
  /** Texto do título fantasma (sem quebra). Omitido = sem fantasma. */
  fantasma?: string;
  claro?: boolean;
  className?: string;
}) {
  return (
    // `overflow-x-clip`: o fantasma (150px, sem quebra) não pode alargar a
    // página — empurrava o conteúdo e cortava o texto na margem. Só no eixo
    // x, para ele continuar subindo acima do título.
    <div className={cn("relative overflow-x-clip", className)}>
      {fantasma && (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-6 left-0 hidden select-none whitespace-nowrap font-display text-[120px] font-light leading-none md:block lg:text-[150px]",
            claro ? "text-salvia-50/10" : "text-salvia-700/[0.07]",
          )}
        >
          {fantasma}
        </span>
      )}
      <h2
        className={cn(
          "relative font-display text-[40px] font-light leading-[1.02] tracking-[-0.01em] md:text-[56px] lg:text-[64px]",
          claro ? "text-salvia-50" : "text-salvia-700",
        )}
      >
        {titulo}
      </h2>
    </div>
  );
}

/** A textura de seda branca — o fundo de todas as páginas da apresentação. */
export function FundoSeda({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/texturas/seda-branca.jpg"
      alt=""
      fill
      sizes="100vw"
      className={cn("pointer-events-none select-none object-cover", className)}
    />
  );
}

/** Botões da landing: reto como os blocos da apresentação, petróleo + creme. */
export const botao = {
  primario:
    "inline-flex items-center justify-center gap-2 rounded-[2px] bg-petroleo px-6 py-3.5 font-corpo text-[13px] font-medium tracking-[0.04em] text-salvia-50 transition-colors hover:bg-salvia-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ouro",
  secundario:
    "inline-flex items-center justify-center gap-2 rounded-[2px] border border-petroleo/30 px-6 py-3.5 font-corpo text-[13px] font-medium tracking-[0.04em] text-petroleo transition-colors hover:border-petroleo hover:bg-petroleo/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ouro",
  claro:
    "inline-flex items-center justify-center gap-2 rounded-[2px] bg-salvia-50 px-6 py-3.5 font-corpo text-[13px] font-medium tracking-[0.04em] text-petroleo transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ouro",
};
