import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { StatCard } from '../components/StatCard';
import { useContent } from '../hooks/useContent';

export function PortfolioSection() {
  const { content } = useContent();

  return (
    <SectionWrapper id="work" className="py-12 sm:py-16 lg:py-20 bg-gradient-warm-reverse">
      <Container>
        <SectionHeading>{content.portfolio.heading}</SectionHeading>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.portfolio.stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat.figure}
              label={stat.label}
              citation={stat.source}
            />
          ))}
        </div>

        {/* Stats Subline */}
        <p className="mt-8 text-center text-warm-gray italic max-w-3xl mx-auto">
          {content.portfolio.statsSubline}
        </p>

        {/* Use Cases */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {content.portfolio.useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-warm-gray/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20"
            >
              <h3 className="text-xl font-bold text-navy font-display">
                {useCase.name}
              </h3>
              <p className="text-warm-gray mt-3">{useCase.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {useCase.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block px-3 py-1 text-xs font-medium text-amber-600 bg-amber-50 rounded-full border border-amber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
