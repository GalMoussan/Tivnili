import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FinalCTASection } from '../FinalCTASection';

// T015 — Final CTA + Footer

describe('T015 — FinalCTASection', () => {
  // Acceptance: "Headline matches hero with amber 'finally'"
  it('renders headline with amber finally', () => {
    render(<FinalCTASection />);
    expect(screen.getByText(/Your business/)).toBeInTheDocument();
    const finallyEl = screen.getByText('finally');
    expect(finallyEl.className).toMatch(/amber/);
  });

  // Acceptance: "WhatsApp input is functional"
  it('renders WhatsApp input', () => {
    render(<FinalCTASection />);
    expect(screen.getByPlaceholderText('Tell me what your business needs →')).toBeInTheDocument();
  });

  // Acceptance: "Supporting text appears below input"
  it('renders supporting text', () => {
    render(<FinalCTASection />);
    expect(screen.getByText(/Usually responds within the hour/)).toBeInTheDocument();
  });
});
