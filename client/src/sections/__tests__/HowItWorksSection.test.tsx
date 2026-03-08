import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HowItWorksSection } from '../HowItWorksSection';

// T012 — How It Works Section

describe('T012 — HowItWorksSection', () => {
  // Acceptance: "3 steps render with correct numbers, titles, and descriptions"
  it('renders 3 numbered steps', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('02')).toBeInTheDocument();
    expect(screen.getByText('03')).toBeInTheDocument();
  });

  it('renders step titles', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText(/You describe it/)).toBeInTheDocument();
    expect(screen.getByText(/I build in the open/)).toBeInTheDocument();
    expect(screen.getByText(/You launch it/)).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText(/WhatsApp, voice note, napkin sketch/)).toBeInTheDocument();
    expect(screen.getByText(/You see progress, not surprises/)).toBeInTheDocument();
    expect(screen.getByText(/still here after/)).toBeInTheDocument();
  });
});
