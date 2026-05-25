import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { StatCard } from '../components/StatCard';
import { useContent } from '../hooks/useContent';

export function PortfolioSection() {
  const { content } = useContent();

  return (
    <SectionWrapper id="work" className="py-12 sm:py-16 lg:py-20">
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
        <p className="mt-8 text-center text-smoke italic max-w-3xl mx-auto">
          {content.portfolio.statsSubline}
        </p>

        {/* Use Cases */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {content.portfolio.useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-navy-800 rounded-2xl p-6 sm:p-8 border border-white/5 hover:-translate-y-2 transition-all duration-300 hover:shadow-glow-amber"
            >
              <h3 className="text-xl font-bold text-cream font-display">
                {useCase.name}
              </h3>
              <p className="text-smoke mt-3">{useCase.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {useCase.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="inline-block px-3 py-1 text-xs font-medium text-amber-500 bg-amber-500/10 rounded-full border border-amber-500/20"
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
