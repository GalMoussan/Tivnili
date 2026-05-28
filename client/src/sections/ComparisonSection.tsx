import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { ComparisonRow } from '../components/ComparisonRow';
import { useContent } from '../hooks/useContent';

export function ComparisonSection() {
  const { content } = useContent();

  return (
    <SectionWrapper className="py-12 sm:py-16 lg:py-20 bg-gradient-warm">
      <Container>
        <div className="max-w-3xl mx-auto">
          {content.comparison.rows.map((row, i) => (
            <ComparisonRow
              key={row.oldWay}
              oldWay={row.oldWay}
              newWay={row.newWay}
              delay={i * 0.1}
            />
          ))}

          <p className="mt-12 text-center text-warm-gray text-sm">
            <span lang="he">{content.comparison.footer.hebrew}</span> {content.comparison.footer.text}
          </p>
        </div>
      </Container>
    </SectionWrapper>
  );
}
