import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LanguageToggle } from './LanguageToggle';
import { useContent } from '../hooks/useContent';
import { useLocale } from '../hooks/useLocale';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { content } = useContent();
  const { locale } = useLocale();

  const navLinks = [
    { label: content.nav.services, href: '#services' },
    { label: content.nav.work, href: '#work' },
    { label: content.nav.pricing, href: '#pricing' },
  ];

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={prefersReducedMotion ? undefined : { y: -100 }}
      animate={prefersReducedMotion ? undefined : { y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
          <img
            src="/wordmark-hebrew.png"
            alt="תִּבְנִילִי"
            className="h-8"
          />
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hidden sm:block text-sm text-smoke hover:text-amber-500 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(content.nav.whatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-amber-400 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.29-1.24l-.28-.17-2.93.77.78-2.85-.18-.29A8 8 0 1112 20z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
