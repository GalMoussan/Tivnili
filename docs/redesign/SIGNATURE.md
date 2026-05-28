# Signature Interaction Proposals

## The Brief's Requirement

**"The site gets ONE signature interaction."**

Constraints:
- Must serve Yossi's understanding (not impress developers)
- Must work on mobile, in Hebrew/RTL, with reduced-motion respected
- Must not block content rendering
- Must be original to Tivnili (not a reproduction of Rauno/Linear/Vercel tricks)
- אמת motif is a natural home (revealing truth, removing veneer, before/after)

---

## Proposal 1: "אמת Reveal" — Layer Peeling

### Concept

A full-screen overlay at page load that reveals the site beneath by "peeling away" a veneer layer. The overlay says one thing (the marketing clichés Tivnili rejects); underneath is the honest site.

**Metaphor:** Removing marketing polish to reveal truth. Literally shows אמת motif in action.

### How It Works

**On page load:**
1. Full-screen amber overlay appears with typography-based animation showing **rejected marketing speak**:
   - "Transform your business."
   - "Unlock AI-powered synergy."
   - "Leverage cutting-edge innovation."
   - (Fades in/out rapidly, ~2 seconds total)

2. After 2 seconds, the word **"אמת"** appears large in the center (white on amber)

3. User scrolls (or after 1 more second) → the overlay **peels away from top to bottom** revealing the real site underneath

4. The אמת word shrinks and repositions to the Manifesto section (where it belongs)

**Visual execution:**
- Overlay: Solid amber (#F59E0B), full viewport height
- Typography: Rejected phrases in white, Frank Ruhl Libre Bold, 48px, center-aligned
- Peel animation: CSS clip-path or mask animates from `inset(0 0 0 0)` to `inset(100% 0 0 0)` over 800ms ease-out
- Scroll-triggered (user controls timing) OR auto-triggers after 3 seconds

### Why It Serves Yossi

- **Sets expectations immediately:** "This site won't talk to you like other marketing sites do"
- **Shows, don't tell:** Literally demonstrates the אמת motif instead of just saying "we're honest"
- **Memorable:** Yossi will remember the site that called out marketing bullshit

### Where on the Page

Full-screen overlay, shown once on first page visit (localStorage flag: `tivnili-intro-seen`).

### Technical Sketch

```tsx
const [showIntro, setShowIntro] = useState(
  !localStorage.getItem('tivnili-intro-seen')
);

useEffect(() => {
  if (showIntro) {
    const timer = setTimeout(() => {
      setShowIntro(false);
      localStorage.setItem('tivnili-intro-seen', 'true');
    }, 3000);
    return () => clearTimeout(timer);
  }
}, [showIntro]);

<AnimatePresence>
  {showIntro && (
    <motion.div
      className="fixed inset-0 z-50 bg-amber-500 flex items-center justify-center"
      initial={{ clipPath: 'inset(0 0 0 0)' }}
      exit={{ clipPath: 'inset(100% 0 0 0)' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
      >
        <p className="text-white text-4xl font-bold text-center">
          {/* Cycle through rejected phrases */}
        </p>
      </motion.div>
      <motion.p
        className="text-white text-8xl font-black"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.4 }}
      >
        אמת
      </motion.p>
    </motion.div>
  )}
</AnimatePresence>
```

### Mobile + RTL + Reduced Motion Behavior

**Mobile:**
- Text scales down to 32px / 64px (rejected phrases / אמת)
- Same peel animation (works on touch)
- User can tap/scroll to trigger peel

**RTL:**
- Text remains center-aligned (universal)
- אמת is already Hebrew (no translation needed)
- Peel direction: top-to-bottom (same in both languages)

**Reduced motion:**
- Overlay fades out instantly (no peel animation)
- Or skip intro entirely (respect `prefers-reduced-motion: reduce`)

### Performance

- No images, pure CSS + typography
- Animates `clip-path` (GPU-accelerated)
- Shown once per user (localStorage), doesn't block repeat visits

---

## Proposal 2: "Honest Pricing Reveal" — Interactive Price Builder

### Concept

Instead of showing three static pricing tiers, Yossi interacts with a questionnaire that **builds his price in real-time** based on his needs. The price updates live as he answers questions. Shows radical transparency: "Here's exactly how pricing works."

**Metaphor:** Revealing the pricing formula. No hidden costs, no "Contact us." You see how the price is built.

### How It Works

**On scroll to Pricing section:**
1. Section header: "בוא נבנה את המחיר שלך" (Let's build your price)
2. Five simple questions with button choices:
   - Q1: "How many AI integrations?" [1 / 2-3 / 4-5]
   - Q2: "Do you need custom automations?" [Yes / No]
   - Q3: "Support level?" [Standard / Priority / Ongoing]
   - Q4: "Implementation timeline?" [1 week / 2 weeks / 1 month]
   - Q5: "Setup location?" [WhatsApp/Email / Your systems (CRM, calendar)]

3. **Live price display** on the right (desktop) or top (mobile):
   - Starts at ₪400 (base Clarity Session)
   - Updates as Yossi selects options
   - Shows breakdown: "+₪700 for 1 integration" / "+₪300 for priority support"

4. Final price appears with CTA: "זה המחיר שלך: ₪1,400" + Calendly button

**Visual execution:**
- Questions: Large button choices (radio-style), one active at a time
- Price display: Large number (Frank Ruhl Libre Black, 64px, amber), updates with smooth counter animation
- Breakdown: List below price, items fade in as selected
- Layout: Two-column desktop (questions left, price right), stacked mobile

### Why It Serves Yossi

- **Transparency builds trust:** "I can see exactly why it costs ₪1,400"
- **Engagement:** Yossi is actively participating, not just reading
- **Self-qualification:** Yossi configures his own needs, so the price feels custom
- **אמת motif:** Literally showing the pricing formula (removing the mystery)

### Where on the Page

Replaces the static Pricing section. Interactive questionnaire lives where the three pricing cards currently are.

### Technical Sketch

```tsx
const [selections, setSelections] = useState({
  integrations: 1,
  automations: false,
  support: 'standard',
  timeline: '2weeks',
  setup: 'whatsapp',
});

const calculatePrice = () => {
  let price = 400; // Base Clarity Session

  if (selections.integrations === 1) price += 700; // ₪1,100 tier
  if (selections.integrations === '2-3') price += 1200;
  if (selections.integrations === '4-5') price += 1600;

  if (selections.automations) price += 400;
  if (selections.support === 'priority') price += 200;
  if (selections.support === 'ongoing') price += 400;
  // ... more logic

  return price;
};

const price = calculatePrice();

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Questions */}
  <div>
    <Question
      text="כמה אינטגרציות AI?"
      options={[
        { value: 1, label: '1' },
        { value: '2-3', label: '2-3' },
        { value: '4-5', label: '4-5' },
      ]}
      selected={selections.integrations}
      onSelect={(value) => setSelections({ ...selections, integrations: value })}
    />
    {/* More questions */}
  </div>

  {/* Live Price */}
  <div className="sticky top-24">
    <motion.p
      key={price}
      initial={{ scale: 1.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="text-6xl font-black text-amber-500"
    >
      ₪{price}
    </motion.p>
    <ul className="mt-4 space-y-2">
      <AnimatePresence>
        {selections.integrations > 0 && (
          <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            +₪700 for integration
          </motion.li>
        )}
        {/* More breakdown items */}
      </AnimatePresence>
    </ul>
  </div>
</div>
```

### Mobile + RTL + Reduced Motion Behavior

**Mobile:**
- Questions and price stacked vertically
- Price display pinned to top (sticky) as Yossi scrolls questions
- Buttons full-width, touch-friendly (56px height)

**RTL:**
- Layout flips (price on left, questions on right in RTL desktop)
- Button text aligns to `start`
- Price counter animation same direction

**Reduced motion:**
- Price updates instantly (no counter animation)
- Breakdown items appear instantly (no fade-in)

### Performance

- Pure React state updates (no API calls)
- Lightweight animations (opacity + scale only)
- No blocking operations

---

## Proposal 3: "Before/After Scroll" — Split-Screen Reality Check

### Concept

A split-screen section where the left side shows "Life Without AI Tools" (chaos: overwhelming inbox, missed leads, working weekends) and the right side shows "Life With Tivnili" (organized: clean inbox, auto-responses, free weekends). As Yossi scrolls through this section, the split adjusts dynamically — initially 80% chaos / 20% organized, ends at 20% chaos / 80% organized.

**Metaphor:** Visual before/after. Shows the transformation literally, not aspirationally. אמת motif: "This is what your life looks like now. Here's what it could look like."

### How It Works

**On scroll into section:**
1. Screen divides vertically: Left (Before) / Right (After)
2. **Before (left):**
   - Dark, cluttered visual: Stack of notifications, WhatsApp messages, overdue tasks
   - Text overlay: "200+ unread messages" / "3 missed leads this week" / "Working Saturdays"
3. **After (right):**
   - Clean, calm visual: Single notification "Daily brief ready", organized calendar
   - Text overlay: "5-minute daily brief" / "Auto-responses while you sleep" / "Weekends free"

4. **Scroll-linked animation:**
   - As Yossi scrolls down, the divider line moves from 80/20 to 50/50 to 20/80
   - Before side shrinks, After side expands
   - Final state: After dominates the screen (80%)

5. CTA at bottom: "מוכן לעבור לצד השני?" (Ready to move to the other side?) + Calendly button

**Visual execution:**
- Split: Vertical divider, animated with scroll position
- Before side: Grayscale or desaturated colors, stacked UI elements (chaotic)
- After side: Full color, organized UI (calm)
- Text overlays: Frank Ruhl Libre Bold, 32px, fade in as section scrolls
- Smooth scroll snap to final 20/80 state

### Why It Serves Yossi

- **Concrete before/after:** Yossi sees his current pain (overwhelming inbox) vs the solved state (organized brief)
- **Visual impact:** More powerful than "save 10 hours/week" — he sees what that looks like
- **Scroll interaction teaches:** The act of scrolling = progressing from chaos to calm (metaphor reinforced by interaction)
- **אמת motif:** Shows reality, not generic "transform your business" stock imagery

### Where on the Page

New section after "What You Get" and before "Who I Am." Acts as a visual bridge from pain points to solution.

### Technical Sketch

```tsx
const sectionRef = useRef<HTMLDivElement>(null);
const { scrollYProgress } = useScroll({
  target: sectionRef,
  offset: ['start end', 'end start'],
});

const splitPosition = useTransform(scrollYProgress, [0, 1], ['80%', '20%']);

<section ref={sectionRef} className="h-[200vh] relative">
  <div className="sticky top-0 h-screen flex">
    {/* Before (shrinks) */}
    <motion.div
      style={{ width: splitPosition }}
      className="bg-navy-900 relative overflow-hidden"
    >
      {/* Chaotic UI mockup */}
      <div className="absolute inset-0 p-8 grayscale">
        <NotificationStack />
        <p className="text-4xl font-bold text-red-500">200+ unread</p>
      </div>
    </motion.div>

    {/* After (expands) */}
    <div className="flex-1 bg-cream relative overflow-hidden">
      {/* Organized UI mockup */}
      <div className="absolute inset-0 p-8">
        <CleanInbox />
        <p className="text-4xl font-bold text-emerald-500">5-minute brief</p>
      </div>
    </div>
  </div>
</section>
```

### Mobile + RTL + Reduced Motion Behavior

**Mobile:**
- Split becomes horizontal (top/bottom instead of left/right)
- Before: Top 60%, After: Bottom 40% → scrolls to Before: 20%, After: 80%
- Still scroll-linked but vertical orientation

**RTL:**
- Desktop split flips (Before on right, After on left in RTL)
- Text overlays align to `start`
- Animation direction mirrors

**Reduced motion:**
- Split ratio changes instantly (no smooth scroll-linked animation)
- Or show final state only (20/80 split, no scroll interaction)

### Performance

- Scroll-linked animation uses Framer Motion's `useScroll` (optimized)
- Mockup UI is static SVG or simple HTML (no heavy assets)
- Section height is 200vh (allows scroll duration) but doesn't block content

---

## Comparison Matrix

| Criteria | Proposal 1: אמת Reveal | Proposal 2: Price Builder | Proposal 3: Before/After Scroll |
|---|---|---|---|
| **Serves Yossi's understanding?** | ⭐⭐⭐ Sets expectations | ⭐⭐⭐⭐⭐ Shows pricing logic | ⭐⭐⭐⭐ Shows concrete transformation |
| **Works on mobile?** | ✅ Yes, scales well | ✅ Yes, stacked layout | ✅ Yes, horizontal split |
| **Works in RTL?** | ✅ Center-aligned, universal | ✅ Layout flips correctly | ✅ Mirrors correctly |
| **Reduced motion?** | ✅ Fades instead of peels | ✅ Updates instantly | ✅ Static final state |
| **Doesn't block content?** | ⚠️ Blocks for 3 seconds once | ✅ Inline section | ✅ Inline section |
| **Original to Tivnili?** | ⭐⭐⭐ Unique אמת metaphor | ⭐⭐ Similar to configurators | ⭐⭐⭐⭐ Original split-scroll |
| **אמת motif alignment** | ⭐⭐⭐⭐⭐ Literally demonstrates אמת | ⭐⭐⭐⭐ Shows pricing formula | ⭐⭐⭐ Shows reality vs aspiration |
| **Implementation complexity** | Low (CSS + typography) | Medium (state management + logic) | Medium-High (scroll animation + mockups) |
| **Performance** | ⚠️ Blocks initial render (once) | ✅ Lightweight | ✅ Optimized scroll animations |

---

## Recommendation

**Proposal 1: "אמת Reveal"** is the strongest choice.

**Why:**
1. **Perfectly embodies אמת motif:** Literally removes marketing veneer to reveal truth
2. **Memorable:** Yossi will remember the site that called out BS on page load
3. **Sets tone immediately:** Establishes "this site is different" in 3 seconds
4. **Technically simple:** Pure CSS + typography, no complex state or scroll logic
5. **Works across all contexts:** Mobile, RTL, reduced motion all have clean fallbacks
6. **Original:** No other site does this (Rauno/Linear do scroll reveals, not anti-marketing reveals)

**Concerns:**
- Blocks content for 3 seconds on first visit (but only once due to localStorage)
- Some users might find it gimmicky

**Mitigation:**
- Add "Skip intro" link (bottom-right) for users who want to bypass
- Respect `prefers-reduced-motion` (skip entirely or fade instantly)

---

## Fallback: No Signature Interaction

If all three proposals are rejected, the site can succeed without a signature interaction. The brief allows for **"scroll-reveals only where they aid comprehension."**

**Fallback approach:**
- Manifesto word-by-word reveal (keep current, it's effective)
- Utility motion only (fade-ins, hover lifts, button states)
- Strong visual design + photography carries the site

But a signature interaction would differentiate Tivnili significantly.

---

## Implementation Priority (If Proposal 1 Selected)

**Phase 1 (MVP):**
- Build intro overlay with rejected phrases + אמת reveal
- localStorage flag to show once
- Peel animation (CSS clip-path)

**Phase 2 (Polish):**
- Add "Skip intro" link
- Refine peel timing based on user testing
- Optimize for first contentful paint (ensure intro doesn't delay render)

**Phase 3 (Enhancement):**
- A/B test: intro vs no intro (does it hurt bounce rate or help engagement?)
- Consider adding sound (subtle "peel" sound effect) if data shows users engage with it
