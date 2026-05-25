# Tivnili Project Guidelines

## Project Overview

**Tivnili** is a cinematic personal brand landing page with dark theme, amber accents, and WhatsApp-first conversion. Single-page application with scroll-triggered animations.

## Technology Stack

### Frontend (client/)
- **Framework**: React 18 + TypeScript 5
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4 (custom design tokens)
- **Animations**: Framer Motion 11 (scroll-triggered reveals)
- **Testing**: Vitest 2, Testing Library, jsdom
- **Dev Server**: Vite dev server on port 5173

### Backend (server/)
- **Framework**: Express 4 + TypeScript 5
- **Validation**: Zod 3
- **Testing**: Vitest 2, Supertest 7
- **Dev Server**: tsx watch on port 3001

### Shared (shared/)
- **Types**: Shared TypeScript types and Zod schemas

## Project Structure

```
tivnili/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI (WhatsAppInput, cards)
│   │   ├── sections/       # Page sections (Hero, Manifesto, etc.)
│   │   ├── hooks/          # Custom hooks (useScrollProgress, useReducedMotion)
│   │   ├── styles/         # globals.css, animations.css
│   │   └── test/           # Test setup files
│   ├── vitest.config.ts
│   └── package.json
├── server/
│   ├── src/
│   │   ├── routes/         # API routes (health.ts, contact.ts)
│   │   └── middleware/     # Express middleware (errorHandler.ts)
│   ├── vitest.config.ts
│   └── package.json
├── shared/
│   └── types.ts
└── package.json            # Root workspace config
```

## File Naming Conventions

| Type | Location | Convention | Example |
|------|----------|------------|---------|
| Components | `client/src/components/` | PascalCase.tsx | `WhatsAppInput.tsx` |
| Sections | `client/src/sections/` | PascalCase.tsx | `ManifestoSection.tsx` |
| Hooks | `client/src/hooks/` | use{Name}.ts | `useScrollProgress.ts` |
| Routes | `server/src/routes/` | camelCase.ts | `contact.ts` |
| Tests | `**/__tests__/` | {name}.test.{ts,tsx} | `health.test.ts` |

## Design System

### Color Palette
```typescript
// Background
navy-900: #0B1120    // Main background
navy-950: #0A0E1A    // Deeper variation
navy-800: #111827    // Card backgrounds

// Accent
amber-500: #F59E0B   // Primary accent (CTAs, highlights)

// Text
cream: #F8F7F4       // Primary text
smoke: #94A3B8       // Muted text
```

### Typography
- **Display font**: Plus Jakarta Sans (700/800) - Headlines, CTAs
- **Body font**: Inter (400/500/600) - Body text, descriptions

### Component Patterns

**Section Wrapper** - Scroll-triggered fade-in:
```tsx
<SectionWrapper>
  {/* Section content */}
</SectionWrapper>
```

**Cards** - Navy background with amber glow on hover:
```tsx
className="bg-navy-800 hover:-translate-y-1 shadow-glow-amber"
```

**Hebrew Text** - Always use lang attribute:
```tsx
<p lang="he">אמת</p>
```

## Development Workflow

### Starting Development
```bash
npm run dev              # Starts both client (5173) and server (3001)
```

### Running Tests
```bash
# Client tests
npm run test -w client              # Run all client tests once
npm run test:watch -w client        # Watch mode

# Server tests
npm run test -w server              # Run all server tests once
npm run test:watch -w server        # Watch mode

# All tests
npm run test                        # Run all tests (client + server)
```

### Type Checking
```bash
npx tsc -b              # Check all workspaces
```

### Building
```bash
npm run build           # Build client for production
```

## Test Infrastructure

### Client Tests (Vitest + Testing Library)

**Config**: `client/vitest.config.ts`
- **Environment**: jsdom (browser simulation)
- **Globals**: true (describe, it, expect globally available)
- **Setup**: `client/src/test/setup.ts` (imports @testing-library/jest-dom)
- **Pattern**: `src/**/*.{test,spec}.{ts,tsx}`

**Running Tests**:
```bash
cd /Users/galmoussan/projects/claude/Tivnili/tivnili
npm run test -w client
```

**Test Pattern**:
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComponentName } from '../ComponentName';

describe('ComponentName', () => {
  it('renders correctly', () => {
    render(<ComponentName />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Server Tests (Vitest + Supertest)

**Config**: `server/vitest.config.ts`
- **Environment**: node
- **Pattern**: `src/**/*.{test,spec}.{ts}`

**Running Tests**:
```bash
cd /Users/galmoussan/projects/claude/Tivnili/tivnili
npm run test -w server
```

**Test Pattern**:
```typescript
import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import { routerName } from '../routeName';

describe('Route Name', () => {
  const app = express();
  app.use('/api/endpoint', routerName);

  it('returns expected response', async () => {
    const res = await request(app).get('/api/endpoint');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('key', 'value');
  });
});
```

### Pre-Test Cleanup Protocol

**Before running any tests:**
```bash
# 1. Clear any stale build artifacts
rm -rf client/dist server/dist

# 2. Ensure TypeScript compilation is clean
npx tsc -b

# 3. If needed, reinstall dependencies
npm install
```

### Test Execution Order

1. **Type check first**: `npx tsc -b` (catches type errors before runtime)
2. **Unit tests**: Client and server tests can run in parallel
3. **Integration tests**: Server route tests (already included in `npm run test -w server`)

### Test Mocking Patterns

**localStorage Mock** (for hooks/components using localStorage):
```typescript
beforeEach(() => {
  const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
  };
  vi.stubGlobal('localStorage', localStorageMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});
```

**Framer Motion Mock** (for integration tests):
```typescript
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    p: 'p',
    h1: 'h1',
    // Add other motion components as needed
  },
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
  useMotionValue: (initial: any) => ({ get: () => initial }),
  AnimatePresence: ({ children }: any) => children,
}));
```

**Hook Mocking** (for testing components that use hooks):
```typescript
vi.mock('../hooks/useLocale', () => ({
  useLocale: vi.fn(() => ({
    locale: 'en',
    setLocale: vi.fn(),
    toggleLocale: vi.fn(),
  })),
}));
```

### Test Maintenance After Content Updates

**When content structure changes**:
1. Update TypeScript types FIRST (in `content/types.ts`)
2. Update content files (en.ts, he.ts)
3. Update consuming components
4. Update test assertions to match new content
5. Run full test suite: `npm run test`

**Content assertion pattern**:
- Use actual content strings, not generic placeholders
- Update tests immediately after content rewrites
- Verify structure matches across both languages (en/he)

### Coverage Requirements

- **Minimum**: 80% coverage
- **Focus areas**:
  - All sections (Hero, Manifesto, Services, etc.)
  - All API routes (health, contact)
  - Custom hooks (useScrollProgress, useReducedMotion)
  - i18n infrastructure (useLocale, useContent, LanguageToggle)
  - Shared utilities and types

## Coding Standards

### TypeScript

- **Strict mode**: Enabled
- **Type safety**: No `any` types (use `unknown` + type guards)
- **Interfaces**: Use `interface` for public APIs, `type` for unions/intersections
- **Props**: Always define `{ComponentName}Props` interface
- **String escaping**: Use double quotes for strings containing apostrophes (e.g., `"I'm"` not `'I'm'`)

### Content Files (i18n)

**String Format**:
- Use double quotes for all strings containing apostrophes or contractions
- Examples: `"I'm"`, `"you're"`, `"owner's"`, `"can't"`, `"there's"`
- Run `npx tsc --noEmit` after content updates to catch syntax errors

**Content Structure Validation**:
- When changing content structure, update corresponding TypeScript types FIRST
- Update consuming components IMMEDIATELY after structure changes
- Run type check before moving to next phase: `npx tsc -b`

### React Components

- **Functional components**: Always use function components (no class components)
- **Named exports**: Prefer named exports over default
- **Props destructuring**: Destructure props in function signature
- **Hooks**: Follow React hooks rules (only at top level, only in React functions)

**Example**:
```tsx
interface HeroSectionProps {
  title: string;
  subtitle?: string;
}

export function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

### Framer Motion

- **Always respect reduced motion**: Use `useReducedMotion()` hook
- **Scroll animations**: Use `useScroll` + `useTransform` for scroll-driven effects
- **Performance**: Use `useMotionValue` for frequent updates
- **Accessibility**: Provide static fallback when `prefersReducedMotion === true`

**Scroll Progress Pattern**:
```tsx
import { useScrollProgress } from '../hooks/useScrollProgress';

export function AnimatedSection() {
  const { ref, progress } = useScrollProgress(['start end', 'start start']);
  const opacity = useTransform(progress, [0, 1], [0, 1]);

  return <section ref={ref} style={{ opacity }} />;
}
```

### Express Routes

- **Router pattern**: Each route in separate file with exported router
- **Error handling**: Use `errorHandler` middleware (never swallow errors)
- **Validation**: Use Zod schemas for request validation
- **CORS**: Enabled for local development

**Example**:
```typescript
import { Router } from 'express';
import { z } from 'zod';

const requestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export const myRouter = Router();

myRouter.post('/', async (req, res, next) => {
  try {
    const data = requestSchema.parse(req.body);
    // Handle request
    res.json({ success: true });
  } catch (error) {
    next(error);
  }
});
```

## Environment Configuration

### Required Environment Variables

**Client** (`.env`):
```bash
VITE_WHATSAPP_NUMBER=972XXXXXXXXX  # WhatsApp number (country code, no +)
```

**Server** (`.env`):
```bash
PORT=3001                           # Server port (default 3001)
```

### Setup
```bash
cp .env.example .env
# Edit .env with actual values
```

## i18n Patterns

### Content Layer Architecture

**Structure**:
```
client/src/content/
├── types.ts      # TypeScript interface defining all content keys
├── en.ts         # English content (as const satisfies Content)
├── he.ts         # Hebrew content (as const satisfies Content)
└── index.ts      # getContent(locale) function + exports
```

**Content File Pattern**:
```typescript
import { Content } from './types';

export const en = {
  meta: { title: "...", description: "..." },
  nav: { links: [...], logo: "..." },
  hero: { headline: "...", subtitle: "..." },
  // ... all sections
} as const satisfies Content;
```

**Hook Pattern**:
```typescript
// In any component or section
import { useContent } from '../hooks/useContent';

export function MySection() {
  const { content } = useContent();
  return <h1>{content.sectionName.headline}</h1>;
}
```

### RTL Layout Support

**Document attributes** (managed by useLocale hook):
- Hebrew: `<html dir="rtl" lang="he">`
- English: `<html dir="ltr" lang="en">`

**CSS patterns**:
```css
/* Use logical properties for directional spacing */
margin-inline-start: 1rem;  /* Instead of margin-left */
padding-inline-end: 2rem;   /* Instead of padding-right */

/* RTL-specific overrides */
[dir="rtl"] .element {
  /* RTL-specific styles */
}

/* Flip directional icons */
.flip-rtl {
  transform: scaleX(-1);
}
[dir="rtl"] .flip-rtl {
  transform: scaleX(1);
}
```

**Hebrew font stack**:
```css
font-family: 'Heebo', 'Plus Jakarta Sans', 'Inter', system-ui, sans-serif;
```

**Hebrew text in components**:
```tsx
<p lang="he">אמת</p>
<p lang="he">תִּבְנִילִי</p>
```

### Meta Tags (dynamic based on locale)

**Pattern** (in App.tsx):
```typescript
const { content } = useContent();

useEffect(() => {
  document.title = content.meta.title;

  // Update all meta tags
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', content.meta.description);
  }

  // Update OG tags, Twitter Card tags, etc.
}, [content]);
```

## Common Tasks

### Adding a New Section
1. Add content keys to `client/src/content/types.ts`
2. Add content to `client/src/content/en.ts` and `client/src/content/he.ts`
3. Create component in `client/src/sections/{SectionName}.tsx`
4. Create test in `client/src/sections/__tests__/{SectionName}.test.tsx`
5. Write test first (TDD)
6. Implement section using `useContent()` hook
7. Import and add to main App component
8. Run tests: `npm run test -w client`

### Adding a New API Endpoint
1. Create route in `server/src/routes/{routeName}.ts`
2. Create test in `server/src/routes/__tests__/{routeName}.test.ts`
3. Write test first (TDD)
4. Implement route with Zod validation
5. Register in `server/src/routes/index.ts`
6. Run tests: `npm run test -w server`

### Adding a New Hook
1. Create hook in `client/src/hooks/use{HookName}.ts`
2. Create test in `client/src/hooks/__tests__/use{HookName}.test.ts`
3. Write test first (TDD)
4. Implement hook
5. Run tests: `npm run test -w client`

## Troubleshooting

### Tests Failing
1. Check TypeScript compilation: `npx tsc -b`
2. Verify test setup files are loaded
3. Check for Framer Motion mock issues (may need to mock in test setup)
4. Ensure jsdom environment is set for React tests

### Dev Server Issues
1. Check if ports 5173 and 3001 are available
2. Verify `.env` file exists
3. Clear node_modules and reinstall: `rm -rf node_modules && npm install`
4. Check for TypeScript errors: `npx tsc -b`

### Build Issues
1. Clear dist folders: `rm -rf client/dist server/dist`
2. Type check: `npx tsc -b`
3. Check for missing dependencies
4. Verify Vite config and Tailwind config are correct

## Quality Gates

Before any commit:
- [ ] TypeScript compilation passes: `npx tsc -b`
- [ ] All tests pass: `npm run test`
- [ ] No console errors in dev mode
- [ ] Reduced motion fallbacks work
- [ ] No hardcoded secrets (check .env usage)

## Documentation

- **Code repo docs**: `../tivnili-docs/`
- **Architecture**: `../tivnili-docs/architecture/`
- **Developer guide**: `../tivnili-docs/developer/`
- **Task specs**: `../tivnili-docs/tasks/`
