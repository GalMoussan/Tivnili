import { SectionWrapper } from '../components/SectionWrapper';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';

const services = [
  {
    title: 'Websites & Landing Pages',
    description: 'Your business online, looking like it means business.',
  },
  {
    title: 'AI Tools & Automations',
    description: "Systems that work the night shift so you don't have to.",
  },
  {
    title: 'The Blueprint',
    description:
      'One session. You come with a mess. You leave with a plan \u2014 and half of it already built.',
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper className="py-24 bg-navy-900">
      <Container>
        <SectionHeading>What I Build</SectionHeading>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
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
