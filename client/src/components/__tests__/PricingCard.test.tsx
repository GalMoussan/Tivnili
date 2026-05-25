import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PricingCard } from '../PricingCard';

// T013 — Pricing Section

describe('T013 — PricingCard', () => {
  // Acceptance: "3 pricing tiers render with correct names, prices, descriptions"
  it('renders tier name, price, and description', () => {
    render(
      <PricingCard
        name="The Foundation"
        price="$500"
        description="One page. Full power. No surprises."
        badge="Fixed scope. No upsells."
        features={['Single landing page', 'Contact form']}
        ctaText="Let's talk"
      />
    );
    expect(screen.getByText('The Foundation')).toBeInTheDocument();
    expect(screen.getByText('$500')).toBeInTheDocument();
    expect(screen.getByText('One page. Full power. No surprises.')).toBeInTheDocument();
  });

  // Acceptance: '"Most popular" badge is visually prominent on The Engine'
  it('renders badge text', () => {
    render(
      <PricingCard
        name="The Engine"
        price="$1,000–$1,200"
        description="Stop paying someone to do manually what this system does while you sleep."
        badge="Most popular"
        features={['Multi-page site', 'AI automation']}
        ctaText="Let's talk"
      />
    );
    expect(screen.getByText('Most popular')).toBeInTheDocument();
  });

  // Acceptance: "Other badges display on Foundation and Factory"
  it('renders custom badge', () => {
    render(
      <PricingCard
        name="The Factory"
        price="$1,500–$2,000"
        description="The full build."
        badge="Full access"
        features={['Full custom platform']}
        ctaText="Let's talk"
      />
    );
    expect(screen.getByText('Full access')).toBeInTheDocument();
  });
});
