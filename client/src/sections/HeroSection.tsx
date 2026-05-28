import { motion } from 'framer-motion';
import { AmberText } from '../components/AmberText';
import { WhatsAppInput } from '../components/WhatsAppInput';
import { useContent } from '../hooks/useContent';
import { useLocale } from '../hooks/useLocale';
import { useReducedMotion } from '../hooks/useReducedMotion';

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
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="min-h-screen relative flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-warm">
      {/* Container */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            {/* Logo */}
            <motion.div
              variants={fadeInUp}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
              custom={0}
              className="flex flex-col items-start gap-1"
            >
              <img
                src={locale === 'he' ? '/wordmark-hebrew.png' : '/wordmark-tivnili.png'}
                alt={locale === 'he' ? 'תִּבְנִילִי' : 'tivnili'}
                className="h-12 sm:h-14"
              />
            </motion.div>

            {/* Headline - NEW COPY (temporary, will update content files next) */}
            <motion.h1
              variants={fadeInUp}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
              custom={0.1}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-tight"
            >
              {locale === 'he' ? (
                <>אתרים וכלי AI <AmberText>לעסקים קטנים בישראל</AmberText></>
              ) : (
                <>Websites and AI tools <AmberText>for small Israeli businesses</AmberText></>
              )}
            </motion.h1>

            {/* Subhead - NEW COPY */}
            <motion.p
              variants={fadeInUp}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
              custom={0.2}
              className="text-lg text-warm-gray max-w-xl leading-relaxed"
            >
              {locale === 'he' ? (
                <>סולו, תל אביב, אני עונה בעצמי. אני בונה את קבוצת הלקוחות הראשונים שלי — מחירים של מייסד, תשומת לב מלאה, והתוצאות שלך הופכות לסיפורים הראשונים באתר.</>
              ) : (
                <>Solo, Tel Aviv, I answer personally. I'm building my founding client group — founder pricing, full attention, and your results become the first stories on this site.</>
              )}
            </motion.p>

            {/* Price Hint - NEW */}
            <motion.p
              variants={fadeInUp}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
              custom={0.3}
              className="text-base font-semibold text-amber-500"
            >
              {locale === 'he' ? 'מתחיל מ-₪400' : 'Starting at ₪400'}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              initial={prefersReducedMotion ? false : "hidden"}
              animate={prefersReducedMotion ? false : "visible"}
              custom={0.4}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              {/* Calendly Primary CTA */}
              <a
                href="https://calendly.com/galmoussan/15-min-clarity-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-white shadow-glow-amber hover:bg-amber-600 hover:scale-105 transition-all duration-200"
              >
                {locale === 'he' ? 'קבע פגישה חינם (15 דקות)' : 'Book free consultation (15 min)'}
              </a>

              {/* WhatsApp Secondary CTA */}
              <a
                href={`https://wa.me/972558859702?text=${encodeURIComponent(
                  locale === 'he'
                    ? 'היי, ראיתי את האתר ואני רוצה לדבר על AI לעסק שלי.'
                    : 'Hi, I saw the website and want to talk about AI for my business.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy px-6 py-3.5 text-base font-medium text-navy hover:bg-navy hover:text-cream transition-all duration-200"
              >
                {locale === 'he' ? 'או שלח הודעה ב-WhatsApp' : 'Or send WhatsApp message'}
              </a>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            variants={fadeInUp}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? false : "visible"}
            custom={0.2}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src="/images/gal-hero.jpg"
                alt={locale === 'he' ? 'גל מוסאן' : 'Gal Moussan'}
                className="w-full h-auto rounded-2xl shadow-2xl"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
