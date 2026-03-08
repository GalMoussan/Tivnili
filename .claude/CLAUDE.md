# Tivnili

Cinematic personal brand landing page for the Tivnili brand — dark theme, amber accents, WhatsApp-first conversion.

## Stack

- **Frontend:** React 18 + TypeScript 5 + Vite 5
- **Styling:** Tailwind CSS 3 (custom design tokens)
- **Animations:** Framer Motion 11 (scroll-triggered reveals)
- **Backend:** Express 4 + TypeScript 5
- **Validation:** Zod 3
- **Testing:** Vitest 1

## Structure

```
tivnili/
├── client/src/
│   ├── components/    # Reusable UI (WhatsAppInput, cards, SectionWrapper)
│   ├── sections/      # Page sections in render order (Hero → Footer)
│   ├── hooks/         # useScrollReveal, useScrollProgress, useReducedMotion
│   └── styles/        # globals.css, animations.css
├── server/src/
│   ├── routes/        # health.ts, contact.ts
│   └── middleware/    # errorHandler.ts
└── shared/types.ts    # Shared types
```

## Design System

| Token | Value |
|-------|-------|
| Background | navy-900 `#0B1120` |
| Card BG | navy-800 `#111827` |
| Accent | amber-500 `#F59E0B` |
| Text | cream `#F8F7F4` |
| Muted | smoke `#94A3B8` |
| Display font | Plus Jakarta Sans 700/800 |
| Body font | Inter 400/500/600 |

## Key Patterns

- **Sections:** Wrap in `<SectionWrapper>` for scroll-triggered fade-in
- **Cards:** `bg-navy-800` with `hover:-translate-y-1 shadow-glow-amber`
- **Amber highlight:** `<AmberText>word</AmberText>` for emphasized text
- **WhatsApp CTA:** `<WhatsAppInput>` opens `wa.me` with prefilled message
- **Components:** Functional, named exports, `{Name}Props` interface, Tailwind only
- **Animations:** Always respect `prefers-reduced-motion`
- **Hebrew text:** Use `lang="he"` attribute on Hebrew content

## Commands

```bash
npm run dev        # Vite (:5173) + Express (:3001)
npm run build      # Production build
npm run typecheck  # TypeScript check
npm run test       # Vitest
```

## File Naming

- Components: `PascalCase.tsx` in `components/`
- Sections: `PascalCase.tsx` in `sections/`
- Hooks: `use{Name}.ts` in `hooks/`
- Routes: `camelCase.ts` in `routes/`

## Docs Repo

Architecture, task specs, and planning: `../tivnili-docs/`
