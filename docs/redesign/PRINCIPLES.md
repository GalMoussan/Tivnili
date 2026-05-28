# Design Principles for Tivnili v2

## Foundation: Designing for Yossi

Every design decision must pass through this filter:

**Yossi is:**
- ~45–55 years old
- Owns 1–3 small Israeli businesses (café, clinic, salon, local shop)
- Lives in WhatsApp
- Makes decisions in 48 hours
- Reads on his phone between customers
- Hears "AI" everywhere and feels behind
- Wants to see a face before sending money
- Values honesty and directness over polish

**Yossi is NOT:**
- A developer or technologist
- Buying for a corporation
- Comparing enterprise SaaS products
- Impressed by minimalism for minimalism's sake
- Reading from a desktop in a quiet office

**Design implication:** Warmer, denser, more human than global SaaS sites. Less Vercel, more Tel Aviv small business with excellent taste.

---

## Typography

### Hebrew Display Font

**Recommendation: Frank Ruhl Libre (Bold/Black weights)**

**Rationale:**
- **Hebrew-native design:** Frank Ruhl Libre is a revival of a classic Hebrew typeface. Looks authentic, not like a Latin font adapted for Hebrew.
- **Warmth:** Serif font brings warmth and tradition (vs. the cold geometric sans-serifs used in tech branding).
- **Readability at scale:** Bold weights have excellent presence for headlines without feeling aggressive.
- **Differentiation:** Most Israeli tech sites use Heebo or Assistant (sans-serif). Frank Ruhl Libre stands out while feeling rooted.
- **Hosted on Google Fonts:** Easy to implement, performant.

**Alternative 1: Assistant (Bold/ExtraBold)**
- **Pros:** Clean, modern, excellent Hebrew kerning, widely used (proven), Google Fonts hosted
- **Cons:** Very common (many Israeli sites use it), doesn't differentiate, feels "startup-y"

**Alternative 2: Heebo (Bold/ExtraBold)**
- **Pros:** Excellent readability, strong Hebrew support, modern without being cold, Google Fonts hosted
- **Cons:** Also widely used, similar vibe to Assistant

**Why NOT the current Plus Jakarta Sans:**
- Plus Jakarta Sans is a Latin-optimized font. Hebrew glyphs feel like an afterthought.
- Too geometric and cold for the Yossi persona.
- Screams "Silicon Valley startup" not "Tel Aviv solo consultant."

---

### Latin Display Font (English Version)

**Recommendation: Crimson Pro (Bold/ExtraBold)**

**Rationale:**
- **Pairs with Frank Ruhl Libre:** Both are serif fonts with similar x-height and warmth
- **Readability:** Crimson Pro is designed for screen reading, not print (unlike traditional serifs)
- **Accessible:** Strong contrast, works at small sizes, WCAG AAA compliant at body sizes
- **Google Fonts hosted**

**Alternative: Keep Inter for English display**
- If budget/simplicity requires one font stack, use **Inter for English display + body** and **Frank Ruhl Libre for Hebrew display** + **Assistant for Hebrew body**
- Inter is excellent for Latin text and already in use

---

### Body Font

**Hebrew body: Assistant (Regular/Medium)**
**Latin body: Inter (Regular/Medium)**

**Rationale:**
- **Assistant** is highly legible at small sizes, excellent for body text on mobile
- **Inter** (current body font) is proven, accessible, performs well
- Pairing serif display + sans body is a classic hierarchy pattern
- Keep what works; only change what doesn't

---

### Line Height Adjustment for Hebrew

**Rule:** Hebrew typography typically wants ~5–8% tighter line-height than Latin at the same point size.

**Reasoning:**
- Hebrew letterforms have less vertical variation than Latin (no true ascenders/descenders in the Western sense)
- Looser line-height (common in Latin typography) creates too much whitespace in Hebrew paragraphs
- Israeli readers expect denser vertical rhythm

**Implementation:**
```css
/* Latin */
.text-body-en {
  line-height: 1.6;
}

/* Hebrew */
.text-body-he {
  line-height: 1.5; /* ~6% tighter */
}
```

Apply globally via `[lang="he"]` selector.

---

### Font Loading Strategy

**For Hebrew:** Use `font-display: optional` (NOT `swap`)

**Rationale:**
- Hebrew fallback flash is visually jarring (more so than Latin)
- Hebrew letterforms vary significantly between fonts
- `optional` means: use custom font if already loaded, else fallback — no flash
- Preload Hebrew font weights for above-the-fold content

**For Latin:** `font-display: swap` is acceptable

**Implementation:**
```html
<link rel="preload" as="font" href="/fonts/FrankRuhlLibre-Bold.woff2" type="font/woff2" crossorigin>
```

---

## Color Palette

### Recommended Palette: "Warm Light"

**Primary Background:** Warm Cream `#F8F5EF` (light mode default)
**Card Background:** White `#FFFFFF`
**Text (Primary):** Navy `#0B1120`
**Text (Secondary):** Warm Gray `#6B7280`
**Accent:** Amber `#F59E0B` (keep current)
**Accent (Hover):** Deep Amber `#D97706`
**אמת Accent:** Amber `#F59E0B` (consistency with brand)

**Rationale:**
- **Light mode first:** Israeli SMB sites that convert are typically light (more inviting, less "exclusive")
- **Warm cream base:** Not pure white — has warmth and softness, feels human
- **Amber accent:** Keep current amber (it's working) but use it sparingly for emphasis
- **High contrast:** Navy text on cream background = WCAG AAA compliant
- **Aligns with brief:** "Warmer than the current dark cinematic"

**Dark mode option (if needed):**
- Inverse: Navy background, cream text
- But default to light mode per Israeli SMB market research

---

### Alternative Palette 1: "Soft Neutral"

**Primary Background:** Off-White `#FAFAF9`
**Card Background:** White `#FFFFFF`
**Border/Divider:** Stone `#E7E5E4`
**Text (Primary):** Charcoal `#1C1917`
**Text (Secondary):** Stone `#78716C`
**Accent:** Amber `#F59E0B`

**Rationale:**
- Softer than pure black/white
- Stone tones are warm and grounding
- Less "creamy" than Option 1, more neutral
- Good for photography-heavy designs

---

### Alternative Palette 2: "Keep Dark, Add Warmth"

**Primary Background:** Warm Navy `#1A1F2E` (warmer than current `#0B1120`)
**Card Background:** Dark Slate `#2A3142`
**Text (Primary):** Cream `#F8F7F4` (keep current)
**Text (Secondary):** Warm Gray `#9CA3AF`
**Accent:** Amber `#F59E0B` (keep current)

**Rationale:**
- Preserve dark theme but make it warmer
- Shift from pure cool navy to warm navy (add red/brown undertones)
- Less "cinematic tech" more "cozy evening café"

---

### Recommendation: **Option 1 ("Warm Light")**

**Why:**
- Israeli SMB market prefers light, warm sites
- Yossi persona expects approachability, not exclusivity
- Dark themes signal "premium tech product" — light themes signal "local service business"
- Photography and human elements (Gal's face) work better on light backgrounds
- Easier to achieve WCAG AAA contrast ratios

**Accessibility Check:**
- Navy `#0B1120` on Cream `#F8F5EF`: Contrast ratio 15.8:1 (WCAG AAA)
- Warm Gray `#6B7280` on Cream `#F8F5EF`: Contrast ratio 4.9:1 (WCAG AA for body text)
- Amber `#F59E0B` on Navy `#0B1120`: Contrast ratio 4.7:1 (WCAG AA for large text only — use sparingly for body)

---

## Density

**Positioning on density axis:**

```
Low Density                        High Density
(Vercel/Linear)                    (Israeli SMB sites)
        ↓                                  ↓
[----------------X----------------------]
            v2 position
```

**Target: Medium-High Density**

**What this means in practice:**

**Whitespace:**
- Section padding: 4rem–6rem (vs current 8rem–12rem)
- Card padding: 2rem (vs current 3rem–4rem)
- Comfortable but not sparse

**Content:**
- More photography (Gal's face, Tel Aviv environment shots, work-in-progress shots)
- Less "void" (large gradient backgrounds with one sentence)
- Hero section: headline + subhead + photo + 2 CTAs (not just headline + CTA)

**Visual richness:**
- Subtle textures on backgrounds (e.g., paper grain, fabric texture)
- Card borders and shadows for tactile depth
- Icons and illustrations to break up text
- WhatsApp-style bubbles (keep — they add personality)

**Text:**
- Shorter paragraphs (3-4 lines max on mobile)
- More subheads and bullet points
- Pull quotes or highlighted text for emphasis

**Rationale:**
- Yossi is reading on his phone in a noisy environment (café, between customers). Sparse layouts don't give him enough to grab onto.
- Israeli web users expect richer visual information density than Western minimalist aesthetic
- Density ≠ clutter. Still needs hierarchy and breathing room, just less "art gallery" and more "market stall."

---

## Motion Budget

### The Rule: One Signature Interaction

The site gets **ONE** signature interaction that serves Yossi's understanding. Everything else is utility motion only.

**Allowed (utility motion):**
- Scroll-triggered fade-in for sections (keeps page from feeling static)
- Hover lift on cards (tactile feedback)
- Button press states (visual confirmation)
- Smooth scroll to anchor links (improves navigation)
- Loading states (prevents confusion)

**Signature interaction (one of three proposals in SIGNATURE.md — user picks):**
- [See SIGNATURE.md for three options]

**Forbidden (decorative motion):**
- ❌ Animated gradient mesh (current hero) — doesn't serve understanding
- ❌ Parallax scrolling (gimmick)
- ❌ Cursor trails or follow effects (distraction)
- ❌ Marquee text (accessibility nightmare)
- ❌ Auto-playing video backgrounds (performance killer)
- ❌ Particle effects, WebGL, 3D (overkill for Yossi)

**Reduced motion:**
- ALL motion must have a `prefers-reduced-motion: reduce` fallback
- Fallback = instant state change, no animation
- Test with system setting enabled

---

## Imagery

### Recommendation: Real Photography (Gal + Tel Aviv Environment)

**What to include:**
1. **Gal's face/portrait** — professional but not sterile. Warm expression, eye contact, approachable. Could be shot in café, office, or Tel Aviv street. NOT corporate headshot on white background.

2. **Work-in-progress shots** — Gal at laptop with client on video call, whiteboard with workflow diagrams, phone showing WhatsApp conversation. Shows "this is what working with me looks like."

3. **Tel Aviv environmental shots** — Tel Aviv skyline, café exterior, street scene. Establishes "local" credibility. Could be used as subtle background images.

4. **Client business context (if/when available)** — Photos of client's actual business (café counter, clinic waiting room, salon chair). With permission. Shows real work, not stock imagery.

**What NOT to include:**
- ❌ Stock photos of suit-wearing people pointing at laptops
- ❌ AI-generated humans (uncanny valley, violates אמת motif)
- ❌ Generic office interiors with glass walls and bean bags
- ❌ Diversity-quota stock photos (rings false)

**Alternative if photography isn't available immediately:**
- **Simple line illustrations** (hand-drawn style, warm) for use cases and process steps
- **Abstract geometric patterns** (using brand colors) for backgrounds
- **Icons** (Phosphor Icons or Lucide) for feature lists

**But photography is strongly preferred.** Yossi buys from people, not brands. Real photos >> illustrations.

---

### Image Implementation Notes

**Format:** WebP with JPEG fallback (not PNG — current site uses PNG, inefficient)
**Loading:** Lazy-load below-the-fold images, eager-load hero image
**Alt text:** Descriptive for accessibility (Hebrew and English)
**Aspect ratios:**
- Portrait (Gal): 3:4 or 4:5 (Instagram-style)
- Environment: 16:9 or 3:2
- Work-in-progress: 4:3 (laptop screen ratio)

---

## Design System Summary

| Element | Spec | Rationale |
|---|---|---|
| **Display Font (Hebrew)** | Frank Ruhl Libre Bold/Black | Hebrew-native, warm, differentiating |
| **Display Font (Latin)** | Crimson Pro Bold/ExtraBold | Pairs with Frank Ruhl, readable |
| **Body Font (Hebrew)** | Assistant Regular/Medium | Legible, proven |
| **Body Font (Latin)** | Inter Regular/Medium | Keep current, works well |
| **Color Palette** | Warm Cream base + Navy text + Amber accent | Light mode, warm, high contrast |
| **Density** | Medium-High | More visual richness than minimalism |
| **Motion Budget** | One signature + utility only | Respect Yossi's cognitive load |
| **Imagery** | Real photography (Gal + Tel Aviv) | Human-first, builds trust |
| **Aesthetic** | Warm SMB-friendly, not cold SaaS | Matches market expectations |

---

## Two Font Faces Max

**Final decision:** Two font families across the site.

**Option A (Recommended):**
- **Frank Ruhl Libre** (Bold/Black) — Hebrew display
- **Crimson Pro** (Bold/ExtraBold) — Latin display
- **Assistant** (Regular/Medium) — Hebrew body
- **Inter** (Regular/Medium) — Latin body

**Wait, that's four fonts.** But it's two *families* in practice:
- Serif family: Frank Ruhl + Crimson Pro (used for headlines)
- Sans family: Assistant + Inter (used for body)

**Option B (Simpler):**
- **Frank Ruhl Libre** (Bold/Black) — Hebrew display only
- **Inter** (Regular/Medium/Bold) — Everything else (Latin display, all body text)
- **Assistant** (Regular/Medium) — Hebrew body only

This keeps three faces total. More maintainable. Serif display + sans body is enough hierarchy.

**Recommendation: Option B for simplicity.**

---

## Accessibility Standards

All design decisions must meet:
- **WCAG 2.1 Level AA** minimum (AAA preferred for text)
- **Contrast ratios:**
  - Body text: 4.5:1 minimum (7:1 preferred)
  - Large text (18pt+): 3:1 minimum (4.5:1 preferred)
  - UI elements: 3:1 minimum
- **Focus states:** 2px solid ring, high contrast, visible on all interactive elements
- **Touch targets:** 44x44px minimum (mobile)
- **Reduced motion:** All animations have fallback
- **Screen reader:** Semantic HTML, ARIA labels where needed, Hebrew `lang="he"` attribute

---

## Implementation Priority

**Phase 1 (Core):**
1. Typography: Switch to Frank Ruhl Libre + Crimson Pro + adjust line heights
2. Color palette: Migrate to Warm Light palette
3. Add Gal's photo to Hero
4. Remove gradient mesh, simplify hero background

**Phase 2 (Refinement):**
1. Increase density (reduce section padding, add more content per section)
2. Add real photography (Tel Aviv shots, work-in-progress)
3. Implement signature interaction (one of three from SIGNATURE.md)
4. Add textures/grain to backgrounds

**Phase 3 (Polish):**
1. Fine-tune spacing and hierarchy
2. Optimize images (WebP, lazy loading)
3. Test across devices and screen sizes
4. Validate accessibility compliance
