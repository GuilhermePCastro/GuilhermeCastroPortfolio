# 🚀 Guilherme Castro | Portfólio & Desenvolvimento Web

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

> Website institucional e portfólio profissional focado em conversão, SEO e máxima performance técnica para apresentação de serviços de desenvolvimento web, landing pages e soluções digitais para pequenas e médias empresas.

---

## 📌 Sumário

- [Visão Geral](#-visão-geral)
- [Funcionalidades e Seções](#-funcionalidades-e-seções)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Diferenciais de Performance e SEO](#-diferenciais-de-performance-e-seo)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Rodar Localmente](#-como-rodar-localmente)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Autor e Contato](#-autor-e-contato)

---

## 🌟 Visão Geral

Este projeto foi construído do zero com código limpo e sem o peso de frameworks excessivos ou CMS lentos. O foco central é entregar:
- **Experiência do Usuário (UX/UI)** fluida, limpa e moderna.
- **Foco em Conversão**: CTAs diretos para o WhatsApp integrados estrategicamente em toda a página.
- **Código Enxuto**: Carregamento instantâneo com Tailwind CSS v4 e animações suaves nativas usando a API `IntersectionObserver`.

---

## 🎯 Funcionalidades e Seções

1. **Hero Section com Chamada de Ação (CTA)**:
   - Apresentação da proposta de valor, botões rápidos para solicitação de orçamento e mockup responsivo com animações suaves de flutuação e fade-in.
2. **Serviços Especializados**:
   - Detalhamento de serviços ofertados: *Landing Pages*, *Sites Institucionais* e *Modernização de Sites*.
3. **Diferenciais Competitivos**:
   - Destaques como preços acessíveis, agilidade na entrega e desenvolvimento com código puro sem dependências pesadas.
4. **Portfólio de Cases Reais**:
   - Cards com visualização de projetos entregues e links diretos para testar os sites ao vivo (com layout flexível mantendo botões sempre alinhados à base).
5. **Sobre Mim**:
   - Apresentação profissional de Guilherme Castro (analista e desenvolvedor com mais de 6 anos de experiência e pós-graduado em Arquitetura e Engenharia de Software pela FIA Business School).
6. **Botão Flutuante do WhatsApp**:
   - Fixo e otimizado para dispositivos móveis, facilitando o contato imediato de clientes em potencial.
7. **Rodapé Completo**:
   - Links rápidos, e-mail, redes sociais (LinkedIn, GitHub) e selos de direitos autorais.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 Semântico**: Estruturação acessível com foco em boas práticas e indexação por motores de busca.
- **Tailwind CSS (v4)**: Estilização utilitária de última geração, compilada e minificada via `@tailwindcss/cli`.
- **JavaScript Moderno (ES6+)**: Animações de entrada e interatividade leve utilizando `IntersectionObserver` sem depender de bibliotecas externas pesadas.
- **Node.js & npm**: Gerenciamento de dependências de desenvolvimento e fluxo de compilação dos estilos.

---

## ⚡ Diferenciais de Performance e SEO

- **Imagens Otimizadas**: Formato WebP de alta compressão e baixa perda de qualidade.
- **Carregamento Estratégico**: Atributos `loading="lazy"` para imagens abaixo da dobra e `fetchpriority="high"` com `loading="eager"` na imagem da dobra inicial (Hero).
- **SEO & Metadados**:
  - Tags Open Graph completas (`og:title`, `og:description`, `og:type`) para compartilhamento rico em redes sociais e WhatsApp.
  - Verificação Google Search Console e arquivo `robots.txt` configurado.
  - Pacote de Favicons em múltiplos formatos e tamanhos para compatibilidade em Desktop, iOS e Android.

---

## 📂 Estrutura do Projeto

```plaintext
Portifolio/
├── assets/
│   ├── favicons/         # Ícones para navegadores e dispositivos móveis (.ico, .png)
│   └── images/           # Imagens e ilustrações otimizadas (.webp, .png)
├── css/
│   └── index.css         # Ponto de entrada do Tailwind e estilos customizados
├── dist/
│   └── output.css        # CSS final compilado e minificado
├── script/
│   └── animations.js     # Script de animações de rolagem (IntersectionObserver)
├── .gitignore            # Arquivos ignorados pelo Git
├── favicon.ico           # Favicon raiz do site
├── index.html            # Estrutura principal da página
├── package.json          # Configurações do projeto e scripts npm
├── package-lock.json     # Árvore de dependências trancada
└── robots.txt            # Diretrizes para robôs de busca
```

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão 18+ recomendada)
- Git instalado

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/GuilhermePCastro/Portifolio.git
   cd Portifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o modo de desenvolvimento do Tailwind (com observador de arquivos):**
   ```bash
   npm run dev
   ```

4. **Abra o site no navegador:**
   - Utilize a extensão **Live Server** do VS Code ou execute:
     ```bash
     npx serve .
     ```
   - Acesse `http://localhost:3000` (ou a porta indicada no terminal).

---

## 📜 Scripts Disponíveis

No arquivo `package.json`:

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o Tailwind CLI em modo `--watch` para atualizar o CSS a cada alteração. |
| `npm run build` | Compila e minifica o CSS para produção dentro da pasta `dist/output.css`. |

---

## 👨‍💻 Autor e Contato

**Guilherme Castro**  
*Desenvolvedor Web & Analista de Software*

- **WhatsApp**: [+55 (11) 94681-4885](https://wa.me/5511946814885)
- **LinkedIn**: [guilherme-castro-32375916b](https://www.linkedin.com/in/guilherme-castro-32375916b)
- **GitHub**: [@GuilhermePCastro](https://github.com/GuilhermePCastro)
- **E-mail**: [guilhermepcastro.17@gmail.com](mailto:guilhermepcastro.17@gmail.com)

---

Desenvolvido com foco em alta performance e conversão. © 2026 Guilherme Castro.

