import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
import { Footer } from '../Footer';

// T015 — Final CTA + Footer

describe('T015 — Footer', () => {
  // Acceptance: "Footer displays logo, tagline, and navigation links"
  it('renders logo wordmark', () => {
    render(<Footer />);
    const logo = screen.getByAltText('תִּבְנִילִי');
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');
    expect(logo).toHaveAttribute('src', '/wordmark-hebrew.png');
  });

  it('renders tagline', () => {
    render(<Footer />);
    expect(screen.getByText(/AI integration for the people who run things/)).toBeInTheDocument();
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
