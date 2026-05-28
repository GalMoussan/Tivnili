# RTL Engineering Rules

## Mandate

Hebrew is the canonical language. RTL correctness is NOT optional polish — it's a P0 requirement. If Hebrew doesn't work perfectly, the site fails its primary audience.

---

## Rule 1: Logical Properties Everywhere

**Never use directional properties (`left`, `right`, `top`, `bottom`) for layout.**

Use CSS logical properties:

| ❌ Never use | ✅ Always use |
|---|---|
| `margin-left` | `margin-inline-start` |
| `margin-right` | `margin-inline-end` |
| `padding-left` | `padding-inline-start` |
| `padding-right` | `padding-inline-end` |
| `left` | `inset-inline-start` |
| `right` | `inset-inline-end` |
| `top` | `inset-block-start` |
| `bottom` | `inset-block-end` |
| `border-left` | `border-inline-start` |
| `border-right` | `border-inline-end` |
| `border-top-left-radius` | `border-start-start-radius` |
| `border-top-right-radius` | `border-start-end-radius` |
| `text-align: left` | `text-align: start` |
| `text-align: right` | `text-align: end` |

### Tailwind Logical Utilities

Tailwind 4.0 supports logical properties. Use these:

| ❌ Old syntax | ✅ New logical syntax |
|---|---|
| `ml-4` | `ms-4` (margin-inline-start) |
| `mr-4` | `me-4` (margin-inline-end) |
| `pl-6` | `ps-6` (padding-inline-start) |
| `pr-6` | `pe-6` (padding-inline-end) |
| `left-0` | `start-0` (inset-inline-start) |
| `right-0` | `end-0` (inset-inline-end) |
| `text-left` | `text-start` |
| `text-right` | `text-end` |
| `rounded-tl-lg` | `rounded-ss-lg` (border-start-start) |
| `rounded-tr-lg` | `rounded-se-lg` (border-start-end) |

### Exceptions (Physical Properties ARE Allowed)

**Structural positioning where direction doesn't matter:**
- `top`, `bottom` for absolute positioning relative to viewport
- `width`, `height` (these are physical by nature)
- `border-top`, `border-bottom` for decorative dividers (if truly non-directional)

**Example of acceptable physical property:**
```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /* left + right here pin to viewport edges, not semantic direction */
}
```

But prefer:
```css
.navbar {
  position: fixed;
  inset-block-start: 0;
  inset-inline: 0; /* both start and end */
}
```

---

## Rule 2: HTML `dir` Attribute

**Set `dir` attribute on `<html>` element server-side** (no hydration flash).

### Implementation

**React (client-side):**
```tsx
// In App.tsx or root layout
useEffect(() => {
  document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = locale;
}, [locale]);
```

**Next.js (server-side):**
```tsx
// In app/layout.tsx or pages/_document.tsx
export default function RootLayout({ locale }: { locale: string }) {
  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <body>{children}</body>
    </html>
  );
}
```

**Vite + React (current stack):**
```tsx
// In main.tsx
import { createRoot } from 'react-dom/client';
import App from './App';

const locale = localStorage.getItem('tivnili-locale') || 'he';
document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
document.documentElement.lang = locale;

createRoot(document.getElementById('root')!).render(<App />);
```

### Testing

- **Chrome DevTools:** Inspect `<html>` element, verify `dir="rtl"` when Hebrew
- **Visual:** Check if layout flips (text aligns right, flex/grid reverses)
- **ScreenReader:** NVDA/VoiceOver should read Hebrew text in correct order

---

## Rule 3: Icon Mirroring

**Decide per icon:** Does this icon represent a directional action or a semantic object?

### Icons That SHOULD Mirror in RTL

**Directional icons** (represent movement/flow in reading direction):
- ➡️ Arrow right (becomes ⬅️ in RTL)
- ⬅️ Arrow left (becomes ➡️ in RTL)
- 🔙 Back icon (flips direction)
- ➡️ Forward icon (flips direction)
- ↩️ Reply icon (flips direction)
- ➡️ Send icon (if it's an arrow)
- 📋 Clipboard with arrow (arrow flips)

**CSS for mirroring:**
```css
[dir="rtl"] .icon-directional {
  transform: scaleX(-1);
}
```

**React component example:**
```tsx
<svg className="icon-directional">
  {/* arrow path */}
</svg>
```

### Icons That SHOULD NOT Mirror in RTL

**Semantic objects** (represent real-world objects, not direction):
- ✅ Checkmark
- ❌ X / Close
- 📱 Phone
- 💬 Chat bubble (unless tail points directionally)
- 🔍 Magnifying glass
- ⚙️ Settings gear
- 🌙 Moon / ☀️ Sun
- Logo / Brand marks
- 📷 Camera
- 🔔 Bell / Notification

**No special CSS needed** — these render the same in LTR and RTL.

### WhatsApp Icon (Special Case)

The WhatsApp icon (chat bubble with phone) does NOT mirror. It's a brand asset, not a directional indicator.

However, the **send button inside WhatsAppInput** (if using an arrow) SHOULD mirror.

---

## Rule 4: Mixed Text (Numbers and Latin in Hebrew)

Hebrew text often includes English words (e.g., "WhatsApp") and numbers. These can break RTL flow.

### Problem

```html
<p dir="rtl">
  שלח הודעה ב-WhatsApp לקבלת מענה ב-24 שעות
</p>
```

Renders as:
```
תועש 24-ב הנעמ תלבקל WhatsApp-ב העדוה חלש
```

The "WhatsApp" and "24" break the flow because they're LTR fragments in RTL text.

### Solution: Unicode Bidi Control Characters

Use Unicode bidi isolate markers:

- **U+2066 (LRI - Left-to-Right Isolate):** Starts LTR span
- **U+2067 (RLI - Right-to-Left Isolate):** Starts RTL span
- **U+2069 (PDI - Pop Directional Isolate):** Ends isolation

**Corrected HTML:**
```html
<p dir="rtl">
  שלח הודעה ב-&#8294;WhatsApp&#8297; לקבלת מענה ב-&#8294;24&#8297; שעות
</p>
```

Or in JavaScript:
```tsx
const text = `שלח הודעה ב-\u2066WhatsApp\u2069 לקבלת מענה ב-\u20662 4\u2069 שעות`;
```

### When to Use

- Latin words (brand names, URLs) inside Hebrew text
- Numbers inside Hebrew text
- Email addresses in Hebrew context

### Testing

View rendered text in browser. If Latin/numbers appear out of order, add bidi control characters.

---

## Rule 5: Form Inputs

Hebrew form inputs must:
1. Align text to the start (right in RTL)
2. Cursor moves right-to-left when typing Hebrew
3. Placeholder text aligns correctly

### Implementation

```tsx
<input
  type="text"
  placeholder={locale === 'he' ? 'הזן טקסט כאן' : 'Enter text here'}
  dir={locale === 'he' ? 'rtl' : 'ltr'}
  className="text-start" // Tailwind logical property
/>
```

**Key points:**
- Set `dir` attribute on `<input>` element itself (not just parent)
- Use `text-start` (not `text-right`)
- Test typing Hebrew characters — cursor should move correctly

### WhatsAppInput Component

Current implementation has a bug:

```tsx
// ❌ WRONG (current)
<button className="absolute right-2">
  <ArrowIcon />
</button>
```

**Fixed:**
```tsx
// ✅ CORRECT
<button className="absolute end-2">
  <ArrowIcon className="icon-directional" />
</button>
```

The button position uses `end-2` (logical), and the arrow icon mirrors in RTL.

---

## Rule 6: Flex and Grid

Flexbox and Grid automatically flip in RTL **if you use semantic alignment**.

### Flexbox

**Use semantic alignment:**
- `justify-content: flex-start` → aligns to inline-start (right in RTL)
- `justify-content: flex-end` → aligns to inline-end (left in RTL)
- `justify-content: space-between` → flips automatically

**Avoid physical alignment:**
- ❌ `justify-content: left` → always left (doesn't flip)
- ❌ `justify-content: right` → always right (doesn't flip)

**Tailwind:**
```tsx
{/* ✅ CORRECT */}
<div className="flex justify-start">
  {/* Items align to start (left LTR, right RTL) */}
</div>

{/* ❌ WRONG */}
<div className="flex justify-left">
  {/* Always left, even in RTL */}
</div>
```

### Grid

Grid columns automatically reverse in RTL if using semantic layout.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  /* Column 1 is start (left LTR, right RTL) */
  /* Column 2 is end (right LTR, left RTL) */
}
```

**No special RTL CSS needed** — it flips automatically.

---

## Rule 7: Testing at 375px Width

Hebrew breaks differently than English at small widths. **Always test Hebrew layout at 375px** (iPhone SE, smallest common viewport).

### Common Issues at 375px

1. **Long Hebrew words** (compound words) don't break nicely
2. **Checkboxes and radio buttons** may overlap text
3. **Buttons with long labels** truncate awkwardly
4. **Fixed-width elements** cause horizontal scroll

### Solutions

**Long words:**
```css
.text-content {
  word-break: break-word; /* Allows breaks mid-word if needed */
  hyphens: auto; /* Adds hyphens (not standard in Hebrew, but prevents overflow) */
}
```

**Buttons:**
```css
.button {
  min-width: 0; /* Allows button to shrink below default min-width */
  padding-inline: 1rem; /* Logical padding */
}
```

### Testing Checklist (375px Hebrew)

- [ ] All section headings fit without wrapping awkwardly
- [ ] CTA buttons fully visible (no horizontal scroll)
- [ ] Form inputs don't overflow container
- [ ] Navigation menu items fit (or hamburger menu used)
- [ ] Pricing cards stack nicely
- [ ] Text in cards doesn't overflow

---

## Rule 8: Font Loading (Hebrew-Specific)

Hebrew font flash is more jarring than Latin font flash. **Use `font-display: optional`** for Hebrew fonts.

### Why

- Hebrew letterforms vary significantly between fonts (more so than Latin)
- Fallback flash (system font → custom font) is visually disruptive
- `optional` means: use custom font if already cached, else use fallback (no flash)

### Implementation

**Google Fonts (Frank Ruhl Libre):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
  href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@700;900&display=optional"
  rel="stylesheet"
>
```

**Preload critical weights:**
```html
<link
  rel="preload"
  as="font"
  href="/fonts/FrankRuhlLibre-Bold.woff2"
  type="font/woff2"
  crossorigin
>
```

**CSS:**
```css
@font-face {
  font-family: 'Frank Ruhl Libre';
  src: url('/fonts/FrankRuhlLibre-Bold.woff2') format('woff2');
  font-weight: 700;
  font-display: optional; /* Critical for Hebrew */
}
```

### Latin Fonts

`font-display: swap` is acceptable for Latin fonts (Inter, Crimson Pro).

---

## Rule 9: Line Height Adjustment for Hebrew

Hebrew text needs ~5-8% tighter line-height than Latin at the same font size.

### Implementation

```css
/* Base line-height (Latin) */
body {
  line-height: 1.6;
}

/* Tighter line-height for Hebrew */
[lang="he"] body,
[dir="rtl"] body {
  line-height: 1.5; /* ~6% tighter */
}

/* Headings (even tighter) */
h1, h2, h3 {
  line-height: 1.2;
}

[lang="he"] h1,
[lang="he"] h2,
[lang="he"] h3 {
  line-height: 1.1; /* ~8% tighter */
}
```

### Why

Hebrew letterforms have less vertical variation (no true ascenders/descenders like Latin `g`, `p`, `y`). Looser line-height creates excessive whitespace in Hebrew paragraphs.

---

## Rule 10: Screen Reader Support

Hebrew screen readers (NVDA with Hebrew synthesis, VoiceOver in Hebrew mode) require proper `lang` attribute.

### Implementation

**Set language per element:**
```tsx
<p lang="he">
  זהו טקסט בעברית
</p>

<p lang="en">
  This is English text
</p>
```

**Dynamic language:**
```tsx
const { locale } = useLocale();

<section lang={locale}>
  {content.hero.headline}
</section>
```

### Testing

1. **Windows:** Install NVDA, set Hebrew voice, navigate site with keyboard
2. **Mac:** Enable VoiceOver, set language to Hebrew, test navigation
3. **Mobile (iOS):** Enable VoiceOver, set to Hebrew, test on iPhone

**What to verify:**
- Hebrew text is read in Hebrew (not letter-by-letter English)
- Navigation structure is logical (headings, landmarks)
- ARIA labels are in the correct language

---

## Rule 11: Accessibility in RTL

All accessibility requirements apply equally in RTL:

- **Tab order:** Must follow visual order in RTL (right-to-left, top-to-bottom)
- **Focus states:** Visible and high-contrast
- **ARIA labels:** Must be in Hebrew when `lang="he"`
- **Keyboard navigation:** Arrow keys navigate logically in RTL

### Common Pitfall: Tab Order

If using `order` property in Flexbox/Grid, tab order may not match visual order. Test with keyboard navigation.

---

## Testing Checklist

Before considering RTL implementation complete:

- [ ] `dir="rtl"` set on `<html>` when Hebrew
- [ ] All layout uses logical properties (`start`/`end`, not `left`/`right`)
- [ ] Icons mirror correctly (directional icons flip, semantic icons don't)
- [ ] Mixed text (Latin/numbers in Hebrew) uses bidi control characters where needed
- [ ] Form inputs align correctly and cursor moves right-to-left
- [ ] Hebrew text tested at 375px width (no overflow)
- [ ] Hebrew fonts use `font-display: optional`
- [ ] Line-height is 5-8% tighter for Hebrew text
- [ ] `lang="he"` attribute set on Hebrew content
- [ ] Screen reader reads Hebrew text correctly (test with NVDA or VoiceOver)
- [ ] Tab order is logical in RTL (keyboard navigation works)
- [ ] No horizontal scroll in RTL at any breakpoint
- [ ] All CTAs (buttons, links) are touch-friendly (44x44px minimum)

---

## Automated Testing

### Visual Regression Testing

Use a tool like Percy, Chromatic, or Playwright to screenshot RTL pages and compare to LTR:

```bash
# Playwright example
npx playwright test --grep rtl
```

### Linting

Create a custom ESLint rule or use `stylelint` to catch physical properties:

```json
{
  "rules": {
    "property-disallowed-list": [
      "margin-left",
      "margin-right",
      "padding-left",
      "padding-right",
      "left",
      "right"
    ]
  }
}
```

### Manual Testing Browsers

Test in these browsers/devices:
- **Desktop:** Chrome, Firefox, Safari (all with Hebrew locale)
- **Mobile:** iOS Safari, Chrome Android (Hebrew keyboard, Hebrew system language)

---

## Summary

RTL correctness is achieved through:

1. **Logical properties** everywhere (never `left`/`right`)
2. **`dir="rtl"` on `<html>`** (server-side, no flash)
3. **Icon mirroring** (directional icons flip, semantic icons don't)
4. **Bidi control characters** for mixed Latin/Hebrew text
5. **Form inputs** with `dir` attribute and `text-start` alignment
6. **Flexbox/Grid** with semantic alignment (not physical)
7. **375px testing** for Hebrew layout
8. **`font-display: optional`** for Hebrew fonts
9. **Tighter line-height** (~5-8%) for Hebrew text
10. **`lang="he"` attribute** for screen reader support
11. **Accessibility testing** with Hebrew screen readers

**All rules are P0.** Hebrew is the primary language. If RTL doesn't work, the site fails.
