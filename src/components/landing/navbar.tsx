"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MENSAGENS, navLinks, whatsapp } from "@/data/landing";
import { botao } from "./marca";

export function Navbar() {
  const [open, setOpen] = useState(false);
  // Transparente sobre a seda do topo; ganha fundo ao rolar.
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full font-corpo transition-[background-color,box-shadow] duration-300",
        rolou ? "bg-seda/90 shadow-[0_1px_0_rgb(18_52_48/0.08)] backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link href="#inicio" aria-label="Projeto Pulsar — início" className="shrink-0">
          <Image
            src="/brand/logo/pulsar-logo.png"
            alt="Projeto Pulsar"
            width={1074}
            height={242}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <ul className="flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-[12px] font-medium tracking-[0.06em] text-petroleo/75 transition-colors hover:text-petroleo"
                >
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 left-0 h-px w-0 bg-ouro transition-all duration-300 group-hover:w-full"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 border-l border-petroleo/15 pl-6">
            <Link
              href="/login"
              title="Área do cliente"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-petroleo/60 transition-colors hover:text-petroleo"
            >
              <LogIn className="size-3.5" />
              Acessar
            </Link>
            <a
              href={whatsapp(MENSAGENS.proposta)}
              target="_blank"
              rel="noreferrer"
              className={cn(botao.primario, "px-5 py-2.5")}
            >
              Solicitar uma proposta
            </a>
          </div>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu"
                className="text-petroleo hover:bg-petroleo/5 lg:hidden"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </Button>
            }
          />
          <SheetContent side="right" className="w-[82vw] max-w-xs bg-seda p-6 font-corpo">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <Image
              src="/brand/logo/pulsar-logo.png"
              alt="Projeto Pulsar"
              width={1074}
              height={242}
              className="mt-1 h-7 w-auto self-start"
            />
            <nav className="mt-8 flex flex-col">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 border-b border-petroleo/10 py-3.5 text-[15px] text-petroleo"
                >
                  <span className="w-5 text-[11px] text-ouro">{String(i + 1).padStart(2, "0")}</span>
                  {link.label}
                </Link>
              ))}
              <a
                href={whatsapp(MENSAGENS.proposta)}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className={cn(botao.primario, "mt-8")}
              >
                Solicitar uma proposta
              </a>
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-1.5 py-2 text-[13px] text-petroleo/60"
              >
                <LogIn className="size-3.5" />
                Área do cliente
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
