import { useEffect } from 'react';
import { NavBar } from './components/NavBar';
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
import { useContent } from './hooks/useContent';

function App() {
  const { content } = useContent();

  useEffect(() => {
    // Update document title
    document.title = content.meta.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', content.meta.description);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', content.meta.ogTitle);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', content.meta.ogDescription);
    }

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', content.meta.twitterTitle);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', content.meta.twitterDescription);
    }
  }, [content]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-amber-500 focus:text-navy-900 focus:font-semibold focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        {content.nav.skipToContent}
      </a>
      <NavBar />
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
