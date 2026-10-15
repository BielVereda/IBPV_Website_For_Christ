# ⛪ Site da Igreja Batista Nacional Pedra Viva (IBPV)

Site institucional **one-page** da Igreja Batista Nacional Pedra Viva, em São Paulo - SP. Reúne em uma única página tudo o que um visitante ou membro precisa: agenda de eventos, história, ministérios, pastores, horários de culto (com transmissão ao vivo), inscrição para batismo, pedido de oração, dízimos e ofertas, aplicativo das crianças e localização.

> *"Uma Igreja que ama, acolhe & discipula."*

![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-smooth%20scroll-6B21A8)
![Mobile first](https://img.shields.io/badge/responsivo-mobile%20first-F5C842)

---

## 📑 Sumário

1. [Visão geral](#-visão-geral)
2. [Seções do site](#-seções-do-site)
3. [Funcionalidades em destaque](#-funcionalidades-em-destaque)
4. [Tecnologias](#-tecnologias)
5. [Estrutura do projeto](#-estrutura-do-projeto)
6. [Como rodar localmente](#-como-rodar-localmente)
7. [Como atualizar o conteúdo](#-como-atualizar-o-conteúdo)
8. [Design e estilos](#-design-e-estilos)
9. [Performance](#-performance)
10. [Acessibilidade](#-acessibilidade)
11. [SEO e metadados](#-seo-e-metadados)
12. [Deploy](#-deploy)
13. [Pontos de atenção](#-pontos-de-atenção)
14. [Ideias para evoluir](#-ideias-para-evoluir)
15. [Créditos](#-créditos)

---

## 🔎 Visão geral

| Item | Detalhe |
| --- | --- |
| **Tipo** | Site institucional de página única (SPA, sem rotas) |
| **Idioma** | Português (pt-BR) |
| **Front-end** | React + Vite |
| **Estilo** | CSS puro (`index.css`) com variáveis de design (design tokens) |
| **Back-end** | Não possui. Formulários e contatos usam serviços externos (Gmail, WhatsApp, Google Forms) |
| **Foco** | Boa experiência no celular, desempenho em aparelhos mais fracos e acessibilidade |

---

## 🧭 Seções do site

A página é composta por componentes independentes, renderizados em ordem no `App.jsx`. Cada seção tem um `id` que também é usado pela navegação.

| Ordem | Componente | `id` da âncora | O que apresenta |
| :-: | --- | --- | --- |
| 1 | `Navbar` | — | Cabeçalho fixo com logo e menu. Destaca a seção ativa |
| 2 | `Hero` | `#inicio` | Imagem de abertura com parallax, slogan e botão para os horários de culto |
| 3 | `Events` | `#eventos` | **Agenda IBPV**: carrossel com os próximos eventos |
| 4 | `Anniversary` | `#aniversario` | Destaque sazonal dos 40 anos da igreja (outubro) com link para o Instagram |
| 5 | `About` | `#sobre` | **Nossa história**: fundação em 1986, trajetória e missão |
| 6 | `Ministries` | `#ministerios` | Carrossel com todos os ministérios da igreja |
| 7 | `Pastors` | `#pastores` | Pastores e suas biografias |
| 8 | `Cultos` | `#cultos` | Horários dos três cultos de domingo e transmissão ao vivo no YouTube (com tradução em Libras) |
| 9 | `Baptism` | `#batismo` | Requisitos e inscrição para batismo via Google Forms |
| 10 | `PrayerForm` | `#oracao` | Formulário de pedido de oração que abre o Gmail já preenchido |
| 11 | `Donation` | `#oferta` | Dízimos e ofertas: PIX, transferência bancária e presencial |
| 12 | `MyKids` | `#mykids` | Informações e link do app MyKids (Google Play) usado no Projeto Boa Terra |
| 13 | `MapLocation` | `#localizacao` | Endereço, WhatsApp, links e mapa do Google embutido |
| 14 | `Footer` | — | Navegação, redes sociais, contato e botões flutuantes |

### Ministérios incluídos

Instituto Pedra Viva · Oração em Foco · Encontro 55+ · Ministério de Casais · Momentos com Deus (mulheres) · Mentoria dos Homens · AVIVA Jovem · Rede Teen · Projeto Boa Terra (infantil) · Discipulado · Atividades Esportivas.

---

## ✨ Funcionalidades em destaque

### Navegação e rolagem
- **Rolagem suave** com [Lenis](https://github.com/darkroomengineering/lenis), inclusive para os links de âncora (`#id`), com atualização da URL sem recarregar.
- **Menu ativo por seção**: um `IntersectionObserver` descobre qual seção está na tela e destaca o item correspondente no menu.
- **Navbar que muda ao rolar**: fundo transparente sobre o hero e fundo claro após rolar, trocando a versão do logo (branca/roxa).
- **Menu mobile em formato de cartão**: abre no canto, não trava a rolagem da página e fecha ao tocar fora ou apertar `Esc`.

### Animações de entrada
- Elementos marcados recebem o atributo `data-reveal` e ganham animação ao entrar na tela (com atraso escalonado entre cartões). As animações respeitam a preferência de movimento reduzido do sistema.

### Agenda de eventos (`Events`)
- **Desktop e tablet**: carrossel com setas, pontos de navegação e passagem automática a cada 8 segundos.
- **Celular**: sem setas e sem passagem automática; navegação por **swipe** (o card acompanha o dedo) e pontos como indicador.

### Ministérios (`Ministries`)
- Carrossel que mostra **3 cards** (≥1024px), **2** (≥768px) ou **1** (celular).
- Swipe no celular com resistência nas pontas, setas no desktop e pontos de navegação.
- **Imagens de fundo carregadas sob demanda**: só carregam quando a seção se aproxima da tela e apenas para os cards visíveis (mais um à frente).

### Pedido de oração (`PrayerForm`)
- Validação dos campos obrigatórios (nome e pedido) com destaque visual de erro.
- **Máscara de telefone** `(11) 99999-9999` e bloqueio de caracteres não numéricos.
- Ao enviar, abre a **tela de novo e-mail do Gmail** já preenchida com destinatário (`ibpv@ibpv.com.br`), assunto (`Pedido de Oração - Nome`) e corpo (nome, WhatsApp e pedido).
- Se o navegador bloquear a nova aba, o Gmail abre na mesma aba.

### Dízimos e ofertas (`Donation`)
- Botões **Copiar** para a chave PIX, agência e conta, com feedback visual ("✓ Copiado!") e *fallback* para navegadores sem a API de área de transferência.

### Cultos ao vivo (`Cultos`)
- Botão **Assistir ao vivo** com ícone de transmissão animado (bolinha e ondas de sinal que pulsam) e link para o canal do YouTube.

### Contato rápido
- Botão flutuante do **WhatsApp** (com pulso de atenção após alguns segundos) e botão flutuante do **Instagram** (somente no celular).
- Botão **Abrir no Google Maps**, posicionado conforme o tamanho da tela.

---

## 🛠 Tecnologias

| Tecnologia | Uso |
| --- | --- |
| [React](https://react.dev/) | Componentes e estado da interface (`StrictMode` ativo) |
| [Vite](https://vitejs.dev/) | Servidor de desenvolvimento e build (`import.meta.env.BASE_URL`) |
| [Lenis](https://github.com/darkroomengineering/lenis) | Rolagem suave e navegação por âncoras |
| CSS puro | Layout responsivo, tema e animações, sem framework de CSS |
| `IntersectionObserver` | Animações de entrada, menu ativo e carregamento sob demanda |
| Pointer Events | Swipe nos carrosséis |

Serviços externos usados pelo site: Gmail (pedido de oração), WhatsApp (`wa.me`), Google Forms (batismo), Google Maps (iframe), YouTube, Instagram, Facebook, Linktree e Google Play.

---

## 🗂 Estrutura do projeto

```
.
├── index.html                 # HTML base (título, metatags, favicon, fontes)
├── package.json
├── vite.config.js
├── public/
│   └── assets/
│       └── images/
│           ├── general/       # hero.jpg, ibpv_atualmente.png
│           ├── icons/         # logos (branca/roxa) e ícone do Linktree
│           ├── dates/         # imagens de eventos e batismo
│           ├── pastores/      # fotos dos pastores
│           └── ministerios/   # logos e fundos dos ministérios
└── src/
    ├── main.jsx               # ponto de entrada (monta o <App />)
    ├── App.jsx                # compõe as seções, Lenis e animações de entrada
    ├── index.css              # todos os estilos e variáveis de design
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Events.jsx
        ├── Anniversary.jsx
        ├── About.jsx
        ├── Ministries.jsx
        ├── Pastors.jsx
        ├── Cultos.jsx
        ├── Baptism.jsx
        ├── PrayerForm.jsx
        ├── Donation.jsx
        ├── MyKids.jsx
        ├── MapLocation.jsx
        └── Footer.jsx
```

> As imagens são referenciadas no código como `assets/images/...`. Ajuste a estrutura de pastas acima se o seu projeto organiza os arquivos estáticos de outra forma.

---

## 🚀 Como rodar localmente

**Pré-requisitos:** [Node.js](https://nodejs.org/) (versão LTS) e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/BielVereda/<nome-do-repositorio>.git
cd <nome-do-repositorio>

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

O Vite mostrará no terminal o endereço local (normalmente `http://localhost:5173`).

Outros comandos (scripts padrão do Vite; confira o `package.json` do projeto):

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # serve a pasta dist/ localmente para testar o build
```

---

## ✏️ Como atualizar o conteúdo

A maior parte das mudanças do dia a dia é editar textos e dados dentro dos componentes. Não é preciso mexer na lógica.

### Eventos da agenda → `Events.jsx`
Edite o array `events`. Cada evento tem:

```js
{
  id: 1,
  title: 'Classe de Batismo',
  badge: '01 de Novembro',        // texto da etiqueta
  badgeType: 'upcoming',
  image: 'assets/images/dates/classe_de_batismo.jpg',
  description: 'Texto do evento...',
  date: '01/11/2026',
  time: '09:00 / 17:00',
  instagram: 'https://www.instagram.com/p/...',  // opcional
}
```
Para remover um evento já realizado, apague o objeto. O carrossel se ajusta sozinho.

### Ministérios → `Ministries.jsx`
Edite o array `ministriesData`. Cada ministério tem `id`, `title`, `bgGradient` (cor de fallback), `bgImage` (foto de fundo, opcional), `logo`, `desc`, `verseText`, `verseRef`, `instagram` e `instagramHandle`. Para adicionar um novo, copie um objeto existente e ajuste os campos, colocando as imagens em `ministerios/`.

### Pastores → `Pastors.jsx`
Cada pastor é um `<article className="pastor-card">`. Copie um bloco, troque a foto em `assets/images/pastores/`, o cargo, o nome e a biografia.

### Cultos → `Cultos.jsx`
Horários e descrições estão direto nos três cards. O link da transmissão ao vivo está no botão `#youtube-link-btn`.

### Dízimos e ofertas → `Donation.jsx`
Altere as constantes no topo da função: `pixKey`, `agencia` e `conta`.

### Pedido de oração → `PrayerForm.jsx`
O e-mail que recebe os pedidos fica na constante `PRAYER_EMAIL` (no topo do arquivo).

### Contatos e redes sociais
O WhatsApp (`wa.me/5511950278248`) aparece em `Footer.jsx` e `MapLocation.jsx`. Ao trocar o número, atualize **todos** os pontos. Os links de Instagram, YouTube, Facebook e Linktree estão em `Footer.jsx`.

### Seção sazonal → `Anniversary.jsx`
É a seção "Celebrando 40 Anos de História" (outubro). Depois do período, remova `<Anniversary />` e o import em `App.jsx`.

### Batismo → `Baptism.jsx`
O link do Google Forms está no botão de inscrição. Troque a URL a cada nova turma, se o formulário mudar.

### Menu → `Navbar.jsx`
O array `navLinks` controla os itens do menu. O `id` precisa ser igual ao `id` da `<section>` correspondente.

### Animações de entrada → `App.jsx`
Para que um novo bloco ganhe a animação ao aparecer, adicione a classe dele ao array `revealSelectors`.

---

## 🎨 Design e estilos

- **Identidade visual:** roxo (cor principal), azul e amarelo (destaques), com **Playfair Display** (serifada) nos títulos de impacto e **Inter** no restante do texto.
- **Variáveis CSS (design tokens)** definidas no início do `index.css`: paleta (`--clr-purple-*`, `--clr-blue-*`, `--clr-yellow-*`, tons de cinza), espaçamentos (`--space-*`), tamanhos de texto (`--text-*`), raios, sombras e durações/curvas de animação.
- **Mobile first:** os estilos base são para celular e as telas maiores entram com `min-width`.
- **Principais pontos de quebra:** `640px`, `768px` (celular/tablet), `900px`, `1024px` e `1280px` (menu completo no desktop).
- **Hover só onde existe mouse:** os efeitos de `:hover` ficam dentro de `@media (hover: hover) and (pointer: fine)` para não "grudar" em telas de toque.
- **Divisores em onda** entre seções e fundos com gradientes roxo/azul.

---

## ⚡ Performance

O site foi pensado para rodar bem em celulares mais simples:

- `loading="lazy"` e `decoding="async"` nas imagens abaixo da dobra (somente a imagem do Hero carrega de imediato).
- Fundos dos ministérios carregados **sob demanda**, conforme a seção se aproxima e o carrossel avança.
- Mapa do Google com `loading="lazy"`.
- Ministérios no formato **AVIF** (mais leves). Recomenda-se manter esse formato (ou WebP) para novas imagens.
- Listeners de scroll com `passive: true`.
- Parallax do Hero ativo apenas em telas ≥768px.
- Passagem automática do carrossel desligada no celular.

---

## ♿ Acessibilidade

- HTML semântico (`header`, `main`, `section`, `article`, `footer`) e `aria-label` / `aria-labelledby` nas seções.
- Menu com `aria-expanded`, `aria-controls` e fechamento pela tecla `Esc`.
- Botões dos carrosséis e links com rótulos descritivos para leitores de tela.
- Ícones decorativos com `aria-hidden="true"`.
- Mensagem de sucesso do formulário com `role="alert"` e `aria-live`.
- Respeito a `prefers-reduced-motion`, reduzindo as animações para quem prefere menos movimento.

---

## 🔍 SEO e metadados

O `index.html` define `lang="pt-BR"`, o título, a descrição (com o crédito ao desenvolvedor), a cor do tema do navegador no celular e as fontes **Inter** e **Playfair Display** (Google Fonts, com `preconnect`):

```html
<title>Igreja Batista Pedra Viva – IBPV</title>
<meta
  name="description"
  content="Igreja Batista Pedra Viva – Uma Igreja que ama, acolhe e discipula. Venha nos visitar em Vila Emir, São Paulo. Desenvolvido por BielVereda (github.com/BielVereda)."
/>
<meta name="author" content="BielVereda" />
<link rel="author" href="https://github.com/BielVereda" />
<meta name="theme-color" content="#5B21B6" />
```

Sugestões extras: tags Open Graph (`og:title`, `og:description`, `og:image`) para boas pré-visualizações no WhatsApp e nas redes sociais, e dados estruturados (`schema.org/Church`).

---

## 🌐 Deploy

O resultado do `npm run build` é um site estático (pasta `dist/`) que pode ser publicado em qualquer hospedagem estática: Vercel, Netlify, Cloudflare Pages, GitHub Pages, ou um servidor próprio.

**Atenção ao publicar em subpasta** (por exemplo, GitHub Pages em `usuario.github.io/repositorio/`): defina a opção `base` no `vite.config.js` (`base: '/repositorio/'`). O componente `Ministries` já usa `import.meta.env.BASE_URL`; as demais imagens usam caminhos relativos (`assets/images/...`), então teste o build com `npm run preview` antes de publicar.

---

## ⚠️ Pontos de atenção

- **Pedido de oração:** o site não tem servidor. O formulário apenas abre o Gmail com tudo preenchido, e o pedido só é enviado quando a pessoa clica em **Enviar** no Gmail. A mensagem de sucesso informa isso ao usuário.
- **Dados públicos no código:** chave PIX, agência, conta, telefone e e-mail ficam no código do front-end e são visíveis a qualquer visitante. São informações já divulgadas no site, mas não coloque ali nada que não deva ser público.
- **Conteúdo com data:** eventos, a seção dos 40 anos e o link do formulário de batismo precisam de revisão periódica.
- **Números repetidos:** o WhatsApp aparece em vários arquivos; atualize todos ao trocar.

---

## 🧩 Ideias para evoluir

- Enviar o pedido de oração diretamente por um serviço de formulário ou e-mail transacional (EmailJS, Formspree, função serverless), sem depender do Gmail do usuário.
- Mover os dados (eventos, ministérios, pastores) para arquivos `.json` ou para um CMS, facilitando a edição por quem não programa.
- Converter as imagens restantes (PNG/JPG) para AVIF/WebP e gerar tamanhos responsivos com `srcset`.
- Adicionar tags Open Graph e dados estruturados para melhorar compartilhamento e busca.
- Criar uma página ou seção de transmissões e mensagens anteriores.
- Testes automatizados (componentes e acessibilidade) e *lint* no fluxo de CI.

---

## 👨‍💻 Créditos

Desenvolvido por **[BielVereda](https://github.com/BielVereda)**.

Textos, logotipos, fotografias e demais conteúdos institucionais pertencem à **Igreja Batista Nacional Pedra Viva**.

📍 Av. Nossa Sra. do Sabará, 3673 · Vila Emir · São Paulo - SP · CEP 04447-020