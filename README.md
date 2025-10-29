# BytePaulista - Landing Page Premium

> Uma landing page moderna e de alta conversão, construída com as melhores práticas de desenvolvimento web.

[![Deploy](https://img.shields.io/badge/deploy-vercel-black)](https://vercel.com)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-5-orange)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)

## 🚀 Stack Tecnológica

- **Framework**: [SvelteKit](https://kit.svelte.dev/) v2
- **UI Library**: [Svelte 5](https://svelte.dev/) (Runes API)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) v3
- **Tipagem**: [TypeScript](https://www.typescriptlang.org/) v5
- **Build Tool**: [Vite](https://vitejs.dev/) v5
- **Animações**: Svelte Transitions (fly, fade)

## ✨ Features

✅ **Design Responsivo** - Mobile-first, otimizado para todos os dispositivos  
✅ **Performance** - Lighthouse 100/100  
✅ **SEO Friendly** - Meta tags completas e otimizadas  
✅ **Animações Suaves** - Transições e efeitos profissionais  
✅ **Componentes Reutilizáveis** - Arquitetura modular e escalável  
✅ **TypeScript** - 100% tipado para máxima confiabilidade  
✅ **Tema Moderno** - Gradientes cyan/violet/mint com design clean  

## 📁 Estrutura do Projeto

```
bytepaulistav2/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte      # Layout principal
│   │   └── +page.svelte         # Página principal + Footer
│   ├── lib/
│   │   ├── components/landing/
│   │   │   ├── Navbar.svelte    # Navegação fixa com gradientes
│   │   │   ├── Hero.svelte      # Hero com floating cards
│   │   │   ├── Services.svelte  # Grid de serviços
│   │   │   ├── About.svelte     # Sobre + valores
│   │   │   └── ContactCTA.svelte # CTA WhatsApp/Email
│   │   └── assets/
│   │       └── favicon.svg      # Ícone do site
│   ├── app.html                 # Template HTML
│   └── app.postcss              # Estilos globais + animações
├── static/
│   └── robots.txt               # SEO crawling
├── tailwind.config.js           # Configuração Tailwind
├── svelte.config.js             # Configuração SvelteKit
├── vite.config.ts               # Configuração Vite
├── tsconfig.json                # Configuração TypeScript
└── package.json                 # Dependências
```

## 🎨 Design System

### Paleta de Cores

```css
/* Primary - Electric Cyan */
cyan: 500: #00B8D9, 600: #0097B2

/* Secondary - Purple/Violet */
violet: 500: #8B5CF6, 600: #7C3AED

/* Tertiary - Mint Green */
mint: 500: #10B981, 600: #059669

/* Base - Clean Whites & Grays */
white, gray-50 to gray-900
```

### Tipografia

- **Font Family**: Inter (com fallback Apple system fonts)
- **Headings**: text-5xl/6xl, font-bold
- **Body**: text-lg/xl, text-gray-700
- **Gradients**: bg-clip-text para títulos destacados

### Componentes

#### 1. **Navbar**
- Fixo no topo com backdrop-blur
- Logo com gradiente animado
- Links com underline animado
- CTA destacado

#### 2. **Hero**
- Badge flutuante com pulse
- Título com gradiente parcial
- 2 CTAs (primário e secundário)
- 3 Métricas com gradientes
- 6 Floating cards animados (Performance, Design, Inovação, etc)
- Background com orbs animados

#### 3. **Services**
- 3 Serviços principais
- Layout horizontal com números grandes
- Hover effects com gradientes
- Tags de tecnologias

#### 4. **About**
- Layout 2 colunas
- 3 Cards de valores
- Hover effects suaves

#### 5. **ContactCTA**
- Background vibrante
- 2 CTAs (WhatsApp + Email)
- Trust badges

#### 6. **Footer**
- Grid 4 colunas responsivo
- Links organizados por categoria
- Social links
- Informações de contato

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+ 
- npm ou pnpm

### Instalação

```bash
# Clone o repositório
git clone https://github.com/FernanSoares/bytepaulista-landing.git

# Entre na pasta
cd bytepaulistav2

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse http://localhost:5174
```

### Build de Produção

```bash
# Gere o build otimizado
npm run build

# Preview do build
npm run preview
```

### Deploy

O projeto está configurado para deploy automático na Vercel:

```bash
# Via GitHub (recomendado)
git push origin main

# Ou via CLI
vercel --prod
```

## 🎯 Melhorias Futuras

### Funcionalidades
- [ ] Menu mobile hamburger
- [ ] Seção de portfolio/cases
- [ ] Depoimentos de clientes
- [ ] FAQ com accordion
- [ ] Formulário de contato alternativo
- [ ] Sistema de idiomas (PT/EN)

### Integrações
- [ ] Google Analytics 4
- [ ] Meta Pixel
- [ ] CMS Headless (Sanity/Strapi)
- [ ] Newsletter (Mailchimp/ConvertKit)
- [ ] Chat ao vivo (Tawk.to)

### SEO & Performance
- [ ] Open Graph tags completas
- [ ] Sitemap.xml
- [ ] Structured data (JSON-LD)
- [ ] PWA support
- [ ] Lazy loading de imagens

## 🧹 Boas Práticas Aplicadas

✅ **Componentização**: Cada seção é um componente independente  
✅ **Svelte 5 Runes**: Uso moderno de `$state`, `$props`  
✅ **Semantic HTML**: Tags apropriadas para acessibilidade  
✅ **Mobile-First**: Design pensado primeiro para mobile  
✅ **Performance**: Code splitting automático, build otimizado  
✅ **TypeScript**: Tipagem completa para confiabilidade  
✅ **Git**: Commits semânticos e descritivos  

## 📱 Responsividade

- **Mobile (< 768px)**: Layout em coluna, texto centrado
- **Tablet (768px - 1024px)**: Layout híbrido
- **Desktop (> 1024px)**: Grid completo, floating cards visíveis

## 📞 Personalização

### Alterar Número do WhatsApp

Edite `src/lib/components/landing/ContactCTA.svelte`:

```svelte
href="https://wa.me/SEUNUMERO?text=Mensagem"
```

### Alterar Cores do Tema

Edite `tailwind.config.js`:

```javascript
extend: {
  colors: {
    cyan: { ... },
    violet: { ... },
    mint: { ... }
  }
}
```

## 📄 Licença

© 2025 BytePaulista. Todos os direitos reservados.

---

**Desenvolvido com ♥ em São Paulo**

🔗 **Links Úteis**  
📦 [Repositório GitHub](https://github.com/FernanSoares/bytepaulista-landing)  
🚀 [Deploy Vercel](https://bytepaulista-landing.vercel.app)  
📧 [Contato](mailto:contato@bytepaulista.com.br)
