import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Container } from '../Container';

// T004 — Shared Components

describe('T004 — Container', () => {
  // Acceptance: "Container centers content with max-width and responsive horizontal padding"
  it('renders children within a centered max-width container', () => {
    render(<Container><p>Test content</p></Container>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
    const container = screen.getByText('Test content').closest('div');
    expect(container).toBeTruthy();
    expect(container?.className).toMatch(/max-w/);
    expect(container?.className).toMatch(/mx-auto/);
    expect(container?.className).toMatch(/px-/);
  });
});
