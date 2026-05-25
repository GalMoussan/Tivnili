# Plan: Content Type Safety Enforcement

**Priority**: Medium
**Impact**: Prevents runtime errors, improves developer experience
**Effort**: Low (1 hour)

## Problem

The content layer has good TypeScript types, but there are **gaps in type safety**:

1. **Content object is mutable**: `en.ts` and `he.ts` export plain objects, which can be mutated at runtime:
   ```typescript
   import { en } from './content/en';
   en.hero.headline = 'Wrong!'; // No error!
   ```

2. **No compile-time validation** for:
   - Array lengths matching between EN/HE
   - Required fields (e.g., `whatsappMessage` on pricing tiers)
   - String format (e.g., WhatsApp URLs should start with "Hi —")

3. **Type inference is weak**:
   ```typescript
   // Current: content.pricing.tiers[0].whatsappMessage
   // Type: string | undefined (no guarantee it exists)
   ```

4. **No safeguards against typos**:
   ```typescript
   // This compiles but breaks at runtime:
   content.pricing.tiers[0].whatsapMessage; // Missing 'p'
   ```

5. **Components don't enforce content structure**:
   - `WhatsAppInput` accepts `prefillText?: string` (optional)
   - But pricing tiers MUST have `whatsappMessage`
   - No type-level enforcement of this relationship

## Proposed Solution

Enhance type safety with **readonly types**, **branded types**, and **compile-time validation**.

### 1. Make Content Immutable

```typescript
// content/types.ts
export interface Content {
  readonly meta: {
    readonly title: string;
    readonly description: string;
    // ... all fields readonly
  };
  readonly hero: {
    readonly logoText: string;
    readonly logoHebrew: string;
    readonly headline: {
      readonly before: string;
      readonly highlight: string;
      readonly after: string;
    };
    // ...
  };
  // ... all nested objects readonly
}
```

Or use `DeepReadonly` helper:

```typescript
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

export type Content = DeepReadonly<{
  meta: { title: string; /* ... */ };
  hero: { /* ... */ };
  // ...
}>;
```

### 2. Add `as const` to Content Exports

```typescript
// content/en.ts
export const en = {
  meta: { /* ... */ },
  hero: { /* ... */ },
  // ...
} as const satisfies Content;

// Now: en.hero.headline is readonly
// Mutation attempt: en.hero.headline = 'Wrong'; // ❌ Type error
```

### 3. Branded Types for WhatsApp Messages

Ensure WhatsApp messages follow a consistent format:

```typescript
// content/types.ts
type WhatsAppMessage = string & { __brand: 'WhatsAppMessage' };

function createWhatsAppMessage(text: string): WhatsAppMessage {
  if (!text.startsWith('Hi — ') && !text.startsWith('היי — ')) {
    throw new Error(`WhatsApp message must start with "Hi — " (got: "${text}")`);
  }
  return text as WhatsAppMessage;
}

// Usage in en.ts:
export const en = {
  hero: {
    whatsappDefaultMessage: createWhatsAppMessage("Hi — I run a business..."),
  },
  pricing: {
    tiers: [
      {
        whatsappMessage: createWhatsAppMessage("Hi — I'd like to book the ₪400 Clarity Session."),
      },
    ],
  },
} as const satisfies Content;
```

### 4. Required Fields Enforcement

Make `whatsappMessage` required on pricing tiers:

```typescript
// content/types.ts
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  badge: string;
  popular?: boolean;
  features: string[];
  whatsappMessage: string; // ❌ Remove optional (?)
}

// Now: Missing whatsappMessage → compile error
```

### 5. Compile-Time Array Length Validation

Use tuples instead of arrays for fixed-length collections:

```typescript
// content/types.ts
export interface Content {
  services: {
    heading: string;
    items: readonly [ServiceItem, ServiceItem, ServiceItem]; // Exactly 3
  };
  pricing: {
    heading: string;
    tiers: readonly [PricingTier, PricingTier, PricingTier]; // Exactly 3
  };
}

// Now: Adding/removing items → compile error
```

### 6. Type-Safe Content Access Helpers

```typescript
// hooks/useContent.ts
import { getContent } from '../content';
import { useLocale } from './useLocale';

export function useContent() {
  const { locale } = useLocale();
  const content = getContent(locale);

  // Type-safe helpers
  const getWhatsAppMessage = (tier: number) => {
    const message = content.pricing.tiers[tier]?.whatsappMessage;
    if (!message) {
      throw new Error(`Missing WhatsApp message for tier ${tier}`);
    }
    return message;
  };

  return {
    content,
    getWhatsAppMessage,
  };
}
```

### 7. Runtime Validation (Development Only)

Add runtime checks in dev mode:

```typescript
// content/index.ts
import { en } from './en';
import { he } from './he';

if (import.meta.env.DEV) {
  // Validate structure matches
  const enKeys = Object.keys(en);
  const heKeys = Object.keys(he);

  const missingInHe = enKeys.filter(k => !heKeys.includes(k));
  if (missingInHe.length > 0) {
    console.error('❌ Hebrew content missing keys:', missingInHe);
  }

  // Validate array lengths
  if (en.services.items.length !== he.services.items.length) {
    console.error('❌ Service items length mismatch:', {
      en: en.services.items.length,
      he: he.services.items.length,
    });
  }

  // Validate required WhatsApp messages
  en.pricing.tiers.forEach((tier, idx) => {
    if (!tier.whatsappMessage) {
      console.error(`❌ Missing whatsappMessage for tier ${idx}: ${tier.name}`);
    }
  });
}

export { en, he };
```

### 8. ESLint Rule for Content Mutations

```javascript
// .eslintrc.js
module.exports = {
  rules: {
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [],
    }],
    'functional/immutable-data': 'error', // Requires eslint-plugin-functional
  },
};
```

## Implementation Checklist

### Phase 1: Make Content Readonly (Low effort)
- [ ] Add `DeepReadonly` type helper
- [ ] Apply to `Content` interface
- [ ] Add `as const satisfies Content` to `en.ts` and `he.ts`
- [ ] Verify TypeScript catches mutation attempts
- [ ] Run tests: `npm run typecheck`

### Phase 2: Enforce Required Fields (Low effort)
- [ ] Remove `?` from `whatsappMessage` in `PricingTier`
- [ ] Verify compile error if message is missing
- [ ] Fix any violations in `en.ts` and `he.ts`

### Phase 3: Branded Types (Medium effort)
- [ ] Create `WhatsAppMessage` branded type
- [ ] Create `createWhatsAppMessage()` factory
- [ ] Update `en.ts` and `he.ts` to use factory
- [ ] Update tests to use factory

### Phase 4: Runtime Validation (Low effort)
- [ ] Add dev-mode validation to `content/index.ts`
- [ ] Test by intentionally breaking structure
- [ ] Verify console errors appear

### Phase 5: ESLint Rules (Optional)
- [ ] Install `eslint-plugin-functional`
- [ ] Add immutability rules
- [ ] Fix any violations

## Success Criteria

- [ ] Content objects are readonly (mutation attempts fail at compile time)
- [ ] Missing `whatsappMessage` on pricing tier → compile error
- [ ] Array length mismatches → compile error (if using tuples)
- [ ] Dev mode shows warnings for structural issues
- [ ] All tests pass: `npm run test`
- [ ] TypeScript compiles: `npm run typecheck`

## Benefits

1. **Prevents runtime errors**: Mutations caught at compile time
2. **Better IDE autocomplete**: Exact types for all content fields
3. **Refactoring safety**: Renaming/removing keys → immediate compile errors
4. **Developer experience**: Clear error messages for violations

## Trade-offs

**Pros:**
- Stronger type safety
- Catches errors earlier
- Better documentation via types

**Cons:**
- Slightly more verbose (branded types, factories)
- Tuple-based arrays are less flexible (can't easily add/remove items)
- Runtime validation adds dev-mode overhead (minimal)

**Recommendation:** Implement Phases 1-4 (readonly, required fields, runtime validation). Skip tuples unless fixed-length arrays are a hard requirement.

## Future Enhancements

1. **Zod schema validation**: Replace TypeScript types with Zod schemas for runtime validation
2. **Content schema versioning**: Track content structure changes over time
3. **Translation key diffing**: Show which keys changed between deploys
4. **Auto-generate types from content**: Infer types from actual content files
