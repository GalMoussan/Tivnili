# Phase B Execution Plan

## Prerequisites (Before Phase B Starts)

1. **Phase A approved** — All 9 planning docs reviewed and approved
2. **OPEN_QUESTIONS.md answered** — All critical questions (Q1-Q12) resolved
3. **Photos ready** — Gal's photos available or scheduled
4. **Calendly configured** — Event URL provided
5. **Branch clean** — `feature/initial-development` has no uncommitted changes

---

## Phase B Overview

**Goal:** Implement redesign per approved plan, ship deployable site on Vercel preview.

**Timeline estimate:** 4-6 weeks (depends on photo availability and review cycles)

**Workflow:**
- One concern per commit (features, refactors, copy, fixes)
- Conventional commits format: `feat(hero):`, `refactor(rtl):`, `fix(mobile):`, `chore(copy):`
- Each commit leaves Vercel preview deployable (no half-broken states)
- Hebrew first, English second in every content commit
- Mobile parity per commit (no "mobile pass at the end")

**Quality gates per commit:**
- TypeScript compiles (`npm run typecheck`)
- Tests pass (`npm run test`)
- Lighthouse mobile: Performance ≥ 90, Accessibility = 100
- No horizontal scroll on any breakpoint
- Hebrew and English render correctly

---

## Commit Units (Ordered by Dependency)

### Wave 1: Foundation (No Dependencies)

Can be done in parallel or sequential order. These lay the groundwork for all other work.

---

#### Unit 1.1: Design System — Typography

**Scope:** Implement new font stack (Frank Ruhl Libre, Crimson Pro, Assistant, Inter).

**Files:**
- `client/src/styles/globals.css` — Add font imports and definitions
- `client/tailwind.config.ts` — Update font family config
- `client/public/fonts/` — Add preload fonts if self-hosting

**Tasks:**
1. Add Google Fonts link to `index.html` (Frank Ruhl Libre Bold/Black, Crimson Pro Bold/ExtraBold, Assistant Regular/Medium, Inter Regular/Medium)
2. Update Tailwind config:
   ```ts
   fontFamily: {
     display: ['Frank Ruhl Libre', 'Crimson Pro', 'serif'],
     body: ['Assistant', 'Inter', 'sans-serif'],
   }
   ```
3. Set `font-display: optional` for Hebrew fonts in CSS
4. Test font loading (no flash, graceful fallback)

**Commit:**
```
feat(design): Implement typography system with Frank Ruhl Libre

- Add Frank Ruhl Libre (Hebrew display) and Crimson Pro (Latin display)
- Configure Assistant (Hebrew body) and Inter (Latin body)
- Set font-display: optional for Hebrew fonts (prevents flash)
- Update Tailwind config with new font stacks

Ref: PRINCIPLES.md typography section
```

**Estimated complexity:** Low (1-2 hours)

---

#### Unit 1.2: Design System — Color Palette

**Scope:** Migrate from dark theme to Warm Light palette.

**Files:**
- `client/tailwind.config.ts` — Update color tokens
- `client/src/styles/globals.css` — Update CSS custom properties

**Tasks:**
1. Replace current navy/amber/cream colors with Warm Light palette:
   - Primary BG: `#F8F5EF` (warm cream)
   - Card BG: `#FFFFFF` (white)
   - Text Primary: `#0B1120` (navy)
   - Text Secondary: `#6B7280` (warm gray)
   - Accent: `#F59E0B` (amber, keep)
2. Update all color references in Tailwind config
3. Test contrast ratios (WCAG AA minimum)

**Commit:**
```
feat(design): Migrate to Warm Light color palette

- Replace dark navy background with warm cream (#F8F5EF)
- Update text colors to navy on cream (high contrast)
- Keep amber accent (#F59E0B) for consistency
- All colors pass WCAG AA contrast requirements

Ref: PRINCIPLES.md color palette section
```

**Estimated complexity:** Low (1-2 hours)

---

#### Unit 1.3: RTL Infrastructure

**Scope:** Implement logical properties and RTL correctness across entire codebase.

**Files:**
- `client/src/styles/globals.css` — Add RTL base styles
- All component files — Replace physical properties with logical
- `client/src/hooks/useLocale.ts` — Ensure `dir` attribute is set on `<html>`

**Tasks:**
1. Audit all existing CSS for `left`/`right` usage → replace with `start`/`end`
2. Update Tailwind classes: `ml-4` → `ms-4`, `mr-4` → `me-4`, etc.
3. Confirm `dir="rtl"` is set on `<html>` when locale is Hebrew
4. Add `.icon-directional { transform: scaleX(-1); }` for RTL icon mirroring
5. Test all layouts in Hebrew (375px, 768px, 1280px)

**Commit:**
```
refactor(rtl): Implement logical properties for RTL correctness

- Replace all physical properties (left/right) with logical (start/end)
- Update Tailwind classes to use logical utilities (ms/me/ps/pe)
- Add icon mirroring class for directional icons
- Confirm dir="rtl" on <html> when Hebrew locale active
- Test all breakpoints in Hebrew mode

Ref: RTL_RULES.md
```

**Estimated complexity:** Medium (3-4 hours)

---

### Wave 2: Content Infrastructure (Depends on Wave 1)

These prepare the content system for new sections.

---

#### Unit 2.1: Content Types

**Scope:** Update content type definitions for new sections.

**Files:**
- `client/src/content/types.ts` — Add types for new sections (WhatYouGet, WhoIAm, Manifesto update, etc.)

**Tasks:**
1. Define TypeScript interfaces for all 9 sections per SECTIONS.md
2. Ensure Hebrew and English have type parity
3. Add types for WhatsApp prefilled messages (per pricing tier)

**Commit:**
```
chore(content): Update content types for redesigned sections

- Add WhatYouGet, WhoIAm section types
- Update Pricing types (unique WhatsApp messages per tier)
- Update Manifesto type (4 lines instead of 3)
- Ensure Hebrew/English type parity

Ref: SECTIONS.md, COPY.md
```

**Estimated complexity:** Low (1 hour)

---

#### Unit 2.2: Hebrew Content

**Scope:** Add all Hebrew copy from COPY.md to content system.

**Files:**
- `client/src/content/he.ts` — Replace all content with new Hebrew copy

**Tasks:**
1. Copy all Hebrew content from COPY.md to `he.ts`
2. Ensure proper structure (matches types from Unit 2.1)
3. Add WhatsApp prefilled messages (5 variations)
4. Add meta tags (title, description, OG, Twitter)

**Commit:**
```
feat(content): Add Hebrew copy for redesigned site

- Replace all section copy with native Hebrew from COPY.md
- Add WhatsApp prefilled messages (per pricing tier)
- Update meta tags for SEO
- Hebrew written natively, not translated

Ref: COPY.md Hebrew section
```

**Estimated complexity:** Low (1 hour)

---

#### Unit 2.3: English Content

**Scope:** Add all English copy from COPY.md to content system.

**Files:**
- `client/src/content/en.ts` — Replace all content with new English copy

**Tasks:**
1. Copy all English content from COPY.md to `en.ts`
2. Ensure structure matches Hebrew (type parity)
3. Add same WhatsApp prefilled messages (English versions)
4. Add English meta tags

**Commit:**
```
feat(content): Add English copy for redesigned site

- Port Hebrew copy to English per COPY.md
- Maintain same structure and tone as Hebrew
- Add English WhatsApp prefilled messages
- Update English meta tags for SEO

Ref: COPY.md English section
```

**Estimated complexity:** Low (1 hour)

---

### Wave 3: Core Components (Depends on Wave 2)

Build reusable components that sections will use.

---

#### Unit 3.1: Image Component

**Scope:** Create optimized image component for Gal's photos.

**Files:**
- `client/src/components/OptimizedImage.tsx` — New component
- `client/src/components/__tests__/OptimizedImage.test.tsx` — Tests

**Tasks:**
1. Create component with WebP + JPEG fallback
2. Add lazy loading (below-the-fold) and eager loading (above-the-fold) props
3. Add aspect ratio preservation
4. Include alt text in both Hebrew and English
5. Write tests

**Commit:**
```
feat(components): Add OptimizedImage component

- WebP with JPEG fallback for broad browser support
- Lazy/eager loading options
- Aspect ratio preservation (no layout shift)
- Bilingual alt text support
- Unit tests included

Used for Gal's photos in Hero, Who I Am, Final CTA
```

**Estimated complexity:** Low (1-2 hours)

---

#### Unit 3.2: Calendly Button Component

**Scope:** Create Calendly integration button.

**Files:**
- `client/src/components/CalendlyButton.tsx` — New component
- `client/src/components/__tests__/CalendlyButton.test.tsx` — Tests

**Tasks:**
1. Create button component that opens Calendly modal
2. Add props: `eventUrl`, `label`, `variant` (primary/secondary)
3. Integrate Calendly widget (inline embed or popup)
4. Add bilingual ARIA labels
5. Write tests

**Commit:**
```
feat(components): Add CalendlyButton component

- Opens Calendly event modal/popup
- Primary and secondary button variants
- Bilingual ARIA labels for accessibility
- Unit tests included

Used in Hero, Pricing, Final CTA
```

**Estimated complexity:** Low (1-2 hours)

---

#### Unit 3.3: Updated WhatsAppInput Component

**Scope:** Fix RTL issues and add unique message support.

**Files:**
- `client/src/components/WhatsAppInput.tsx` — Update existing component
- `client/src/components/__tests__/WhatsAppInput.test.tsx` — Update tests

**Tasks:**
1. Fix button positioning: `right-2` → `end-2` (RTL fix)
2. Add `message` prop for unique prefilled messages
3. Add icon mirroring for send arrow in RTL
4. Update tests for new props

**Commit:**
```
fix(components): Fix WhatsAppInput RTL and add unique messages

- Replace right-2 with end-2 for RTL correctness
- Add message prop for tier-specific prefilled messages
- Add icon-directional class for arrow mirroring in RTL
- Update tests

Ref: RTL_RULES.md, SECTIONS.md Pricing section
```

**Estimated complexity:** Low (1 hour)

---

### Wave 4: Section Implementation (Depends on Wave 3)

Implement all 9 sections in order per FLOW.md.

---

#### Unit 4.1: Hero Section

**Scope:** Rebuild Hero per SECTIONS.md spec.

**Files:**
- `client/src/sections/HeroSection.tsx` — Complete rewrite
- `client/src/sections/__tests__/HeroSection.test.tsx` — Update tests
- `client/public/images/gal-hero.webp` — Add Gal's photo

**Tasks:**
1. Two-column layout (text left, photo right) on desktop
2. Add Gal's photo using OptimizedImage component
3. Add headline, subhead, price hint per COPY.md
4. Add Calendly button (primary) and WhatsApp button (secondary)
5. Implement mobile layout (stacked, photo above text)
6. Add fade-in-up entrance animation with stagger
7. Respect reduced motion preferences
8. Test at all breakpoints (375px, 768px, 1280px, 1920px)
9. Test Hebrew and English rendering

**Commit:**
```
feat(hero): Rebuild Hero section with photo and dual CTAs

- Two-column desktop layout (text 60%, photo 40%)
- Gal's photo visible above-the-fold
- Calendly primary CTA + WhatsApp secondary CTA
- Price hint visible ("Starting at ₪400")
- Mobile: stacked layout, photo above text
- Entrance animations with reduced-motion fallback
- Hebrew and English tested at all breakpoints

Ref: SECTIONS.md Hero, COPY.md, FLOW.md
```

**Estimated complexity:** Medium (4-5 hours)

---

#### Unit 4.2: What You Get Section

**Scope:** New section with 3 concrete use case cards.

**Files:**
- `client/src/sections/WhatYouGetSection.tsx` — New section
- `client/src/sections/__tests__/WhatYouGetSection.test.tsx` — Tests

**Tasks:**
1. Three-card grid (desktop) / stacked (mobile)
2. Card content: Icon, Title, Problem, Solution, Benefit
3. Icons: Use emoji or simple SVG
4. Hover lift animation on desktop
5. Scroll-triggered fade-in with stagger
6. Test Hebrew and English content

**Commit:**
```
feat(sections): Add What You Get section with use cases

- Three concrete use case cards (Quote Automation, Daily Brief, 24/7 Customer AI)
- Problem → Solution → Benefit format
- Hover lift animation (desktop)
- Scroll-triggered fade-in with stagger
- Mobile: stacked layout
- Hebrew and English tested

Ref: SECTIONS.md What You Get, COPY.md
```

**Estimated complexity:** Medium (3-4 hours)

---

#### Unit 4.3: Who I Am Section

**Scope:** New About section with Gal's photo and story.

**Files:**
- `client/src/sections/WhoIAmSection.tsx` — New section
- `client/src/sections/__tests__/WhoIAmSection.test.tsx` — Tests
- `client/public/images/gal-about.webp` — Add Gal's full photo

**Tasks:**
1. Two-column layout (photo left, text right) on desktop
2. Gal's full environment photo
3. Name, location, story, current status per COPY.md
4. Mobile: photo above text, center-aligned
5. Parallax-lite animation (photo from left, text from right)
6. Test Hebrew and English

**Commit:**
```
feat(sections): Add Who I Am section with founder story

- Two-column layout with Gal's environment photo
- Name, location (Tel Aviv), lindaWorld story, pilot client status
- Mobile: stacked, center-aligned
- Parallax entrance animation with reduced-motion fallback
- Hebrew and English tested

Ref: SECTIONS.md Who I Am, COPY.md
```

**Estimated complexity:** Medium (3-4 hours)

---

#### Unit 4.4: How It Works Section

**Scope:** Update existing section with timeline hints and no-obligation signal.

**Files:**
- `client/src/sections/HowItWorksSection.tsx` — Update existing
- `client/src/sections/__tests__/HowItWorksSection.test.tsx` — Update tests

**Tasks:**
1. Keep 3-step structure
2. Add timeline hints: "30-45 minutes" (Step 1), "1-2 weeks" (Step 2)
3. Add disclaimer: "After first meeting, you decide. No obligation."
4. Update copy per COPY.md
5. Test Hebrew and English

**Commit:**
```
feat(how-it-works): Add timeline hints and no-obligation signal

- Step 1: "30-45 minute meeting"
- Step 2: "Build time: 1-2 weeks"
- Add disclaimer: "No obligation after first meeting"
- Updated copy per COPY.md
- Hebrew and English tested

Ref: SECTIONS.md How It Works, COPY.md
```

**Estimated complexity:** Low (1-2 hours)

---

#### Unit 4.5: Pricing Section

**Scope:** Update pricing with concrete examples and visual hierarchy.

**Files:**
- `client/src/sections/PricingSection.tsx` — Update existing
- `client/src/sections/__tests__/PricingSection.test.tsx` — Update tests

**Tasks:**
1. Update Tier 2 visual treatment (elevated, amber ring, scale 105%)
2. Add examples to Tier 2: "e.g., quote automation, daily brief, customer AI"
3. Update Tier 3 title: "The Full Stack" → "The Complete System" (Hebrew: "המערכת המלאה")
4. Add concrete numbers to Tier 3: "3-5 integrations"
5. Update WhatsApp buttons with unique prefilled messages per tier
6. Add Calendly buttons per tier
7. Test Hebrew and English

**Commit:**
```
feat(pricing): Add visual hierarchy and concrete examples

- Tier 2 elevated (scale 105%, amber ring, shadow)
- Tier 2: Add examples (quote automation, daily brief, customer AI)
- Tier 3: Rename to "Complete System", add "3-5 integrations"
- Unique WhatsApp messages per tier
- Add Calendly buttons per tier
- Hebrew and English tested

Ref: SECTIONS.md Pricing, COPY.md
```

**Estimated complexity:** Medium (3-4 hours)

---

#### Unit 4.6: Social Proof Section

**Scope:** Update with third bubble and refined copy.

**Files:**
- `client/src/sections/SocialProofSection.tsx` — Update existing
- `client/src/sections/__tests__/SocialProofSection.test.tsx` — Update tests

**Tasks:**
1. Add third bubble (center-aligned): "One pilot in progress..."
2. Update copy per COPY.md
3. Maintain WhatsApp bubble aesthetic (emerald green)
4. Test Hebrew and English

**Commit:**
```
feat(social-proof): Add third bubble and update copy

- Add center bubble: "One pilot client in progress"
- Updated copy for bubbles 1 and 2 per COPY.md
- Maintain WhatsApp aesthetic (emerald green, message style)
- Hebrew and English tested

Ref: SECTIONS.md Social Proof, COPY.md
```

**Estimated complexity:** Low (1-2 hours)

---

#### Unit 4.7: Manifesto Section

**Scope:** Update with fourth line and native Hebrew copy.

**Files:**
- `client/src/sections/ManifestoSection.tsx` — Update existing
- `client/src/sections/__tests__/ManifestoSection.test.tsx` — Update tests

**Tasks:**
1. Add fourth line: "Truth before polish" / "אמת לפני פוליש"
2. Rewrite Hebrew lines natively (not literal translations)
3. Keep word-by-word scroll reveal if approved as signature interaction
4. Simplify to fade-in if not the signature interaction
5. Test Hebrew and English

**Commit:**
```
feat(manifesto): Add fourth line and native Hebrew copy

- Add line 4: "Truth before polish" / "אמת לפני פוליש"
- Rewrite Hebrew natively (simplified phrasing)
- Keep word-by-word scroll reveal animation
- Reduced-motion fallback: all text visible immediately
- Hebrew and English tested

Ref: SECTIONS.md Manifesto, COPY.md
```

**Estimated complexity:** Low (1-2 hours)

---

#### Unit 4.8: Final CTA Section

**Scope:** Rebuild with concrete copy and dual CTAs.

**Files:**
- `client/src/sections/FinalCTASection.tsx` — Update existing
- `client/src/sections/__tests__/FinalCTASection.test.tsx` — Update tests

**Tasks:**
1. Update headline: "Ready to get your time back?" / "מוכן להחזיר לעצמך את הזמן?"
2. Update subhead: "Let's build the system..." per COPY.md
3. Add Calendly button (primary) and WhatsApp button (secondary)
4. Keep reassurance footer text
5. Add Gal's small photo in corner (optional based on OPEN_QUESTIONS answer)
6. Test Hebrew and English

**Commit:**
```
feat(final-cta): Rebuild with concrete copy and dual CTAs

- Headline: "Ready to get your time back?"
- Subhead: "Let's build the system that gives you your weekends back"
- Calendly primary CTA + WhatsApp secondary CTA
- Reassurance text: "Usually responds within the hour. Just me."
- Small Gal photo in corner (optional)
- Hebrew and English tested

Ref: SECTIONS.md Final CTA, COPY.md
```

**Estimated complexity:** Low (2-3 hours)

---

#### Unit 4.9: Footer Section

**Scope:** Update with email, location, and copyright.

**Files:**
- `client/src/sections/Footer.tsx` — Update existing
- `client/src/sections/__tests__/Footer.test.tsx` — Update tests

**Tasks:**
1. Add location: "Tel Aviv" / "תל אביב"
2. Add email: `gal@tivnili.com`
3. Update copyright: "© 2026 Gal Moussan. All rights reserved."
4. Keep tagline: "AI integration for the people who run things."
5. Test Hebrew and English

**Commit:**
```
feat(footer): Add email, location, and updated copyright

- Add "Tel Aviv" location signal
- Add email: gal@tivnili.com
- Update copyright: © 2026 Gal Moussan
- Keep tagline
- Hebrew and English tested

Ref: SECTIONS.md Footer, COPY.md
```

**Estimated complexity:** Low (1 hour)

---

### Wave 5: Signature Interaction (Depends on Wave 4)

Implement the approved signature interaction (per OPEN_QUESTIONS Q1).

---

#### Unit 5.1: Signature Interaction

**Scope:** Implement selected signature interaction (אמת Reveal, Price Builder, or Before/After Scroll).

**Files:**
- Depends on selection — see SIGNATURE.md for technical specs per option
- Tests for interaction

**Tasks:**
- See SIGNATURE.md for detailed implementation per option

**Commit:**
```
feat(interaction): Implement [SELECTED] signature interaction

[Details depend on Q1 answer from OPEN_QUESTIONS]

Ref: SIGNATURE.md [Option A/B/C]
```

**Estimated complexity:** Medium-High (4-8 hours depending on option)

---

### Wave 6: App-Level Updates (Depends on Wave 4)

Update app structure to use new sections.

---

#### Unit 6.1: App.tsx Update

**Scope:** Update main App component to render redesigned sections in correct order.

**Files:**
- `client/src/App.tsx` — Update section order

**Tasks:**
1. Remove: ComparisonSection, PortfolioSection (cut per FLOW.md)
2. Reorder sections per FLOW.md:
   - NavBar
   - HeroSection
   - WhatYouGetSection (new)
   - WhoIAmSection (new)
   - HowItWorksSection
   - PricingSection
   - SocialProofSection
   - ManifestoSection
   - FinalCTASection
   - Footer
3. Add signature interaction component (if applicable)

**Commit:**
```
feat(app): Update App.tsx with redesigned section order

- Remove Comparison and Portfolio sections (cut per FLOW.md)
- Add WhatYouGet and WhoIAm sections
- Reorder: Hero → What You Get → Who I Am → How It Works → Pricing → Social Proof → Manifesto → Final CTA → Footer
- Add signature interaction (if implemented)

Ref: FLOW.md section order
```

**Estimated complexity:** Low (30 minutes)

---

### Wave 7: Testing & Polish (Depends on Wave 6)

Final quality checks and refinements.

---

#### Unit 7.1: Lighthouse Audit

**Scope:** Run Lighthouse audits and fix issues.

**Tasks:**
1. Run Lighthouse mobile for Hebrew page
2. Run Lighthouse mobile for English page
3. Fix any Performance < 90, Accessibility < 100, SEO < 95 issues
4. Optimize images (compress, convert to WebP)
5. Add lazy loading where needed

**Commit:**
```
perf(lighthouse): Optimize for Lighthouse scores

- Hebrew mobile: Performance 90+, Accessibility 100, SEO 95+
- English mobile: Performance 90+, Accessibility 100, SEO 95+
- Optimized images (WebP, lazy loading)
- No CLS (layout shift fixed)

All sections meet performance budget
```

**Estimated complexity:** Low-Medium (2-3 hours)

---

#### Unit 7.2: Cross-Browser Testing

**Scope:** Test in all major browsers and devices.

**Browsers/Devices to test:**
- Chrome (desktop + mobile)
- Safari (desktop + iOS)
- Firefox (desktop)
- Edge (desktop)

**Test checklist per browser:**
- [ ] All sections render correctly
- [ ] Hebrew and English both work
- [ ] RTL layout correct in Hebrew
- [ ] Animations work (or gracefully fallback)
- [ ] CTAs work (Calendly, WhatsApp)
- [ ] No horizontal scroll at any breakpoint
- [ ] Touch targets are 44x44px minimum (mobile)

**Commit:**
```
test(cross-browser): Validate across Chrome, Safari, Firefox, Edge

- All browsers tested (desktop and mobile)
- Hebrew and English rendering confirmed
- RTL correctness validated
- Animations work with reduced-motion fallbacks
- All CTAs functional

No critical browser-specific issues found
```

**Estimated complexity:** Medium (3-4 hours)

---

#### Unit 7.3: Accessibility Audit

**Scope:** Run accessibility audit and fix issues.

**Tools:**
- axe DevTools (browser extension)
- NVDA (Windows screen reader)
- VoiceOver (Mac/iOS screen reader)

**Test checklist:**
- [ ] All sections have proper heading hierarchy (h1 → h2 → h3)
- [ ] All images have descriptive alt text (Hebrew and English)
- [ ] All interactive elements have ARIA labels
- [ ] Keyboard navigation works (tab order is logical)
- [ ] Focus states are visible and high-contrast
- [ ] Screen reader reads Hebrew text correctly (`lang="he"`)
- [ ] Color contrast passes WCAG AA minimum (AAA preferred)

**Commit:**
```
a11y(audit): Run accessibility audit and fix issues

- Heading hierarchy correct (h1 → h2 → h3)
- All images have bilingual alt text
- ARIA labels on all interactive elements
- Keyboard navigation logical (tested)
- Focus states visible and high-contrast
- Screen reader tested (NVDA + VoiceOver)
- Color contrast passes WCAG AA

Site is fully accessible
```

**Estimated complexity:** Medium (3-4 hours)

---

#### Unit 7.4: Final Copy Review

**Scope:** Read all copy aloud in Hebrew and English, apply Yossi test.

**Test:**
- Read every section aloud as if you are Yossi reading on phone in café
- Flag any copy that feels jargon-y, translated, or aspirational-fake
- Fix immediately

**Commit:**
```
chore(copy): Final copy review and Yossi test

- All Hebrew copy read aloud, passed Yossi test
- All English copy read aloud, passed naturalness test
- Minor phrasing adjustments for plain-spoken clarity
- No SaaS-speak found

Site copy is Yossi-friendly
```

**Estimated complexity:** Low (1-2 hours)

---

### Wave 8: Honesty Audit (Depends on Wave 7)

Final pass before opening PR.

---

#### Unit 8.1: Honesty Audit

**Scope:** Run honesty audit per brief §7.

**File to create:**
- `docs/redesign/HONESTY_AUDIT.md`

**Process:**
For every claim on the site (copy, numbers, testimonials, guarantees, capabilities), answer:
1. Is this literally, verifiably true today?
2. If a journalist asked Gal to prove this on the phone right now, could he?
3. Would Yossi feel deceived if he learned the unvarnished truth behind this claim?

Anything failing any of the three gets flagged P0 and rewritten or removed.

**Commit:**
```
docs(honesty): Complete honesty audit before PR

- Created HONESTY_AUDIT.md with claim-by-claim verification
- All claims pass 3-question test (verifiable, provable, non-deceptive)
- No invented stats, testimonials, or capabilities
- אמת motif integrity maintained

Site passes final honesty check
```

**Estimated complexity:** Low (1-2 hours)

---

### Wave 9: PR and Deploy (Depends on Wave 8)

Open PR for review, do NOT merge.

---

#### Unit 9.1: Open Pull Request

**Scope:** Create PR from `feature/initial-development` to `dev` (NOT main).

**PR contents:**
1. **Title:** "feat: Tivnili redesign v2 — complete homepage rebuild"
2. **Summary:** Section-by-section what changed
3. **Before/After:** Screenshots per section (or Vercel preview URLs for both old and new)
4. **Lighthouse scores:** Hebrew and English, mobile and desktop
5. **HONESTY_AUDIT.md:** Linked at top of PR description
6. **Vercel preview URL:** Pinned at top

**Commit:**
```
chore(pr): Open pull request for redesign v2 review

PR created from feature/initial-development → dev

Do not merge. Waiting for review and approval.
```

**Estimated complexity:** Low (1 hour)

---

## Dependency Graph

```
Wave 1: Foundation
├── 1.1: Typography
├── 1.2: Color Palette
└── 1.3: RTL Infrastructure

Wave 2: Content (depends on Wave 1)
├── 2.1: Content Types
├── 2.2: Hebrew Content
└── 2.3: English Content

Wave 3: Components (depends on Wave 2)
├── 3.1: OptimizedImage
├── 3.2: CalendlyButton
└── 3.3: WhatsAppInput (update)

Wave 4: Sections (depends on Wave 3)
├── 4.1: Hero
├── 4.2: What You Get
├── 4.3: Who I Am
├── 4.4: How It Works
├── 4.5: Pricing
├── 4.6: Social Proof
├── 4.7: Manifesto
├── 4.8: Final CTA
└── 4.9: Footer

Wave 5: Signature Interaction (depends on Wave 4)
└── 5.1: [Selected interaction]

Wave 6: App-Level (depends on Wave 4)
└── 6.1: App.tsx update

Wave 7: Testing (depends on Wave 6)
├── 7.1: Lighthouse
├── 7.2: Cross-browser
├── 7.3: Accessibility
└── 7.4: Copy review

Wave 8: Honesty Audit (depends on Wave 7)
└── 8.1: HONESTY_AUDIT.md

Wave 9: PR (depends on Wave 8)
└── 9.1: Open PR
```

---

## Parallelization Opportunities

**Can run in parallel (same wave):**
- Wave 1: All 3 units (Typography, Color, RTL) are independent
- Wave 2: Hebrew and English content can be done simultaneously (but both depend on Types)
- Wave 3: All 3 components are independent
- Wave 4: Sections 4.2-4.9 can be done in any order (but all depend on Hero for photo/component patterns)

**Must be sequential:**
- Wave 2 depends on Wave 1 (content needs design tokens)
- Wave 3 depends on Wave 2 (components need content types)
- Wave 4 depends on Wave 3 (sections need components)
- Waves 5-9 are sequential

**Optimal strategy:**
1. Wave 1: Do all 3 in parallel (if multiple developers) or sequential (if solo)
2. Wave 2: Types → Hebrew + English in parallel
3. Wave 3: All 3 in parallel
4. Wave 4: Hero first (sets patterns), then parallelize remaining sections
5. Waves 5-9: Sequential

---

## Timeline Estimate

**Solo developer, working full-time:**
- Wave 1: 1 day
- Wave 2: 0.5 days
- Wave 3: 0.5 days
- Wave 4: 3-4 days (most work)
- Wave 5: 1 day (depends on signature interaction complexity)
- Wave 6: 0.5 days
- Wave 7: 2 days
- Wave 8: 0.5 days
- Wave 9: 0.5 days

**Total: ~10-11 working days (2 weeks)**

**With review cycles and iteration:** 3-4 weeks

**If photos need to be shot:** +1 week

**Final estimate: 4-6 weeks**

---

## Quality Gates (Every Commit Must Pass)

Before committing:
- [ ] TypeScript compiles (`npm run typecheck`)
- [ ] Tests pass (`npm run test`)
- [ ] Linter passes (`npm run lint`)
- [ ] Hebrew renders correctly at 375px, 768px, 1280px
- [ ] English renders correctly at same breakpoints
- [ ] No horizontal scroll in either language
- [ ] Lighthouse mobile Performance ≥ 90 (for affected sections)
- [ ] Lighthouse mobile Accessibility = 100 (for affected sections)
- [ ] Reduced motion tested (animations have fallback)
- [ ] Commit message follows conventional format
- [ ] Commit is deployable (site works, no broken states)

---

## Merge Contract (After PR Opened)

**Do NOT merge to dev until:**
- Gal reviews PR
- All OPEN_QUESTIONS answers are incorporated
- Vercel preview is tested on real devices (iPhone + Android)
- Screenshots confirm redesign meets expectations
- Gal explicitly approves ("approved, merge")

**Do NOT merge to main until:**
- `dev` branch is tested on Vercel preview for at least 48 hours
- No critical bugs reported
- Gal explicitly approves production deploy

**Brief reminder:** "Do not merge. Open a PR... Wait for me to merge. Do not self-merge under any circumstances."

---

## Emergency Rollback Plan

If redesign breaks production:

1. **Immediate:** Revert `main` to previous commit
   ```bash
   git revert HEAD
   git push origin main
   ```

2. **Investigate:** Review Vercel deployment logs, browser console errors, user reports

3. **Fix forward:** Create hotfix branch from `main`, fix critical issue, PR to `main`

4. **Learn:** Document what broke and why in `docs/redesign/POSTMORTEM.md`

---

## Post-Launch Iteration

After redesign is live on production:

**Week 1-2 (Feedback collection):**
- Monitor analytics (if added)
- Collect user feedback (Gal's direct conversations with visitors)
- Note any confusion points, friction, or bugs

**Week 3-4 (Iteration):**
- Fix any P0 bugs immediately
- Address top 3 P1 issues from feedback
- Minor copy tweaks based on real user language

**Month 2+ (Enhancement):**
- Add real testimonials as founding clients complete (replace placeholder bubbles)
- Add case study details (replace "pilot in progress" with results)
- Optimize based on conversion data

---

## Success Criteria

Redesign is successful if:
- ✅ All 9 sections implemented per SECTIONS.md
- ✅ Hebrew and English render correctly at all breakpoints
- ✅ RTL is engineering-correct (no hardcoded left/right)
- ✅ Lighthouse mobile: Performance ≥ 90, Accessibility = 100, SEO ≥ 95
- ✅ Honesty audit passes (no fabricated claims)
- ✅ Gal's photo is visible and builds trust
- ✅ Calendly and WhatsApp CTAs work correctly
- ✅ Site is deployable on Vercel preview
- ✅ Gal approves redesign for production

**Ultimate success metric:** Yossi books a Clarity Session or sends a WhatsApp message within 90 seconds of landing on the site.
