// Phase 1b — i18n Infrastructure Tests — Integration
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from './test-utils';
import App from '../App';

// Mock Framer Motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    article: 'article',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    button: 'button',
    nav: 'nav',
    footer: 'footer',
    span: 'span',
  },
  useScroll: () => ({
    scrollYProgress: { get: () => 0, on: vi.fn(), destroy: vi.fn() },
  }),
  useTransform: () => ({ get: () => 1 }),
  useReducedMotion: () => false,
  useMotionValue: (initial: number) => ({
    get: () => initial,
    set: vi.fn(),
    on: vi.fn(),
    destroy: vi.fn(),
  }),
  useMotionValueEvent: vi.fn(),
  useInView: () => true,
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
}));

describe('i18n Integration', () => {
  // Mock localStorage
  const mockLocalStorage = (() => {
    let store: Record<string, string> = {};

    return {
      getItem: vi.fn((key: string) => store[key] || null),
      setItem: vi.fn((key: string, value: string) => {
        store[key] = value;
      }),
      removeItem: vi.fn((key: string) => {
        delete store[key];
      }),
      clear: vi.fn(() => {
        store = {};
      }),
    };
  })();

  beforeEach(() => {
    // Reset mocks before each test
    mockLocalStorage.clear();
    vi.stubGlobal('localStorage', mockLocalStorage);

    // Reset document attributes
    document.documentElement.removeAttribute('dir');
    document.documentElement.removeAttribute('lang');
  });

  it('full app renders in English without errors', () => {
    expect(() => {
      render(<App />);
    }).not.toThrow();

    // Verify English is active
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
  });

  it('full app renders in Hebrew without errors', () => {
    // Set localStorage to Hebrew before rendering
    mockLocalStorage.setItem('tivnili-locale', 'he');

    expect(() => {
      render(<App />);
    }).not.toThrow();

    // Verify Hebrew is active
    expect(document.documentElement.getAttribute('lang')).toBe('he');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('language toggle switches content from English to Hebrew', () => {
    render(<App />);

    // Verify initial English state
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');

    // Find and click the language toggle button
    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(toggleButton);

    // After toggle, document should be in Hebrew
    expect(document.documentElement.getAttribute('lang')).toBe('he');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('language toggle switches content from Hebrew to English', () => {
    // Start with Hebrew
    mockLocalStorage.setItem('tivnili-locale', 'he');

    render(<App />);

    // Verify initial Hebrew state
    expect(document.documentElement.getAttribute('lang')).toBe('he');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');

    // Toggle to English
    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(toggleButton);

    // Should now be in English
    expect(document.documentElement.getAttribute('lang')).toBe('en');
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
  });

  it('no blank text when rendering Hebrew content', () => {
    // Set to Hebrew
    mockLocalStorage.setItem('tivnili-locale', 'he');

    render(<App />);

    // Verify LanguageToggle is present (indicates Hebrew is active)
    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    expect(toggleButton).toBeInTheDocument();

    // Verify Hebrew indicator is highlighted
    const hebrewOption = screen.getByText('עב');
    expect(hebrewOption).toHaveClass('text-amber-500');

    // Should have some navigation links (even if in Hebrew)
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
    expect(nav?.textContent).not.toBe('');
  });

  it('RTL layout applies when Hebrew is selected', () => {
    // Start with English
    render(<App />);
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');

    // Toggle to Hebrew
    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(toggleButton);

    // Document should now have RTL direction
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('LTR layout applies when English is selected', () => {
    // Start with Hebrew
    mockLocalStorage.setItem('tivnili-locale', 'he');

    render(<App />);
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');

    // Toggle to English
    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(toggleButton);

    // Document should now have LTR direction
    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
  });

  it('document lang attribute updates when language changes', () => {
    render(<App />);

    // Should start with English
    expect(document.documentElement.getAttribute('lang')).toBe('en');

    // Toggle to Hebrew
    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(toggleButton);

    // Should now be Hebrew
    expect(document.documentElement.getAttribute('lang')).toBe('he');

    // Toggle back to English
    fireEvent.click(toggleButton);

    // Should be English again
    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });

  it('persists language selection across re-renders', () => {
    const { unmount } = render(<App />);

    // Toggle to Hebrew
    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    fireEvent.click(toggleButton);

    // Verify localStorage was updated
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('tivnili-locale', 'he');

    // Unmount and remount
    unmount();

    render(<App />);

    // Should still be Hebrew
    expect(document.documentElement.getAttribute('lang')).toBe('he');
    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('multiple toggles work correctly', () => {
    render(<App />);

    const toggleButton = screen.getByRole('button', { name: /toggle language/i });

    // Toggle to Hebrew
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('lang')).toBe('he');

    // Toggle back to English
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('lang')).toBe('en');

    // Toggle to Hebrew again
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('lang')).toBe('he');
  });

  it('language toggle button is always visible', () => {
    render(<App />);

    const toggleButton = screen.getByRole('button', { name: /toggle language/i });
    expect(toggleButton).toBeVisible();
  });
});
