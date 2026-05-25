import { useLocale } from '../hooks/useLocale';

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1 rounded-full bg-navy-800 border border-white/10 px-3 py-1.5 text-sm font-medium transition-colors hover:border-white/25"
      aria-label="Toggle language"
    >
      <span className={locale === 'en' ? 'text-amber-500' : 'text-smoke'}>
        EN
      </span>
      <span className="text-white/20">|</span>
      <span className={locale === 'he' ? 'text-amber-500' : 'text-smoke'}>
        עב
      </span>
    </button>
  );
}
