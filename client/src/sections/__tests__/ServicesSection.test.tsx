import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ServicesSection } from '../ServicesSection';

// T008 — Services Section

describe('T008 — ServicesSection', () => {
  // Acceptance: "3 cards render with correct titles and descriptions"
  it('renders 3 service cards with correct content', () => {
    render(<ServicesSection />);
    expect(screen.getByText('Websites & Landing Pages')).toBeInTheDocument();
    expect(screen.getByText('AI Tools & Automations')).toBeInTheDocument();
    expect(screen.getByText('The Blueprint')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<ServicesSection />);
    expect(screen.getByText(/looking like it means business/)).toBeInTheDocument();
    expect(screen.getByText(/work the night shift/)).toBeInTheDocument();
    expect(screen.getByText(/You come with a mess/)).toBeInTheDocument();
  });
});
