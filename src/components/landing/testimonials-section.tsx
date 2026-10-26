import { createClient } from "@/lib/supabase/server";
import { Testimonials, Videos } from "./testimonials";
import {
  FeedbacksCarousel,
  type PublicFeedback,
} from "./feedbacks-carousel";

type FeedbackRow = {
  id: string;
  nome_snapshot: string;
  empresa_snapshot: string | null;
  mensagem: string;
  nota: number | null;
};

/**
 * Depoimentos aprovados. Se o Supabase falhar (fora do ar, sem variável de
 * ambiente), a home continua de pé: o carrossel só não aparece. Antes, um
 * erro aqui derrubava a página inicial inteira com 500.
 */
async function buscarFeedbacks(): Promise<FeedbackRow[]> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("feedbacks")
      .select("id, nome_snapshot, empresa_snapshot, mensagem, nota")
      .eq("status", "aprovado")
      .order("created_at", { ascending: false })
      .limit(20);
    if (error) throw error;
    return (data ?? []) as FeedbackRow[];
  } catch (erro) {
    console.error("[landing] depoimentos indisponíveis:", erro);
    return [];
  }
}

export async function TestimonialsSection() {
  const feedbacks: PublicFeedback[] = (await buscarFeedbacks()).map(
    (f) => ({
      id: f.id,
      nome: f.nome_snapshot,
      empresa: f.empresa_snapshot,
      mensagem: f.mensagem,
      nota: f.nota,
    }),
  );

  return (
    <>
      <Testimonials />
      <FeedbacksCarousel items={feedbacks} />
      <Videos />
    </>
  );
}
