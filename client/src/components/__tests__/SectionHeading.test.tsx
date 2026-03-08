import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SectionHeading } from '../SectionHeading';

// T004 — Shared Components

describe('T004 — SectionHeading', () => {
  // Acceptance: "SectionHeading renders heading text with optional amber-highlighted word"
  it('renders heading text', () => {
    render(<SectionHeading>What I Build</SectionHeading>);
    expect(screen.getByRole('heading')).toHaveTextContent('What I Build');
  });

  it('renders with subtitle when provided', () => {
    render(<SectionHeading subtitle="subtitle text">Heading</SectionHeading>);
    expect(screen.getByText('subtitle text')).toBeInTheDocument();
  });
});
