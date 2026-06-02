import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { getProfileWithEmpresa } from "@/lib/auth/get-profile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CertificateView, type CertificateData } from "./certificate-view";
import { EmitirButton } from "./emitir-button";
import { AvaliacaoForm } from "./avaliacao-form";

type CertificadoRow = {
  id: string;
  codigo: string;
  nome_aluno_snapshot: string;
  nome_empresa_snapshot: string;
  local_snapshot: string;
  duracao_snapshot: string;
  data_evento_snapshot: string | null;
  data_inicio_snapshot: string | null;
  data_fim_snapshot: string | null;
  emitido_em: string;
};

function formatDateTime(iso: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export default async function CertificadoPage({
  searchParams,
}: {
  searchParams: Promise<{ codigo?: string }>;
}) {
  const params = await searchParams;
  const profile = await getProfileWithEmpresa();
  if (!profile) redirect("/login");
  if (profile.status !== "approved") redirect("/painel/aguardando");

  const supabase = await createClient();

  // Se tem ?codigo=, busca esse cert específico e renderiza
  if (params.codigo) {
    const { data: cert } = await supabase
      .from("certificados_emitidos")
      .select(
        "id, codigo, nome_aluno_snapshot, nome_empresa_snapshot, local_snapshot, duracao_snapshot, data_evento_snapshot, data_inicio_snapshot, data_fim_snapshot, emitido_em",
      )
      .eq("codigo", params.codigo)
      .eq("profile_id", profile.id)
      .maybeSingle();

    if (!cert) {
      return (
        <div className="flex flex-col gap-4">
          <Link
            href="/painel/certificado"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "w-fit",
            })}
          >
            <ArrowLeft className="size-4" />
            Voltar
          </Link>
          <Card>
            <CardHeader>
              <CardTitle>Certificado não encontrado</CardTitle>
              <CardDescription>
                Esse código não pertence a você ou não existe.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      );
    }

    const certData: CertificateData = {
      codigo: cert.codigo,
      nome_aluno: cert.nome_aluno_snapshot,
      nome_empresa: cert.nome_empresa_snapshot,
      local: cert.local_snapshot,
      duracao: cert.duracao_snapshot,
      data_evento: cert.data_evento_snapshot,
      data_inicio: cert.data_inicio_snapshot,
      data_fim: cert.data_fim_snapshot,
      emitido_em: cert.emitido_em,
    };

    return (
      <div className="flex flex-col gap-4">
        <Link
          href="/painel/certificado"
          className={buttonVariants({
            variant: "ghost",
            size: "sm",
            className: "no-print w-fit",
          })}
        >
          <ArrowLeft className="size-4" />
          Voltar
        </Link>
        <CertificateView cert={certData} />
      </div>
    );
  }

  // Sem código: mostra lista + botão de emissão
  const { data: historicoRaw } = await supabase
    .from("certificados_emitidos")
    .select(
      "id, codigo, nome_aluno_snapshot, nome_empresa_snapshot, local_snapshot, duracao_snapshot, data_evento_snapshot, data_inicio_snapshot, data_fim_snapshot, emitido_em",
    )
    .eq("profile_id", profile.id)
    .order("emitido_em", { ascending: false });

  const historico = (historicoRaw ?? []) as CertificadoRow[];
  const podeEmitir = Boolean(profile.empresa_obj);

  // Verifica se já enviou pelo menos 1 feedback
  const { count: feedbackCount } = await supabase
    .from("feedbacks")
    .select("id", { count: "exact", head: true })
    .eq("profile_id", profile.id);

  const jaAvaliou = (feedbackCount ?? 0) > 0;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link
            href="/painel"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "mb-2 w-fit -ml-2",
            })}
          >
            <ArrowLeft className="size-4" />
            Voltar ao painel
          </Link>
          <h1 className="font-serif text-3xl font-bold md:text-4xl">
            Certificado
          </h1>
          <p className="mt-2 text-muted-foreground">
            {jaAvaliou
              ? "Emita seu certificado de participação e baixe em PDF."
              : "Preencha a avaliação abaixo para liberar seu certificado."}
          </p>
        </div>
        {podeEmitir && jaAvaliou && <EmitirButton />}
      </div>

      {!podeEmitir && (
        <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-900/50 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle>Sem turma vinculada</CardTitle>
            <CardDescription>
              Pra emitir um certificado, você precisa estar vinculado a uma
              turma. Entre em contato com a equipe.
            </CardDescription>
          </CardHeader>
        </Card>
      )}

      {podeEmitir && !jaAvaliou && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="size-5 text-primary" />
              <CardTitle>Avaliação obrigatória</CardTitle>
            </div>
            <CardDescription>
              Para emitir seu certificado, é necessário preencher uma avaliação
              sobre sua experiência. Após enviar, o certificado será liberado.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AvaliacaoForm />
          </CardContent>
        </Card>
      )}

      {historico.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Certificados emitidos</CardTitle>
            <CardDescription>
              Clique em um código pra abrir e imprimir novamente.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {historico.map((c) => (
              <Link
                key={c.id}
                href={`/painel/certificado?codigo=${c.codigo}`}
                className="flex items-center justify-between rounded-lg border border-border bg-card p-3 transition-colors hover:bg-accent"
              >
                <div className="flex flex-col">
                  <span className="font-mono text-sm font-medium">
                    {c.codigo}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {c.nome_empresa_snapshot} · emitido em{" "}
                    {formatDateTime(c.emitido_em)}
                  </span>
                </div>
                <Badge variant="secondary">Abrir</Badge>
              </Link>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
