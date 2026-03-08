import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialProofSection } from '../SocialProofSection';

// T014 — Social Proof Section

describe('T014 — SocialProofSection', () => {
  // Acceptance: "Testimonial bubbles render with WhatsApp styling"
  // Acceptance: "Each bubble shows platform label, name, and message"
  it('renders testimonial bubbles with WhatsApp labels', () => {
    render(<SocialProofSection />);
    const whatsappLabels = screen.getAllByText('WhatsApp');
    expect(whatsappLabels.length).toBeGreaterThanOrEqual(3);
  });

  it('renders client names and messages', () => {
    render(<SocialProofSection />);
    expect(screen.getByText(/Sarah M/)).toBeInTheDocument();
    expect(screen.getByText(/Finally someone who actually listens/)).toBeInTheDocument();
  });
});
