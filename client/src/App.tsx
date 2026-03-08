import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { ComparisonSection } from './sections/ComparisonSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ManifestoSection } from './sections/ManifestoSection';
import { PricingSection } from './sections/PricingSection';
import { SocialProofSection } from './sections/SocialProofSection';

function App() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ComparisonSection />
      <PortfolioSection />
      <SocialProofSection />
      <ManifestoSection />
      <HowItWorksSection />
      <PricingSection />
    </main>
  );
}

export default App;
