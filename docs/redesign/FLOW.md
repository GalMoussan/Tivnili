# User Flow: S0 → S6

## Flow Architecture

The redesigned page walks Yossi through seven cognitive states. Each section owns a state transition. A section that doesn't move Yossi forward gets cut.

**The seven states:**

| State | Time | Yossi is thinking | What he needs |
|---|---|---|---|
| **S0 — Arrival** | 0–2s | "Is this for me? Is this real?" | Instant recognition: Israeli SMB + solo + real person |
| **S1 — Recognition** | 2–8s | "Oh — solo guy, AI help, transparent prices." | Quick positioning: what this is, who it's for, rough price |
| **S2 — Credibility** | 8–20s | "But can he actually do it?" | Proof of capability: face, founding client honesty, process clarity |
| **S3 — Fit** | 20–45s | "Is *my* situation one of these?" | Concrete use cases he recognizes from his business |
| **S4 — Price gate** | 45–70s | "Can I afford this? Is it worth it?" | Clear pricing, entry point, what's included |
| **S5 — Risk reduction** | 70–90s | "What if it goes wrong? What am I committing to?" | Process transparency, no obligation signals, support details |
| **S6 — Action** | 90s+ | "OK, how do I start without committing too much?" | Clear CTA with lowest-friction option prominent |

---

## Section-by-Section Flow

### Section 1: Hero

**State transition:** S0 → S1 (Arrival → Recognition)

**Single accomplishment:**
Answer "Is this for me?" in 2 seconds, then clarify offering in next 6 seconds.

**How it works:**
- **2-second signal (S0):** Gal's face + "אתרים וכלי AI לעסקים קטנים בישראל" headline + ₪ price hint → Yossi knows instantly this is for Israeli SMB owners
- **8-second expansion (S1):** Subhead adds "סולו, תל אביב, אני עונה בעצמי" + founding client frame ("אני בונה את קבוצת הלקוחות הראשונים") → Yossi knows it's solo, local, honest
- **CTAs visible:** Calendly (primary) + WhatsApp (secondary) → conversion path is clear

**Done rubric:**
- [ ] Headline explicitly names audience ("עסקים קטנים בישראל")
- [ ] Gal's photo is visible above-the-fold (face builds trust)
- [ ] Price hint visible ("מתחיל מ-₪400")
- [ ] "סולו" and "תל אביב" mentioned in subhead
- [ ] Founding client framing stated openly
- [ ] Calendly CTA is more visually prominent than WhatsApp
- [ ] Hebrew renders correctly at 375px, 768px, 1280px
- [ ] English port renders correctly at same breakpoints
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility = 100

**Status:** Net-new (current hero fails S0 → S1 transition)

---

### Section 2: What You Get (Services)

**State transition:** S3 (Fit) — "Is my situation one of these?"

**Single accomplishment:**
Show Yossi three concrete, relatable use cases so he can picture his business in at least one.

**How it works:**
- **Three cards,** each describing a specific problem Yossi has and what Tivnili builds to solve it
- **Examples:**
  - "ציטוטים שנשלחים אוטומטית" — drafts quotes, chases leads → café owner who loses customers when he's too busy to reply
  - "סיכום יומי ב-5 דקות" — daily brief of what needs attention → salon owner drowning in WhatsApp groups
  - "מענה 24/7 ללקוחות" — customer AI that books/answers even on Shabbat → clinic that can't afford receptionist

- **NOT abstract benefits:** Remove "makes you sharper," "less noise in your head," "think clearer"
- **Format:** Problem → Solution → Benefit (time saved, leads not lost, customers happier)

**Done rubric:**
- [ ] All three use cases are concrete (not abstract)
- [ ] At least one use case resonates with café/clinic/salon/shop owners
- [ ] Copy uses plain Hebrew Yossi would say ("לא מאבד לידים" not "מייעל את המכירות")
- [ ] Cards are scannable on mobile (375px)
- [ ] Hebrew copy was written natively, not translated
- [ ] Passes Yossi test: read aloud, does it sound like something he'd say?

**Status:** Major rework (current Services exists but too abstract)

---

### Section 3: Who I Am

**State transition:** S2 (Credibility) — "But can he actually do it?"

**Single accomplishment:**
Build trust by showing Gal is a real, credible, local person (not a faceless brand).

**How it works:**
- **Gal's photo (full)** — not cropped headshot, shows environment (laptop, café, Tel Aviv backdrop)
- **2-3 sentences in first person:**
  - "אני גל מוסאן, סולו מתל אביב. בניתי lindaWorld לסבתא שלי כדי שנוכל להישאר מחוברים מעבר ליבשות. עכשיו אני עוזר לעסקים קטנים להפוך את הכאוס היומיומי למערכת שעובדת בשבילם."
  - (I'm Gal Moussan, solo from Tel Aviv. I built lindaWorld for my grandmother so we could stay connected across continents. Now I help small businesses turn daily chaos into a system that works for them.)
- **One human detail** — lindaWorld example shows "the kind of person he is" (cares about family, builds tools that solve real problems)
- **"לקוח ניסיון אחד בתהליך" honesty** — currently building daily ops brief for Tel Aviv service business, results coming soon

**Done rubric:**
- [ ] Gal's name appears prominently
- [ ] "תל אביב" mentioned
- [ ] Photo shows Gal's face clearly (eye contact, warm expression)
- [ ] Copy mentions one real project (lindaWorld) reframed in human terms
- [ ] Founding client status stated clearly ("לקוח ניסיון אחד בתהליך")
- [ ] No stack lists, no GitHub, no "vibe coder" language
- [ ] Section feels personal but not self-promotional

**Status:** Net-new (current site has no About section)

---

### Section 4: How It Works

**State transition:** S5 (Risk Reduction) — "What happens after you book?"

**Single accomplishment:**
Remove Yossi's fear of "what am I committing to?" by showing clear, phased process.

**How it works:**
- **Three steps:** Talk → Build → Expand (keep current copy, it's strong)
- **Add timeline hints:**
  - Step 1: "פגישה של 30-45 דקות" (not just "we talk")
  - Step 2: "אתה רואה את התוכנית לפני שאני בונה" + "בנייה: 1-2 שבועות" (Yossi needs to know "fast" = how long)
  - Step 3: "אנחנו מרחיבים בקצב שלך, לא בבת אחת" (keep — good)
- **No obligation signal:** "אחרי הפגישה הראשונה, אתה מחליט אם להמשיך. אין התחייבות."

**Done rubric:**
- [ ] Process is 3 steps (digestible)
- [ ] Timeline estimates added (30-45 min meeting, 1-2 week build)
- [ ] "You see the plan before I build" remains (trust-building)
- [ ] "No obligation after first session" stated explicitly
- [ ] Copy is plain-spoken Hebrew ("הדברים שאוכלים לך את הזמן" not "בוטלנקים")
- [ ] Step numbers (01, 02, 03) are visually clear

**Status:** Moderate rework (current How It Works is good, needs timeline + no-obligation signal)

---

### Section 5: Pricing

**State transition:** S4 (Price Gate) — "Can I afford this? Is it worth it?"

**Single accomplishment:**
Show transparent pricing so Yossi can self-qualify.

**How it works:**
- **Three tiers** (keep structure, improve copy):
  1. **The Clarity Session — ₪400** [Badge: "התחל כאן"]
     - Keep current features
     - WhatsApp prefilled message: "היי, אני מעוניין בפגישת בהירות — מתי אפשר לתאם?"

  2. **The Integration — ₪1,100** [Badge: "הכי פופולרי" ⭐]
     - Keep current features
     - Add: "לדוגמה: ניהול ציטוטים אוטומטי, או סיכום יומי, או AI מענה ללקוחות"
     - WhatsApp message: "היי, אני מעוניין ב-Integration — בוא נדבר על הצורך שלי"

  3. **The Complete System — ₪2,000** [Badge: "ההשפעה הגדולה"]
     - Replace "The Full Stack" (jargon) with "המערכת המלאה"
     - Add concrete numbers: "3-5 אינטגרציות AI"
     - Add examples: "מחבר CRM, יומן, WhatsApp, ואימייל"
     - WhatsApp message: "היי, אני מעוניין במערכת מלאה — בוא נדבר על העסק שלי"

- **Visual hierarchy:** Tier 2 is visually elevated (larger, amber glow border, or scale-105)

**Done rubric:**
- [ ] All three prices visible (no "Contact us")
- [ ] ILS (₪) used, not USD
- [ ] Tier 2 is visually distinct (highlighted)
- [ ] Tier 3 has concrete numbers ("3-5 integrations" not just "multiple")
- [ ] Each tier has unique WhatsApp prefilled message
- [ ] "התחל כאן" badge on Tier 1 guides overwhelmed buyers
- [ ] Feature lists are concrete, not vague ("2 שבועות כיוונון" not "תמיכה")

**Status:** Moderate rework (current Pricing is strong, needs clarity improvements)

---

### Section 6: Social Proof / Founding Clients

**State transition:** S2 (Credibility) — continued

**Single accomplishment:**
Turn "no testimonials yet" into a selling point via radical honesty.

**How it works:**
- **Keep current approach** (it's working — the honesty is differentiating)
- **Three WhatsApp-style bubbles:**
  1. Left: "אני לוקח מספר מצומצם של לקוחות מייסדים עכשיו. תמחור מייסד, תשומת לב מלאה, והתוצאות שלך הופכות לסיפורים הראשונים באתר הזה."
  2. Right: "אין לי מקרי בוחן כאן עדיין — בכוונה. אני מעדיף להראות אמיתיים מאשר להמציא מזויפים. רוצה להיות הראשון?"
  3. Center: "לקוח ניסיון אחד בתהליך — בונה סיכום יומי לעסק שירות בתל אביב. תוצאות בקרוב."

- **WhatsApp aesthetic** (emerald green, message bubbles)

**Done rubric:**
- [ ] Founding client framing is clear and turned into strength
- [ ] "One pilot in progress" is stated (not zero, not many — honest)
- [ ] אמת motif is present (honesty earns its place)
- [ ] Bubbles feel warm and human (vs current cold sections)
- [ ] No invented testimonials, no stock client logos, no fake numbers

**Status:** Minor rework (current Social Proof is good, needs third bubble)

---

### Section 7: Manifesto (אמת)

**State transition:** S2 (Credibility) — values-based

**Single accomplishment:**
State values clearly so Yossi knows what kind of person Gal is.

**How it works:**
- **Four lines** (add one to current three):
  1. "אני לומד איך אתה חושב לפני שאני בונה משהו." (keep, rewrite in native Hebrew)
  2. "בנוי מסביבך. לא מסביב לתבנית." (keep)
  3. "דיוק זה כבוד." (simplified from current "דיוק זו צורה של כבוד")
  4. NEW: "אמת לפני פוליש." (Truth before polish — reinforces אמת motif)

- **Large אמת signature** at bottom (keep — it's strong)
- **Word-by-word scroll reveal** (keep if it stays the signature interaction, else simplify to fade-in)

**Done rubric:**
- [ ] Hebrew is native (not translated)
- [ ] Four lines feel complete (not thin)
- [ ] אמת signature is large and prominent
- [ ] Section reinforces "honesty-first" positioning
- [ ] Reduced motion fallback works (no scroll reveal, just visible)

**Status:** Moderate rework (current Manifesto is good, needs Hebrew rewrite + fourth line)

---

### Section 8: Final CTA

**State transition:** S6 (Action) — "How do I start?"

**Single accomplishment:**
Get Yossi to book Clarity Session or send WhatsApp message.

**How it works:**
- **Headline:** "מוכן להחזיר לעצמך את הזמן?" (concrete, not abstract)
- **Subhead:** "בוא נבנה את המערכת שנותנת לך את סופי השבוע בחזרה." (not "AI layer")
- **Dual CTAs:**
  - Calendly button (primary): "קבע פגישת בהירות חינם (15 דקות)"
  - WhatsApp button (secondary): "או שלח הודעה ב-WhatsApp"
- **Reassurance footer:** Keep current "Usually responds within the hour. No account managers, no bots. Just me." (it's perfect)
- **Gal's photo small in corner** (final human touchpoint)

**Done rubric:**
- [ ] Headline is concrete ("החזר לעצמך זמן" not "מנוהל חכם יותר")
- [ ] Calendly CTA is more prominent than WhatsApp
- [ ] Both CTAs are above-the-fold at 375px
- [ ] Reassurance text remains (it's trust-building)
- [ ] Gal's photo appears (final face-to-face moment)

**Status:** Major rework (current Final CTA has weak copy, missing Calendly)

---

### Section 9: Footer

**State transition:** S6 (Action) — continued

**Single accomplishment:**
Provide alternative contact methods and reinforce local positioning.

**How it works:**
- **Logo + tagline** (keep current "AI integration for the people who run things" — it's strong)
- **Location signal:** Add "Based in Tel Aviv" or "תל אביב" near logo
- **Contact:**
  - WhatsApp link
  - Email address (NEW): gal@tivnili.com
- **Navigation links:** Services, Pricing, Contact (anchor links)
- **Copyright:** "© 2026 Gal Moussan. All rights reserved."

**Done rubric:**
- [ ] "Tel Aviv" or "תל אביב" visible
- [ ] Email address visible (alternative to WhatsApp)
- [ ] Copyright includes year and name
- [ ] Footer is accessible (keyboard navigable, high contrast)

**Status:** Minor rework (current Footer is mostly good, needs email + location)

---

## Removed Sections

These sections from the current site are **cut** because they don't move Yossi forward:

### ❌ Comparison Section
**Why cut:** Assumes Yossi has hired AI consultants before. He hasn't. The comparisons are strong but not relatable. Save this content for a blog post or "Why Tivnili?" page later.

**What happens to the content:** אמת motif ("This is just honest") moves to Social Proof section.

### ❌ Portfolio Section (Stats)
**Why cut:** Four industry stats take up prime real estate but only say "AI is real and affordable." Yossi already knows AI exists; he's on the site because he needs help with *his* business. Stats feel like credential-stuffing.

**What happens to the content:** "One pilot in progress" stat moves to Who I Am or Social Proof. Other stats are cut.

### ❌ Portfolio Section (Use Cases with Mockups)
**Why cut:** Generic mockups with fictional names feel like stock imagery. Use cases are good but better served in "What You Get" section with real copy, no fake screenshots.

**What happens to the content:** Use case ideas (daily brief, quote automation, 24/7 customer AI) migrate to "What You Get" cards with concrete problem/solution/benefit framing.

---

## Section Order (Final)

| # | Section | State(s) | Status |
|---|---|---|---|
| 1 | Hero | S0 → S1 | Net-new |
| 2 | What You Get | S3 | Major rework |
| 3 | Who I Am | S2 | Net-new |
| 4 | How It Works | S5 | Moderate rework |
| 5 | Pricing | S4 | Moderate rework |
| 6 | Social Proof / Founding Clients | S2 | Minor rework |
| 7 | Manifesto (אמת) | S2 | Moderate rework |
| 8 | Final CTA | S6 | Major rework |
| 9 | Footer | S6 | Minor rework |

**Total:** 9 sections (vs current 11)

---

## Flow Validation

Does this flow walk Yossi from S0 → S6?

| State | Section(s) | Success Criteria |
|---|---|---|
| S0 → S1 | Hero | Yossi knows in 8 seconds: for Israeli SMBs, solo, AI tools, ₪400+, founding clients |
| S2 | Who I Am, Social Proof, Manifesto | Yossi sees face, reads honest founding client frame, understands values |
| S3 | What You Get | Yossi recognizes at least one use case from his business |
| S4 | Pricing | Yossi knows exact prices, can self-qualify |
| S5 | How It Works | Yossi understands process, knows no obligation after first meeting |
| S6 | Final CTA, Footer | Yossi books Calendly or sends WhatsApp, has email as fallback |

**Result:** ✅ Flow is complete. Every state is addressed. Every section earns its place by moving Yossi forward.

---

## Mobile vs Desktop Flow Differences

**Mobile (375px):**
- Hero: Photo smaller, headline shorter, buttons stacked
- What You Get: Cards stacked (1 column)
- Who I Am: Photo above text
- Pricing: Cards stacked
- Social Proof: Bubbles stacked with reduced offset
- Manifesto: Same sticky scroll reveal (works on mobile)
- Final CTA: Photo hidden or very small

**Desktop (1280px+):**
- Hero: Photo larger, headline spans full width, buttons side-by-side
- What You Get: 3 cards in row
- Who I Am: Photo left, text right (two-column layout)
- Pricing: 3 cards in row, Tier 2 elevated visually
- Social Proof: Bubbles offset left/right/center
- Manifesto: Larger text, more dramatic scroll effect
- Final CTA: Photo in corner, more whitespace

**Flow remains the same.** Layout adapts, but state transitions work on both.

---

## Accessibility in Flow

Every section must be:
- **Keyboard navigable:** Tab order is logical
- **Screen reader friendly:** Semantic HTML, ARIA labels, Hebrew `lang="he"`
- **High contrast:** WCAG AA minimum (AAA preferred)
- **Reduced motion:** All animations have fallback
- **Focus states:** Visible and designed (not browser default)

Specific to this flow:
- **Skip to CTA link:** At top of page, "דלג לפנייה" jumps to Final CTA
- **Manifesto scroll reveal:** Must work with keyboard scrolling, not just mouse
- **WhatsApp links:** Labeled clearly for screen readers ("פתח WhatsApp עם הודעה")

---

## Final Check: Does This Flow Serve Yossi?

**S0 → S1 (Hero):** ✅ Instantly recognizable as "for me"
**S2 (Credibility):** ✅ Face, honesty, values establish trust
**S3 (Fit):** ✅ Concrete use cases he recognizes
**S4 (Price):** ✅ Transparent, self-qualify
**S5 (Risk):** ✅ Process clear, no obligation
**S6 (Action):** ✅ Low-friction CTAs (Calendly + WhatsApp)

**Verdict:** This flow moves Yossi from "Is this for me?" to "OK, let's book" in 90 seconds. Every section earns its place. No fluff.
