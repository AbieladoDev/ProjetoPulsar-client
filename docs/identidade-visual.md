# Identidade visual — Projeto PULSAR (out/2026)

Fontes: os PDFs da Juliana (`public/*.pdf`, 22/10/2026) e o Canva **"Manual da Marca juliana
freitas"** (17 páginas). As cores são **exatas**: pixels do logo e operadores de cor das
páginas, não estimativa.

## Hierarquia (da `DIREÇÃO para Remodelação`)
O **PULSAR é o protagonista**; a Juliana aparece depois, como idealizadora e facilitadora.

## Logo — `public/brand/logo/`
| Arquivo | Uso |
|---|---|
| `pulsar-logo-completo.png` | logo inteiro: marca + subtítulo + slogan (1536×1024, transparente). Imagem de compartilhamento (Open Graph) |
| `pulsar-logo.png` | só "PROJETO PULSAR" + arco — **cabeçalho** (1074×242) |
| `pulsar-logo-subtitulo.png` | marca + "Saúde mental e desenvolvimento humano nas empresas" — **topo da home** |
| `pulsar-logo-claro.png` / `pulsar-logo-subtitulo-claro.png` | letras em creme `#F2F5E6` e arco dourado mantido — **fundo escuro** (rodapé) |
| `pulsar-icone.svg` | arco + ponto sobre petróleo — **favicon da landing** (desenhado à mão, não é arte da Juliana) |
| `juliana-assinatura.png` | "Juliana Freitas" manuscrito |

Os recortes saíram do PNG do logo completo, pelas faixas de tinta (marca, subtítulo, slogan).
Script de referência no histórico da sessão, não no repositório.

⚠️ **Existe uma SEGUNDA versão do logo no Canva** (página 16): letras oliva `#3C4024`, arco
**cobre** `#864230` e subtítulo em uma linha só, sem o slogan. A apresentação usa a versão
petróleo + ouro, que foi a aplicada no site. **Confirmar com a Juliana qual é a oficial.**
⚠️ Páginas 13–15 do Canva: "PULSAR" escrito sobre o cubo de Metatron — conceito ANTERIOR ao logo
com o arco. Não usar.
⚠️ `public/img/logo.png` é o monograma **JF** da marca pessoal da Juliana. Continua no login, no
painel e no certificado; a landing não o usa mais.

## Cores
### Projeto Pulsar (apresentação + logo)
| Token Tailwind | Hex | Onde aparece |
|---|---|---|
| `petroleo` | `#123430` | letras do logo |
| `ouro` | `#B48C54` | arco e ponto do logo |
| `salvia-900` | `#354128` | etapa 1, estrelinhas, texto |
| `salvia-700` | `#6A704F` | títulos |
| `salvia-500` | `#929E77` | faixas de destaque |
| `salvia-300` | `#B0BA96` | blocos secundários |
| `salvia-100` | `#DDE1C8` | etapa 4, fundos suaves |
| `salvia-50` | `#F2F5E6` | etapa 5, cartões |
| `seda` | `#EFEFEC` | fundo (a textura de seda) |

### Marca pessoal Juliana Freitas (Canva, página 2 — "Paleta de cores")
`#F7F0E2` creme · `#CA957B` terracota · `#AAAD96` sálvia acinzentada · `#F2EBE7` rosé claro ·
`#6A704F` oliva · `#4E4038` marrom. É a paleta do PDF de preços (degradê terracota) e da segunda
versão do logo. Não entrou no site; o oliva `#6A704F` é comum às duas.

## Tipografia
| Uso | Na marca | Na web |
|---|---|---|
| Títulos | **Relicta Light** (Canva) | **Cormorant Garamond Light** — sem versão web da Relicta |
| Texto | **Montserrat** | Montserrat (Google Fonts) |
| Logo Juliana | Coterie + Abramo (script) | não usadas no site |

## Fotos — o que é real e o que é IA
O próprio manual separa (páginas 11 e 12):
- **Imagens originais**: só duas, Juliana de blazer preto com calça rosa. Não vieram em arquivo.
- **Imagens criadas por IA**: todas as fotos de terno do material — verde em pé, branco e marrom
  sentada, vermelho, azul, listrado, a palestra, a roda de conversa e o grupo ao ar livre.

| Arquivo | Origem | No site? |
|---|---|---|
| `public/img/Perfil.jpeg` | **real** | sim, em "Quem conduz" |
| `public/img/oncologia.jpeg`, `sitio.jpeg`, `video/*.mp4` | **reais**, do trabalho | sim, em "Na prática" |
| `brand/fotos/juliana-*.png` | IA (recortes transparentes) | **não** — aguarda aprovação da Juliana |
| `brand/fotos/roda-de-conversa.jpg` | IA | não |
| `brand/fotos/sessao-descompressao.png` | banco de imagem | não |
| `public/img/JU.jpeg` | real, num museu, sem relação com o projeto | saiu do site |

A direção pede imagem **real e autorizada, com aprovação da Juliana**. Por isso o site usa as
reais. Para usar os recortes de IA (que dariam um visual mais próximo da apresentação), é preciso
o aceite dela.

## Tom de voz (Canva, página 10)
Evitar "barato", "comum", "promoção" e "desconto". Preferir "oferta especial", "benefício
exclusivo". O site não fala de preço.

## Textos oficiais
- Slogan: **"Pessoas mais conscientes. Empresas mais fortes."**
- Metodologia, 5 etapas: Avaliação inicial → Palestras de sensibilização → Sessões de
  descompressão → Acompanhamento → Intervenção e avaliação.
- Formatos: **Despertar** (1 mês) e **Expansão** (6 meses). Os preços estão no PDF e **não** foram
  publicados.
- Contato: (51) 98514-0070 · Instagram `jufreitas.essencia`.
