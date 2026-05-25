# Plan: Content Validation Automation

**Priority**: High
**Impact**: Prevents runtime errors, catches content mismatches during development
**Effort**: Medium (2-3 hours)

## Problem

The i18n content layer has two files (`en.ts` and `he.ts`) that must maintain identical structure (same keys, same array lengths, same nesting). Currently:

1. Structure mismatches are only caught when:
   - TypeScript compiles (type errors)
   - Tests fail (content assertions fail)
   - Manual QA catches visual bugs (missing text, layout breaks)

2. Subtle issues slip through:
   - Hebrew array has 3 items, English has 4 items → no type error, but missing content
   - WhatsApp messages don't match pricing tier structure → broken CTAs
   - Mixed-direction text (Hebrew sentences with English words) has no validation
   - Hebrew content with untranslated English placeholder text (e.g., "service name [HE]")

3. During Phase 5, 18 tests failed because content structure diverged between phases 3 and 4

## Proposed Solution

Create a build-time content validator that runs BEFORE TypeScript compilation:

### 1. Structure Validator (`scripts/validate-content.ts`)

```typescript
// Validates that en.ts and he.ts have identical structure
import { en } from '../client/src/content/en';
import { he } from '../client/src/content/he';

type ValidationError = {
  path: string;
  issue: string;
  severity: 'error' | 'warning';
};

function validateStructure(
  enValue: any,
  heValue: any,
  path: string = 'root'
): ValidationError[] {
  const errors: ValidationError[] = [];

  // Check arrays have same length
  if (Array.isArray(enValue) && Array.isArray(heValue)) {
    if (enValue.length !== heValue.length) {
      errors.push({
        path,
        issue: `Array length mismatch: EN has ${enValue.length}, HE has ${heValue.length}`,
        severity: 'error',
      });
    }
  }

  // Check objects have same keys
  if (typeof enValue === 'object' && typeof heValue === 'object') {
    const enKeys = Object.keys(enValue);
    const heKeys = Object.keys(heValue);

    const missingInHe = enKeys.filter(k => !heKeys.includes(k));
    const extraInHe = heKeys.filter(k => !enKeys.includes(k));

    if (missingInHe.length > 0) {
      errors.push({
        path,
        issue: `Missing keys in Hebrew: ${missingInHe.join(', ')}`,
        severity: 'error',
      });
    }

    if (extraInHe.length > 0) {
      errors.push({
        path,
        issue: `Extra keys in Hebrew: ${extraInHe.join(', ')}`,
        severity: 'error',
      });
    }

    // Recurse into nested objects
    for (const key of enKeys) {
      if (heKeys.includes(key)) {
        errors.push(...validateStructure(enValue[key], heValue[key], `${path}.${key}`));
      }
    }
  }

  return errors;
}

const errors = validateStructure(en, he);

if (errors.length > 0) {
  console.error('\n❌ Content validation failed:\n');
  errors.forEach(err => {
    console.error(`  [${err.severity.toUpperCase()}] ${err.path}: ${err.issue}`);
  });
  process.exit(1);
} else {
  console.log('✅ Content structure validation passed');
}
```

### 2. Translation Completeness Validator

Detect untranslated placeholders like `[HE]` or English text in Hebrew content:

```typescript
function validateTranslation(value: any, path: string = 'root'): ValidationError[] {
  const errors: ValidationError[] = [];

  if (typeof value === 'string') {
    // Check for [HE] placeholder
    if (value.includes('[HE]')) {
      errors.push({
        path,
        issue: 'Untranslated placeholder: [HE]',
        severity: 'warning',
      });
    }

    // Check for Latin characters in Hebrew content (heuristic)
    // Allow brand names, URLs, numbers
    const hasLatin = /[a-zA-Z]{4,}/.test(value); // 4+ consecutive Latin chars
    if (hasLatin && !value.includes('http') && !value.includes('WhatsApp')) {
      errors.push({
        path,
        issue: `Possible untranslated English: "${value.substring(0, 50)}..."`,
        severity: 'warning',
      });
    }
  }

  if (typeof value === 'object' && value !== null) {
    Object.entries(value).forEach(([key, val]) => {
      errors.push(...validateTranslation(val, `${path}.${key}`));
    });
  }

  if (Array.isArray(value)) {
    value.forEach((item, idx) => {
      errors.push(...validateTranslation(item, `${path}[${idx}]`));
    });
  }

  return errors;
}
```

### 3. WhatsApp Message Validator

Ensure all pricing tiers have matching WhatsApp messages:

```typescript
function validateWhatsAppMessages(content: Content): ValidationError[] {
  const errors: ValidationError[] = [];

  // Ensure every pricing tier has whatsappMessage
  content.pricing.tiers.forEach((tier, idx) => {
    if (!tier.whatsappMessage) {
      errors.push({
        path: `pricing.tiers[${idx}]`,
        issue: `Missing whatsappMessage for tier "${tier.name}"`,
        severity: 'error',
      });
    }
  });

  // Ensure hero has default message
  if (!content.hero.whatsappDefaultMessage) {
    errors.push({
      path: 'hero.whatsappDefaultMessage',
      issue: 'Missing default WhatsApp message',
      severity: 'error',
    });
  }

  return errors;
}
```

### 4. Integration with Build Pipeline

Update `package.json`:

```json
{
  "scripts": {
    "validate:content": "tsx scripts/validate-content.ts",
    "typecheck": "npm run validate:content && tsc -b",
    "build": "npm run typecheck && vite build",
    "test": "npm run validate:content && vitest"
  }
}
```

### 5. Pre-commit Hook (Optional)

Add to `.husky/pre-commit`:

```bash
#!/bin/sh
npm run validate:content
```

## Benefits

1. **Early detection**: Catches content issues during development, not in production
2. **Fast feedback**: Runs in <1 second, doesn't slow down builds
3. **Prevents test failures**: Catches array length mismatches before tests run
4. **Translation QA**: Flags incomplete Hebrew translations automatically
5. **WhatsApp integration safety**: Ensures all CTAs have matching messages

## Implementation Checklist

- [ ] Create `scripts/validate-content.ts`
- [ ] Implement structure validator
- [ ] Implement translation completeness validator
- [ ] Implement WhatsApp message validator
- [ ] Add `validate:content` script to `package.json`
- [ ] Update `typecheck`, `build`, `test` scripts to run validation first
- [ ] Write tests for validator logic
- [ ] Document in `client/README.md`
- [ ] (Optional) Add pre-commit hook

## Success Criteria

- [ ] Validator detects intentional structure mismatches (e.g., delete a key from `he.ts`)
- [ ] Validator detects array length mismatches (e.g., add item to `en.services.items`, not `he.services.items`)
- [ ] Validator flags `[HE]` placeholders
- [ ] Validator catches missing WhatsApp messages
- [ ] Build fails when content validation fails
- [ ] Tests don't run when content validation fails

## Future Enhancements

1. **Visual diff tool**: Generate side-by-side HTML comparison of EN/HE content
2. **Translation progress tracker**: Show % translated per section
3. **Mixed-direction text linter**: Flag Hebrew text without `lang="he"` attribute
4. **RTL CSS validator**: Ensure no directional properties (left/right) in Tailwind classes
