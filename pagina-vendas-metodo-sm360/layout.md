# Especificação de Layout - MÉTODO SM 360°

**Linguagem Visual:**
- **Estilo**: Elegante, Moderno, Premium, Focado em Curso de Advocacia.
- **Fontes**: DM Serif Display (Heading) + DM Sans (Body) - Contraste alto entre uma fonte perfumada editorial e uma sem serifa limpa e moderna.
- **Cores**: Fundo Escuro (`#0A0A0A`, `#121212`), Dourado Forte (`#D4AF37`), Dourado Claro (`#F3E5AB`), Branco (`#FFFFFF`), Cinza Mutado (`#A0A0A0`), e overlays de glassmorphism sutis.

---

## Seção 1: Hero (Existente / Implementada)

### Arquétipo e Constraints
- **Arquétipo**: Split Assimétrico (CSS Grid 60% / 40%)
- **Constraints**: Glassmorphism (Glass-card), Float Loop (Glass Orb)
- **Justificativa**: O layout de coluna dupla assimétrica foca a atenção primária no manifesto (texto) à esquerda, enquanto constrói contraste moderno e sofisticado à direita com elementos glassmórficos que reforçam o tom corporativo, mas não-convencional.

### Conteúdo
- **Headline**: "MÉTODO SM 360°"
- **Subheadline**: "Da análise inicial ao recebimento dos honorários: um sistema completo de atuação no salário-maternidade. Não é apenas um curso. É um método validado de atuação previdenciária estratégica."
- **CTA**: "GARANTIR MINHA VAGA"
- **Textos de Apoio (Card)**: "Formação Estratégica" / "Para Advogados"

### Layout
- **Container Principal**: `min-height: 100vh`, `display: grid; grid-template-columns: 60% 40%`. 
- **Hero-Content**: Fica do lado esquerdo (`padding-right: 4rem`).
- **Hero-Visual**: Lado direito, `height: 100vh`, com `display: flex; justify-content: center; align-items: center`.

### Tipografia
- **Headline**: DM Serif Display, `clamp(80px, 8vw, 160px)`, `font-weight: 700`, `line-height: 0.9`, uppercase, `letter-spacing: -0.02em`. O "SM 360°" é italic e dourado.
- **Subheadline**: DM Sans, `clamp(18px, 1.5vw, 22px)`, `max-width: 650px`, `line-height: 1.5`, `font-weight: 300`.
- **Botão CTA**: `font-weight: 600`, `letter-spacing: 2px`, uppercase.

### Cores
- **Fundo Esquerdo**: `#0A0A0A`
- **Fundo Direito**: `#121212`
- **Destaque**: `#D4AF37` (Dourado)
- **Cores Glass**: `rgba(255, 255, 255, 0.03)` com `backdrop-filter: blur(20px)`.
- **Botão Custom Hover**: Fundo `#D4AF37`, cor do texto mudando para `#0A0A0A`.

### Animações e Interação
- **Botão CTA**: Hover underline reveal via `transform: scaleX(1); transform-origin: left`.
- **Orb Flutuante**: Keyframes infinitas flutuando (`transform: translate(-30px, 50px) scale(1.1)`) em loop suave de `10s`.

---

## Seção 2: Sobre a Autoridade (Aprenda com quem vive a prática)

### Arquétipo e Constraints
- **Arquétipo**: Split com Overlap (A imagem sangra e cruza visualmente a grade em relação às bordas douradas).
- **Constraints**: Imagem Desaturada (Grayscale to Color no hover), Absolute Positioning (Borda dourada desconectada).
- **Justificativa**: A desaturação adiciona sobriedade e seriedade (advocacia premium), enquanto a cor sendo revelada na interação aproxima o mentorante do mentor.

### Conteúdo
- **Tag**: "Aprenda com quem vive a prática"
- **Título**: "Onna Kalinina\nMaranhão Rocha"
- **Credenciais**:
  - "Advogada"
  - "Especialista em Direito Previdenciário"
  - "Coordenadora da Comissão de Direito Previdenciário – OAB/MA"
- **Texto**: "Você vai aprender com quem vive a prática, atua estrategicamente e entende o que realmente funciona para alcançar a concessão do benefício."

### Layout
- **Grid Principal**: `display: grid; grid-template-columns: 1fr 1fr; gap: 6rem`. `padding: 10rem 0`, restrito ao `max-width: 1300px`.
- **Moldura da Foto**: A foto possui uma margem de decoração no canto superior esquerdo deslocada em `top: -20px; left: -20px`, configurando profundidade. O layout é limpo para focar no rosto e nas qualificações.

### Tipografia
- **Tag Superior**: `0.9rem`, uppercase, `letter-spacing: 3px`, ouro com uma linha divisória de `50px`.
- **Título**: `clamp(3rem, 4vw, 5rem)`, serifada para presença, `line-height: 1.1`.
- **Cargo**: Texto dourado itálico, `1.2rem`, serifada.

### Cores & Media
- **Fundo da Seção**: `#0A0A0A`.
- **Linha de Detalhe**: `#D4AF37`.
- **Gradiente na Imagem**: Overlay inferior linear de `#0A0A0A` subindo 50% para `transparent`. Fade sutil na foto `/images/foto_1.jpeg`

### Animamentos
- **Hover na Foto**: `filter: grayscale(0%) contrast(1.1)` na duração de `0.5s ease`.

---

## Seção 3: Para Quem É Esse Curso?

### Arquétipo e Constraints
- **Arquétipo**: Bento Box Grid Assimetrico.
- **Constraints**: Hover Lift (Card se eleva e ganha shadow), Reveal on Demand (Fade Up com Staggering usando Intersection Observer).
- **Justificativa**: O bento box organiza 4 perfis diferentes de forma assimétrica para não parecer um feed tradicional monótono. A elevação física de cada box comunica solidez e valor em cada público.

### Conteúdo
- **Título**: "Para quem é este curso?"
- **Perfis**:
  - "Jovens advogados que querem começar no previdenciário com segurança"
  - "Advogados previdenciaristas que querem aumentar o índice de êxito"
  - "Estudantes de Direito que querem sair da faculdade já sabendo atuar"
  - "Profissionais que desejam criar uma renda recorrente com benefícios previdenciários"
- **Nota Inferior**: "Se você quer casos que geram honorários rápidos e com alta demanda, o salário-maternidade é uma das portas mais inteligentes para começar."

### Layout
- **Estrutura**: Container com `padding: 8rem 5%`.
- **Grid Bento**: CSS Grid com `grid-template-columns: repeat(4, 1fr); grid-auto-rows: 250px; gap: 1.5rem`.
- **Distribuição (Desktop)**: 
  - Card 1 ("Jovens..."): `grid-column: span 2; grid-row: span 1` (Largo).
  - Card 2 ("Previdenciaristas..."): `grid-column: span 2; grid-row: span 2` (Largo e Alto).
  - Card 3 ("Estudantes..."): `grid-column: span 1; grid-row: span 1` (Quadrado).
  - Card 4 ("Profissionais..."): `grid-column: span 1; grid-row: span 1` (Quadrado).
- **Nota no Rodapé**: Fora do grid, centralizado num contêiner secundário estreito (`max-width: 800px`, `margin-top: 4rem`).

### Tipografia
- **Título de Seção**: DM Serif Display, `clamp(2.5rem, 5vw, 4rem)`, centrado.
- **Texto do Bento Card**: DM Sans, `1.5rem` (Cards span 2) e `1.2rem` (Cards span 1), leve (`font-weight: 300`), leading relaxado (`1.4`), alinhado verticalmente no centro ou no final.
- **Nota Inferior**: Itálico, `1.3rem`, cor `#F3E5AB` (Ouro claro).

### Cores
- **Fundo Principal**: `#121212` (Bg Light).
- **Cards Fundo**: `#0A0A0A` com leve highlight (borda top 1px sólida de `rgba(212, 175, 55, 0.2)`).

### Interatividade & Animações
- **Reveal Initial**: Stagger de 150ms. Entram com `transform: translateY(40px); opacity: 0; transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1)`.
- **Hover Lift nos Bento Cards**: O box sobe em `transform: translateY(-10px) scale(1.02)`, a borda acende para `#D4AF37`, e aplica um box-shadow interno e externo `0 20px 40px rgba(0,0,0,0.5)`, tempo `400ms`.

### Responsividade
- **Tablet / Mobile**: Grid passa para `grid-template-columns: repeat(2, 1fr)` depois para `1fr`. As rows mudam para `auto`. Os span resetam.

---

## Seção 4: Por Que Salário-Maternidade?

### Arquétipo e Constraints
- **Arquétipo**: Spotlight Center Element
- **Constraints**: Background Particle System (Micro-partículas de ouro e luz movimentando no canvas atrás do conteúdo), Gradiente Radial
- **Justificativa**: Centralizar as razões do "porquê" deste nicho requer eliminação de distrações. A composição Spotlight obriga o olho a ler a sequência matadora de benefícios, construindo desejo. Uma neblina com micro-partículas adiciona nível de luxo e sofisticação inegável.

### Conteúdo
- **Título**: "Por que focar no Salário-Maternidade?"
- **Lista**:
  1. Um benefício com alta procura
  2. De baixa complexidade comparado a outras ações previdenciárias
  3. Com grande potencial de conversão
  4. Ideal para gerar fluxo de caixa no início da carreira
  5. Excelente para posicionamento no Instagram
- **Nota Inferior**: "Enquanto muitos advogados correm atrás de causas complexas, você pode dominar uma demanda constante e estratégica."

### Layout
- **Flexbox Centralizado**: `display: flex; flex-direction: column; align-items: center; justify-content: center`.
- **Espaçamento**: Container com min-height de `90vh`, padding `10rem 5%`.
- **Lista de Motivos**: Em layout de Counter Vertical com grandes números como elemento decorativo esmaecido e texto em primeiro plano.

### Tipografia
- **Título**: DM Serif Display, `3.5rem`.
- **Números da Lista**: DM Serif Display, `font-size: 6rem`, `color: rgba(212, 175, 55, 0.1)`, posicionados absolutamente sobre o canto esquerdo da linha do texto com `margin-left: -2rem`.
- **Itens da Lista**: DM Sans, `1.6rem`, alinhamento forte à esquerda, espaçamento entre itens (`margin-bottom: 2rem`).

### Cores
- **Background**: Fundo `#0A0A0A`, mas com um `radial-gradient(circle at center, rgba(212, 175, 55, 0.08) 0%, #0A0A0A 60%)`.
- **Partículas (Apenas Design/Conceito, sem ThreeJS pesado)**: Partículas visuais/pequenos "pontos" de poeira dourada flutuando devagar em keyframes CSS atrás do container do texto.

### Animamentos
- **Text Reveal Staggered**: Cada linha da lista usa um efeito de "Draw Line". Uma linha dourada fina de 1px se desenha abaixo do texto da esquerda para a direita no scroll-trigger. No mesmo momento, o texto faz fade-in, com um delay de 200ms entre linhas.

---

## Seção 5: O Que Você Vai Dominar (Módulos)

### Arquétipo e Constraints
- **Arquétipo**: Scroll Cinematico (Timeline Vertical)
- **Constraints**: Scroll Progress (Uma barra que enche à medida que escrola os processos), Click Expand / Accordion Minimalista.
- **Justificativa**: A espinha dorsal do curso deve parecer densa porém guiada e imersiva. A linha do tempo conectada por nodos que acendem passa uma sensação de um mapa do tesouro (jornada clara para o resultado final: concessão/honorários).

### Conteúdo
- **Título**: "O que você vai dominar neste método"
- **Módulo 1**: "Introdução ao Salário-Maternidade: Conceito, fundamento legal, natureza do benefício, quem paga... e principais erros."
- **Módulo 2**: "Espécies de Salário-Maternidade: Empregada urbana, doméstica, MEI, autônoma, adoção, guarda judicial, etc."
- **Módulo 3**: "Qualidade de Segurada e Carência: Período de graça, estratégias e provas aceitas."
- **Módulo 4**: "Documentos Essenciais: Checklist completo por categoria + PDF pronto para clientes."
- **Módulo 5**: "Salário-Maternidade Rural: Como montar requerimento forte e evitar erros comuns."
- **Módulo 6**: "Requerimento no Meu INSS: Aula prática gravada dentro do sistema."
- **Módulo 7**: "Indeferimento: o que fazer?: Recorrer ou judicializar?"
- **Módulo 8**: "Via Judicial: Competência, valor da causa, tutela antecipada e teses."
- **Módulo 9**: "Peças Processuais: Petição inicial comentada, réplica e recursos."
- **Módulo 10**: "Honorários e Captação: Quanto cobrar, contrato, atendimento e captação no Instagram."

### Layout
- **Plataforma**: Fundo completamente escuro (`#050505`). Espaçamento vertical longo (`padding: 12rem 0`).
- **Timeline Column**: Div central com 1px de espessura descendo toda a seção ligando do Módulo 1 ao Tó.
- **Nodos Alternados**: Ítens ímpares posicionados à esquerda da linha central, itens pares posicionados à direita (largura máxima 45% do viewport para cada card da timeline), com margem interna confortável (`padding: 2rem 3rem`).

### Tipografia
- **Número do Módulo**: "MÓDULO X", DM Sans, uppercase, track largo (`letter-spacing: 2px`), tamanho `0.85rem`, peso `600`, cinza escuro no estado inativo, dourado no ativo.
- **Nome do Módulo**: DM Serif Display, tamanho `2rem`, forte e claro.
- **Descrição**: DM Sans, `1.1rem`, peso `400`, cor `#A0A0A0`, line-height `1.5`.

### Cores e Visual
- **Nodos Circulares (Bolas Eixo)**: Bolas de 12px fixas no centro da linha `border: 1px solid #D4AF37`, interior escuro. Ao atingir o scroll center da viewport: o interior acende preenchendo de `#D4AF37` e emite um `box-shadow: 0 0 20px rgba(212, 175, 55, 0.4)`.

### Animamentos
- **Scroll Linking**: Usando classe de `is-active` adicionada via Javascript IO. O node ativa e ilumina a linha abaixo dele pro próximo. A linha dourada `height` progride pintando a linha cinza do fundo.

### Responsividade
- **Mobile**: Timeline colapsa para o lado esquerdo completo (não alternado dupla via). Linha a 20px da margem esquerda, texto todo na via paralela à direita da linha. Tamanhos de fonte escalam em clamp().

---

## Seção 6: Bônus Exclusivos

### Arquétipo e Constraints
- **Arquétipo**: Masonry Assimétrico Elevado (Floating Elements Grid).
- **Constraints**: Cursor Mouse Parallax (Tilting no Hover), Glassmorphism Fosco
- **Justificativa**: Bônus de material prático (Petições, Checklists) devem parecer itens valiosos, literalmente objetos tangíveis de muito valor flutuando na mão do advogado.

### Conteúdo
- **Título**: "Bônus para acelerar seus resultados"
- **Lista de Bônus**:
  1. Checklists práticos
  2. Modelos de petições
  3. Modelo de contrato de honorários
  4. Roteiro de atendimento
  5. Atualizações legislativas futuras
  6. Banco de modelos editáveis
- **Nota Inferior**: "Você não vai apenas aprender. Vai sair com material pronto para aplicar."

### Layout
- **Grid de "Tags" de Valor (Cartões)**: Em layout desestruturado onde cada bônus é inserido em pequenos retângulos (pills alongadas e elegantes).
- **Caixas Fluídas**: Em um container flex com `flex-wrap: wrap`, itens possuem largura variada em `align-content: center; justify-content: center` com `gap: 1.5rem`. Largura de 30% até 45% cada pílula.

### Tipografia
- **Título**: `clamp(2rem, 3.5vw, 4.5rem)`.
- **Texto da Pílula / Caixa de Bônus**: DM Sans, font-size `1.4rem`, font-weight `500`.

### Cores
- Pílulas (Bônus Container): `rgba(20,20,20,0.8)`, preenchido com leve border de `#333`.
- Ícone na pílula: Pode ser um sinal de `+` dourado em tamanho discreto ou um bullet de brilho `#D4AF37`.

### Animamentos
- **Tilt Effect (Sutil)**: No mouse mover sobre o bloco da pílula inteira, leve rotação (-3deg a +3deg dependendo do mouse x/y) usando Javascript leve. Se proscrito p/ performance, usa um CSS hover de `translateY(-5px) e box-shadow: 0 10px 20px rgba(0,0,0,0.3)` com `transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)`.

---

## Seção 7: Formato e Diferencial

### Arquétipo e Constraints
- **Arquétipo**: Typography Hero / Single Focus Full width.
- **Constraints**: Texto com Gradiente Brilhante Animado, Inverted Visual Weight (Fundo muito limpo/vazio para respiro).
- **Justificativa**: O texto deste bloco é o "diferencial decisivo" e um respiro visual (Negative Space) para não saturar a atenção com layout duro, permitindo apenas foco na mensagem crucial.

### Conteúdo
- **Título Superior**: "A Grande Diferença do Método SM 360°"
- **Bloco de Texto Enorme**: "Não é só teoria. Você aprende na prática. Formato com aulas online, encontros ao vivo, PDFs práticos, linguagem direta e atualizada. E além disso você aprende a evitar exigências, reduzir indeferimentos e usar um benefício para gerar relacionamento e indicações."

### Layout
- **Dimensões**: `min-height: 80vh`, flex centrado perfeitamente, largura de texto compactada em `max-width: 900px` para impor parágrafos robustos e profundos. `text-align: center`.

### Tipografia e Cores
- **O Título**: `0.9rem`, uppercase, tracking longo - similar à Seção 2. Dourado `#D4AF37`.
- **Texto Gigante**: Mistura de Pesos. DM Serif Display para palavras dramáticas (como "prática", "evitar exigências", "reduzir indeferimentos"), e DM Sans fino para o resto do corpo.
- **Gradiente do Texto Destaque**: `background: linear-gradient(135deg, #D4AF37, #F3E5AB, #FFFFFF); -webkit-background-clip: text; color: transparent`.

### Animamentos
- **Fade de Entrada Lento**: Fade-up acoplado a um suave Zoom out no texto (escala de 1.05 para 1 em 1.5 segundos) para dar ar de elegância e autoridade ao entrar na viewport.

---

## Seção 8: Investimento (A Oferta)

### Arquétipo e Constraints
- **Arquétipo**: Golden Ratio / Foco de Ticket Centrado com Bordas Flutuantes.
- **Constraints**: Glow Neumórfico Dark (Borda brilhante isolada), Pulse Loop no CTA, Sticky Anchor visual.
- **Justificativa**: Esta seção necessita urgência, segurança e uma estrutura "no-brainer". O design enquadra o preço de forma suntuosa indicando "baixo valor percebido monetário face ao alto retorno (um único caso paga)".

### Conteúdo
- **Tag**: "Oferta Especial e Limitada"
- **Preço Âncora**: "De R$ 497,00 por apenas"
- **Preço Principal**: "12x de R$ 20,46"
- **À vista no subtítulo**: "ou R$ 197,80 à vista"
- **Texto Sentença Argumentativa**: "Um único caso fechado pode pagar o curso inteiro. A partir do segundo caso, já é lucro."
- **Limitação de Escassez**: "Vagas Limitadas: Turma com acesso ao vivo. As inscrições podem encerrar a qualquer momento."
- **CTA**: "QUERO DOMINAR O SALÁRIO-MATERNIDADE AGORA"

### Layout
- **Ticket Box (Contêiner da Oferta)**: Centralizado numa card gigante que parece flutuar sobre a página com `background: #111`. Com cantos levemente arredondados (`border-radius: 12px`), com `max-width: 600px`, `padding: 4rem 3rem`. Borda fina de `rgba(212, 175, 55, 0.4)`.
- **Estruturação Interna Vertical**: Tag → Preço Âncora (riscado) → Preço Principal Gigante → Argumentação → Box de Escassez com fundo leve vermelho escuro ou alerta neutro dourado → Botão CTA.

### Tipografia
- **Preço Principal ("12x de R$ 20,46")**: DM Serif, tamanho esmagador (`4.5rem`, reduzindo o cifrão/12x para `2rem` superscript ou lateral). Este número é a estrela.
- **Sentença Argumentativa**: Itálico leve, `#A0A0A0`, `1.1rem`.
- **CTA**: O mesmo botão do Hero (CTA 1), porém encorpado pra tomar de `width: 100%` da box.

### Cores
- **Botão Custom Override**: Botão totalmente sólido de `#D4AF37` com texto preto `#0A0A0A`. No hover, texto para `#FFFFFF` e fundo vai para `#181818`, mantendo a linha dourada. Diferente do topo para ancorar ação de compra pesada.
- **Box Alert (Vagas)**: Fundo `rgba(255, 100, 100, 0.05)`, borda vermelha/dourada suave, ícone de alerta ou relógio.

### Animamentos
- **Card Pulsa**: Sombra externa suave `#D4AF37` (glow) pulsando lentamente no CSS (`box-shadow: 0 0 40px rgba(212, 175, 55, 0.15)` variando até `0.05`).

---

## Seção 9: FAQ / Objeções

### Arquétipo e Constraints
- **Arquétipo**: Linhas Expandíveis (Accordion de Linha Única Minimalista).
- **Constraints**: Draw Vector Arrow Animation, Slide & Fade Content Expand (Smooth Height).
- **Justificativa**: FAQs devem matar objeções rapidamente. O estilo com divisórias e texto escondido não ocupa espaço demasiado, exigindo a ação de "quero saber disso" pelo usuário.

### Conteúdo
FAQ clássica com 3 respostas: "Sou iniciante", "Não atuo no previdenciário", "Tenho medo de errar" com suas respectivas respostas descritas na copy base.

### Layout
- **Container Menor**: `max-width: 800px; margin: 0 auto; padding: 6rem 5%`.
- **Items do FAQ**: Cada um ocupa 100% da largura, com um risco (border-bottom) de `1px solid rgba(255,255,255,0.1)`. Padding top e bottom generosos (`2rem`) simulando estilo editorial luxuoso.

### Tipografia
- **Títulos (Objeções)**: DM Serif Display, `1.6rem`, elegante, acompanhado de um "+" grande à direita ou seta fina diagonal (`transform: rotate(45deg)`) de `1.5rem`.
- **Resposta Expandida**: DM Sans, `1.2rem`, `#A0A0A0`, line-height excelente (`1.6`).

### Cores e Comportamento
- A interação on-click comuta entre ícone "+" ou uma seta apontada pra baixo. O fundo do item se ilumina levissimamente para `#151515`. 
- **Desdobrar (Expandir)**: `max-height` animado (com grid fr) ou manipulação DOM suave. Duração `0.4s ease-out`.

---

## Seção 10: Fechamento Persuasivo

### Arquétipo e Constraints
- **Arquétipo**: Hero Dominante Footer (Full Bleed Background Text).
- **Constraints**: Big Clipped Text Backdrop (O "360" gigante em opacidade quase invisível preenchendo o fundo) com Focal Point.
- **Justificativa**: A página não termina só fechando. Ela encerra fazendo a advocacia ressoar forte na mente do leitor (autoridade e renda da advogada). Um fundo escuro vasto servem como pano para a decisão final de compra.

### Conteúdo
- **Título Superior**: "Tome a Decisão"
- **Texo Principal**: "Enquanto muitos advogados continuam inseguros e dependentes de indicações, você pode escolher dominar um benefício de alta demanda e começar a construir autoridade e renda previsível. Salário-maternidade não é apenas um benefício. É uma porta de entrada estratégica para o Direito Previdenciário."
- **CTA Final**: "[ GARANTIR MINHA VAGA ]"

### Layout e Visual
- **Espaço Generoso**: `min-height: 80vh`, flexbox column center. `padding: 8rem 2rem`.
- **Text Backdrop Logo Atrás**: Marca d'água usando SVG Text renderizando "SM 360", rodado levemente em background absoluto, com `opacity: 0.02`, font-size gigantesco (`40vw`). Cortado pelo `overflow: hidden`.

### Tipografia e Cores
- **Texto Principal (Parágrafo Persuasivo)**: Tamanho legível, de `clamp(1.4rem, 2.5vw, 2.2rem)`, max width `800px`, texto justificado/centrado de impacto. Dourado vibrante contrastando com o branco. O texto tem `font-weight: 300` com negritos seletivos nas palavras de segurança.
- **CTA Final**: Grande botão central ancorando link de checkout (idêntico à secão de investimento).

### Efeitos Pós Carregamento
- Parallax sutil no texto do background ao longo do scroll do rodapé para dar a sensação de estar afundando na decisão, como entrar na turma com autoridade.

---
**NOTA DA ESPECIFICAÇÃO:** 
O design foi preparado para fornecer alto valor de conversão focado em profissionais OAB / Advogados, ressoando com minimalismo sem ser cru. A paleta confia amplamente em alto contraste de luma (dark e luz dourada focada), guiando a leitura sem distrações. Use classes semânticas em BEM para manter escalabilidade ao implementar. Em telas pequenas (<= 768px), converta paddings massivos em escalas proporcionais evitando margem horizontal inferior a 5% (para leitura fluída e tap-targets fáceis).
