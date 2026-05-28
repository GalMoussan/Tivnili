import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { TestimonialBubble } from '../components/TestimonialBubble';
import { useContent } from '../hooks/useContent';

export function SocialProofSection() {
  const { content } = useContent();
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-20 bg-gradient-warm">
      <Container>
        <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto">
          {content.socialProof.testimonials.map((t, i) => {
            if (prefersReducedMotion) {
              return (
                <TestimonialBubble
                  key={i}
                  name={t.name}
                  business={t.business}
                  message={t.message}
                  align={t.align}
                />
              );
            }

            return (
              <motion.div
                key={i}
                className={`w-full flex ${t.align === 'right' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <TestimonialBubble
                  name={t.name}
                  business={t.business}
                  message={t.message}
                  align={t.align}
                />
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
