import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ManifestoSection } from '../ManifestoSection';

// T011 — Manifesto Section

describe('T011 — ManifestoSection', () => {
  // Acceptance: "Text is legible and well-spaced"
  it('renders manifesto text lines', () => {
    render(<ManifestoSection />);
    expect(screen.getByText(/care about this more than is probably normal/)).toBeInTheDocument();
    expect(screen.getByText(/Built with intent/)).toBeInTheDocument();
    expect(screen.getByText(/Precision is a form of respect/)).toBeInTheDocument();
  });

  // Acceptance: "'אמת' renders large and in amber at the end"
  it('renders emet in amber', () => {
    render(<ManifestoSection />);
    const emet = screen.getByText('אמת');
    expect(emet).toBeInTheDocument();
    expect(emet.className).toMatch(/amber/);
  });

  // Acceptance: "RTL rendering is correct for 'אמת'"
  it('has lang="he" on Hebrew text', () => {
    render(<ManifestoSection />);
    const emet = screen.getByText('אמת');
    expect(emet.closest('[lang="he"]')).toBeTruthy();
  });
});
