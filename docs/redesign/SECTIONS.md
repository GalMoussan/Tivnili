# Section Specifications

## Section 1: Hero

### Purpose
Answer "Is this for me?" instantly and establish positioning within 8 seconds.

### Content Slots

**Hebrew:**
- **Logo/Brand:** "Tivnili" wordmark (amber accent)
- **Headline:** "אתרים וכלי AI לעסקים קטנים בישראל"
- **Subhead:** "סולו, תל אביב, אני עונה בעצמי. אני בונה את קבוצת הלקוחות הראשונים שלי — מחירים של מייסד, תשומת לב מלאה, והתוצאות שלך הופכות לסיפורים הראשונים באתר."
- **Price hint:** "מתחיל מ-₪400"
- **CTA Primary:** "קבע פגישה חינם (15 דקות)" [Calendly button]
- **CTA Secondary:** "או שלח הודעה ב-WhatsApp" [WhatsApp button]
- **Image:** Gal's photo (portrait, warm expression, Tel Aviv background)

**English:**
- **Logo/Brand:** "Tivnili" wordmark (same)
- **Headline:** "Websites and AI tools for small Israeli businesses"
- **Subhead:** "Solo, Tel Aviv, I answer personally. I'm building my founding client group — founder pricing, full attention, and your results become the first stories on this site."
- **Price hint:** "Starting at ₪400"
- **CTA Primary:** "Book free consultation (15 min)" [Calendly button]
- **CTA Secondary:** "Or send WhatsApp message" [WhatsApp button]
- **Image:** Same photo

### Layout
**Desktop (1280px+):**
- Two-column layout: Left 60% (text), Right 40% (photo)
- Logo top-left, language toggle top-right
- Headline: Frank Ruhl Libre Bold, 64px, navy on cream background
- Subhead: Assistant Regular, 20px, warm gray, max-width 600px
- Price hint: Inter Medium, 16px, amber, above CTAs
- CTAs: Side-by-side, Calendly button is larger/primary styled
- Photo: 3:4 aspect ratio, rounded corners (16px), subtle shadow
- Background: Warm cream (#F8F5EF), no gradient, optional subtle texture

**Mobile (375px):**
- Single column, photo above text
- Photo: Full-width, 4:5 aspect ratio, 300px height
- Headline: 32px (scales down)
- Subhead: 18px, line-height 1.5
- CTAs: Stacked, full-width, Calendly on top
- Vertical spacing: 16px between elements

### Mobile-Specific Behavior
- Photo loads eager (not lazy, it's above-the-fold)
- Subhead text truncates to ~120 characters on very small screens
- CTAs are touch-friendly (48px height minimum)
- WhatsApp button opens app directly on mobile (wa.me link)

### RTL-Specific Notes
- Logo remains left-aligned (brand consistency, doesn't mirror)
- Language toggle uses logical positioning (inset-inline-end)
- Text aligns to `start` (right in RTL)
- Photo flips to left side in RTL desktop layout
- CTAs maintain order but align to end in RTL

### Motion Notes
- Initial load: Fade-in-up animation (logo → headline → subhead → photo → CTAs)
- Stagger delay: 100ms between elements
- Duration: 600ms ease-out
- Reduced motion: All elements visible immediately, no animation

### Done Criteria
- [ ] Headline explicitly names audience ("עסקים קטנים בישראל")
- [ ] Gal's photo loads and displays correctly at all breakpoints
- [ ] Price hint is visible ("מ-₪400")
- [ ] "סולו" and "תל אביב" in subhead
- [ ] Founding client framing stated
- [ ] Calendly button is more prominent than WhatsApp (primary button style)
- [ ] Both CTAs above-the-fold at 375px
- [ ] Hebrew renders correctly at 375px, 768px, 1280px, 1920px
- [ ] English renders correctly at same breakpoints
- [ ] Photo aspect ratio maintains at all sizes (no stretching/squashing)
- [ ] Lighthouse mobile: Performance ≥ 90, Accessibility = 100, SEO ≥ 95
- [ ] No CLS on font or image load
- [ ] Keyboard navigable (CTAs receive focus, skip-to-content link works)
- [ ] Reduced motion respected (animation fallback tested)
- [ ] Copy passes Yossi test (read aloud in Hebrew, sounds natural)

---

## Section 2: What You Get

### Purpose
Show concrete use cases Yossi recognizes from his business.

### Content Slots

**Hebrew (3 cards):**

**Card 1: Quote Automation**
- **Icon:** 💬 or document icon
- **Title:** "ציטוטים שנשלחים אוטומטית"
- **Problem:** "אתה מאבד לידים כי אתה עסוק מדי להגיב."
- **Solution:** "AI שמכין ציטוטים, שולח, ועוקב אחרי לידים — אוטומטית."
- **Benefit:** "לא עוד לקוחות שמחליקים בין הסדקים."

**Card 2: Daily Brief**
- **Icon:** ☀️ or inbox icon
- **Title:** "סיכום יומי ב-5 דקות"
- **Problem:** "בוקר שני לוקח לך 2 שעות לברר מה קורה."
- **Solution:** "AI שקורא הכל ונותן לך סיכום: מה דורש תשומת לב, מה יכול לחכות."
- **Benefit:** "2 שעות הפכו ל-5 דקות. כל בוקר."

**Card 3: 24/7 Customer AI**
- **Icon:** 🌙 or chat icon
- **Title:** "מענה ללקוחות 24/7"
- **Problem:** "לקוחות כותבים בשבת, באמצע הלילה, ואתה לא שם."
- **Solution:** "AI שעונה, קובע תורים, ושואל שאלות — גם כשאתה ישן."
- **Benefit:** "לקוחות מרוצים יותר. אתה ישן טוב יותר."

**English (3 cards):**

**Card 1: Quote Automation**
- **Icon:** 💬 or document icon
- **Title:** "Quotes sent automatically"
- **Problem:** "You're losing leads because you're too busy to reply."
- **Solution:** "AI that drafts quotes, sends them, and follows up — automatically."
- **Benefit:** "No more customers slipping through the cracks."

**Card 2: Daily Brief**
- **Icon:** ☀️ or inbox icon
- **Title:** "Daily brief in 5 minutes"
- **Problem:** "Monday mornings take you 2 hours to figure out what's happening."
- **Solution:** "AI that reads everything and gives you a summary: what needs attention, what can wait."
- **Benefit:** "2 hours became 5 minutes. Every morning."

**Card 3: 24/7 Customer AI**
- **Icon:** 🌙 or chat icon
- **Title:** "Customer response 24/7"
- **Problem:** "Customers message on Shabbat, middle of the night, and you're not there."
- **Solution:** "AI that answers, books appointments, asks questions — even when you're sleeping."
- **Benefit:** "Happier customers. Better sleep for you."

### Layout
**Desktop:**
- Three-column grid (equal width)
- Card: White background, subtle border, rounded corners (12px)
- Hover: Lift (-4px) + subtle amber glow shadow
- Icon: 48px, amber color, top of card
- Title: Frank Ruhl Libre Bold, 24px, navy
- Problem: Assistant Regular, 16px, warm gray, italic
- Solution: Assistant Regular, 16px, navy
- Benefit: Assistant Medium, 16px, amber
- Padding: 32px
- Gap: 24px between cards

**Mobile:**
- Stacked (1 column)
- Card height: auto (content-driven)
- Padding: 24px
- Gap: 16px between cards

### Mobile-Specific Behavior
- Cards load below-the-fold (can lazy-load)
- Touch: Tap card to expand/collapse additional details (optional enhancement)
- Icons scale to 40px on mobile

### RTL-Specific Notes
- Grid order remains same in RTL
- Text alignment: `start` (right in RTL)
- Icons remain centered above title (no mirroring)

### Motion Notes
- Scroll-triggered: Fade-in-up when section enters viewport
- Stagger: 150ms delay between cards (left to right)
- Hover: Lift animation 200ms ease-out
- Reduced motion: Cards visible, no entrance animation, hover becomes opacity change

### Done Criteria
- [ ] All three use cases are concrete (problem/solution/benefit format)
- [ ] At least one resonates with café/clinic/salon/shop owners
- [ ] Copy is plain Hebrew ("לא מאבד לידים" not "מייעל מכירות")
- [ ] Cards scannable on mobile (375px)
- [ ] Icons loaded and colored correctly (amber)
- [ ] Hover states work (desktop) and are touch-friendly (mobile)
- [ ] Hebrew copy was written natively (not translated)
- [ ] Passes Yossi test (read aloud, sounds natural)

---

## Section 3: Who I Am

### Purpose
Build trust via face, name, and brief human story.

### Content Slots

**Hebrew:**
- **Title:** "מי אני"
- **Name:** "גל מוסאן"
- **Location:** "סולו, תל אביב"
- **Story:** "בניתי lindaWorld לסבתא שלי כדי שנוכל להישאר מחוברים מעבר ליבשות — כלי שמחבר משפחה ברחבי העולם. עכשיו אני עוזר לעסקים קטנים להפוך את הכאוס היומיומי למערכת שעובדת בשבילם."
- **Current status:** "לקוח ניסיון אחד בתהליך — בונה סיכום יומי אוטומטי לעסק שירות בתל אביב. תוצאות בקרוב."
- **Image:** Gal's full photo (environment shot, laptop visible, warm setting)

**English:**
- **Title:** "Who I Am"
- **Name:** "Gal Moussan"
- **Location:** "Solo, Tel Aviv"
- **Story:** "I built lindaWorld for my grandmother so we could stay connected across continents — a tool that connects family worldwide. Now I help small businesses turn daily chaos into systems that work for them."
- **Current status:** "One pilot client in progress — building an automated daily brief for a Tel Aviv service business. Results coming soon."
- **Image:** Same photo

### Layout
**Desktop:**
- Two-column: Photo left (40%), text right (60%)
- Photo: 3:4 aspect ratio, 400px height, rounded (12px), subtle shadow
- Title: Frank Ruhl Libre Bold, 32px, navy
- Name: Inter Bold, 24px, amber (name stands out)
- Location: Assistant Regular, 16px, warm gray
- Story: Assistant Regular, 18px, navy, line-height 1.6
- Current status: Assistant Italic, 16px, warm gray, subtle background (cream tinted box)
- Background: White card with border, or full-width section on cream
- Padding: 48px

**Mobile:**
- Single column, photo above text
- Photo: Full-width, 4:5 aspect ratio, 300px height
- Text padding: 24px
- All text center-aligned on mobile

### Mobile-Specific Behavior
- Photo loads lazy (below-the-fold)
- Story text max 3-4 lines on mobile (concise)
- "Pilot client" status box stands out with subtle color background

### RTL-Specific Notes
- Desktop: Photo flips to right side in RTL
- Text alignment: `start`
- Name remains prominent (amber color maintains in both languages)

### Motion Notes
- Scroll-triggered: Photo fades in from left, text from right (parallax-lite)
- Duration: 800ms ease-out
- Reduced motion: Both elements fade in together, no directional animation

### Done Criteria
- [ ] Gal's name appears prominently
- [ ] "תל אביב" mentioned
- [ ] Photo shows Gal's face clearly (eye contact, warm expression)
- [ ] lindaWorld mentioned and reframed in human terms (not portfolio piece)
- [ ] "One pilot in progress" stated clearly
- [ ] No stack lists, no GitHub, no developer jargon
- [ ] Section feels personal but not self-promotional
- [ ] Photo loads correctly at all breakpoints (no stretch/squash)

---

## Section 4: How It Works

### Purpose
Remove fear of commitment by showing clear, phased process.

### Content Slots

**Hebrew (3 steps):**

**Step 1:**
- **Number:** "01"
- **Title:** "אנחנו מדברים. אני מקשיב."
- **Description:** "פגישה של 30-45 דקות. אתה עובר איתי על העסק — היום שלך, ההחלטות שלך, הבעיות שלך, הדברים שאוכלים לך את הזמן. אני מקשיב ומחפש את הדבר האחד שAI יכול לתקן ויתן לך הכי הרבה אוויר לנשום."

**Step 2:**
- **Number:** "02"
- **Title:** "אני תוקף את הבעיה הכי גדולה קודם."
- **Description:** "אין מפת דרכים של 3 חודשים. אני מוצא את האינטגרציה עם ההשפעה הגבוהה ביותר ובונה אותה — זו שנותנת לך הכי הרבה אוויר לנשום, מהר. אתה רואה את התוכנית לפני שאני בונה. זמן בנייה: 1-2 שבועות."

**Step 3:**
- **Number:** "03"
- **Title:** "זה עובד. אז אנחנו מרחיבים."
- **Description:** "ברגע שזה רץ ומוכיח את עצמו, אנחנו מוסיפים עוד — עוד מחברים, עוד אוטומציות, עוד זמן בחזרה. אנחנו מגדילים את שכבת הAI שלך בקצב שלך, לא בבת אחת."

**Disclaimer:** "אחרי הפגישה הראשונה, אתה מחליט אם להמשיך. אין התחייבות."

**English (3 steps):**

**Step 1:**
- **Number:** "01"
- **Title:** "We talk. I listen."
- **Description:** "30-45 minute meeting. You walk me through your business — your day, your decisions, your problems, the stuff eating your time. I'm listening for the one thing AI can fix that gives you the most breathing room."

**Step 2:**
- **Number:** "02"
- **Title:** "I attack the biggest bottleneck first."
- **Description:** "No 3-month roadmap. I find the highest-impact integration and build it — the one that gives you the most air to breathe, fast. You see the plan before I build. Build time: 1-2 weeks."

**Step 3:**
- **Number:** "03"
- **Title:** "It works. Then we expand."
- **Description:** "Once that's running and proving itself, we add more — more connectors, more automations, more time back. We grow your AI layer at your pace, not all at once."

**Disclaimer:** "After the first meeting, you decide whether to continue. No obligation."

### Layout
**Desktop:**
- Three columns (equal width)
- Card: White background, border, rounded (12px)
- Number: Frank Ruhl Libre Black, 48px, amber, top-left of card
- Title: Frank Ruhl Libre Bold, 24px, navy
- Description: Assistant Regular, 16px, navy, line-height 1.6
- Disclaimer: Below cards, centered, Assistant Italic, 16px, warm gray, subtle background box
- Padding per card: 32px
- Gap: 24px

**Mobile:**
- Stacked (1 column)
- Cards: Full-width
- Number: 40px
- Title: 20px
- Description: 15px
- Padding: 24px
- Gap: 16px

### Mobile-Specific Behavior
- Steps scroll sequentially (natural read order)
- Disclaimer appears after step 3 with subtle visual separation (border-top or background)

### RTL-Specific Notes
- Numbers remain left-aligned in LTR, right-aligned in RTL (using `start`)
- Card order remains 01 → 02 → 03 in both directions

### Motion Notes
- Scroll-triggered: Cards fade-in-up with stagger (150ms delay each)
- Reduced motion: All cards visible, no animation

### Done Criteria
- [ ] Process is 3 digestible steps
- [ ] Timeline estimates added ("30-45 דקות", "1-2 שבועות")
- [ ] "You see the plan before I build" remains (trust signal)
- [ ] "No obligation" stated explicitly in disclaimer
- [ ] Copy is plain Hebrew ("דברים שאוכלים זמן" not "בוטלנקים")
- [ ] Step numbers (01, 02, 03) visually clear (large, amber)

---

## Section 5: Pricing

### Purpose
Show transparent pricing for self-qualification.

### Content Slots

**Hebrew (3 tiers):**

**Tier 1:**
- **Badge:** "התחל כאן" (Start here)
- **Title:** "פגישת בהירות"
- **Price:** "₪400"
- **Features:**
  - "פגישת תצפית מעמיקה (אנחנו ממפים איך אתה עובד)"
  - "המלצה קונקרטית: האינטגרציה עם ההשפעה הגבוהה ביותר עבורך"
  - "תוכנית צעדים ברורה הבא — אין התחייבות להמשיך"
- **CTA:** "קבע פגישה" [Calendly link]
- **WhatsApp:** "או WhatsApp" [Prefilled: "היי, אני מעוניין בפגישת בהירות — מתי אפשר לתאם?"]

**Tier 2:** [Most popular ⭐]
- **Badge:** "הכי פופולרי"
- **Title:** "האינטגרציה"
- **Price:** "₪1,100"
- **Features:**
  - "כל מה שבפגישת בהירות"
  - "אינטגרציה אחת מותאמת אישית של AI עבור התפקיד שלך"
  - "לדוגמה: ניהול ציטוטים אוטומטי, או סיכום יומי, או AI מענה ללקוחות"
  - "הגדרה מבוססת WhatsApp / email כך שזה חי איפה שאתה כבר עובד"
  - "הטמעה 1-על-1 + מסירה"
  - "שבועיים של תמיכת כיוונון"
- **CTA:** "בחר באינטגרציה" [Calendly link]
- **WhatsApp:** "או WhatsApp" [Prefilled: "היי, אני מעוניין ב-Integration — בוא נדבר על הצורך שלי"]

**Tier 3:**
- **Badge:** "ההשפעה הגדולה"
- **Title:** "המערכת המלאה"
- **Price:** "₪2,000"
- **Features:**
  - "כל מה שב-Integration"
  - "3-5 אינטגרציות AI במספר תחומים (ops, תקשורת, נקודות מגע עם לקוחות)"
  - "אוטומציות מותאמות אישית שמחברות את הכלים שלך (CRM, יומן, WhatsApp, email)"
  - "תמיכה עדיפה"
  - "תמיכה שוטפת לאחר השקה"
- **CTA:** "בחר במערכת מלאה" [Calendly link]
- **WhatsApp:** "או WhatsApp" [Prefilled: "היי, אני מעוניין במערכת מלאה — בוא נדבר על העסק שלי"]

**English (3 tiers):** [Mirror structure with English copy]

### Layout
**Desktop:**
- Three columns (equal width base, Tier 2 slightly elevated)
- Tier 2 visual treatment:
  - Scale: 105% (slightly larger)
  - Border: 2px solid amber (ring)
  - Shadow: Amber glow
  - Position: Translate Y -8px (raised)
- Card: White background, border, rounded (12px)
- Badge: Top-right corner, absolute position, small pill (amber bg for Tier 2, navy bg for others)
- Title: Frank Ruhl Libre Bold, 28px, navy
- Price: Frank Ruhl Libre Black, 48px, amber
- Features: Assistant Regular, 15px, navy, checkmark bullets
- CTA: Button, full-width within card, primary style
- WhatsApp: Link below CTA, smaller, secondary style
- Padding: 32px
- Gap: 24px

**Mobile:**
- Stacked (1 column)
- Tier 2 still visually distinct (amber border, no scale)
- All cards: Full-width
- Padding: 24px
- Gap: 16px

### Mobile-Specific Behavior
- Cards scroll vertically
- CTAs are touch-friendly (48px height)
- Tier 2 appears second in scroll order (maintain hierarchy)

### RTL-Specific Notes
- Badge positioning: `inset-inline-end: 1rem` (logical property)
- Tier order remains 1-2-3 in both directions
- Checkmarks mirror in RTL (directional icon)

### Motion Notes
- Scroll-triggered: Cards fade-in with stagger (100ms delay)
- Hover (desktop): Tier 1 and 3 scale to 102%, Tier 2 scales to 108%
- Reduced motion: Cards visible, hover becomes subtle opacity change

### Done Criteria
- [ ] All three prices visible (no "Contact us")
- [ ] ILS (₪) used consistently
- [ ] Tier 2 is visually distinct (highlighted, elevated)
- [ ] Tier 3 has concrete numbers ("3-5 אינטגרציות")
- [ ] Each tier has unique WhatsApp prefilled message
- [ ] "התחל כאן" badge on Tier 1
- [ ] Examples listed in Tier 2 (quote automation, daily brief, customer AI)
- [ ] Feature lists are concrete ("שבועיים כיוונון" not just "תמיכה")
- [ ] CTAs work (Calendly opens modal or new tab)

---

## Section 6: Social Proof / Founding Clients

### Purpose
Turn "no testimonials" into selling point via honesty.

### Content Slots

**Hebrew (3 bubbles):**

**Bubble 1 (Left-aligned):**
- "אני לוקח מספר מצומצם של לקוחות מייסדים עכשיו. תמחור מייסד, תשומת לב מלאה, והתוצאות שלך הופכות לסיפורים הראשונים באתר הזה."

**Bubble 2 (Right-aligned):**
- "אין לי מקרי בוחן כאן עדיין — בכוונה. אני מעדיף להראות אמיתיים מאשר להמציא מזויפים. רוצה להיות הראשון?"

**Bubble 3 (Center):**
- "לקוח ניסיון אחד בתהליך — בונה סיכום יומי אוטומטי לעסק שירות בתל אביב. תוצאות בקרוב."

**English (3 bubbles):** [Mirror content]

### Layout
**Desktop:**
- Three bubbles with offset positioning
- Bubble style: WhatsApp-inspired (emerald green bg for bubbles, white text, rounded corners, tail)
- Bubble 1: Left-aligned, max-width 400px, margin-left 10%
- Bubble 2: Right-aligned, max-width 400px, margin-right 10%
- Bubble 3: Center-aligned, max-width 450px, margin 0 auto
- Vertical spacing: 32px between bubbles
- Typography: Assistant Regular, 16px, line-height 1.5

**Mobile:**
- Bubbles stacked with less offset
- Bubble 1: Left-aligned, max-width 90%
- Bubble 2: Right-aligned, max-width 90%
- Bubble 3: Center-aligned, max-width 95%
- Vertical spacing: 24px

### Mobile-Specific Behavior
- Bubbles maintain left/right alignment but with reduced margins
- Text remains fully readable (no truncation)

### RTL-Specific Notes
- Bubble 1 flips to right-aligned in RTL
- Bubble 2 flips to left-aligned in RTL
- Bubble tails mirror (point direction changes)
- Use semantic alignment (`justify-start`, `justify-end`, `justify-center`)

### Motion Notes
- Scroll-triggered: Bubbles fade-in sequentially (200ms delay each)
- Hover: Subtle scale (102%)
- Reduced motion: All bubbles visible, no animation

### Done Criteria
- [ ] Founding client framing is clear
- [ ] "One pilot in progress" mentioned
- [ ] אמת motif present (honesty is the content)
- [ ] WhatsApp bubble aesthetic maintained (emerald green, message style)
- [ ] No invented testimonials or fake logos
- [ ] All three bubbles render correctly on mobile

---

## Section 7: Manifesto (אמת)

### Purpose
State values clearly via scroll-reveal manifesto.

### Content Slots

**Hebrew (4 lines):**
1. "אני לומד איך אתה חושב לפני שאני בונה משהו."
2. "בנוי מסביבך. לא מסביב לתבנית."
3. "דיוק זה כבוד."
4. "אמת לפני פוליש."

**אמת signature:** Large amber text at bottom

**English (4 lines):**
1. "I learn how you think before I build anything."
2. "Built around you. Not around a template."
3. "Precision is respect."
4. "Truth before polish."

**אמת signature:** Same (uses Hebrew characters)

### Layout
**Desktop:**
- Full-width section, dark background (navy-800 or warm dark)
- Text: Center-aligned, max-width 900px
- Line styling: Frank Ruhl Libre Bold, 40px, cream, line-height 1.4
- Vertical spacing: 48px between lines
- אמת signature: Frank Ruhl Libre Black, 96px, amber, center, margin-top 64px
- Sticky positioning: Lines stick during scroll (parallax effect)
- Section height: 150vh (allows scroll duration)

**Mobile:**
- Same layout, smaller text
- Line styling: 28px
- אמת signature: 64px
- Vertical spacing: 32px between lines
- Section height: 120vh

### Mobile-Specific Behavior
- Sticky scroll reveal works on mobile (test on iOS Safari)
- Reduced spacing to fit smaller screens

### RTL-Specific Notes
- Text remains center-aligned (same in both languages)
- אמת signature is universal (Hebrew characters used in both)

### Motion Notes
**If this is the signature interaction:**
- Word-by-word opacity reveal tied to scroll position
- Each word starts at opacity 0.2, reaches 1.0 at center of viewport, fades back to 0.2
- Sticky positioning creates parallax effect
- Smooth scroll anchoring

**If NOT the signature interaction:**
- Simpler: Lines fade-in-up on scroll into view
- אמת signature fades in last with slight scale (0.95 → 1.0)

**Reduced motion:**
- All lines and signature visible immediately
- No scroll-linked animation
- No sticky positioning

### Done Criteria
- [ ] Four lines feel complete (not thin)
- [ ] Hebrew is native (not literal translation)
- [ ] אמת signature is large and prominent (96px desktop, 64px mobile)
- [ ] Scroll reveal works smoothly (if signature interaction)
- [ ] Reduced motion fallback tested (lines visible without scrolling)
- [ ] Dark background provides high contrast with cream text

---

## Section 8: Final CTA

### Purpose
Convert: get Yossi to book Calendly or send WhatsApp.

### Content Slots

**Hebrew:**
- **Headline:** "מוכן להחזיר לעצמך את הזמן?"
- **Subhead:** "בוא נבנה את המערכת שנותנת לך את סופי השבוע בחזרה."
- **CTA Primary:** "קבע פגישת בהירות חינם (15 דקות)" [Calendly button, large]
- **CTA Secondary:** "או שלח הודעה ב-WhatsApp" [WhatsApp button, smaller]
- **Reassurance:** "בדרך כלל עונה בתוך שעה. אין מנהלי חשבונות, אין בוטים שעונים בשבילי. רק אני."
- **Image:** Gal's photo (small, corner placement)

**English:**
- **Headline:** "Ready to get your time back?"
- **Subhead:** "Let's build the system that gives you your weekends back."
- **CTA Primary:** "Book free clarity session (15 min)" [Calendly button]
- **CTA Secondary:** "Or send WhatsApp message" [WhatsApp button]
- **Reassurance:** "Usually responds within the hour. No account managers, no bots answering for me. Just me."
- **Image:** Same photo

### Layout
**Desktop:**
- Center-aligned section, max-width 700px
- Headline: Frank Ruhl Libre Bold, 48px, navy
- Subhead: Assistant Regular, 20px, warm gray, margin-bottom 32px
- CTAs: Side-by-side (if space), Calendly larger/primary, WhatsApp smaller/secondary
- Reassurance: Assistant Italic, 14px, warm gray, margin-top 24px, max-width 600px
- Photo: Small (120px), bottom-right corner of section, rounded-full, subtle shadow
- Background: White or cream
- Padding: 64px

**Mobile:**
- CTAs stacked, both full-width
- Calendly button: 56px height (extra prominent)
- WhatsApp button: 48px height
- Photo: Hidden or very small (64px) at bottom-center
- Padding: 32px

### Mobile-Specific Behavior
- Headline: 32px on mobile
- Subhead: 18px on mobile
- Both CTAs above-the-fold if possible (no scroll needed)

### RTL-Specific Notes
- Text center-aligned (universal)
- Photo position: Uses logical properties for corner placement
- CTAs maintain visual hierarchy in both directions

### Motion Notes
- Scroll-triggered: Headline → Subhead → CTAs → Reassurance fade-in sequence
- Stagger: 100ms delays
- Reduced motion: All elements visible

### Done Criteria
- [ ] Headline is concrete ("החזר זמן" not "מנוהל חכם")
- [ ] Calendly CTA more prominent than WhatsApp
- [ ] Both CTAs above-the-fold at 375px
- [ ] Reassurance text remains (trust-building)
- [ ] Gal's photo appears (final human touchpoint)
- [ ] CTAs work correctly (Calendly opens, WhatsApp opens with prefilled message)

---

## Section 9: Footer

### Purpose
Provide alternative contact and reinforce local positioning.

### Content Slots

**Hebrew:**
- **Logo:** "Tivnili" wordmark
- **Tagline:** "אינטגרציה של AI לאנשים שמנהלים דברים."
- **Location:** "תל אביב"
- **Contact:**
  - WhatsApp link: "WhatsApp"
  - Email: "gal@tivnili.com"
- **Navigation links:** שירותים (Services) | מחירים (Pricing) | יצירת קשר (Contact)
- **Copyright:** "© 2026 גל מוסאן. כל הזכויות שמורות."

**English:**
- **Logo:** "Tivnili" wordmark (same)
- **Tagline:** "AI integration for the people who run things."
- **Location:** "Tel Aviv"
- **Contact:**
  - WhatsApp link: "WhatsApp"
  - Email: "gal@tivnili.com"
- **Navigation links:** Services | Pricing | Contact
- **Copyright:** "© 2026 Gal Moussan. All rights reserved."

### Layout
**Desktop:**
- Single row, divided into 3 columns
- Column 1 (Left): Logo + Tagline + Location
- Column 2 (Center): Navigation links (horizontal list)
- Column 3 (Right): Contact (WhatsApp + Email stacked)
- Copyright: Below all, center-aligned, small text (12px)
- Background: Navy-800 or warm dark
- Text: Cream color
- Padding: 48px horizontal, 32px vertical

**Mobile:**
- Stacked layout
- Logo + Tagline + Location: Center-aligned
- Navigation: Center-aligned, stacked (1 link per line)
- Contact: Center-aligned, stacked
- Copyright: Center-aligned
- Padding: 24px horizontal, 32px vertical

### Mobile-Specific Behavior
- All links are touch-friendly (44px height minimum)
- Email is `mailto:` link (opens mail app)
- WhatsApp opens app on mobile

### RTL-Specific Notes
- Desktop columns flip order in RTL (Contact left, Logo right)
- Use CSS Grid with logical properties
- Text alignment: `start` (right in RTL)

### Motion Notes
- None (footer is static)

### Done Criteria
- [ ] "Tel Aviv" or "תל אביב" visible
- [ ] Email address visible (gal@tivnili.com)
- [ ] Copyright includes year (2026) and name
- [ ] All links work (anchor links scroll to sections)
- [ ] WhatsApp and email links open correctly
- [ ] Footer is accessible (keyboard navigable, high contrast)
- [ ] Dark background with cream text passes contrast ratio (WCAG AA minimum)

---

## Summary

**Total sections:** 9
**Reuse:** 0 (all sections are net-new or major reworks)
**Major rework:** 5 (Hero, What You Get, How It Works, Pricing, Final CTA)
**Moderate rework:** 2 (Manifesto, Social Proof)
**Minor rework:** 1 (Footer)
**Net-new:** 1 (Who I Am)

**Content principles across all sections:**
- Hebrew copy written natively, NOT translated
- Plain-spoken language Yossi uses
- Concrete examples over abstract benefits
- Honesty and transparency throughout
- Mobile-first responsive design
- RTL correctness via logical properties
- Reduced motion fallbacks for all animations
- WCAG 2.1 AA compliance minimum (AAA preferred)
