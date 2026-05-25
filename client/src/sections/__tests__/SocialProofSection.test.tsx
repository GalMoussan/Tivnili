import { describe, it, expect } from 'vitest';
import { render, screen } from '../../__tests__/test-utils';
import { SocialProofSection } from '../SocialProofSection';

// T014 — Social Proof Section

describe('T014 — SocialProofSection', () => {
  // Acceptance: "Testimonial bubbles render with WhatsApp styling"
  // Acceptance: "Each bubble shows platform label and message"
  it('renders testimonial bubbles with WhatsApp labels', () => {
    render(<SocialProofSection />);
    const whatsappLabels = screen.getAllByText('WhatsApp');
    expect(whatsappLabels.length).toBeGreaterThanOrEqual(2);
  });

  it('renders founding client messages', () => {
    render(<SocialProofSection />);
    expect(screen.getByText(/taking on a small number of founding clients/)).toBeInTheDocument();
    expect(screen.getByText(/No case studies here yet/)).toBeInTheDocument();
  });
});
