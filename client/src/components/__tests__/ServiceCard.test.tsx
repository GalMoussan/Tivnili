import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ServiceCard } from '../ServiceCard';

// T008 — Services Section

describe('T008 — ServiceCard', () => {
  // Acceptance: "3 cards render with correct titles and descriptions"
  it('renders title and description', () => {
    render(
      <ServiceCard
        title="Websites & Landing Pages"
        description="Your business online, looking like it means business."
      />
    );
    expect(screen.getByText('Websites & Landing Pages')).toBeInTheDocument();
    expect(screen.getByText('Your business online, looking like it means business.')).toBeInTheDocument();
  });

  // Acceptance: "Card backgrounds contrast with section background"
  it('has dark card background class', () => {
    const { container } = render(
      <ServiceCard title="Test" description="Test desc" />
    );
    expect(container.innerHTML).toMatch(/navy-800|bg-/);
  });
});
