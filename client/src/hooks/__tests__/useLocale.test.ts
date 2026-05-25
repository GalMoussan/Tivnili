// Phase 1b — i18n Infrastructure Tests
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useLocale, LocaleProvider } from '../useLocale';

describe('useLocale', () => {
  // Mock localStorage
  const mockLocalStorage = (() => {
    let store: Record<string, string> = {};

    const originalGetItem = (key: string) => store[key] || null;
    const originalSetItem = (key: string, value: string) => {
      store[key] = value;
    };
    const originalRemoveItem = (key: string) => {
      delete store[key];
    };
    const originalClear = () => {
      store = {};
    };

    return {
      getItem: vi.fn(originalGetItem),
      setItem: vi.fn(originalSetItem),
      removeItem: vi.fn(originalRemoveItem),
      clear: vi.fn(originalClear),
      _resetImplementations: () => {
        mockLocalStorage.getItem.mockImplementation(originalGetItem);
        mockLocalStorage.setItem.mockImplementation(originalSetItem);
        mockLocalStorage.removeItem.mockImplementation(originalRemoveItem);
        mockLocalStorage.clear.mockImplementation(originalClear);
      },
    };
  })();

  beforeEach(() => {
    // Reset mocks before each test
    mockLocalStorage.clear();
    mockLocalStorage._resetImplementations();
    vi.stubGlobal('localStorage', mockLocalStorage);

    // Reset document attributes
    document.documentElement.removeAttribute('dir');
    document.documentElement.removeAttribute('lang');
  });

  it('returns "en" as default locale in test mode', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });
    expect(result.current.locale).toBe('en');
  });

  it('setLocale updates locale state', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    act(() => {
      result.current.setLocale('he');
    });

    expect(result.current.locale).toBe('he');
  });

  it('toggleLocale switches between en and he', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    // Default is 'en', toggle to 'he'
    act(() => {
      result.current.toggleLocale();
    });
    expect(result.current.locale).toBe('he');

    // Toggle back to 'en'
    act(() => {
      result.current.toggleLocale();
    });
    expect(result.current.locale).toBe('en');
  });

  it('persists locale to localStorage', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    act(() => {
      result.current.setLocale('he');
    });

    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('tivnili-locale', 'he');
  });

  it('reads initial locale from localStorage if present', () => {
    // Set up localStorage with Hebrew
    mockLocalStorage.setItem('tivnili-locale', 'he');

    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    expect(result.current.locale).toBe('he');
    expect(mockLocalStorage.getItem).toHaveBeenCalledWith('tivnili-locale');
  });

  it('updates document dir attribute when locale changes to Hebrew', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    act(() => {
      result.current.setLocale('he');
    });

    expect(document.documentElement.getAttribute('dir')).toBe('rtl');
  });

  it('updates document dir attribute when locale changes to English', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    // First set to Hebrew
    act(() => {
      result.current.setLocale('he');
    });

    // Then back to English
    act(() => {
      result.current.setLocale('en');
    });

    expect(document.documentElement.getAttribute('dir')).toBe('ltr');
  });

  it('updates document lang attribute when locale changes', () => {
    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    act(() => {
      result.current.setLocale('he');
    });

    expect(document.documentElement.getAttribute('lang')).toBe('he');

    act(() => {
      result.current.setLocale('en');
    });

    expect(document.documentElement.getAttribute('lang')).toBe('en');
  });

  it('handles localStorage errors gracefully (for test environments)', () => {
    // Simulate localStorage.setItem throwing an error
    mockLocalStorage.setItem.mockImplementation(() => {
      throw new Error('localStorage unavailable');
    });

    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    // Should not throw error
    expect(() => {
      act(() => {
        result.current.setLocale('he');
      });
    }).not.toThrow();

    // State should still update
    expect(result.current.locale).toBe('he');
  });

  it('handles localStorage.getItem errors gracefully', () => {
    // Simulate localStorage.getItem throwing an error
    mockLocalStorage.getItem.mockImplementation(() => {
      throw new Error('localStorage unavailable');
    });

    // Should not throw error and should fall back to default 'en'
    expect(() => {
      const { result } = renderHook(() => useLocale(), {
        wrapper: LocaleProvider,
      });
      expect(result.current.locale).toBe('en');
    }).not.toThrow();
  });

  it('ignores invalid locale values from localStorage', () => {
    // Set invalid locale in localStorage
    mockLocalStorage.setItem('tivnili-locale', 'fr');

    const { result } = renderHook(() => useLocale(), {
      wrapper: LocaleProvider,
    });

    // Should fall back to default 'en'
    expect(result.current.locale).toBe('en');
  });
});
