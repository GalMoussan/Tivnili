import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { useContent } from '../hooks/useContent';

export function HowItWorksSection() {
  const { content } = useContent();
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gradient-amber-glow scroll-mt-32">
      <Container>
        <SectionHeading>{content.howItWorks.heading}</SectionHeading>
        <div className="mt-10 space-y-12">
          {content.howItWorks.steps.map((step, index) => {
            const stepContent = (
              <div key={step.number}>
                <span className="text-5xl sm:text-7xl font-extrabold text-amber-500/50 font-display">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-navy font-display mt-2">
                  {step.title}
                </h3>
                <p className="text-lg text-warm-gray mt-2">{step.description}</p>
              </div>
            );

            if (prefersReducedMotion) {
              return <div key={step.number}>{stepContent}</div>;
            }

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  ease: 'easeOut',
                  delay: index * 0.2,
                }}
              >
                {stepContent}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
