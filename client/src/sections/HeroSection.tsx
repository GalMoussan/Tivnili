import { motion } from 'framer-motion';
import { AmberText } from '../components/AmberText';
import { WhatsAppInput } from '../components/WhatsAppInput';
import { useContent } from '../hooks/useContent';
import { useLocale } from '../hooks/useLocale';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export function HeroSection() {
  const { content } = useContent();
  const { locale } = useLocale();

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 animate-gradient-mesh will-change-transform"
        style={{
          backgroundImage:
            'linear-gradient(135deg, var(--color-navy-900) 0%, var(--color-navy-800) 30%, rgba(217, 119, 6, 0.1) 50%, rgba(37, 99, 235, 0.1) 70%, var(--color-navy-900) 100%)',
          backgroundSize: '400% 400%',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 py-20 gap-8 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-col items-center gap-1"
        >
          <img
            src={locale === 'he' ? '/wordmark-hebrew.png' : '/wordmark-tivnili.png'}
            alt={locale === 'he' ? 'תִּבְנִילִי' : 'tivnili'}
            className="h-16 sm:h-20"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-cream leading-tight"
        >
          {content.hero.headline.before} <AmberText>{content.hero.headline.highlight}</AmberText> {content.hero.headline.after}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-lg text-smoke max-w-2xl"
        >
          {content.hero.subtitle}
        </motion.p>

        {/* WhatsApp CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="w-full"
        >
          <WhatsAppInput
            placeholder={content.hero.whatsappPlaceholder}
            ariaLabel={content.hero.whatsappAriaLabel}
            buttonAriaLabel={content.hero.whatsappButtonAriaLabel}
            prefillText={content.hero.whatsappDefaultMessage}
          />
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-3.5 text-base font-bold text-navy-900 shadow-glow-amber hover:bg-amber-400 hover:scale-105 transition-all duration-200"
          >
            {content.hero.ctaPrimary}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-smoke hover:text-cream hover:border-white/25 transition-all duration-200"
          >
            {content.hero.ctaSecondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
