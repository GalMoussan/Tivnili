# Tivnili Conventions Skill

This skill provides context about Tivnili's coding patterns and conventions.

## Validation Approach

- Zod schemas for all API request/response validation
- Shared schemas in `shared/types.ts`
- Client-side: validate WhatsApp input before opening wa.me link
- Server-side: Zod `.parse()` in route handlers, ZodError caught by error middleware

## Import Conventions

```typescript
// 1. React / framework
import { useState, useEffect, type FC } from 'react';
import { motion, useInView, useScroll } from 'framer-motion';

// 2. Components
import { WhatsAppInput } from '../components/WhatsAppInput';
import { SectionWrapper } from '../components/SectionWrapper';
import { AmberText } from '../components/AmberText';

// 3. Hooks
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useScrollProgress } from '../hooks/useScrollProgress';
```

## Error Handling

- API: standard `{ error: { code, message } }` format
- Components: loading/error/empty state handling
- Animations: always check `prefers-reduced-motion`
- WhatsApp fallback: show phone number if wa.me fails

## File Naming

- Components: `PascalCase.tsx` (e.g., `ServiceCard.tsx`)
- Sections: `PascalCase.tsx` in `sections/` (e.g., `HeroSection.tsx`)
- Hooks: `camelCase.ts` with `use` prefix (e.g., `useScrollReveal.ts`)
- Routes: `camelCase.ts` (e.g., `contact.ts`)

## Key Patterns

- **Section pattern:** Every section uses `<SectionWrapper>` for consistent fade-in-up animation
- **Card pattern:** Dark card (`bg-navy-800`) on dark section (`bg-navy-900`), hover lift with amber glow
- **Amber highlight:** Use `<AmberText>` for emphasized words in headings
- **WhatsApp CTA:** `WhatsAppInput` component reused in Hero and Final CTA
- **Responsive:** Mobile-first with `sm:`, `md:`, `lg:` Tailwind breakpoints
