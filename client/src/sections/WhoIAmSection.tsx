import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
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

export function WhoIAmSection() {
  const { content } = useContent();
  const { locale } = useLocale();
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-20 bg-gradient-warm">
      <Container>
        <SectionHeading>{content.whoIAm.heading}</SectionHeading>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Photo */}
          <motion.div
            variants={fadeInUp}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-50px' }}
            custom={0}
            className="order-1"
          >
            <div className="relative">
              <img
                src="/images/gal-hero.jpg"
                alt={content.whoIAm.name}
                className="w-full h-auto rounded-2xl shadow-xl"
                style={{ aspectRatio: '3/4', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeInUp}
            initial={prefersReducedMotion ? undefined : 'hidden'}
            whileInView={prefersReducedMotion ? undefined : 'visible'}
            viewport={{ once: true, margin: '-50px' }}
            custom={0.1}
            className="order-2 flex flex-col gap-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-navy font-display mb-1">
                {content.whoIAm.name}
              </h3>
              <p className="text-warm-gray">{content.whoIAm.location}</p>
            </div>

            <p className="text-lg text-navy leading-relaxed">
              {content.whoIAm.story}
            </p>

            <div className="pt-4 border-t border-warm-gray/20">
              <p className="text-base text-warm-gray italic">
                {content.whoIAm.currentStatus}
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
