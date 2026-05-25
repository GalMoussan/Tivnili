// Phase 1b — i18n Infrastructure Tests
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useContent } from '../useContent';
import { useLocale } from '../useLocale';

// Mock useLocale hook
vi.mock('../useLocale', () => ({
  useLocale: vi.fn(),
}));

describe('useContent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns English content when locale is "en"', () => {
    // Mock useLocale to return 'en'
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: vi.fn(),
    });

    const { result } = renderHook(() => useContent());

    expect(result.current.content.hero.headline.before).toBe('Your business, run');
    expect(result.current.content.hero.headline.highlight).toBe('smarter');
    expect(result.current.content.hero.headline.after).toBe('.');
    expect(result.current.content.nav.services).toBe('Services');
  });

  it('returns Hebrew content when locale is "he"', () => {
    // Mock useLocale to return 'he'
    vi.mocked(useLocale).mockReturnValue({
      locale: 'he',
      setLocale: vi.fn(),
      toggleLocale: vi.fn(),
    });

    const { result } = renderHook(() => useContent());

    // Hebrew content should be different from English
    expect(result.current.content.hero.headline.before).not.toBe('Your business,');
    expect(result.current.content.nav.services).not.toBe('Services');
  });

  it('content structure matches type definition for English', () => {
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: vi.fn(),
    });

    const { result } = renderHook(() => useContent());
    const content = result.current.content;

    // Verify top-level structure
    expect(content).toHaveProperty('meta');
    expect(content).toHaveProperty('nav');
    expect(content).toHaveProperty('hero');
    expect(content).toHaveProperty('services');
    expect(content).toHaveProperty('comparison');
    expect(content).toHaveProperty('portfolio');
    expect(content).toHaveProperty('socialProof');
    expect(content).toHaveProperty('manifesto');
    expect(content).toHaveProperty('howItWorks');
    expect(content).toHaveProperty('pricing');
    expect(content).toHaveProperty('finalCta');
    expect(content).toHaveProperty('footer');

    // Verify meta structure
    expect(content.meta).toHaveProperty('title');
    expect(content.meta).toHaveProperty('description');
    expect(content.meta).toHaveProperty('ogTitle');

    // Verify nav structure
    expect(content.nav).toHaveProperty('services');
    expect(content.nav).toHaveProperty('work');
    expect(content.nav).toHaveProperty('pricing');

    // Verify hero structure
    expect(content.hero).toHaveProperty('logoText');
    expect(content.hero).toHaveProperty('headline');
    expect(content.hero.headline).toHaveProperty('before');
    expect(content.hero.headline).toHaveProperty('highlight');
    expect(content.hero.headline).toHaveProperty('after');

    // Verify services structure
    expect(content.services).toHaveProperty('heading');
    expect(content.services).toHaveProperty('items');
    expect(Array.isArray(content.services.items)).toBe(true);

    // Verify pricing structure
    expect(content.pricing).toHaveProperty('heading');
    expect(content.pricing).toHaveProperty('tiers');
    expect(Array.isArray(content.pricing.tiers)).toBe(true);
  });

  it('content structure matches type definition for Hebrew', () => {
    vi.mocked(useLocale).mockReturnValue({
      locale: 'he',
      setLocale: vi.fn(),
      toggleLocale: vi.fn(),
    });

    const { result } = renderHook(() => useContent());
    const content = result.current.content;

    // Same structure as English
    expect(content).toHaveProperty('meta');
    expect(content).toHaveProperty('nav');
    expect(content).toHaveProperty('hero');
    expect(content).toHaveProperty('services');
    expect(content).toHaveProperty('comparison');
    expect(content).toHaveProperty('portfolio');
    expect(content).toHaveProperty('socialProof');
    expect(content).toHaveProperty('manifesto');
    expect(content).toHaveProperty('howItWorks');
    expect(content).toHaveProperty('pricing');
    expect(content).toHaveProperty('finalCta');
    expect(content).toHaveProperty('footer');
  });

  it('services items array is not empty', () => {
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: vi.fn(),
    });

    const { result } = renderHook(() => useContent());

    expect(result.current.content.services.items.length).toBeGreaterThan(0);
    expect(result.current.content.services.items[0]).toHaveProperty('title');
    expect(result.current.content.services.items[0]).toHaveProperty('description');
  });

  it('pricing tiers array is not empty', () => {
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: vi.fn(),
    });

    const { result } = renderHook(() => useContent());

    expect(result.current.content.pricing.tiers.length).toBeGreaterThan(0);
    expect(result.current.content.pricing.tiers[0]).toHaveProperty('name');
    expect(result.current.content.pricing.tiers[0]).toHaveProperty('price');
    expect(result.current.content.pricing.tiers[0]).toHaveProperty('description');
    expect(result.current.content.pricing.tiers[0]).toHaveProperty('features');
  });

  it('updates content when locale changes', () => {
    const mockSetLocale = vi.fn();
    const mockToggleLocale = vi.fn();

    // Start with English
    const useLocaleMock = vi.mocked(useLocale);
    useLocaleMock.mockReturnValue({
      locale: 'en',
      setLocale: mockSetLocale,
      toggleLocale: mockToggleLocale,
    });

    const { result, rerender } = renderHook(() => useContent());
    const englishContent = result.current.content;

    // Switch to Hebrew
    useLocaleMock.mockReturnValue({
      locale: 'he',
      setLocale: mockSetLocale,
      toggleLocale: mockToggleLocale,
    });

    rerender();
    const hebrewContent = result.current.content;

    // Content should be different
    expect(englishContent.hero.headline.before).not.toBe(hebrewContent.hero.headline.before);
  });
});
