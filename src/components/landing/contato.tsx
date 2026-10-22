"use client";

import { motion } from "motion/react";
import { ArrowRight, ClipboardList, Instagram, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GOOGLE_FORMS_URL,
  INSTAGRAM,
  MENSAGENS,
  WHATSAPP_EXIBIDO,
  whatsapp,
} from "@/data/landing";
import { Orbita, TituloSecao, botao } from "./marca";

/*
 * 08 · Contato e proposta (direção, item 8): formulário simples via Google
 * Forms + chamada para conversa. Enquanto o link do formulário não chega
 * (GOOGLE_FORMS_URL vazio), o caminho é o WhatsApp.
 */
export function Contato() {
  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden bg-petroleo py-24 font-corpo md:py-32">
      <Orbita traco={1} className="absolute -right-[20%] top-6 w-[110%] max-w-none opacity-50" />

      <div className="container-page relative grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-20">
        <div>
          <TituloSecao
            claro
            titulo={
              <>
                Sua empresa está
                <br /> pronta para pulsar?
              </>
            }
          />
          <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-salvia-100 md:text-base">
            O cuidado com as pessoas começa quando a organização decide olhar para elas de forma
            consciente. Vamos conversar sobre as necessidades da sua equipe e construir juntos o
            próximo passo.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-3"
        >
          {GOOGLE_FORMS_URL && (
            <a href={GOOGLE_FORMS_URL} target="_blank" rel="noreferrer" className={cn(botao.claro, "justify-between")}>
              <span className="inline-flex items-center gap-2">
                <ClipboardList className="size-4" />
                Solicitar uma proposta pelo formulário
              </span>
              <ArrowRight className="size-4" />
            </a>
          )}
          <a
            href={whatsapp(MENSAGENS.proposta)}
            target="_blank"
            rel="noreferrer"
            className={cn(GOOGLE_FORMS_URL ? botao.secundario : botao.claro, "justify-between", GOOGLE_FORMS_URL && "border-salvia-50/30 text-salvia-50 hover:bg-salvia-50/10")}
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="size-4" />
              Solicitar uma proposta pelo WhatsApp
            </span>
            <ArrowRight className="size-4" />
          </a>
          <a
            href={whatsapp(MENSAGENS.equipe)}
            target="_blank"
            rel="noreferrer"
            className={cn(botao.secundario, "justify-between border-salvia-50/30 text-salvia-50 hover:border-salvia-50 hover:bg-salvia-50/10")}
          >
            Conversar sobre as necessidades da equipe
            <ArrowRight className="size-4" />
          </a>

          <div className="mt-6 grid gap-4 border-t border-salvia-50/15 pt-6 text-[14px] text-salvia-100 sm:grid-cols-2">
            <a
              href={whatsapp(MENSAGENS.topo)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-salvia-50"
            >
              <MessageCircle className="size-4 text-ouro" />
              {WHATSAPP_EXIBIDO}
            </a>
            <a
              href={INSTAGRAM.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-salvia-50"
            >
              <Instagram className="size-4 text-ouro" />@{INSTAGRAM.usuario}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
