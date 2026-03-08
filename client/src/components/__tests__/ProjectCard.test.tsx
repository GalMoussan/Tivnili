import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectCard } from '../ProjectCard';

// T010 — Portfolio Section

describe('T010 — ProjectCard', () => {
  // Acceptance: "Hover reveals result line on each card"
  it('renders project name and description', () => {
    render(
      <ProjectCard
        name="Australian Broker CRM"
        description="Custom CRM. Another country. Built from scratch."
        result="Still running."
      />
    );
    expect(screen.getByText('Australian Broker CRM')).toBeInTheDocument();
  });

  it('shows result line', () => {
    render(
      <ProjectCard
        name="BitJourney"
        description="Clean. Fast."
        result="Zero bloat."
      />
    );
    expect(screen.getByText('Zero bloat.')).toBeInTheDocument();
  });
});
