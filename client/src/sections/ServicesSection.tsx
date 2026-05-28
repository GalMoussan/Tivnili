import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { useContent } from '../hooks/useContent';

export function ServicesSection() {
  const { content } = useContent();

  return (
    <SectionWrapper id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-warm-reverse">
      <Container>
        <SectionHeading>{content.services.heading}</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {content.services.items.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
