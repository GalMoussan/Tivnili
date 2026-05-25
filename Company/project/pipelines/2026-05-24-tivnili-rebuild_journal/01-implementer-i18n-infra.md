# Implementer Journal — 2026-05-24

## Task
Build the i18n infrastructure for the Tivnili project (Phase 1a).

## Files Created

### Content Type System
- `/client/src/content/types.ts`: TypeScript interface defining all content keys across the application (meta, nav, hero, services, comparison, portfolio, socialProof, manifesto, howItWorks, pricing, finalCta, footer)

### Content Files
- `/client/src/content/en.ts`: Complete English content extracted from all existing sections (544 lines)
- `/client/src/content/he.ts`: Hebrew translations with `[HE]` prefix for placeholder translations requiring user QA (544 lines)
- `/client/src/content/index.ts`: Content provider with `getContent(locale)` function and type exports

### Hooks
- `/client/src/hooks/useLocale.ts`: Locale state management with localStorage persistence (includes fallback for test environments where localStorage is unavailable)
- `/client/src/hooks/useContent.ts`: Hook to get content for current locale

### Components
- `/client/src/components/LanguageToggle.tsx`: Language toggle pill component (EN | עב) with amber highlight for active language

## Files Modified

### Navigation
- `/client/src/components/NavBar.tsx`: Added LanguageToggle component to navigation bar

### Fonts
- `/client/index.html`: Added Heebo font family (400/500/600/700/800 weights) for Hebrew text support

### Styles
- `/client/src/styles/globals.css`:
  - Added Heebo to font stack fallbacks
  - Added RTL support (`[dir="rtl"]` styles)
  - Added `.flip-rtl` utility for directional icons

## Approach

### 1. Content Extraction
Systematically read all sections and components to extract current English copy:
- Hero section (headline, subtitle, CTAs, WhatsApp messages)
- Services section (3 service cards)
- Comparison section (5 comparison rows)
- Portfolio section (featured project + 3 engines + crypto project)
- Social proof section (4 testimonials)
- Manifesto section (3 lines + Hebrew word)
- How it works section (3 steps)
- Pricing section (3 tiers with features)
- Final CTA section
- Footer
- Navigation
- Meta tags

### 2. Type-Safe Content Structure
Created a comprehensive `Content` interface that:
- Mirrors the exact structure needed by components
- Uses TypeScript const assertions (`as const satisfies Content`)
- Ensures en.ts and he.ts have identical keys
- Provides intellisense for content access

### 3. Locale Management
Implemented `useLocale` hook with:
- localStorage persistence (with try/catch for test environments)
- Automatic document.dir and document.lang updates
- Toggle function for easy switching
- Default to English if no preference stored

### 4. RTL Infrastructure
Added foundational RTL support:
- Heebo font for Hebrew (covers all needed weights)
- `[dir="rtl"]` attribute on html element (managed by useLocale)
- `.flip-rtl` utility class for directional icons (to be applied in Phase 1b)
- Logical CSS properties foundation (actual conversion happens in Phase 1b)

### 5. Language Toggle UI
Created minimal, accessible toggle:
- Pill design matching site aesthetic (navy-800 bg, amber highlight)
- Shows both languages (EN | עב)
- Active language highlighted in amber
- Integrated into NavBar between nav links and WhatsApp button

## Design Decisions

1. **Placeholder Prefix**: Used `[HE]` prefix for Hebrew translations to make it clear which content needs user QA/replacement
2. **localStorage Strategy**: Wrapped in try/catch to handle test environments and privacy modes gracefully
3. **Font Stack**: Added Heebo as fallback to existing fonts rather than replacing, ensuring English still uses optimal fonts
4. **Const Assertions**: Used `as const satisfies Content` pattern for maximum type safety while maintaining literal types
5. **Hook Separation**: Separated `useLocale` (state) from `useContent` (data) for single responsibility
6. **No Component Changes Yet**: Did NOT modify existing sections to use content hooks - that's Phase 1b. This phase only builds the infrastructure.

## Test Results Expected

TypeScript compilation passes: ✅
```
npx tsc -b
```
No errors reported.

## Notes

### Ready for Phase 1b
The infrastructure is complete and type-safe. Phase 1b can now:
1. Update all sections to use `useContent()` hook
2. Convert all directional CSS to logical properties
3. Add `flip-rtl` class to directional icons
4. Update meta tags dynamically based on locale

### Known Gotchas Handled
- Empty VITE_WHATSAPP_NUMBER: Existing code already handles this with fallback to '#'
- localStorage in tests: Wrapped in try/catch so tests won't break
- Hebrew font: Added to Google Fonts import and CSS fallback stack
- RTL direction: Automatically updated via useLocale hook's useEffect

### Content Statistics
- Total content keys: ~150+ individual strings
- Sections covered: 10 main sections + nav + footer + meta
- Testimonials: 4 with alignment preserved
- Pricing tiers: 3 with 5 features each
- Portfolio items: 5 projects with tags

### Next Steps (Phase 1b)
1. Update all section components to use `const content = useContent()`
2. Replace hardcoded strings with `content.sectionName.key`
3. Convert directional CSS (margin-left → margin-inline-start, etc.)
4. Add `flip-rtl` class to arrow icons in Hero and CTA sections
5. Update document title/meta tags dynamically
6. Test RTL layout manually
7. QA Hebrew translations with user
