import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';

export function PortfolioSection() {
  return (
    <SectionWrapper id="work" className="py-20 sm:py-28">
      <Container>
        <SectionHeading>The Tivnili Standard</SectionHeading>

        <div className="mt-12 grid gap-6">
          {/* Featured card */}
          <ProjectCard
            name="Australian Broker CRM"
            description="Custom CRM. Another country. Built from scratch."
            result="Still running."
            featured
          />

          {/* Industry Engines */}
          <div className="grid gap-6 md:grid-cols-3">
            <ProjectCard
              name="RestaurantLux"
              description="Pre-engineered for your industry."
              result="$5,000 worth of thinking, built into the price."
            />
            <ProjectCard
              name="LocalPro"
              description="Pre-engineered for your industry."
              result="$5,000 worth of thinking, built into the price."
            />
            <ProjectCard
              name="BeautyPlace"
              description="Pre-engineered for your industry."
              result="$5,000 worth of thinking, built into the price."
            />
          </div>

          {/* BitJourney */}
          <ProjectCard
            name="BitJourney"
            description="Clean. Fast."
            result="Zero bloat."
          />
        </div>
      </Container>
    </SectionWrapper>
  );
}
