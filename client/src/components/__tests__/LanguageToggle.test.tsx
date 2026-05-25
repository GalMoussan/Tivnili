// Phase 1b — i18n Infrastructure Tests
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageToggle } from '../LanguageToggle';
import { useLocale } from '../../hooks/useLocale';

// Mock useLocale hook
vi.mock('../../hooks/useLocale', () => ({
  useLocale: vi.fn(),
}));

describe('LanguageToggle', () => {
  it('renders EN and HE options', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('עב')).toBeInTheDocument();
  });

  it('highlights active locale with amber color when English is selected', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const enElement = screen.getByText('EN');
    const heElement = screen.getByText('עב');

    // EN should have amber color
    expect(enElement).toHaveClass('text-amber-500');
    // HE should have smoke (muted) color
    expect(heElement).toHaveClass('text-smoke');
  });

  it('highlights active locale with amber color when Hebrew is selected', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'he',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const enElement = screen.getByText('EN');
    const heElement = screen.getByText('עב');

    // HE should have amber color
    expect(heElement).toHaveClass('text-amber-500');
    // EN should have smoke (muted) color
    expect(enElement).toHaveClass('text-smoke');
  });

  it('calls toggleLocale when button is clicked', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockToggleLocale).toHaveBeenCalledTimes(1);
  });

  it('renders as accessible button element', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe('BUTTON');
  });

  it('has ARIA label for accessibility', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Toggle language');
  });

  it('renders separator between language options', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const separator = screen.getByText('|');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('text-white/20');
  });

  it('applies correct styling classes', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const button = screen.getByRole('button');

    // Check for expected classes
    expect(button).toHaveClass('inline-flex');
    expect(button).toHaveClass('items-center');
    expect(button).toHaveClass('gap-1');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('bg-navy-800');
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-white/10');
  });

  it('toggleLocale is called on each click', () => {
    const mockToggleLocale = vi.fn();
    vi.mocked(useLocale).mockReturnValue({
      locale: 'en',
      setLocale: vi.fn(),
      toggleLocale: mockToggleLocale,
    });

    render(<LanguageToggle />);

    const button = screen.getByRole('button');

    // Click multiple times
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(mockToggleLocale).toHaveBeenCalledTimes(3);
  });
});
