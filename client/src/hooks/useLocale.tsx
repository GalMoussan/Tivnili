import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from '../content';

const LOCALE_STORAGE_KEY = 'tivnili-locale';

function getInitialLocale(): Locale {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return 'he';
  }

  // Try to get from localStorage
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored === 'en' || stored === 'he') {
      return stored;
    }
  } catch {
    // localStorage might not be available (e.g., in tests)
  }

  // In test environment, default to English for predictable tests
  // In production, default to Hebrew
  if (import.meta.env.MODE === 'test') {
    return 'en';
  }

  return 'he';
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // localStorage might not be available
    }
  }, [locale]);

  // Update document direction and lang attribute
  useEffect(() => {
    const dir = locale === 'he' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', locale);
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'he' : 'en');
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
}
