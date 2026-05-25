# Generic Learnings

## Code Quality

### Immutability
- Always create new objects, never mutate existing ones
- Use spread operators, Object.assign, Array methods (map, filter, reduce)
- Prevents hidden side effects and enables safe concurrency

### File Organization
- Many small files > few large files
- 200-400 lines typical, 800 max
- High cohesion, low coupling
- Organize by feature/domain, not by type

### Error Handling
- Handle errors explicitly at every level
- Provide user-friendly messages in UI
- Log detailed context on server
- Never silently swallow errors

### Input Validation
- Validate at system boundaries
- Use schema-based validation (Zod)
- Fail fast with clear messages
- Never trust external data

## Testing

### Test-Driven Development
1. Write test first (RED)
2. Run test - should FAIL
3. Write minimal implementation (GREEN)
4. Run test - should PASS
5. Refactor (IMPROVE)
6. Verify 80%+ coverage

### Test Types
- Unit: Individual functions, components
- Integration: API endpoints, database operations
- E2E: Critical user flows

### Test Isolation Best Practices

**Mock External Dependencies**:
- Mock browser APIs (localStorage, sessionStorage) in jsdom tests
- Mock animation libraries (Framer Motion) in integration tests
- Mock hooks when testing components that consume them

**localStorage Mock Pattern**:
```typescript
// Prevents "localStorage is not defined" errors in jsdom
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
vi.stubGlobal('localStorage', localStorageMock);
```

**Framer Motion Mock Pattern**:
```typescript
// Prevents animation complexity in integration tests
vi.mock('framer-motion', () => ({
  motion: { div: 'div', section: 'section', p: 'p', h1: 'h1' },
  useScroll: () => ({ scrollYProgress: { get: () => 0 } }),
  useTransform: () => ({ get: () => 0 }),
}));
```

**Reset Between Tests**:
- Always reset mocks in `afterEach` to prevent state leakage
- Use `vi.clearAllMocks()` or `vi.unstubAllGlobals()`

### Test Maintenance After Content Changes

**Pattern**: When content structure or copy changes:
1. Update content files (en.ts, he.ts)
2. Update TypeScript types if structure changed
3. Update components to consume new structure
4. Update test assertions IMMEDIATELY
5. Run full test suite to catch any missed updates

**Common failure**: Tests pass initially, then fail after content rewrites because assertions still expect old content.

**Solution**: Keep tests synchronized with content by updating assertions whenever content changes.

### Content Validation in Tests

**Verify both languages**:
```typescript
it('content structure matches for both languages', () => {
  const enContent = getContent('en');
  const heContent = getContent('he');

  // Verify same keys exist
  expect(Object.keys(enContent.services.items)).toEqual(
    Object.keys(heContent.services.items)
  );
});
```

**Verify no empty content**:
```typescript
it('has no empty arrays', () => {
  const content = getContent('en');
  expect(content.services.items.length).toBeGreaterThan(0);
  expect(content.pricing.tiers.length).toBeGreaterThan(0);
});
```

## Performance

### Model Selection
- Haiku 4.5: Lightweight agents, frequent invocations
- Sonnet 4.6: Main development, complex coding
- Opus 4.5: Deep reasoning, architecture decisions

### Context Management
- Avoid last 20% of context window for large refactors
- Use extended thinking for complex tasks
- Plan mode for structured approaches

## Git Workflow

### Commit Format
```
<type>: <description>

<optional body>
```

Types: feat, fix, refactor, docs, test, chore, perf, ci

### Pull Requests
1. Analyze full commit history
2. Use `git diff [base]...HEAD`
3. Comprehensive PR summary
4. Include test plan

## Security

### Mandatory Checks (before commits)
- No hardcoded secrets
- All inputs validated
- SQL injection prevention (parameterized queries)
- XSS prevention (sanitized HTML)
- CSRF protection enabled
- Auth/authz verified
- Rate limiting on endpoints
- Error messages don't leak sensitive data

### Secret Management
- Environment variables or secret manager
- Validate presence at startup
- Rotate exposed secrets immediately

## i18n & Localization

### String Escaping
**CRITICAL**: Use double quotes for strings containing apostrophes/contractions
```typescript
// WRONG - causes "Unterminated string literal" errors
export const en = {
  message: 'I'm building something',  // ❌
  owner: 'Owner's guide',             // ❌
};

// CORRECT
export const en = {
  message: "I'm building something",  // ✅
  owner: "Owner's guide",             // ✅
};
```

**Common contractions to watch**:
- I'm, you're, we're, they're, it's
- can't, won't, don't, hasn't, haven't
- owner's, user's, business's (possessives)

**Verification**: Run `npx tsc --noEmit` after any content file changes

### Content Structure Changes

**When modifying content structure**:
1. Update TypeScript types FIRST (`content/types.ts`)
2. Update both language files (en.ts AND he.ts) simultaneously
3. Update consuming components immediately
4. Update test assertions
5. Run type check: `npx tsc -b`
6. Run tests: `npm run test`

**Example**: Portfolio structure changed from `featured/engines/crypto` to `stats/useCases`
- Types updated first
- Content files updated
- PortfolioSection.tsx updated to use new structure
- Test assertions updated to match new content

### RTL Layout Patterns

**Logical CSS Properties** (directional-agnostic):
```css
/* Use these instead of left/right */
margin-inline-start: 1rem;    /* Instead of margin-left */
margin-inline-end: 1rem;      /* Instead of margin-right */
padding-inline-start: 2rem;   /* Instead of padding-left */
padding-inline-end: 2rem;     /* Instead of padding-right */
```

**Directional Icons**:
```tsx
// Arrows that should flip in RTL
<ArrowRight className="flip-rtl" />
```

```css
/* CSS for flipping */
.flip-rtl { transform: scaleX(-1); }
[dir="rtl"] .flip-rtl { transform: scaleX(1); }
```

**Font Loading for Hebrew**:
```html
<!-- In index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

**Document Attributes** (managed by useLocale hook):
```typescript
// Automatically set based on locale
document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
document.documentElement.lang = locale;
```

### i18n Hook Patterns

**useLocale** - State management:
```typescript
const { locale, setLocale, toggleLocale } = useLocale();
```
- Persists to localStorage (with try/catch for test environments)
- Updates document.dir and document.lang
- Provides toggle function for easy switching

**useContent** - Data retrieval:
```typescript
const { content } = useContent();
return <h1>{content.section.headline}</h1>;
```
- Returns content for current locale
- Automatically reactive to locale changes
- Type-safe access to all content keys

### Test Patterns for i18n

**Testing locale switching**:
```typescript
it('switches content when locale changes', () => {
  const { result } = renderHook(() => useContent());
  expect(result.current.content.hero.headline).toContain('Your business');

  act(() => {
    toggleLocale();
  });

  expect(result.current.content.hero.headline).toContain('[HE]'); // or actual Hebrew
});
```

**Testing RTL layout**:
```typescript
it('applies RTL layout when Hebrew selected', () => {
  render(<App />);

  const toggle = screen.getByRole('button', { name: /language/i });
  fireEvent.click(toggle);

  expect(document.documentElement.dir).toBe('rtl');
  expect(document.documentElement.lang).toBe('he');
});
```
