export interface Content {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  nav: {
    services: string;
    work: string;
    pricing: string;
    whatsapp: string;
    skipToContent: string;
  };
  hero: {
    logoText: string;
    logoHebrew: string;
    headline: {
      before: string;
      highlight: string;
      after: string;
    };
    subtitle: string;
    whatsappPlaceholder: string;
    whatsappAriaLabel: string;
    whatsappButtonAriaLabel: string;
    whatsappDefaultMessage: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    heading: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  comparison: {
    rows: Array<{
      oldWay: string;
      newWay: string;
    }>;
    footer: {
      hebrew: string;
      text: string;
    };
  };
  portfolio: {
    heading: string;
    stats: Array<{
      figure: string;
      label: string;
      source: string;
    }>;
    statsSubline: string;
    useCases: Array<{
      name: string;
      description: string;
      tags: string[];
    }>;
  };
  socialProof: {
    testimonials: Array<{
      align: 'left' | 'right';
      name: string;
      business: string;
      message: string;
    }>;
  };
  manifesto: {
    lines: string[];
    hebrew: string;
  };
  howItWorks: {
    heading: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  pricing: {
    heading: string;
    ctaText: string;
    tiers: Array<{
      name: string;
      price: string;
      description: string;
      badge: string;
      popular?: boolean;
      features: string[];
      whatsappMessage?: string;
    }>;
  };
  finalCta: {
    headline: {
      before: string;
      highlight: string;
      after: string;
    };
    subtitle: string;
    footer: string;
  };
  footer: {
    logoText: string;
    logoHebrew: string;
    tagline: string;
    copyright: string;
  };
}
