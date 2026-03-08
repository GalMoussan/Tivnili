import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComparisonSection } from '../ComparisonSection';

// T009 — Comparison Section

describe('T009 — ComparisonSection', () => {
  // Acceptance: "5 comparison rows render with correct Old Way / Tivnili Way text"
  it('renders all 5 comparison rows', () => {
    render(<ComparisonSection />);
    expect(screen.getByText('Hire an agency')).toBeInTheDocument();
    expect(screen.getByText('Talk to one person')).toBeInTheDocument();
    expect(screen.getByText(/Wait 6–8 weeks/)).toBeInTheDocument();
    expect(screen.getByText(/Live in 2 weeks/)).toBeInTheDocument();
    expect(screen.getByText(/Pay \$5,000–\$15,000/)).toBeInTheDocument();
    expect(screen.getByText(/Pay \$500–\$2,000/)).toBeInTheDocument();
  });

  // Acceptance: "'אמת — This is just honest.' subtext appears at bottom"
  it('renders the emet subtext', () => {
    render(<ComparisonSection />);
    expect(screen.getByText(/אמת/)).toBeInTheDocument();
    expect(screen.getByText(/This is just honest/)).toBeInTheDocument();
  });
});
