<!-- 75ed5171-4e09-4cbc-8f9f-083e34c81c0e 3041a3b7-02a7-493a-8524-ffc91215b5bb -->
# BytePaulista Landing Page Implementation

## Tech Stack

- **Framework**: SvelteKit (latest)
- **Language**: Svelte 5 with Runes ($state, $props)
- **UI**: Skeleton UI (@skeletonlabs/skeleton)
- **Styling**: Tailwind CSS
- **Animations**: Svelte transitions (fly, fade)

## Project Structure

```
bytepaulistav2/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte          # Theme initialization
│   │   └── +page.svelte             # Main orchestrator
│   ├── lib/
│   │   ├── themes/
│   │   │   └── monokai-theme.ts    # Custom dark theme
│   │   └── components/landing/
│   │       ├── Navbar.svelte        # With LightSwitch
│   │       ├── Hero.svelte
│   │       ├── Services.svelte
│   │       ├── About.svelte
│   │       └── ContactCTA.svelte
├── tailwind.config.cjs
├── package.json
└── svelte.config.js
```

## Implementation Steps

### 1. Project Initialization

- Create new SvelteKit project with Svelte 5
- Install dependencies: @skeletonlabs/skeleton, @skeletonlabs/tw-plugin, tailwindcss, autoprefixer

### 2. Skeleton UI Configuration

- Configure Tailwind with Skeleton plugin in `tailwind.config.cjs`
- Register custom Monokai theme + default light theme (skeleton)
- Set up `app.postcss` with Tailwind directives and Skeleton styles

### 3. Custom Monokai Theme (`src/lib/themes/monokai-theme.ts`)

Create custom theme object with Monokai color palette:

- Primary: Pink/Magenta (#F92672)
- Secondary: Green (#A6E22E)
- Tertiary: Orange (#FD971F)
- Dark background with high contrast

### 4. Layout Setup (`src/routes/+layout.svelte`)

- Import Skeleton styles and theme store
- Initialize `storeLightSwitch` for theme toggling
- Set up base HTML structure with theme classes

### 5. Landing Page Components

**Navbar.svelte**

- Use Skeleton `AppBar` component
- Logo: "BytePaulista" with `text-primary-500`
- Navigation links: Serviços, Sobre, Contato
- `LightSwitch` component for theme toggle

**Hero.svelte**

- Animation: `in:fly={{ y: 20, duration: 500 }}`
- H1: "Construindo o Futuro Digital, Linha por Linha."
- Subtitle with value proposition
- Primary CTA button

**Services.svelte**

- Section animation with fly transition
- Responsive grid (1 col mobile, 3 cols desktop)
- 3 Skeleton `Card` components with hover effects:
  - Desenvolvimento Web (secondary border)
  - Aplicativos Mobile (tertiary border)
  - Sistemas Customizados (primary border)
- Hover animation: `hover:scale-[1.02]`

**About.svelte**

- Clean layout with generous spacing (py-16, py-24)
- Professional placeholder text about BytePaulista
- Typography hierarchy using Skeleton classes

**ContactCTA.svelte**

- WhatsApp-focused CTA
- Large button with WhatsApp link: `https://wa.me/5511999999999`
- "No forms" message emphasizing direct communication

### 6. Main Page Assembly (`src/routes/+page.svelte`)

- Import all 5 components
- Arrange in vertical stack with proper spacing
- Apply semantic Skeleton classes

## Design Specifications

**Color Usage**

- Use Skeleton semantic classes (`bg-primary-500`, `variant-filled`)
- Avoid hardcoded Tailwind colors for theme compatibility

**Spacing**

- Generous vertical spacing: `py-16`, `py-24`
- Container classes for content width control

**Animations**

- Entrance animations on scroll-in (fly transitions)
- Subtle hover effects on interactive elements
- Duration: 300-500ms for smooth feel

**Typography**

- Use Skeleton scale: `h1`, `h2`, `h3`, `p`
- Clear hierarchy with size and weight

## Next Steps & Suggestions (Post-Implementation)

**SEO Optimization**

- Add meta tags in `+page.svelte` (title, description, OG tags)
- Implement sitemap.xml
- Add structured data (JSON-LD)

**Performance**

- Lazy load images with `loading="lazy"`
- Optimize assets with `vite-imagetools`
- Preload critical fonts

**Content Expansion**

- Add portfolio/case studies section
- Implement blog with CMS (Sanity/Strapi)
- Add testimonials section

**Analytics**

- Integrate Google Analytics or Plausible
- Track WhatsApp CTA clicks
- Set up conversion funnels

**Advanced Features**

- Add contact form as alternative to WhatsApp
- Implement smooth scroll navigation
- Add FAQ section with accordion component
- Create Portuguese/English language toggle

### To-dos

- [ ] Initialize SvelteKit project and install Skeleton UI dependencies
- [ ] Configure Tailwind, Skeleton plugin, and create Monokai theme
- [ ] Create +layout.svelte with theme switching support
- [ ] Build Navbar component with LightSwitch
- [ ] Build Hero section with animated CTA
- [ ] Build Services grid with 3 animated cards
- [ ] Build About section with professional copy
- [ ] Build ContactCTA with WhatsApp integration
- [ ] Assemble all components in +page.svelte