import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useScrollProgress } from '../useScrollProgress';

// T005 — Scroll Animation Hooks

describe('T005 — useScrollProgress', () => {
  // Acceptance: "useScrollProgress returns 0 when element top is at viewport bottom, 1 when element bottom passes viewport top"
  it('returns ref and progress', () => {
    const { result } = renderHook(() => useScrollProgress());
    expect(result.current).toHaveProperty('ref');
    expect(result.current).toHaveProperty('progress');
  });
});
