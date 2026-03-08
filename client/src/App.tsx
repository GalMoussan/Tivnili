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
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-navy-900 focus:font-semibold focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        Skip to content
      </a>
      <main id="main-content" className="overflow-x-hidden">
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
    </>
  );
}

export default App;
