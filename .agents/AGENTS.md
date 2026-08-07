# Love Grass Restaurant — Project Rules

## Architecture
- Framework: Astro 5+ (SSG mode, zero client JS by default)
- No React/Vue/Svelte — pure .astro components + vanilla CSS
- Islands only for: Lottie player (`client:idle`), mobile nav toggle (`client:load`)
- All pages are statically generated at build time

## Design System — "Teff & Earth"
- Use CSS custom properties defined in `src/styles/global.css`
- Color palette: Green primary (`#2D6A2E`), amber accent (`#D4943A`), warm earth tones
- Fonts: Outfit (headings), Inter (body), Playfair Display (accents), Noto Sans Ethiopic (Amharic)
- Mobile-first: base styles for phones (<480px), `min-width` media queries to scale up
- 8px spacing scale: `--space-1` through `--space-8`
- Never use `max-width` media queries — always `min-width`

## Performance Rules
- **LCP target**: < 1.5s
- **Total page weight**: < 500KB initial
- **JS bundle**: < 50KB total
- All images via Astro `<Image />` component — outputs AVIF/WebP automatically
- Hero/LCP image: `fetchpriority="high"`, never `loading="lazy"`
- Below-fold images: `loading="lazy"` with explicit `width` and `height`
- Self-hosted WOFF2 fonts with `font-display: swap`
- Preload only 2 critical fonts: Outfit + Inter
- Inline critical CSS in `<head>` for above-the-fold content

## SEO Rules
- Every page MUST have: unique `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph tags
- JSON-LD schema on every page: `Restaurant` + `BreadcrumbList`
- Menu page: additional `Menu` + `MenuItem` schema
- About page: additional `FAQPage` + `Article` schema
- Single `<h1>` per page, sequential heading hierarchy
- Semantic HTML landmarks: `<header>`, `<nav>`, `<main>`, `<footer>`
- `lang="en"` on `<html>`, with Amharic text inline for dish names

## Content Data
- Menu items: `src/data/menu.json` — single source of truth for UI + JSON-LD schema
- Reviews: `src/data/reviews.json`
- FAQ: `src/data/faq.json`
- All dish names include both English and Amharic text

## Asset Conventions
- Raw images → `src/assets/` subdirectories (Astro processes them at build time)
- SVGs and static files → `public/`
- Lottie files → `public/lottie/` (`.lottie` format, max 150KB)
- Fonts → `public/fonts/` (WOFF2 only)

## CSS Conventions
- No CSS frameworks — vanilla CSS with custom properties
- CSS files organized in `src/styles/`: `global.css`, `utilities.css`, `animations.css`
- Use scroll-driven animations API with graceful fallback for older browsers
- Respect `prefers-reduced-motion` for all animations
- Respect `prefers-color-scheme` — not implementing dark mode for v1 but design tokens support it

## Component Naming
- Global components: `src/components/global/` (Header, Footer, Nav, SEOHead)
- Page-specific: `src/components/home/`, `src/components/menu/`, `src/components/about/`
- File names: PascalCase (e.g., `HeroLottie.astro`, `MenuCard.astro`)

## Domain & Location
- Domain: `love-grass.com` (placeholder, may change)
- Location: Dubai, UAE
- Currency: AED
- Google Business Profile: Active — NAP must match exactly

## CTA Strategy (Free Version)
- All CTAs link to the Menu section/page on this site
- No external ordering platform links (Talabat, Deliveroo, etc.)
- Future paid version will add online ordering integration
