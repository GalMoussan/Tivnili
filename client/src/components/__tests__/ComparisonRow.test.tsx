import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComparisonRow } from '../ComparisonRow';

// T009 — Comparison Section

describe('T009 — ComparisonRow', () => {
  // Acceptance: "5 comparison rows render with correct Old Way / Tivnili Way text"
  it('renders old way and new way text', () => {
    render(
      <ComparisonRow oldWay="Hire an agency" newWay="Talk to one person" />
    );
    expect(screen.getByText('Hire an agency')).toBeInTheDocument();
    expect(screen.getByText('Talk to one person')).toBeInTheDocument();
  });

  // Acceptance: "Old Way text appears muted or struck-through"
  it('applies muted/struck-through styling to old way text', () => {
    render(
      <ComparisonRow oldWay="Wait 6–8 weeks" newWay="Live in 2 weeks" />
    );
    const oldWayEl = screen.getByText('Wait 6–8 weeks');
    expect(oldWayEl.className).toMatch(/line-through|opacity|text-smoke|muted/);
  });

  // Acceptance: "Tivnili Way text uses amber accent"
  it('applies amber styling to Tivnili way text', () => {
    render(
      <ComparisonRow oldWay="Pay $5,000–$15,000" newWay="Pay $500–$2,000" />
    );
    const newWayEl = screen.getByText('Pay $500–$2,000');
    expect(newWayEl.className).toMatch(/amber/);
  });
});
