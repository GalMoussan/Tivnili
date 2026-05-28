import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useLocale } from '../hooks/useLocale';

const REJECTED_PHRASES_HE = [
  'שנה את העסק שלך.',
  'פתח סינרגיה מופעלת AI.',
  'מנף חדשנות חדשנית.',
];

const REJECTED_PHRASES_EN = [
  'Transform your business.',
  'Unlock AI-powered synergy.',
  'Leverage cutting-edge innovation.',
];

const STORAGE_KEY = 'tivnili-intro-seen';

export function AmethReveal() {
  const { locale } = useLocale();
  const prefersReducedMotion = useReducedMotion();
  const [showIntro, setShowIntro] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [showAmeth, setShowAmeth] = useState(false);
  const [allowClose, setAllowClose] = useState(false);

  const phrases = locale === 'he' ? REJECTED_PHRASES_HE : REJECTED_PHRASES_EN;

  useEffect(() => {
    // Check if user has seen the intro before
    const hasSeenIntro = localStorage.getItem(STORAGE_KEY);

    if (!hasSeenIntro) {
      setShowIntro(true);
    }
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    // Cycle through rejected phrases - 1.2 seconds each
    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => {
        if (prev < phrases.length - 1) {
          return prev + 1;
        } else {
          clearInterval(phraseInterval);
          return prev;
        }
      });
    }, 1200);

    // Show אמת after phrases complete (3 × 1.2s = 3.6s)
    const amethTimer = setTimeout(() => {
      setShowAmeth(true);
    }, 3600);

    // Allow closing 1 second after אמת appears, auto-close after 6 seconds total
    const allowCloseTimer = setTimeout(() => {
      setAllowClose(true);
    }, 4600);

    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, 6000);

    return () => {
      clearInterval(phraseInterval);
      clearTimeout(amethTimer);
      clearTimeout(allowCloseTimer);
      clearTimeout(autoCloseTimer);
    };
  }, [showIntro, phrases.length]);

  const handleClose = () => {
    setShowIntro(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  const handleSkip = () => {
    if (allowClose) {
      handleClose();
    }
  };

  const handleScroll = () => {
    if (allowClose) {
      handleClose();
    }
  };

  useEffect(() => {
    if (showIntro && allowClose) {
      window.addEventListener('wheel', handleScroll, { passive: true });
      window.addEventListener('touchmove', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('wheel', handleScroll);
        window.removeEventListener('touchmove', handleScroll);
      };
    }
  }, [showIntro, allowClose]);

  // Skip intro entirely if reduced motion is preferred
  if (prefersReducedMotion && showIntro) {
    setTimeout(handleClose, 0);
    return null;
  }

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="fixed inset-0 z-[100] bg-amber-500 flex flex-col items-center justify-center overflow-hidden"
          initial={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(100% 0 0 0)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Rejected marketing phrases */}
          {!showAmeth && (
            <motion.div
              key={currentPhrase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center px-4"
            >
              <p className="text-white font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                {phrases[currentPhrase]}
              </p>
            </motion.div>
          )}

          {/* אמת reveal */}
          {showAmeth && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="text-center"
            >
              <p
                lang="he"
                className="text-white font-display text-7xl sm:text-8xl md:text-9xl font-black"
              >
                אמת
              </p>
            </motion.div>
          )}

          {/* Skip intro button */}
          {allowClose && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onClick={handleSkip}
              className="absolute bottom-8 right-8 text-white/80 hover:text-white text-sm font-medium underline transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500 rounded px-2 py-1"
            >
              {locale === 'he' ? 'דלג' : 'Skip'}
            </motion.button>
          )}

          {/* Scroll hint */}
          {allowClose && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm"
            >
              {locale === 'he' ? 'גלול למטה' : 'Scroll down'}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
