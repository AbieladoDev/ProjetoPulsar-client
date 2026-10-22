import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { navLinks, socialLinks } from "@/data/landing";

export function Footer() {
  return (
    <footer className="border-t border-salvia-50/10 bg-[#0d2622] font-corpo text-salvia-100">
      <div className="container-page grid gap-12 py-14 md:grid-cols-[1.3fr_1fr_auto] md:gap-16">
        <div className="flex flex-col gap-5">
          <Link href="#inicio" aria-label="Projeto Pulsar — início" className="self-start">
            <Image
              src="/brand/logo/pulsar-logo-subtitulo-claro.png"
              alt="Projeto Pulsar — saúde mental e desenvolvimento humano nas empresas"
              width={1075}
              height={364}
              className="h-16 w-auto md:h-[72px]"
            />
          </Link>
          <p className="max-w-sm font-display text-[20px] italic leading-snug text-salvia-50">
            Pessoas mais conscientes. Empresas mais fortes.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-[14px]">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ouro">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/login" className="transition-colors hover:text-ouro">
                Área do cliente
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-start gap-2">
          {socialLinks.map((s) => (
            <a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="flex size-10 items-center justify-center rounded-full border border-salvia-50/20 transition-colors hover:border-ouro hover:text-ouro"
            >
              {s.icon === "instagram" && <Instagram className="size-4" />}
              {s.icon === "facebook" && <Facebook className="size-4" />}
              {s.icon === "tiktok" && <TikTokIcon className="size-4" />}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-salvia-50/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-[12px] text-salvia-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Projeto Pulsar · Juliana Freitas. Todos os direitos reservados.</p>
          <p>
            Criação{" "}
            <a
              href="https://portfolioflavia.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ouro"
            >
              Flávia.dev
            </a>{" "}
            · Apoio{" "}
            <a href="https://db.app.br/" target="_blank" rel="noreferrer" className="transition-colors hover:text-ouro">
              db.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.6a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.03Z" />
    </svg>
  );
}
