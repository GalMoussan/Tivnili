# Tivnili Workspace Skill

This skill provides context about Tivnili's project structure, build system, and code organization.

## Project Layout

```
tivnili/                          # Code repo
├── .claude/                      # Agent config
├── client/                       # React frontend (Vite)
│   ├── src/
│   │   ├── App.tsx               # Root — renders all sections in order
│   │   ├── main.tsx              # React entry point
│   │   ├── components/           # Reusable UI components
│   │   │   ├── WhatsAppInput.tsx  # Primary CTA — opens wa.me
│   │   │   ├── SectionWrapper.tsx # Scroll-triggered fade-in container
│   │   │   ├── Container.tsx      # Centered max-width wrapper
│   │   │   ├── AmberText.tsx      # Amber highlight span
│   │   │   ├── ServiceCard.tsx    # Service offering card
│   │   │   ├── PricingCard.tsx    # Pricing tier card
│   │   │   ├── ProjectCard.tsx    # Portfolio project card
│   │   │   └── TestimonialBubble.tsx # WhatsApp-style testimonial
│   │   ├── sections/             # Page sections (rendered in order)
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── ComparisonSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── ManifestoSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── SocialProofSection.tsx
│   │   │   ├── FinalCTASection.tsx
│   │   │   └── Footer.tsx
│   │   ├── hooks/
│   │   │   ├── useScrollReveal.ts
│   │   │   ├── useScrollProgress.ts
│   │   │   └── useReducedMotion.ts
│   │   └── styles/
│   │       ├── globals.css        # Tailwind directives, body styles
│   │       └── animations.css     # Gradient mesh keyframes
│   ├── index.html
│   ├── vite.config.ts
│   ├── tailwind.config.ts
│   └── package.json
├── server/                       # Express backend
│   └── src/
│       ├── index.ts              # Express app entry
│       ├── routes/
│       │   ├── index.ts          # Route registration
│       │   ├── health.ts         # GET /api/health
│       │   └── contact.ts        # POST /api/contact
│       └── middleware/
│           └── errorHandler.ts
├── shared/                       # Shared types
│   └── types.ts
├── package.json                  # Workspace root
└── tsconfig.json
```

## Build Order

1. `shared/` — types (no build step, just TypeScript)
2. `server/` — Express API
3. `client/` — Vite bundles React app

## Key Commands

```bash
npm run dev        # Start client (Vite on :5173) + server (Express on :3001)
npm run build      # Production build (client → dist/)
npm run typecheck  # TypeScript checking across all packages
npm run test       # Vitest
npm run lint       # ESLint
```

## Adding New Code

- **New section:** Create `client/src/sections/{Name}Section.tsx`, wrap content in `<SectionWrapper>`, add to `App.tsx` in order
- **New component:** Create `client/src/components/{Name}.tsx` with named export and Props interface
- **New hook:** Create `client/src/hooks/use{Name}.ts`
- **New route:** Create `server/src/routes/{name}.ts`, register in `server/src/routes/index.ts`
