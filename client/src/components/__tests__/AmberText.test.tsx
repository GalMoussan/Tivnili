import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AmberText } from '../AmberText';

// T004 — Shared Components

describe('T004 — AmberText', () => {
  // Acceptance: "AmberText applies amber-500 color to wrapped text"
  it('renders text with amber color class', () => {
    render(<AmberText>finally</AmberText>);
    const element = screen.getByText('finally');
    expect(element).toBeInTheDocument();
    expect(element.className).toMatch(/amber/);
  });
});
