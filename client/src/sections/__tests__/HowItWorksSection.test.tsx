import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
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
    expect(screen.getByText(/We talk. I listen./)).toBeInTheDocument();
    expect(screen.getByText(/I attack the biggest bottleneck first./)).toBeInTheDocument();
    expect(screen.getByText(/It works. Then we expand./)).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    render(<HowItWorksSection />);
    expect(screen.getByText(/your day, your decisions, your bottlenecks/)).toBeInTheDocument();
    expect(screen.getByText(/highest-impact integration/)).toBeInTheDocument();
    expect(screen.getByText(/We grow your AI layer at your pace/)).toBeInTheDocument();
  });
});
