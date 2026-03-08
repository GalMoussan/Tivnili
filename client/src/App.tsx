import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { ComparisonSection } from './sections/ComparisonSection';
import { PortfolioSection } from './sections/PortfolioSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { ManifestoSection } from './sections/ManifestoSection';
import { PricingSection } from './sections/PricingSection';
import { SocialProofSection } from './sections/SocialProofSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './sections/Footer';

function App() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <ComparisonSection />
      <PortfolioSection />
      <SocialProofSection />
      <ManifestoSection />
      <HowItWorksSection />
      <PricingSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

export default App;
