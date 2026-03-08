import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PortfolioSection } from '../PortfolioSection';

// T010 — Portfolio Section

describe('T010 — PortfolioSection', () => {
  // Acceptance: "Featured CRM card displays prominently at top"
  it('renders featured CRM project', () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/Australian Broker CRM/)).toBeInTheDocument();
  });

  // Acceptance: "3 Industry Engine cards in a row below"
  it('renders industry engine cards', () => {
    render(<PortfolioSection />);
    expect(screen.getByText('RestaurantLux')).toBeInTheDocument();
    expect(screen.getByText('LocalPro')).toBeInTheDocument();
    expect(screen.getByText('BeautyPlace')).toBeInTheDocument();
  });

  // Acceptance: "BitJourney card below Industry Engines"
  it('renders BitJourney card', () => {
    render(<PortfolioSection />);
    expect(screen.getByText('BitJourney')).toBeInTheDocument();
  });
});
