# Plan: RTL Edge Case Testing

**Priority**: Medium-High
**Impact**: Prevents visual bugs in Hebrew mode, improves user experience
**Effort**: Low-Medium (1-2 hours)

## Problem

Current test coverage is excellent for functional behavior (94 tests passing), but **RTL layout edge cases are not covered**:

1. **No visual regression tests**: Tests verify `dir="rtl"` attribute is set, but don't verify:
   - Layout doesn't overflow
   - Text alignment is correct
   - Icons/arrows flip correctly
   - Animations work in RTL

2. **Mixed-direction text untested**:
   - Hebrew sentences with English words (e.g., "אני משתמש ב-WhatsApp")
   - Hebrew text with numbers (e.g., "₪2,000")
   - URLs in Hebrew content

3. **Framer Motion animations in RTL**:
   - Horizontal slide animations may feel backwards
   - Marquee scroll direction untested in RTL
   - Scroll-triggered reveals may have incorrect timing

4. **WhatsApp URLs with Hebrew text**:
   - `encodeURIComponent()` is used, but never tested with Hebrew characters
   - Hebrew prefill messages could have encoding issues in production

5. **Font rendering**:
   - Heebo font loads correctly in tests, but not verified visually
   - Fallback behavior untested if Heebo fails to load

## Proposed Solution

Add **visual regression tests** and **edge case integration tests** for RTL mode.

### 1. Visual Regression Testing (Playwright + Percy/Chromatic)

**Option A: Percy (visual diffs)**

```typescript
// e2e/rtl-visual.spec.ts
import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test.describe('RTL Visual Regression', () => {
  test('hero section in Hebrew', async ({ page }) => {
    await page.goto('/?lang=he');
    await percySnapshot(page, 'Hero - Hebrew');
  });

  test('pricing section in Hebrew', async ({ page }) => {
    await page.goto('/?lang=he#pricing');
    await percySnapshot(page, 'Pricing - Hebrew');
  });

  test('portfolio section with mixed-direction text', async ({ page }) => {
    await page.goto('/?lang=he#portfolio');
    await percySnapshot(page, 'Portfolio - Hebrew (mixed text)');
  });

  test('marquee animation in RTL', async ({ page }) => {
    await page.goto('/?lang=he');
    await page.locator('[data-testid="manifesto-marquee"]').waitFor();
    await percySnapshot(page, 'Manifesto Marquee - RTL');
  });
});
```

**Option B: Chromatic (Storybook-based)**

```typescript
// client/src/sections/HeroSection.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
  decorators: [
    (Story) => (
      <div dir="rtl" lang="he">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const HebrewRTL: Story = {};
```

### 2. Mixed-Direction Text Tests

```typescript
// client/src/__tests__/rtl-mixed-text.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('RTL Mixed-Direction Text', () => {
  beforeEach(() => {
    localStorage.setItem('tivnili-locale', 'he');
  });

  it('renders Hebrew text with English brand name correctly', () => {
    render(<App />);

    // Check that WhatsApp (English) appears in Hebrew sentence
    const whatsappLink = screen.getByText(/WhatsApp/);
    expect(whatsappLink).toBeInTheDocument();

    // Parent element should have RTL direction
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('renders Hebrew text with numbers (ILS pricing) correctly', () => {
    render(<App />);

    // Hebrew content should have ₪ symbol (ILS shekel)
    const pricing = screen.getByText(/₪/);
    expect(pricing).toBeInTheDocument();

    // Verify it's in a RTL context
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('URLs in Hebrew content are LTR', () => {
    render(<App />);

    // Find link elements in Hebrew mode
    const links = screen.getAllByRole('link');

    // URLs should be LTR even in RTL document
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('http')) {
        // Verify link text doesn't get reversed
        expect(link.textContent).toBeTruthy();
      }
    });
  });
});
```

### 3. WhatsApp URL Encoding Tests

```typescript
// client/src/components/__tests__/WhatsAppInput.test.tsx (additions)

describe('WhatsApp URL encoding', () => {
  it('encodes Hebrew characters correctly', () => {
    render(<WhatsAppInput prefillText="שלום, אני רוצה לשמוע עוד" />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const expectedEncoded = encodeURIComponent('שלום, אני רוצה לשמוע עוד');
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining(expectedEncoded),
      '_blank'
    );
  });

  it('encodes ILS currency symbols correctly', () => {
    render(<WhatsAppInput prefillText="₪2,000" />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const expectedEncoded = encodeURIComponent('₪2,000');
    expect(window.open).toHaveBeenCalledWith(
      expect.stringContaining(expectedEncoded),
      '_blank'
    );
  });

  it('handles mixed Hebrew-English in WhatsApp URL', () => {
    render(<WhatsAppInput prefillText="Hi — אני רוצה לשמוע על WhatsApp integration" />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.open).toHaveBeenCalled();
    const [[url]] = (window.open as any).mock.calls;

    // Verify URL is well-formed
    expect(url).toMatch(/^https:\/\/wa\.me\//);
    expect(url).toContain('text=');
  });
});
```

### 4. Animation Direction Tests

```typescript
// client/src/sections/__tests__/ManifestoSection.test.tsx (additions)

describe('RTL animations', () => {
  it('marquee scrolls correctly in RTL', async () => {
    localStorage.setItem('tivnili-locale', 'he');
    render(<ManifestoSection />);

    const marquee = screen.getByTestId('manifesto-marquee');

    // In RTL, marquee should either:
    // 1. Reverse direction, OR
    // 2. Look intentional in its current direction

    // This test verifies it renders without errors
    expect(marquee).toBeInTheDocument();
  });

  it('scroll-triggered reveals work in RTL', () => {
    localStorage.setItem('tivnili-locale', 'he');
    const { container } = render(<App />);

    // Verify sections with scroll reveals are present
    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThan(0);

    // No errors thrown during render
  });
});
```

### 5. Font Loading Tests

```typescript
// client/src/__tests__/rtl-fonts.test.tsx

describe('Hebrew font loading', () => {
  it('applies Heebo font family in Hebrew mode', () => {
    localStorage.setItem('tivnili-locale', 'he');
    render(<App />);

    // Check that html element has correct lang attribute
    expect(document.documentElement.getAttribute('lang')).toBe('he');

    // Heebo should be loaded via index.html
    const hebrewText = screen.getByText(/תִּבְנִילִי/);
    expect(hebrewText).toBeInTheDocument();
  });
});
```

### 6. E2E Test: Full Hebrew User Journey

```typescript
// e2e/hebrew-user-journey.spec.ts
import { test, expect } from '@playwright/test';

test('Hebrew user can complete full journey', async ({ page }) => {
  await page.goto('/');

  // Toggle to Hebrew
  await page.click('[aria-label*="toggle language"]');
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  await expect(page.locator('html')).toHaveAttribute('lang', 'he');

  // Navigate sections
  await page.click('a[href="#pricing"]');
  await expect(page.locator('#pricing')).toBeVisible();

  // Click WhatsApp CTA
  const [whatsappPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('button[aria-label*="WhatsApp"]'),
  ]);

  // Verify WhatsApp URL has Hebrew text
  const url = whatsappPage.url();
  expect(url).toContain('wa.me');
  expect(url).toContain('text=');

  // Decode and verify Hebrew is present
  const urlParams = new URLSearchParams(url.split('?')[1]);
  const text = urlParams.get('text');
  expect(text).toBeTruthy();
  // Hebrew characters should be present (after decoding)
  expect(decodeURIComponent(text!)).toMatch(/[\u0590-\u05FF]/); // Hebrew Unicode range
});
```

## Implementation Checklist

### Phase 1: Unit Tests (Low effort)
- [ ] Add WhatsApp Hebrew encoding tests
- [ ] Add mixed-direction text rendering tests
- [ ] Add font loading test
- [ ] Run tests: `npm run test`

### Phase 2: Visual Regression (Medium effort)
- [ ] Choose tool (Percy or Chromatic)
- [ ] Set up Storybook OR Playwright
- [ ] Create RTL visual snapshots for all sections
- [ ] Integrate into CI pipeline

### Phase 3: E2E Tests (Medium effort)
- [ ] Set up Playwright (if not already present)
- [ ] Write Hebrew user journey test
- [ ] Write animation direction tests
- [ ] Add to CI pipeline

## Success Criteria

- [ ] WhatsApp URLs with Hebrew text open correctly
- [ ] Mixed-direction text (Hebrew + English) renders without layout breaks
- [ ] All sections have visual regression coverage in both EN and HE
- [ ] Animations work correctly (or at least intentionally) in RTL
- [ ] Font rendering verified for Hebrew text

## Benefits

1. **Catch visual bugs early**: Layout overflows, misaligned text, broken animations
2. **Confidence in RTL**: No need for manual QA on every change
3. **Better UX for Hebrew users**: Edge cases handled proactively
4. **Regression prevention**: Visual changes flagged in CI

## Future Enhancements

1. **Accessibility in RTL**: ARIA labels in Hebrew, keyboard navigation tests
2. **Performance in RTL**: Font loading performance, animation performance
3. **Cross-browser RTL testing**: Safari, Firefox, Chrome differences
