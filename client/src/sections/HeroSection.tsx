import { motion } from 'framer-motion';
import { AmberText } from '../components/AmberText';
import { WhatsAppInput } from '../components/WhatsAppInput';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 animate-gradient-mesh"
        style={{
          backgroundImage:
            'linear-gradient(135deg, var(--color-navy-900) 0%, var(--color-navy-800) 30%, rgba(217, 119, 6, 0.1) 50%, rgba(37, 99, 235, 0.1) 70%, var(--color-navy-900) 100%)',
          backgroundSize: '400% 400%',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 gap-8 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="flex flex-col items-center gap-1"
        >
          <span className="font-display text-2xl font-bold tracking-wide text-cream">
            tivnili
          </span>
          <span className="text-sm text-smoke" lang="he">
            תִּבְנִילִי
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold text-cream leading-tight"
        >
          Your business, <AmberText>finally</AmberText> built.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-lg text-smoke max-w-2xl"
        >
          I use the best AI to build your tools. I use my own brain to talk to you.
        </motion.p>

        {/* WhatsApp CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="w-full"
        >
          <WhatsAppInput />
        </motion.div>
      </div>
    </section>
  );
}
