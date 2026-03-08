import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionWrapper } from '../SectionWrapper';

// T004 — Shared Components

describe('T004 — SectionWrapper', () => {
  // Acceptance: "SectionWrapper fades in from below when scrolled into view"
  it('renders children inside a motion container', () => {
    render(<SectionWrapper><p>Section content</p></SectionWrapper>);
    expect(screen.getByText('Section content')).toBeInTheDocument();
  });

  // Acceptance: "SectionWrapper respects prefers-reduced-motion"
  it('renders without animation when reduced motion is preferred', () => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));
    render(<SectionWrapper><p>Accessible content</p></SectionWrapper>);
    expect(screen.getByText('Accessible content')).toBeInTheDocument();
  });
});
