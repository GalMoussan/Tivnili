const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'WhatsApp', href: `https://wa.me/${WHATSAPP_NUMBER}` },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="flex flex-col items-center gap-1">
          <span className="font-display text-2xl font-bold tracking-wide text-cream">
            tivnili
          </span>
          <span className="text-sm text-smoke" lang="he">
            תִּבְנִילִי
          </span>
        </div>

        {/* Tagline */}
        <p className="text-sm text-smoke">
          Built with intent. Delivered with honesty.
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-smoke/70 hover:text-amber-500 transition-colors py-2"
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-xs text-smoke/50">
          &copy; {year} tivnili. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
