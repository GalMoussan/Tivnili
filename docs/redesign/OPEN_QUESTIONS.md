# Open Questions for Review

## Operating Note

Per brief: "If something in this brief is ambiguous against the current codebase, log it in `docs/redesign/OPEN_QUESTIONS.md` rather than picking."

These questions require your explicit decision before Phase B can proceed.

---

## Q1: Signature Interaction Selection

**Decision needed:** Which signature interaction should be implemented?

**Context:** SIGNATURE.md proposes three options. Only ONE will be implemented.

**Options:**

### Option A: "אמת Reveal" — Layer Peeling (Recommended)
- Full-screen overlay on first visit that "peels away" to reveal honest site beneath
- Shows rejected marketing speak → אמת word → peel animation
- **Pros:** Perfectly embodies אמת motif, memorable, technically simple
- **Cons:** Blocks content for 3 seconds on first visit

### Option B: "Honest Pricing Reveal" — Interactive Price Builder
- Replace static pricing with live questionnaire that builds Yossi's price in real-time
- Shows pricing formula transparently
- **Pros:** High engagement, radical transparency, helps Yossi self-configure
- **Cons:** Replaces static pricing (less scannable), medium complexity

### Option C: "Before/After Scroll" — Split-Screen Reality Check
- Scroll-linked animation showing chaos (before) → calm (after)
- Left side shrinks, right side expands as Yossi scrolls
- **Pros:** Visual impact, concrete transformation shown, original
- **Cons:** Requires mockup design, medium-high complexity

### Option D: None
- Skip signature interaction entirely
- Rely on Manifesto word reveal + strong visual design
- **Pros:** Simplest, no risk of gimmick
- **Cons:** Less memorable, less differentiation

**My recommendation:** Option A (אמת Reveal)

**Your decision:** _______

---

## Q2: Gal's Photo Sourcing

**Decision needed:** Do you have professional photos of Gal, or should they be scheduled/shot?

**Context:** The redesign requires Gal's photo in 3 locations: Hero, Who I Am, Final CTA (small).

**Photo requirements:**
- **Hero:** Portrait (3:4 or 4:5 aspect), warm expression, eye contact, Tel Aviv environment visible (café, office, street)
- **Who I Am:** Full environment shot (Gal with laptop, shows workspace)
- **Final CTA:** Same as Hero but cropped smaller

**Options:**

### Option A: Professional photos exist
- You provide existing photos
- I'll review and confirm they meet requirements (warm, approachable, not corporate-sterile)
- **Timeline:** No delay, proceed immediately

### Option B: Photos need to be shot
- Schedule photographer in Tel Aviv
- Shot list: 2-3 environments (café, office, outdoor Tel Aviv backdrop), 50-100 images
- Natural light preferred (not studio)
- **Timeline:** +1 week for shoot + selection

### Option C: Use placeholder temporarily
- Use high-quality placeholder or AI-generated mockup (marked clearly as temporary)
- Real photos added in Phase B iteration 2
- **Timeline:** No delay, but authentic photos are P0 (must replace before launch)

**My recommendation:** Option B if photos don't exist (invest in quality photography)

**Your status:** _______

**Your decision if needed:** _______

---

## Q3: Calendly Integration Setup

**Decision needed:** What's your Calendly account URL and event type?

**Context:** The redesign makes Calendly the primary CTA (per brief). Need your account details to link buttons correctly.

**Information needed:**
1. **Calendly username:** e.g., `calendly.com/gal-moussan`
2. **Event type for Clarity Session:** e.g., `/15-min-clarity-session`
3. **Calendly embed preference:**
   - Option A: Inline embed (opens in page modal)
   - Option B: New tab (opens Calendly site)
   - Option C: Popup overlay (Calendly widget)

**Current assumption:** I'll use a placeholder URL (`https://calendly.com/tivnili-placeholder`) in Phase A docs. Replace with real URL before Phase B.

**Your Calendly URL:** _______

**Embed preference:** _______

---

## Q4: Analytics and Tracking

**Decision needed:** Should analytics be added? If yes, which tool?

**Context:** Brief says "Do not add analytics beyond what's already in place. If nothing is in place, add Plausible (privacy-friendly, single script, no banner needed in EU) — but only if I confirm in `OPEN_QUESTIONS.md`."

**Options:**

### Option A: Add Plausible Analytics
- Privacy-friendly (no cookies, no GDPR banner needed)
- Single script tag
- Tracks: page views, referrers, goals (button clicks)
- Cost: ~$9/month (10k page views)
- **Setup time:** 15 minutes

### Option B: Add Google Analytics 4
- More features (funnels, demographics, integrations)
- Requires cookie banner for GDPR compliance (adds complexity)
- **Setup time:** 1-2 hours (including banner)

### Option C: No analytics
- Simplest, no tracking
- Rely on Vercel deployment analytics only (basic traffic numbers)

**My recommendation:** Option A (Plausible) — privacy-friendly, no banner, simple.

**Your decision:** _______

---

## Q5: Email Address Confirmation

**Decision needed:** Is `gal@tivnili.com` the correct email to display on the site?

**Context:** Footer and Final CTA will show an email address as alternative to WhatsApp.

**Options:**

### Option A: `gal@tivnili.com` (assumed)
- Professional, on-brand
- **Action needed:** Confirm this email exists and is monitored

### Option B: Different email
- Provide correct email address
- E.g., `hello@tivnili.com`, `contact@tivnili.com`, or personal email

**Your email for the site:** _______

---

## Q6: Domain and Hosting

**Decision needed:** Is the site staying on Vercel at the current domain, or migrating?

**Context:** Need to know deployment target for Phase B. Brief mentions "Vercel preview on this branch is the only deploy target."

**Current assumption:**
- Domain: `tivnili.vercel.app` (or custom domain if configured)
- Hosting: Vercel
- Branch strategy: `feature/initial-development` → `dev` → `main` (per your earlier 3-tier workflow)

**Confirmation needed:**
1. **Custom domain:** Is there a custom domain (e.g., `tivnili.com`)? If yes, what is it?
2. **Hosting:** Staying on Vercel or migrating elsewhere?
3. **Branch deploys:** Vercel auto-deploys all branches (preview URLs) — is this correct?

**Your custom domain (if any):** _______

**Hosting platform:** _______

---

## Q7: "One Pilot Client" Details

**Decision needed:** Can you provide 1-2 sentences about the pilot client for "Who I Am" section?

**Context:** Copy currently says: "One pilot client in progress — building an automated daily brief for a Tel Aviv service business. Results coming soon."

**Options:**

### Option A: Keep generic
- Current copy is safe, honest, non-specific
- **No action needed**

### Option B: Add one more detail (optional)
- E.g., "Building an automated daily brief that saves 90 minutes every morning for a Tel Aviv clinic owner."
- Makes it slightly more concrete without violating client privacy

**Your preference:** _______

**Additional detail (if Option B):** _______

---

## Q8: lindaWorld Link

**Decision needed:** Should "lindaWorld" in the "Who I Am" section link anywhere, or remain plain text?

**Context:** Copy mentions "I built lindaWorld for my grandmother." This is a humanizing detail per brief.

**Options:**

### Option A: Plain text (no link)
- lindaWorld is mentioned as context, not promoted
- **Recommended** — keeps focus on Tivnili, not side projects

### Option B: Link to lindaWorld
- If lindaWorld has a public URL, link it
- Shows proof of real project
- **Risk:** Distracts from Tivnili's value proposition

### Option C: Link to blog post/explanation
- Link to a blog post explaining lindaWorld (if one exists)
- Provides context without leaving the site

**My recommendation:** Option A (plain text, no link)

**Your decision:** _______

**If linking, provide URL:** _______

---

## Q9: Manifesto Fourth Line

**Decision needed:** Approve or revise the fourth line of the Manifesto.

**Context:** Current Manifesto has 3 lines. FLOW.md proposes adding a fourth: "אמת לפני פוליש" (Truth before polish).

**Current Manifesto (3 lines):**
1. "I learn how you think before I build anything."
2. "Built around you. Not around a template."
3. "Precision is respect."

**Proposed Manifesto (4 lines):**
1. "I learn how you think before I build anything."
2. "Built around you. Not around a template."
3. "Precision is respect."
4. **"Truth before polish."** ← NEW

**Options:**

### Option A: Approve fourth line (Recommended)
- "אמת לפני פוליש" reinforces the אמת motif
- Completes the thought (values → methodology → integrity)

### Option B: Keep 3 lines
- Current Manifesto is strong, don't add for the sake of adding
- Brief doesn't require 4 lines

### Option C: Different fourth line
- Propose alternative

**My recommendation:** Option A (add "Truth before polish")

**Your decision:** _______

**If Option C, your alternative:** _______

---

## Q10: Hebrew Copy Review

**Decision needed:** Should Hebrew copy be reviewed by a native speaker before Phase B?

**Context:** I wrote Hebrew copy natively (not translated), but I'm not a native Hebrew speaker. The brief emphasizes Hebrew as canonical language.

**Options:**

### Option A: You review Hebrew copy yourself
- You're a native speaker (assumed)
- Review `docs/redesign/COPY.md` and flag any unnatural phrasing
- **Timeline:** Include in your Phase A review

### Option B: Hire Hebrew copywriter
- Professional native speaker reviews and revises all Hebrew copy
- Cost: ~₪500-1,000 for copy review + revisions
- **Timeline:** +3-5 days

### Option C: Proceed with current Hebrew copy
- Trust that copy is adequate
- Iterate based on feedback after Phase B launch

**My recommendation:** Option A (you review, since you're reviewing Phase A docs anyway)

**Your decision:** _______

---

## Q11: Font Licensing

**Decision needed:** Confirm Google Fonts (Frank Ruhl Libre, Crimson Pro, Assistant, Inter) usage is acceptable.

**Context:** PRINCIPLES.md recommends Frank Ruhl Libre (Hebrew display) and Crimson Pro (Latin display). All are free via Google Fonts, but confirm licensing is acceptable for commercial use.

**Google Fonts license:** All fonts are Open Font License (OFL) — free for commercial use, no attribution required.

**Options:**

### Option A: Use Google Fonts (Recommended)
- Free, hosted, performant
- Frank Ruhl Libre + Crimson Pro + Assistant + Inter
- **No cost, no licensing concerns**

### Option B: Purchase premium fonts
- E.g., Alef or Rubik (premium Hebrew fonts)
- Cost: ~$200-500 per font family
- **Better quality but adds cost**

**My recommendation:** Option A (Google Fonts are excellent and free)

**Your decision:** _______

---

## Q12: WhatsApp Number Confirmation

**Decision needed:** Confirm the WhatsApp number for all CTA buttons.

**Context:** Current site uses env variable `VITE_WHATSAPP_NUMBER`. Need to confirm this is correct for the redesign.

**Current assumption:** WhatsApp number is configured in `.env` file and working.

**Confirmation needed:**
1. **Is the number correct?** _______
2. **Should the number change?** _______
3. **Format:** International format with country code (e.g., `972XXXXXXXXX` for Israel)

**Your WhatsApp number:** _______

---

## Summary

**Total questions:** 12

**Critical (must answer before Phase B):**
- Q1 (Signature interaction)
- Q2 (Gal's photos)
- Q3 (Calendly setup)
- Q5 (Email confirmation)
- Q12 (WhatsApp number)

**Important (should answer before Phase B):**
- Q4 (Analytics decision)
- Q6 (Domain/hosting confirmation)
- Q10 (Hebrew copy review)

**Optional (can answer during Phase B):**
- Q7 (Pilot client details)
- Q8 (lindaWorld link)
- Q9 (Manifesto fourth line)
- Q11 (Font licensing confirmation)

**Next step:** Review Phase A docs (all 9 files in `docs/redesign/`), answer these questions, then approve Phase B start.
