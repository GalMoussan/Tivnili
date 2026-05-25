import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
import { ServicesSection } from '../ServicesSection';

// T008 — Services Section

describe('T008 — ServicesSection', () => {
  // Acceptance: "3 cards render with correct titles and descriptions"
  it('renders 3 service cards with correct content', () => {
    render(<ServicesSection />);
    expect(screen.getByText('AI for Your Role')).toBeInTheDocument();
    expect(screen.getByText('AI for Your Business')).toBeInTheDocument();
    expect(screen.getByText('The Clarity Session')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<ServicesSection />);
    expect(screen.getByText(/makes you sharper/)).toBeInTheDocument();
    expect(screen.getByText(/we push it outward/)).toBeInTheDocument();
    expect(screen.getByText(/One focused session/)).toBeInTheDocument();
  });
});
