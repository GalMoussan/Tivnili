import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { ComparisonRow } from '../components/ComparisonRow';

const comparisons = [
  { oldWay: 'Hire an agency', newWay: 'Talk to one person' },
  { oldWay: 'Wait 6–8 weeks', newWay: 'Live in 2 weeks' },
  { oldWay: 'Pay $5,000–$15,000', newWay: 'Pay $500–$2,000' },
  { oldWay: '3 rounds of revisions', newWay: 'You approve once' },
  { oldWay: 'Ghost after launch', newWay: 'Still here after' },
];

export function ComparisonSection() {
  return (
    <SectionWrapper className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl mx-auto">
          {comparisons.map((row, i) => (
            <ComparisonRow
              key={row.oldWay}
              oldWay={row.oldWay}
              newWay={row.newWay}
              delay={i * 0.1}
            />
          ))}

          <p className="mt-12 text-center text-smoke text-sm">
            <span lang="he">אמת</span> — This is just honest.
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
