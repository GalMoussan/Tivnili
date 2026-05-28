import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { PricingCard } from '../components/PricingCard';
import { useContent } from '../hooks/useContent';

export function PricingSection() {
  const { content } = useContent();

  return (
    <SectionWrapper id="pricing" className="py-12 sm:py-16 lg:py-20 bg-gradient-warm-to-navy">
      <Container>
        <SectionHeading>{content.pricing.heading}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {content.pricing.tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} ctaText={content.pricing.ctaText} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
