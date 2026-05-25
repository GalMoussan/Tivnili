import { useContent } from '../hooks/useContent';
import { useLocale } from '../hooks/useLocale';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

export function Footer() {
  const { content } = useContent();
  const { locale } = useLocale();
  const year = new Date().getFullYear();

  const whatsappUrl = WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(content.hero.whatsappDefaultMessage)}`
    : '#';

  const navLinks = [
    { label: content.nav.services, href: '#services' },
    { label: content.nav.work, href: '#work' },
    { label: content.nav.pricing, href: '#pricing' },
    { label: content.nav.whatsapp, href: whatsappUrl },
  ];

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-1">
          <img
            src="/wordmark-hebrew.png"
            alt="תִּבְנִילִי"
            className="h-12"
          />
        </div>

        {/* Tagline */}
        <p className="text-sm text-smoke">
          {content.footer.tagline}
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-smoke/70 hover:text-amber-500 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:rounded"
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-smoke/50">
          &copy; {year} {content.footer.logoText}. {content.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
