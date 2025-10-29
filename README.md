# BytePaulista - Landing Page

Uma landing page premium e de alta conversão para a BytePaulista, construída com tecnologias modernas.

## 🚀 Stack Tecnológica

- **Framework**: SvelteKit (v2)
- **Linguagem**: Svelte 5 com Runes ($state, $props)
- **Estilização**: Tailwind CSS
- **Animações**: Svelte Transitions (fly, fade)
- **Build Tool**: Vite
- **TypeScript**: Totalmente tipado

## 🎨 Design e Tema

### Tema Dual (Claro/Escuro)

O site implementa um sistema de tema dual profissional:

#### Modo Escuro (Inspirado em Monokai Pro)

- **Primary (Pink/Magenta)**: `#F92672`
- **Secondary (Green)**: `#A6E22E`
- **Tertiary (Orange)**: `#FD971F`
- **Background**: `#272822`
- **Surface**: `#3E3D32`

#### Modo Claro

- Design minimalista e corporativo
- Fundo branco com textos em cinza escuro
- Mantém as cores de destaque (pink, green, orange)

## 📁 Estrutura do Projeto

```
bytepaulistav2/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte          # Layout principal com theme switcher
│   │   └── +page.svelte             # Página principal (orquestrador)
│   ├── lib/
│   │   └── components/landing/
│   │       ├── Navbar.svelte        # Navegação com LightSwitch
│   │       ├── Hero.svelte          # Seção Hero com CTA
│   │       ├── Services.svelte      # Grid de serviços
│   │       ├── About.svelte         # Sobre a empresa
│   │       └── ContactCTA.svelte    # Call-to-Action WhatsApp
│   ├── app.html                     # Template HTML base
│   └── app.postcss                  # Estilos globais Tailwind
├── tailwind.config.js               # Configuração Tailwind + cores Monokai
├── svelte.config.js                 # Configuração SvelteKit
├── vite.config.ts                   # Configuração Vite
└── package.json                     # Dependências
```

## 🧩 Componentes

### 1. Navbar

- Logo "BytePaulista" em destaque
- Links de navegação (Serviços, Sobre, Contato)
- Botão de alternância de tema (sol/lua)
- Sticky no topo com backdrop blur

### 2. Hero

- Título principal: "Construindo o Futuro Digital, Linha por Linha"
- Subtítulo com proposta de valor
- CTA principal para "Inicie seu Projeto"
- Animação de entrada suave (fly transition)

### 3. Services

- Grid responsivo (1 coluna mobile, 3 colunas desktop)
- 3 Cards de serviços:
  - **Desenvolvimento Web** (borda verde)
  - **Aplicativos Mobile** (borda laranja)
  - **Sistemas Customizados** (borda rosa)
- Efeito hover com scale e shadow
- Lista de especialidades em cada card

### 4. About

- Descrição profissional da BytePaulista
- Estatísticas em destaque:
  - 100+ Projetos Entregues
  - 50+ Clientes Satisfeitos
  - 5+ Anos de Experiência

### 5. ContactCTA

- Foco em WhatsApp (sem formulários)
- Botão grande e destacado
- Link direto: `https://wa.me/5511999999999`
- Mensagem pré-preenchida
- Promessa de resposta em 24h

## 🚀 Como Executar

### Instalar Dependências

```bash
npm install
```

### Modo Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:5173`

### Build de Produção

```bash
npm run build
```

### Preview do Build

```bash
npm run preview
```

## 🎯 Funcionalidades Implementadas

✅ Design responsivo (mobile-first)  
✅ Tema escuro/claro com persistência (localStorage)  
✅ Animações sutis de entrada  
✅ Hover effects nos cards  
✅ Integração WhatsApp  
✅ Navegação smooth com âncoras  
✅ Otimizado para SEO (meta tags)  
✅ TypeScript totalmente tipado  
✅ Build otimizado com Vite

## 📱 Responsividade

- **Mobile**: Layout em coluna única, navegação simplificada
- **Tablet**: 2 colunas no grid de serviços
- **Desktop**: 3 colunas, navegação completa, espaçamentos generosos

## 🎨 Boas Práticas Aplicadas

1. **Componentização**: Cada seção é um componente independente
2. **Runes do Svelte 5**: Uso de `$state`, `$props`, `$effect`
3. **Semantic HTML**: Tags apropriadas para acessibilidade
4. **Tailwind Utility-First**: Classes utilitárias para estilização rápida
5. **Dark Mode**: Implementação com classe `.dark` no HTML
6. **Transitions**: Animações sutis que não distraem
7. **Performance**: Build otimizado, code splitting automático

## 🔧 Configuração do Tema

As cores do tema Monokai são configuradas em `tailwind.config.js`:

```javascript
colors: {
  monokai: {
    bg: '#272822',
    surface: '#3E3D32',
    selection: '#49483E',
    comment: '#75715E',
    text: '#F8F8F2',
    pink: '#F92672',
    green: '#A6E22E',
    orange: '#FD971F',
    yellow: '#E6DB74',
    blue: '#66D9EF',
    purple: '#AE81FF'
  }
}
```

## 📞 Personalização do WhatsApp

Para alterar o número do WhatsApp, edite o arquivo:
`src/lib/components/landing/ContactCTA.svelte`

Linha do link:

```svelte
href="https://wa.me/SEUNUMERO?text=Mensagem"
```

## 🚀 Próximos Passos Sugeridos

### SEO e Performance

- [ ] Adicionar Open Graph tags completas
- [ ] Implementar sitemap.xml
- [ ] Adicionar structured data (JSON-LD)
- [ ] Otimizar imagens (se adicionar)
- [ ] Implementar lazy loading
- [ ] Adicionar PWA support

### Conteúdo

- [ ] Seção de Portfolio/Cases
- [ ] Depoimentos de clientes
- [ ] FAQ com accordion
- [ ] Seção de tecnologias utilizadas
- [ ] Blog integrado
- [ ] Formulário de contato alternativo

### Funcionalidades

- [ ] Smooth scroll animado
- [ ] Navegação mobile com hamburger menu
- [ ] Animações on scroll (Intersection Observer)
- [ ] Sistema de idiomas (PT/EN)
- [ ] Integração com Analytics
- [ ] Tracking de conversões WhatsApp
- [ ] Cookie consent banner

### Integrações

- [ ] CMS headless (Sanity/Strapi)
- [ ] Newsletter (Mailchimp/ConvertKit)
- [ ] Chat ao vivo
- [ ] Google Analytics/Plausible
- [ ] Hotjar para heatmaps

### Deploy

- [ ] Vercel deployment
- [ ] Cloudflare Pages
- [ ] Netlify
- [ ] Custom domain setup
- [ ] SSL certificate
- [ ] CDN configuration

## 📝 Licença

© 2025 BytePaulista. Todos os direitos reservados.

---

**Desenvolvido com ♥ em São Paulo**
