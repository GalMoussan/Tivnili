import { motion, useReducedMotion } from 'framer-motion';
import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { useContent } from '../hooks/useContent';

function WhatYouGetCard({
  title,
  problem,
  solution,
  benefit,
  delay = 0,
}: {
  title: string;
  problem: string;
  solution: string;
  benefit: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  const cardContent = (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-warm-gray/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 flex flex-col gap-4">
      <h3 className="text-xl font-bold text-navy font-display">{title}</h3>

      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm font-semibold text-warm-gray/60 mb-1">Problem:</p>
          <p className="text-warm-gray">{problem}</p>
        </div>

        <div>
          <p className="text-sm font-semibold text-amber-600/80 mb-1">Solution:</p>
          <p className="text-navy">{solution}</p>
        </div>

        <div className="pt-2 border-t border-warm-gray/10">
          <p className="text-sm font-semibold text-amber-600">{benefit}</p>
        </div>
      </div>
    </div>
  );

  if (prefersReducedMotion) {
    return cardContent;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
    >
      {cardContent}
    </motion.div>
  );
}

export function WhatYouGetSection() {
  const { content } = useContent();

  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-20 bg-gradient-warm-reverse">
      <Container>
        <SectionHeading>{content.whatYouGet.heading}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {content.whatYouGet.cards.map((card, index) => (
            <WhatYouGetCard
              key={card.title}
              title={card.title}
              problem={card.problem}
              solution={card.solution}
              benefit={card.benefit}
              delay={index * 0.1}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
