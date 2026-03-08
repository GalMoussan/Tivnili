import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { TestimonialBubble } from '../components/TestimonialBubble';

const testimonials = [
  {
    align: 'left' as const,
    name: 'Sarah M.',
    business: 'Cafe owner',
    message: 'Finally someone who actually listens. Site was live in 10 days.',
  },
  {
    align: 'right' as const,
    name: 'David K.',
    business: 'Fitness trainer',
    message:
      'I sent a voice note at midnight. He replied with a working prototype.',
  },
  {
    align: 'left' as const,
    name: 'Yael R.',
    business: 'Boutique owner',
    message: 'No jargon. No surprises. Just results.',
  },
  {
    align: 'right' as const,
    name: 'Mark T.',
    business: 'Real estate agent',
    message: "He built something I didn't even know I needed.",
  },
];

export function SocialProofSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col gap-6 items-center max-w-2xl mx-auto">
          {testimonials.map((t, i) => {
            if (prefersReducedMotion) {
              return (
                <TestimonialBubble
                  key={t.name}
                  name={t.name}
                  business={t.business}
                  message={t.message}
                  align={t.align}
                />
              );
            }

            return (
              <motion.div
                key={t.name}
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
