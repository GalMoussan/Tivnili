import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '../Footer';

// T015 — Final CTA + Footer

describe('T015 — Footer', () => {
  // Acceptance: "Footer displays logo, tagline, and navigation links"
  it('renders logo and Hebrew text', () => {
    render(<Footer />);
    expect(screen.getByText('tivnili')).toBeInTheDocument();
    expect(screen.getByText('תִּבְנִילִי')).toBeInTheDocument();
  });

  it('renders tagline', () => {
    render(<Footer />);
    expect(screen.getByText(/Built with intent/)).toBeInTheDocument();
  });

  // Acceptance: "Navigation links smooth-scroll to sections"
  it('renders navigation links', () => {
    render(<Footer />);
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
  });
});
