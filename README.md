# Rodrigo Pinheiro BJJ Boerne — Landing Page

Stack: React 19 + Vite + Tailwind 4 + TypeScript + GSAP  
Sistema: BLACK-BELT-UX v5.0  
Referência: Sanctum BJJ (sanctum-self.vercel.app)

---

## Setup

```bash
npm install
npm run dev
```

## Deploy (Vercel)

```bash
vercel --prod
```

## Variáveis de ambiente obrigatórias (.env)

```
GHL_WEBHOOK_URL=         # Webhook GoHighLevel
VITE_META_PIXEL_ID=      # Meta Pixel ID
VITE_GTM_ID=             # Google Tag Manager ID
VITE_GOOGLE_MAPS_KEY=    # Google Maps API Key (opcional)
```

---

## DADOS PENDENTES 🔴

Antes do deploy, substituir todos os placeholders marcados em vermelho no código:

| Item | Status |
|---|---|
| Foto Hero (1440px+, .webp) | 🔴 Aguardando — colocar em `/public/hero.webp` |
| Logo fundo transparente | 🔴 Aguardando — colocar em `/public/logo.png` |
| Foto Riba | 🔴 Aguardando — colocar em `/public/imagem/riba.webp` |
| Foto Nathi | 🔴 Aguardando — colocar em `/public/imagem/nathi.webp` |
| Fotos academia/galeria | 🔴 Aguardando — `/public/imagem/foto-1.webp` etc |
| Horários das modalidades | 🔴 Atualizar `src/data/schedule.ts` |
| Nota Google + total reviews | 🔴 Adicionar SocialProof section se desejar |
| Links redes sociais | 🔴 Atualizar Footer.tsx |
| GHL Webhook URL | 🔴 Variável de ambiente |
| Meta Pixel ID | 🔴 Variável de ambiente |
| Domínio final | 🔴 Atualizar canonical em index.html |

---

## Arquitetura

```
src/
├── components/
│   ├── layout/       → Navbar, Footer
│   ├── sections/     → Hero, OurClasses, Testimonials, HowToStart,
│   │                   OurSchedule, OurInstructors, MoreOfUs, About,
│   │                   FAQ, Location, FinalCTA, StickyCTABar, BookingModal
│   └── ui/           → Button, Section, SectionHeader, Badge, ImagePlaceholder
├── data/             → programs, testimonials, faq, schedule
├── hooks/            → useModal, useUTMs, useScrollDepth
├── types/            → index.ts, globals.d.ts
└── lib/              → utils.ts (cn)
api/
└── submit-lead.ts    → Proxy serverless → GHL webhook
```
