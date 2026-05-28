import { useLocale } from '../hooks/useLocale';

export function LanguageToggle() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      onClick={toggleLocale}
      className="inline-flex items-center gap-1 rounded-full bg-white border border-warm-gray/20 px-3 py-1.5 text-sm font-medium transition-colors hover:border-amber-500/40 shadow-sm"
      aria-label="Toggle language"
    >
      <span className={locale === 'en' ? 'text-amber-500 font-semibold' : 'text-warm-gray'}>
        EN
      </span>
      <span className="text-warm-gray/30">|</span>
      <span className={locale === 'he' ? 'text-amber-500 font-semibold' : 'text-warm-gray'}>
        עב
      </span>
    </button>
  );
}
