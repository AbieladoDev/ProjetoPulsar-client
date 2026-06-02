import { CertificateView } from "@/app/painel/certificado/certificate-view";

export const metadata = {
  title: "Preview do Certificado | Projeto Pulsar",
};

const SAMPLE_CERT = {
  codigo: "PULSAR-2026-PREVIEW",
  nome_aluno: "Nome do Participante",
  nome_empresa: "Empresa Exemplo",
  local: "São Paulo, SP",
  duracao: "8 horas",
  data_evento: "2026-06-01",
  data_inicio: "2026-06-01",
  data_fim: "2026-06-03",
  emitido_em: new Date().toISOString(),
};

export default function CertificatePreviewPage() {
  return (
    <div className="min-h-screen bg-neutral-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="mb-6 text-center font-serif text-2xl font-bold">
          Preview do Certificado
        </h1>
        <CertificateView cert={SAMPLE_CERT} />
      </div>
    </div>
  );
}
