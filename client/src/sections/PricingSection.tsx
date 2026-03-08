import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { PricingCard } from '../components/PricingCard';

const tiers = [
  {
    name: 'The Foundation',
    price: '$500',
    description: 'One page. Full power. No surprises.',
    badge: 'Fixed scope. No upsells.',
  },
  {
    name: 'The Engine',
    price: '$1,000–$1,200',
    description:
      'Stop paying someone to do manually what this system does while you sleep.',
    badge: 'Most popular',
    popular: true,
  },
  {
    name: 'The Factory',
    price: '$1,500–$2,000',
    description:
      'The full build. The full attention. No agency. No waiting. Just results.',
    badge: 'Full access',
  },
];

export function PricingSection() {
  return (
    <SectionWrapper id="pricing">
      <Container>
        <SectionHeading>Pricing</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {tiers.map((tier) => (
            <PricingCard key={tier.name} {...tier} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
