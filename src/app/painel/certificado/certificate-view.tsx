"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Printer, Download, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export type CertificateData = {
  codigo: string;
  nome_aluno: string;
  nome_empresa: string;
  local: string;
  duracao: string;
  data_evento: string | null;
  emitido_em: string;
};

function formatDateLong(iso: string | null) {
  if (!iso) return null;
  const date = new Date(iso + "T00:00:00");
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function CertificateView({ cert }: { cert: CertificateData }) {
  const certRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [validationUrl, setValidationUrl] = useState(
    `/certificado/${cert.codigo}`,
  );

  useEffect(() => {
    const url = `${window.location.origin}/certificado/${cert.codigo}`;
    setValidationUrl(url);

    import("qrcode").then(({ default: QRCode }) => {
      QRCode.toDataURL(url, {
        margin: 0,
        width: 300,
        color: { dark: "#18181b", light: "#ffffff" },
      }).then(setQrDataUrl);
    });
  }, [cert.codigo]);

  async function handleDownloadPdf() {
    if (!certRef.current) return;

    setIsDownloading(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.95);

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      pdf.addImage(imgData, "JPEG", 0, 0, 297, 210);
      pdf.save(`certificado-pulsar-${cert.codigo}.pdf`);

      toast.success("PDF baixado!");
    } catch (err) {
      console.error(err);
      toast.error("Erro ao gerar PDF. Tente o botão imprimir.");
    } finally {
      setIsDownloading(false);
    }
  }

  const gold = "#c5a44e";
  const goldLight = "#d4b96a";
  const greenDark = "#2d4a2d";

  return (
    <>
      <style>{`
        @media print {
          @page { size: A4 landscape; margin: 0; }
          body * { visibility: hidden !important; }
          .certificate-print, .certificate-print * { visibility: visible !important; }
          .certificate-print {
            position: fixed !important;
            top: 0 !important; left: 0 !important;
            width: 297mm !important; height: 210mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Top action bar */}
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Código de validação
          </p>
          <p className="font-mono text-base font-medium">{cert.codigo}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={handleDownloadPdf}
            size="lg"
            disabled={isDownloading}
            className="gap-2"
          >
            {isDownloading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Download className="size-4" />
            )}
            Baixar PDF
          </Button>
          <Button
            onClick={() => window.print()}
            size="lg"
            variant="outline"
            className="gap-2"
          >
            <Printer className="size-4" />
            Imprimir
          </Button>
        </div>
      </div>

      {/* Certificate */}
      <div
        ref={certRef}
        className="certificate-print relative mx-auto flex aspect-[297/210] w-full max-w-5xl overflow-hidden bg-white shadow-xl"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        {/* ── Left accent bar ── */}
        <div
          aria-hidden
          className="absolute left-0 top-0 h-full w-[6px]"
          style={{ background: gold }}
        />

        {/* ── Top border line ── */}
        <div
          aria-hidden
          className="absolute left-0 top-0 h-[6px] w-full"
          style={{ background: gold }}
        />

        {/* ── Right accent bar ── */}
        <div
          aria-hidden
          className="absolute right-0 top-0 h-full w-[6px]"
          style={{ background: gold }}
        />

        {/* ── Bottom border line ── */}
        <div
          aria-hidden
          className="absolute bottom-0 left-0 h-[6px] w-full"
          style={{ background: gold }}
        />

        {/* ── Watermark pattern ── */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          style={{
            fontSize: "22px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: gold,
            opacity: 0.05,
            textTransform: "uppercase",
            fontFamily: "var(--font-space-grotesk), 'Arial Black', sans-serif",
            lineHeight: "1.4",
          }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="whitespace-nowrap" style={{ marginLeft: i % 2 === 0 ? "0px" : "-30px" }}>
              {Array.from({ length: 14 }).map((_, j) => (
                <span key={j} className="mr-4">
                  {(i + j) % 2 === 0 ? "PULSAR" : "PROJETO"}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* ── Content ── */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-between px-16 py-10">
          {/* Header: logo + title */}
          <div className="flex w-full items-start">
            <Image
              src="/img/logo.png"
              alt="Projeto Pulsar"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>

          {/* Body */}
          <div className="flex flex-col items-center text-center" style={{ maxWidth: "620px" }}>
            <h1
              className="text-5xl font-bold uppercase tracking-[0.25em]"
              style={{ color: gold }}
            >
              Certificado
            </h1>

            <p
              className="mt-4 text-base uppercase tracking-[0.25em]"
              style={{ color: greenDark }}
            >
              Certificamos que a empresa
            </p>

            <h2
              className="mt-3 text-4xl font-bold uppercase tracking-tight"
              style={{ color: "#1a1a1a" }}
            >
              {cert.nome_empresa}
            </h2>

            {/* Gold divider */}
            <div className="my-4 flex items-center gap-3">
              <span className="h-px w-16" style={{ background: gold }} />
              <span
                className="size-1.5 rotate-45"
                style={{ background: gold }}
              />
              <span className="h-px w-16" style={{ background: gold }} />
            </div>

            <p
              className="text-sm font-semibold uppercase leading-relaxed tracking-wide"
              style={{ color: greenDark }}
            >
              Realizou o Projeto Pulsar — Treinamento em Saúde Emocional e
              Desenvolvimento Humano.
            </p>

            <p
              className="mt-4 text-[11px] leading-[1.7]"
              style={{ color: "#444" }}
            >
              Como ação institucional voltada ao cuidado com a saúde emocional
              de seus colaboradores e à atenção aos fatores psicossociais no
              ambiente de trabalho, em conformidade com as diretrizes da NR-1 —
              Gerenciamento de Riscos Ocupacionais. O programa foi realizado com
              a carga horária de{" "}
              <strong style={{ color: "#1a1a1a" }}>{cert.duracao} horas</strong>
              {cert.data_evento && (
                <>
                  {" "}no período de{" "}
                  <strong style={{ color: "#1a1a1a" }}>
                    {formatDateLong(cert.data_evento)}
                  </strong>
                </>
              )}
              , incluindo palestra inicial e encontros individuais de apoio ao
              bem-estar no ambiente de trabalho.
            </p>

            <p
              className="mt-5 text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "#999" }}
            >
              Participante
            </p>
            <div className="mt-1 flex flex-col items-center">
              <p
                className="text-2xl font-bold uppercase tracking-tight"
                style={{ color: "#1a1a1a" }}
              >
                {cert.nome_aluno}
              </p>
              <div
                className="mt-1 h-px w-72"
                style={{ background: "#1a1a1a" }}
              />
            </div>
          </div>

          {/* Footer */}
          <div className="flex w-full flex-col gap-5">
            {/* Bottom info row */}
            <div className="flex w-full items-end justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5">
                  <span
                    className="size-1.5 rotate-45"
                    style={{ background: gold }}
                  />
                  <p
                    className="text-[8px] uppercase tracking-[0.15em]"
                    style={{ color: "#999" }}
                  >
                    Saúde Emocional
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="size-1.5 rotate-45"
                    style={{ background: gold }}
                  />
                  <p
                    className="text-[8px] uppercase tracking-[0.15em]"
                    style={{ color: "#999" }}
                  >
                    Desenvolvimento Humano
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className="size-1.5 rotate-45"
                    style={{ background: gold }}
                  />
                  <p
                    className="text-[8px] uppercase tracking-[0.15em]"
                    style={{ color: "#999" }}
                  >
                    NR-1 · GRO
                  </p>
                </div>
              </div>

              {/* Signature + Logo ABRATH */}
              <div className="flex items-end gap-6">
                <div className="relative flex flex-col items-center">
                  <Image
                    src="/Assinatura.png"
                    alt="Assinatura"
                    width={160}
                    height={70}
                    className="absolute -top-20 object-contain"
                  />
                  <div
                    className="mb-2 h-px w-52"
                    style={{ background: "#1a1a1a" }}
                  />
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "#1a1a1a" }}
                  >
                    Juliana Freitas da Silva
                  </p>
                  <p className="text-[9px] tracking-wide" style={{ color: "#888" }}>
                    Mentora do ProjetoPulsar
                  </p>
                </div>

                <Image
                  src="/logo-abrath.png"
                  alt="ABRATH"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
