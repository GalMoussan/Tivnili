# Tivnili Project Learnings

## Animation Timing (Framer Motion)

### Scroll Progress Offsets
- `['start end', 'end start']`: Animation spans entire section visibility (entering → exiting)
- `['start start', 'end end']`: Animation spans section in viewport (top hits top → bottom hits bottom)
- `['start end', 'start start']`: Animation completes during entry (section enters → locks in place)

**Lesson**: For sticky sections with tall scroll ranges (120vh+), animations should complete BEFORE sticky content locks, not during the entire scroll range. Use `['start end', 'start start']` to complete animation by the time content is centered.

### Reduced Motion
- Always respect `useReducedMotion()` hook
- Provide static fallback for all scroll-triggered effects
- Never block content behind animation-only reveals

## Design System

### Color Tokens
- Background: navy-900 `#0B1120`, navy-950 for variation
- Card BG: navy-800 `#111827`
- Accent: amber-500 `#F59E0B`
- Text: cream `#F8F7F4`
- Muted: smoke `#94A3B8`

### Typography
- Display: Plus Jakarta Sans 700/800
- Body: Inter 400/500/600
- Always use semantic HTML (`<h1>`, `<p>`, etc.)

### Component Patterns
- Wrap sections in `<SectionWrapper>` for scroll reveals
- Cards: `bg-navy-800 hover:-translate-y-1 shadow-glow-amber`
- Hebrew text: Always use `lang="he"` attribute

## Project Structure

### Workspace Organization
- `client/`: React frontend (Vite)
- `server/`: Express backend
- `shared/`: Shared types (Zod schemas)

### File Naming
- Components: PascalCase.tsx in `components/`
- Sections: PascalCase.tsx in `sections/`
- Hooks: use{Name}.ts in `hooks/`
- Routes: camelCase.ts in `routes/`

## Testing

### Test Infrastructure
- Vitest for unit/integration tests
- Run: `npm run test -w client` or `npm run test -w server`
- Coverage target: 80%+

### Common Gotchas
- Framer Motion requires mocking for tests
- Scroll hooks need viewport simulation
- Server routes require Express app mocking

## Development Workflow

### Dev Server
- `npm run dev`: Runs client (5173) + server (3001) concurrently
- HMR enabled for instant feedback
- TypeScript checking: `npx tsc -b`

### Environment
- `.env` file required (copy from `.env.example`)
- `VITE_WHATSAPP_NUMBER`: WhatsApp contact number
- `PORT`: Server port (default 3001)

## Known Issues

### Resolved
- ✓ ManifestoSection animation timing: Fixed with `['start end', 'start start']` offset
