import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  Hospital,
  GraduationCap,
  Building2,
  HeartHandshake,
} from "lucide-react";

/*
 * Conteúdo da landing do Projeto Pulsar (remodelação de out/2026).
 *
 * Fontes do texto: "Apresentação projeto pulsar.pdf", "categorias e Preços
 * projeto pulsar.pdf" e "DIREÇÃO para Remodelação" (public/). O que não veio
 * desses arquivos está marcado com CONFIRMAR.
 *
 * Quem lê a página: gestores, RH e lideranças que ainda NÃO conhecem o Pulsar
 * (público frio). O projeto é o protagonista; a Juliana vem depois, como quem
 * conduz (pedido da direção).
 */

export const navLinks = [
  { href: "#projeto", label: "Projeto" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#juliana", label: "Sobre Juliana" },
  { href: "#experiencias", label: "Experiências" },
  { href: "#contato", label: "Contato" },
] as const;

const WHATSAPP_NUMERO = "5551985140070";
export const WHATSAPP_EXIBIDO = "(51) 98514-0070";

/**
 * Link de WhatsApp com mensagem própria por ponto da página — a Juliana sabe
 * de onde veio o contato.
 */
export function whatsapp(mensagem: string) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export const MENSAGENS = {
  topo: "Olá, Juliana! Quero conhecer o Projeto Pulsar para a minha empresa.",
  proposta: "Olá, Juliana! Gostaria de solicitar uma proposta do Projeto Pulsar.",
  equipe:
    "Olá, Juliana! Quero conversar sobre as necessidades da minha equipe e o Projeto Pulsar.",
  despertar: "Olá, Juliana! Quero saber mais sobre o Pulsar Despertar (1 mês).",
  expansao: "Olá, Juliana! Quero saber mais sobre o Pulsar Expansão (6 meses).",
  flutuante: "Olá, Juliana! Vim pelo site do Projeto Pulsar.",
} as const;

/**
 * Formulário de proposta (a direção pede "VIA GOOGLE FORMS").
 * CONFIRMAR: o link ainda não foi enviado. Vazio = o botão do formulário não
 * aparece e o contato fica só no WhatsApp.
 */
export const GOOGLE_FORMS_URL = "";

export const INSTAGRAM = {
  usuario: "jufreitas.essencia",
  href: "https://www.instagram.com/jufreitas.essencia/",
};

export const socialLinks = [
  { href: INSTAGRAM.href, label: "Instagram", icon: "instagram" as const },
  { href: "https://www.facebook.com/juh.jf", label: "Facebook", icon: "facebook" as const },
  {
    href: "https://www.tiktok.com/@jufreitas.essencia",
    label: "TikTok",
    icon: "tiktok" as const,
  },
];

/* ---------- 02. Propósito e desafios ---------- */

/** O que o Pulsar ajuda a olhar — os temas da avaliação inicial. */
export const desafios = [
  { titulo: "Comunicação", texto: "Ruídos, conversas que não acontecem e informação que se perde entre pessoas e áreas." },
  { titulo: "Relações de trabalho", texto: "Vínculos desgastados, conflitos e a convivência diária entre equipes." },
  { titulo: "Sobrecarga", texto: "Ritmo exigente, estresse ocupacional e desgaste emocional acumulado." },
  { titulo: "Saúde emocional", texto: "Sinais de esgotamento que afetam o bem-estar, a presença e a qualidade das relações." },
] as const;

/* ---------- 03. Proposta de valor ---------- */

/** A estrutura anual ("Estrutura", apresentação). */
export const estrutura = [
  {
    titulo: "Avaliação inicial",
    texto:
      "Levantamento da percepção dos colaboradores sobre ambiente de trabalho, relações, comunicação, sobrecarga e aspectos emocionais da rotina.",
  },
  {
    titulo: "Encontros coletivos",
    texto:
      "Quatro encontros ao longo do ano, com temas e vivências definidos a partir do que a avaliação e o acompanhamento identificam.",
  },
  {
    titulo: "Sessões de descompressão",
    texto:
      "Momentos estruturados de pausa, escuta ativa, presença e práticas de regulação emocional.",
  },
  {
    titulo: "Acompanhamento contínuo",
    texto: "O programa acompanha a empresa ao longo do ano, não em um evento isolado.",
  },
] as const;

/** Benefícios — redação da apresentação, sem promessa de número. */
export const beneficios = [
  "Clima organizacional com relações mais equilibradas e colaborativas.",
  "Espaços regulares de pausa, escuta e regulação, reduzindo tensão e desgaste emocional.",
  "Contribuição para a redução do absenteísmo e para o aumento do engajamento.",
  "Comunicação e integração mais conscientes e respeitosas entre equipes.",
  "Maior percepção de apoio, pertencimento e valorização.",
  "Apoio à prevenção e ao cuidado com os riscos psicossociais na gestão de pessoas.",
] as const;

/* ---------- 04. Metodologia (nomenclatura oficial da apresentação) ---------- */

export type Etapa = { numero: string; titulo: string; texto: string };

export const etapas: Etapa[] = [
  {
    numero: "1",
    titulo: "Avaliação inicial",
    texto:
      "Questionário para compreender a percepção dos profissionais sobre ambiente de trabalho, relações, comunicação, sobrecarga e principais desafios emocionais.",
  },
  {
    numero: "2",
    titulo: "Palestras de sensibilização",
    texto:
      "Conscientização sobre saúde emocional, riscos psicossociais e seus impactos no cotidiano profissional, abrindo espaço para diálogo e reflexão.",
  },
  {
    numero: "3",
    titulo: "Sessões de descompressão",
    texto:
      "Vivências e práticas estruturadas de relaxamento, presença e reconexão, com recursos integrativos para reduzir tensões e favorecer o equilíbrio emocional.",
  },
  {
    numero: "4",
    titulo: "Acompanhamento",
    texto:
      "Encontros semanais e/ou mensais para aprofundar a percepção, acompanhar as necessidades identificadas e fortalecer vínculos, comunicação e confiança.",
  },
  {
    numero: "5",
    titulo: "Intervenção e avaliação",
    texto:
      "Nova avaliação para identificar percepções e mudanças ao longo do processo, seguida de uma vivência coletiva direcionada aos pontos que pedem mais atenção.",
  },
];

export const cicloContinuo = ["escutar", "conscientizar", "regular", "acompanhar", "reavaliar"];

/**
 * Os dois formatos ("categorias e Preços"). Preço fora do site de propósito:
 * CONFIRMAR com a Juliana se ele vai a público.
 */
export const formatos = [
  {
    nome: "Despertar",
    duracao: "Acompanhamento de 1 mês",
    resumo:
      "A primeira experiência da empresa com o Pulsar: entrar, ouvir, observar e gerar consciência antes de assumir um compromisso maior.",
    itens: [
      "Avaliação inicial de percepção, online e anônima",
      "Palestra coletiva de sensibilização",
      "4 encontros semanais de descompressão emocional",
      "Avaliação final de percepção",
    ],
    mensagem: MENSAGENS.despertar,
  },
  {
    nome: "Expansão",
    duracao: "Acompanhamento por 6 meses",
    resumo:
      "O trabalho se expande para as relações, as equipes e a convivência — cuidado e consciência como parte da cultura da empresa.",
    itens: [
      "Questionário inicial e palestra de sensibilização",
      "4 encontros semanais de descompressão emocional",
      "Palestra coletiva de impacto emocional",
      "Encontros coletivos de descompressão, escuta, fechamento e integração",
      "Avaliação semestral de percepção e devolutiva",
    ],
    mensagem: MENSAGENS.expansao,
  },
] as const;

/* ---------- 05. Para quem é ---------- */

export type AudienceCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const audiences: AudienceCard[] = [
  {
    icon: Building2,
    title: "Empresas privadas",
    description:
      "Relações de trabalho mais fortes, menos ruído e comunicação emocional desenvolvida, para equipes mais conscientes e ambientes mais saudáveis.",
  },
  {
    icon: Hospital,
    title: "Hospitais e clínicas",
    description:
      "Cuidado emocional de quem cuida: manejo do estresse, fortalecimento dos vínculos e comunicação entre equipes de saúde.",
  },
  {
    icon: Landmark,
    title: "Prefeituras",
    description:
      "Saúde emocional dos servidores e relações mais qualificadas no serviço público, com ambientes mais colaborativos.",
  },
  {
    icon: GraduationCap,
    title: "Escolas",
    description:
      "Apoio a educadores, gestores e equipes pedagógicas: escuta qualificada e manejo das demandas do cotidiano escolar.",
  },
  {
    icon: HeartHandshake,
    title: "Instituições sociais",
    description:
      "Sustentação emocional de equipes em contextos de alta entrega humana, com mais presença, escuta e cooperação.",
  },
];

/* ---------- 06. O Pulsar na prática (registros reais, autorizados) ---------- */

export type Testimonial =
  | { type: "text"; title: string; body: string }
  | { type: "video"; src: string; legenda: string }
  | { type: "image"; src: string; alt: string };

export const testimonials: Testimonial[] = [
  {
    type: "text",
    title: "Oncologia Centenário",
    body:
      "Projeto-piloto com a equipe da oncologia, com foco em descompressão emocional de profissionais em contexto de alta exigência humana. Foi a partir dessa escuta que a metodologia do Pulsar se estruturou.",
  },
  { type: "image", src: "/img/oncologia.jpeg", alt: "Vivência com a equipe da Oncologia Centenário" },
  { type: "video", src: "/video/JU.mp4", legenda: "Oncologia Centenário" },
  {
    type: "text",
    title: "Equipe de Passo Fundo",
    body:
      "Vivência com foco em comunicação interpessoal, integração da equipe e fortalecimento das relações de trabalho no cotidiano.",
  },
  { type: "image", src: "/img/sitio.jpeg", alt: "Vivência com a equipe de Passo Fundo" },
  { type: "video", src: "/video/sitio.mp4", legenda: "Equipe de Passo Fundo" },
];

/* ---------- 07. Quem conduz ---------- */

export const juliana = {
  nome: "Juliana Freitas",
  papel: "Idealizadora e facilitadora do Projeto Pulsar",
  // Texto da apresentação ("sobre mim").
  formacao: [
    "Pós-graduada em Psicologia Organizacional e Gestão de Pessoas",
    "Técnica de Enfermagem, com especialização em Enfermagem do Trabalho",
    "Especialização em Gestão Ambiental",
    "Formação complementar em Constelação Familiar, Barras de Access, Regressão, Reiki e Terapia Assistida por Cavalos",
  ],
  texto: [
    "Especialista em Desenvolvimento Humano, Consciência e Cuidado, Juliana une conhecimento técnico, desenvolvimento humano e práticas integrativas para promover relações mais conscientes e ambientes de trabalho mais saudáveis.",
    "É reconhecida pelo acolhimento, pela escuta e pela capacidade de criar espaços seguros para o desenvolvimento das pessoas — e foi da escuta de profissionais da oncologia que nasceu o Pulsar.",
  ],
};

/* ---------- LEGADO ----------
 * Usados SÓ por nr1.tsx, process.tsx e pulsar-program.tsx, que saíram da
 * página na remodelação de out/2026 e aguardam confirmação para serem
 * apagados. Apagar estes três exports junto com eles.
 */
export const WHATSAPP_SIMPLE = `https://wa.me/${WHATSAPP_NUMERO}`;

export type ProcessStep = { number: string; title: string; description: string };
export const processSteps: ProcessStep[] = etapas.map((e) => ({
  number: e.numero,
  title: e.titulo,
  description: e.texto,
}));

export const pulsarBullets: string[] = [...beneficios];
