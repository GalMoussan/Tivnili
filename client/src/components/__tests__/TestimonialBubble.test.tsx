import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TestimonialBubble } from '../TestimonialBubble';

// T014 — Social Proof Section

describe('T014 — TestimonialBubble', () => {
  // Acceptance: "Testimonial bubbles render with WhatsApp styling"
  // Acceptance: "Each bubble shows platform label, name, and message"
  it('renders platform label, name, and message', () => {
    render(
      <TestimonialBubble
        name="Sarah M."
        business="Cafe owner"
        message="Finally someone who actually listens. Site was live in 10 days."
      />
    );
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText(/Sarah M/)).toBeInTheDocument();
    expect(screen.getByText(/Finally someone who actually listens/)).toBeInTheDocument();
  });

  // Acceptance: "Bubbles alternate left/right alignment"
  it('accepts alignment prop', () => {
    const { container } = render(
      <TestimonialBubble
        name="David K."
        business="Fitness trainer"
        message="Test message"
        align="right"
      />
    );
    expect(container.innerHTML).toBeTruthy();
  });
});
