# Tivnili

Personal brand landing page for Gal — a solo developer and builder who sells websites, AI tools, and strategy sessions to small business owners under the brand Tivnili (תִּבְנִילִי — Hebrew: 'build for me').

## Stack

- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Express.js + TypeScript
- **Validation:** Zod
- **Testing:** Vitest

## Getting Started

```bash
npm install
npm run dev
```

## Structure

```
tivnili/
├── client/          # React frontend (Vite)
│   └── src/
│       ├── components/  # Reusable UI components
│       ├── sections/    # Page sections (Hero, Pricing, etc.)
│       ├── hooks/       # Custom React hooks
│       ├── styles/      # Global styles
│       └── assets/      # Static assets
├── server/          # Express backend
│   └── src/
│       ├── routes/      # API route handlers
│       ├── services/    # Business logic
│       └── middleware/
├── shared/          # Shared types and schemas
└── package.json     # Workspace root
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build all packages |
| `npm run typecheck` | TypeScript type checking |
| `npm run test` | Run tests |
| `npm run lint` | Lint code |
