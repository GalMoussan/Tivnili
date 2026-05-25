import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
import { PortfolioSection } from '../PortfolioSection';

// T010 — Portfolio Section

describe('T010 — PortfolioSection', () => {
  // Acceptance: "Stats section displays industry data"
  it('renders industry stats', () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/5–15 hours\/week/)).toBeInTheDocument();
    expect(screen.getByText(/78%/)).toBeInTheDocument();
    expect(screen.getByText(/1–3 months/)).toBeInTheDocument();
  });

  // Acceptance: "Use cases showcase AI integration examples"
  it('renders use case examples', () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/The Owner's Daily Brief/)).toBeInTheDocument();
    expect(screen.getByText(/Quote & Follow-Up on Autopilot/)).toBeInTheDocument();
    expect(screen.getByText(/Ops That Run Themselves/)).toBeInTheDocument();
    expect(screen.getByText(/Your Business, Always On/)).toBeInTheDocument();
  });

  // Acceptance: "Stats subline indicates founding client opportunity"
  it('renders founding client message', () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/These are industry numbers — not mine/)).toBeInTheDocument();
  });
});
