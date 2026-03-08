import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'You describe it',
    description: 'WhatsApp, voice note, napkin sketch. Whatever works for you.',
  },
  {
    number: '02',
    title: 'I build in the open',
    description: 'You see progress, not surprises. Zero-waste communication.',
  },
  {
    number: '03',
    title: 'You launch it',
    description: "And I'm still here after. Not a ticketing system. Me.",
  },
];

export function HowItWorksSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <SectionWrapper className="py-24 bg-navy-900">
      <Container>
        <SectionHeading>How It Works</SectionHeading>
        <div className="mt-16 space-y-16">
          {steps.map((step, index) => {
            const content = (
              <div key={step.number}>
                <span className="text-5xl sm:text-7xl font-extrabold text-amber-500/20 font-display">
                  {step.number}
                </span>
                <h3 className="text-2xl font-bold text-cream font-display mt-2">
                  {step.title}
                </h3>
                <p className="text-lg text-smoke mt-2">{step.description}</p>
              </div>
            );

            if (prefersReducedMotion) {
              return <div key={step.number}>{content}</div>;
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
                {content}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
