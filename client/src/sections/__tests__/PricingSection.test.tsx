import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
import { PricingSection } from '../PricingSection';

// T013 — Pricing Section

describe('T013 — PricingSection', () => {
  // Acceptance: "3 pricing tiers render with correct names, prices, descriptions"
  it('renders all 3 pricing tiers', () => {
    render(<PricingSection />);
    expect(screen.getByText('The Clarity Session')).toBeInTheDocument();
    expect(screen.getByText('The Integration')).toBeInTheDocument();
    expect(screen.getByText('The Complete System')).toBeInTheDocument();
  });

  it('renders prices', () => {
    render(<PricingSection />);
    expect(screen.getByText('₪400')).toBeInTheDocument();
    expect(screen.getByText(/₪1,100/)).toBeInTheDocument();
    expect(screen.getByText(/₪2,000/)).toBeInTheDocument();
  });

  // Acceptance: '"Most popular" badge is visually prominent on The Integration'
  it('shows Most popular badge on The Integration', () => {
    render(<PricingSection />);
    expect(screen.getByText('Most popular')).toBeInTheDocument();
  });
});
