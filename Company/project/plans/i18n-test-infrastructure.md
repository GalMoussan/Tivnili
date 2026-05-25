# Plan: i18n Test Infrastructure

**Priority**: Low-Medium
**Impact**: Makes testing i18n features easier, reduces boilerplate
**Effort**: Low (1 hour)

## Problem

Current i18n tests have **significant boilerplate** and **repetitive patterns**:

1. **localStorage mocking is repeated** in every test file:
   ```typescript
   // Repeated in 3+ test files
   const mockLocalStorage = (() => {
     let store: Record<string, string> = {};
     return {
       getItem: vi.fn((key: string) => store[key] || null),
       setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
       // ...
     };
   })();

   beforeEach(() => {
     mockLocalStorage.clear();
     vi.stubGlobal('localStorage', mockLocalStorage);
   });
   ```

2. **Framer Motion mocking is repeated** in every integration test:
   ```typescript
   // Repeated in i18n-integration.test.tsx and section tests
   vi.mock('framer-motion', () => ({
     motion: { div: 'div', section: 'section', /* ... */ },
     useScroll: () => ({ scrollYProgress: { get: () => 0, /* ... */ }}),
     // ...
   }));
   ```

3. **No test utilities for common i18n tasks**:
   - Rendering app in Hebrew
   - Toggling language
   - Verifying RTL state
   - Checking content is in expected language

4. **No shared fixtures** for test content:
   - Tests hardcode content strings (e.g., "Your business, run smarter")
   - When content changes, multiple test files break (happened in Phase 5)

5. **Document attribute checks are verbose**:
   ```typescript
   expect(document.documentElement.getAttribute('lang')).toBe('he');
   expect(document.documentElement.getAttribute('dir')).toBe('rtl');
   ```

## Proposed Solution

Create **test utilities** and **shared mocks** to reduce boilerplate and make i18n testing easier.

### 1. Shared Test Setup (`client/src/test/i18n-setup.ts`)

```typescript
import { vi } from 'vitest';
import type { Locale } from '../content';

/**
 * Creates a mock localStorage for tests.
 * Call `mockLocalStorage.clear()` in beforeEach to reset state.
 */
export function createMockLocalStorage() {
  let store: Record<string, string> = {};

  return {
    getItem: vi.fn((key: string) => store[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: vi.fn((key: string) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
}

/**
 * Sets up localStorage mock for i18n tests.
 * Returns the mock object for assertions.
 */
export function setupI18nLocalStorage() {
  const mockLocalStorage = createMockLocalStorage();
  vi.stubGlobal('localStorage', mockLocalStorage);

  return mockLocalStorage;
}

/**
 * Sets the locale in mocked localStorage.
 */
export function setTestLocale(locale: Locale, mockLocalStorage: ReturnType<typeof createMockLocalStorage>) {
  mockLocalStorage.setItem('tivnili-locale', locale);
}

/**
 * Resets document attributes (dir, lang) to defaults.
 * Call in beforeEach to prevent test pollution.
 */
export function resetDocumentAttributes() {
  document.documentElement.removeAttribute('dir');
  document.documentElement.removeAttribute('lang');
}
```

### 2. Test Utilities (`client/src/test/i18n-utils.tsx`)

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import type { Locale } from '../content';
import App from '../App';

/**
 * Renders the app with a specific locale.
 */
export function renderWithLocale(locale: Locale) {
  if (locale === 'he') {
    localStorage.setItem('tivnili-locale', 'he');
  } else {
    localStorage.removeItem('tivnili-locale');
  }

  return render(<App />);
}

/**
 * Toggles the language by clicking the language toggle button.
 */
export function toggleLanguage() {
  const toggleButton = screen.getByRole('button', { name: /toggle language/i });
  fireEvent.click(toggleButton);
}

/**
 * Asserts that the document is in the expected locale.
 */
export function expectLocale(locale: Locale) {
  const expectedDir = locale === 'he' ? 'rtl' : 'ltr';
  expect(document.documentElement.getAttribute('lang')).toBe(locale);
  expect(document.documentElement.getAttribute('dir')).toBe(expectedDir);
}

/**
 * Asserts that Hebrew indicator is active in language toggle.
 */
export function expectHebrewActive() {
  const hebrewOption = screen.getByText('עב');
  expect(hebrewOption).toHaveClass('text-amber-500');
}

/**
 * Asserts that English indicator is active in language toggle.
 */
export function expectEnglishActive() {
  const englishOption = screen.getByText('EN');
  expect(englishOption).toHaveClass('text-amber-500');
}
```

### 3. Shared Framer Motion Mock (`client/src/test/mocks/framer-motion.ts`)

```typescript
import { vi } from 'vitest';

/**
 * Mock Framer Motion for tests.
 * Import in test files that need animation mocking.
 */
export const mockFramerMotion = {
  motion: {
    div: 'div',
    section: 'section',
    article: 'article',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    button: 'button',
    nav: 'nav',
    footer: 'footer',
    span: 'span',
  },
  useScroll: () => ({
    scrollYProgress: { get: () => 0, on: vi.fn(), destroy: vi.fn() },
  }),
  useTransform: () => ({ get: () => 1 }),
  useReducedMotion: () => false,
  useMotionValue: (initial: number) => ({
    get: () => initial,
    set: vi.fn(),
    on: vi.fn(),
    destroy: vi.fn(),
  }),
  useMotionValueEvent: vi.fn(),
  useInView: () => true,
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
};

// Usage in test files:
// vi.mock('framer-motion', () => mockFramerMotion);
```

### 4. Content Fixtures (`client/src/test/fixtures/content.ts`)

```typescript
import { en } from '../../content/en';
import { he } from '../../content/he';

/**
 * Shared content references for tests.
 * Update this file when content structure changes.
 */
export const contentFixtures = {
  en: {
    heroHeadline: en.hero.headline.highlight, // "smarter"
    servicesHeading: en.services.heading, // "What I Do"
    pricingTiers: en.pricing.tiers.map(t => t.name), // ["The Clarity Session", ...]
    whatsappPlaceholder: en.hero.whatsappPlaceholder,
  },
  he: {
    heroHeadline: he.hero.headline.highlight, // "בצורה חכמה יותר"
    servicesHeading: he.services.heading, // "מה אני עושה"
    pricingTiers: he.pricing.tiers.map(t => t.name),
    whatsappPlaceholder: he.hero.whatsappPlaceholder,
  },
};
```

### 5. Updated Test Example

**Before (verbose):**

```typescript
// i18n-integration.test.tsx
describe('i18n Integration', () => {
  const mockLocalStorage = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => { store[key] = value; }),
      // ... 20 more lines
    };
  })();

  beforeEach(() => {
    mockLocalStorage.clear();
    vi.stubGlobal('localStorage', mockLocalStorage);
    document.documentElement.removeAttribute('dir');
    document.documentElement.removeAttribute('lang');
  });

  it('language toggle switches content from English to Hebrew', () => {
    render(<App />);

    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');

    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(toggleButton);

    expect(document.documentElement.getAttribute('lang')).toBe('he');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });
});
```

**After (concise):**

```typescript
// i18n-integration.test.tsx
import { setupI18nLocalStorage, resetDocumentAttributes } from '../test/i18n-setup';
import { renderWithLocale, toggleLanguage, expectLocale } from '../test/i18n-utils';

vi.mock('framer-motion', () => mockFramerMotion);

describe('i18n Integration', () => {
  const mockLocalStorage = setupI18nLocalStorage();

  beforeEach(() => {
    mockLocalStorage.clear();
    resetDocumentAttributes();
  });

  it('language toggle switches content from English to Hebrew', () => {
    renderWithLocale('en');
    expectLocale('en');

    toggleLanguage();
    expectLocale('he');
  });
});
```

### 6. Vitest Setup File (`client/src/test/setup.ts`)

Add shared setup that runs before all tests:

```typescript
import { beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom';
import { resetDocumentAttributes } from './i18n-setup';

// Reset document attributes before each test
beforeEach(() => {
  resetDocumentAttributes();
});

// Mock window.open globally (used by WhatsAppInput)
beforeEach(() => {
  vi.stubGlobal('open', vi.fn());
});
```

### 7. Custom Matchers (Optional)

```typescript
// test/matchers.ts
import { expect } from 'vitest';

expect.extend({
  toBeInLocale(element: HTMLElement, locale: 'en' | 'he') {
    const dir = locale === 'he' ? 'rtl' : 'ltr';
    const htmlElement = document.documentElement;

    const pass =
      htmlElement.getAttribute('lang') === locale &&
      htmlElement.getAttribute('dir') === dir;

    return {
      pass,
      message: () =>
        pass
          ? `Expected document NOT to be in ${locale} locale`
          : `Expected document to be in ${locale} locale (lang="${locale}", dir="${dir}")`,
    };
  },
});

// Usage:
expect(document.documentElement).toBeInLocale('he');
```

## Implementation Checklist

### Phase 1: Core Utilities
- [ ] Create `client/src/test/i18n-setup.ts`
- [ ] Create `client/src/test/i18n-utils.tsx`
- [ ] Create `client/src/test/mocks/framer-motion.ts`
- [ ] Update `client/src/test/setup.ts` with shared setup

### Phase 2: Refactor Existing Tests
- [ ] Refactor `i18n-integration.test.tsx` to use utilities
- [ ] Refactor `useLocale.test.ts` to use utilities
- [ ] Refactor section tests to use Framer Motion mock import
- [ ] Remove duplicate localStorage mocks

### Phase 3: Content Fixtures
- [ ] Create `client/src/test/fixtures/content.ts`
- [ ] Update section tests to reference fixtures
- [ ] Document fixture usage in README

### Phase 4: Custom Matchers (Optional)
- [ ] Create `client/src/test/matchers.ts`
- [ ] Add `toBeInLocale` matcher
- [ ] Import in setup.ts
- [ ] Use in tests

## Success Criteria

- [ ] localStorage mocking is centralized (no duplicates)
- [ ] Framer Motion mock is imported, not redefined
- [ ] Test utilities reduce boilerplate by 50%+
- [ ] All tests pass: `npm run test`
- [ ] New i18n tests can be written with <10 lines of setup

## Benefits

1. **Less boilerplate**: Common patterns abstracted into utilities
2. **Easier to write tests**: Clear, readable test helpers
3. **Centralized mocking**: Changes to mocks only need to happen in one place
4. **Resilient to content changes**: Fixtures centralize content references
5. **Better readability**: Tests focus on behavior, not setup

## Trade-offs

**Pros:**
- DRY (Don't Repeat Yourself)
- Easier maintenance
- Faster to write new tests

**Cons:**
- Indirection (need to understand utility functions)
- Slightly more complex initial setup

**Recommendation:** Implement all phases. The long-term benefits far outweigh the initial setup cost.

## Future Enhancements

1. **Snapshot testing for content**: Auto-generate snapshots of rendered content
2. **Visual regression integration**: Helpers for Percy/Chromatic
3. **Performance testing utilities**: Measure font loading, animation performance
4. **Accessibility testing helpers**: ARIA assertions, keyboard navigation tests
