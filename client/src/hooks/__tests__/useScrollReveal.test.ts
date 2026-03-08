import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useScrollReveal } from '../useScrollReveal';

// T005 — Scroll Animation Hooks

describe('T005 — useScrollReveal', () => {
  // Acceptance: "useScrollReveal triggers when element enters viewport (configurable threshold)"
  it('returns ref and isInView', () => {
    const { result } = renderHook(() => useScrollReveal());
    expect(result.current).toHaveProperty('ref');
    expect(result.current).toHaveProperty('isInView');
  });

  it('initially reports not in view', () => {
    const { result } = renderHook(() => useScrollReveal());
    expect(result.current.isInView).toBe(false);
  });
});
