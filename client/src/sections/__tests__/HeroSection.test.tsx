import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
import { HeroSection } from '../HeroSection';

// T006 — Hero Section

describe('T006 — HeroSection', () => {
  // Acceptance: "Logo displays wordmark image"
  it('renders logo wordmark', () => {
    render(<HeroSection />);
    const logo = screen.getByAltText('tivnili');
    expect(logo).toBeInTheDocument();
    expect(logo.tagName).toBe('IMG');
    expect(logo).toHaveAttribute('src', '/wordmark-tivnili.png');
  });

  // Acceptance: "'smarter' is highlighted in amber in the headline"
  it('renders headline with amber-highlighted "smarter"', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Your business/)).toBeInTheDocument();
    const smarterEl = screen.getByText('smarter');
    expect(smarterEl.className).toMatch(/amber/);
  });

  // Acceptance: "WhatsApp input is present and functional"
  it('renders WhatsApp input', () => {
    render(<HeroSection />);
    expect(screen.getByPlaceholderText('Tell me how you run your business →')).toBeInTheDocument();
  });

  // Acceptance: "Hero fills full viewport height"
  it('renders with min-h-screen', () => {
    const { container } = render(<HeroSection />);
    const section = container.firstElementChild;
    expect(section?.className).toMatch(/min-h-screen/);
  });
});
