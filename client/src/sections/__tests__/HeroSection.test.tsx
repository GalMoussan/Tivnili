import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '../HeroSection';

// T006 — Hero Section

describe('T006 — HeroSection', () => {
  // Acceptance: "Logo displays 'tivnili' with 'תִּבְנִילִי' below"
  it('renders logo text', () => {
    render(<HeroSection />);
    expect(screen.getByText('tivnili')).toBeInTheDocument();
    expect(screen.getByText('תִּבְנִילִי')).toBeInTheDocument();
  });

  // Acceptance: "'finally' is highlighted in amber in the headline"
  it('renders headline with amber-highlighted "finally"', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Your business/)).toBeInTheDocument();
    const finallyEl = screen.getByText('finally');
    expect(finallyEl.className).toMatch(/amber/);
  });

  // Acceptance: "WhatsApp input is present and functional"
  it('renders WhatsApp input', () => {
    render(<HeroSection />);
    expect(screen.getByPlaceholderText('Tell me what your business needs →')).toBeInTheDocument();
  });

  // Acceptance: "Hero fills full viewport height"
  it('renders with min-h-screen', () => {
    const { container } = render(<HeroSection />);
    const section = container.firstElementChild;
    expect(section?.className).toMatch(/min-h-screen/);
  });
});
