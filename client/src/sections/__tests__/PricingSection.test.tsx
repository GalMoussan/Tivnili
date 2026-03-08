import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PricingSection } from '../PricingSection';

// T013 — Pricing Section

describe('T013 — PricingSection', () => {
  // Acceptance: "3 pricing tiers render with correct names, prices, descriptions"
  it('renders all 3 pricing tiers', () => {
    render(<PricingSection />);
    expect(screen.getByText('The Foundation')).toBeInTheDocument();
    expect(screen.getByText('The Engine')).toBeInTheDocument();
    expect(screen.getByText('The Factory')).toBeInTheDocument();
  });

  it('renders prices', () => {
    render(<PricingSection />);
    expect(screen.getByText('$500')).toBeInTheDocument();
    expect(screen.getByText(/\$1,000/)).toBeInTheDocument();
    expect(screen.getByText(/\$1,500/)).toBeInTheDocument();
  });

  // Acceptance: '"Most popular" badge is visually prominent on The Engine'
  it('shows Most popular badge on The Engine', () => {
    render(<PricingSection />);
    expect(screen.getByText('Most popular')).toBeInTheDocument();
  });
});
