import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
import { ComparisonSection } from '../ComparisonSection';

// T009 — Comparison Section

describe('T009 — ComparisonSection', () => {
  // Acceptance: "5 comparison rows render with correct Old Way / Tivnili Way text"
  it('renders all 5 comparison rows', () => {
    render(<ComparisonSection />);
    expect(screen.getByText(/Hire a consultant for a 3-month "AI strategy" deck/)).toBeInTheDocument();
    expect(screen.getByText(/Start integrating in week one/)).toBeInTheDocument();
    expect(screen.getByText(/Sit through a generic AI workshop/)).toBeInTheDocument();
    expect(screen.getByText(/Get a system built around your role/)).toBeInTheDocument();
    expect(screen.getByText(/Pay for a big AI project that gathers dust/)).toBeInTheDocument();
    expect(screen.getByText(/Pay for one thing that actually runs/)).toBeInTheDocument();
  });

  // Acceptance: "'אמת — This is just honest.' subtext appears at bottom"
  it('renders the emet subtext', () => {
    render(<ComparisonSection />);
    expect(screen.getByText(/אמת/)).toBeInTheDocument();
    expect(screen.getByText(/This is just honest/)).toBeInTheDocument();
  });
});
