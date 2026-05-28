import type { Content } from './types';

export const en = {
  meta: {
    title: 'Tivnili — Websites and AI tools for small Israeli businesses',
    description: 'Solo from Tel Aviv. Building websites and AI tools that help small businesses save time and stop losing leads. Transparent pricing from ₪400. Founding clients now.',
    ogTitle: 'Tivnili — Websites and AI tools for small Israeli businesses',
    ogDescription: 'Solo from Tel Aviv. Building websites and AI tools that help small businesses save time and stop losing leads. Transparent pricing from ₪400.',
    twitterTitle: 'Tivnili — Websites and AI tools for small Israeli businesses',
    twitterDescription: 'Solo from Tel Aviv. Building websites and AI tools for small businesses. From ₪400. Founding clients now.',
  },
  nav: {
    services: 'Services',
    work: 'Work',
    pricing: 'Pricing',
    whatsapp: 'WhatsApp',
    skipToContent: 'Skip to main content',
  },
  hero: {
    logoText: 'Tivnili',
    logoHebrew: 'תִּבְנִילִי',
    headline: {
      before: 'Websites and AI tools',
      highlight: 'for small Israeli businesses',
      after: '',
    },
    subtitle: 'Solo, Tel Aviv, I answer personally. I am building my founding client group — founder pricing, full attention, and your results become the first stories on this site.',
    whatsappPlaceholder: 'Tell me what your business needs →',
    whatsappAriaLabel: 'Your message',
    whatsappButtonAriaLabel: 'Send message via WhatsApp',
    whatsappDefaultMessage: 'Hi, I saw the website and want to talk about AI for my business.',
    ctaPrimary: 'Book free consultation (15 min)',
    ctaSecondary: 'Or send WhatsApp message',
  },
  whatYouGet: {
    heading: 'What You Get',
    cards: [
      {
        title: 'Quotes sent automatically',
        problem: 'You are losing leads because you are too busy to reply.',
        solution: 'AI that drafts quotes, sends them, and follows up — automatically.',
        benefit: 'No more customers slipping through the cracks.',
      },
      {
        title: 'Daily brief in 5 minutes',
        problem: 'Monday mornings take you 2 hours to figure out what is happening.',
        solution: 'AI that reads everything and gives you a summary: what needs attention, what can wait.',
        benefit: '2 hours became 5 minutes. Every morning.',
      },
      {
        title: 'Customer response 24/7',
        problem: 'Customers message on Shabbat, middle of the night, and you are not there.',
        solution: 'AI that answers, books appointments, asks questions — even when you are sleeping.',
        benefit: 'Happier customers. Better sleep for you.',
      },
    ],
  },
  whoIAm: {
    heading: 'Who I Am',
    name: 'Gal Moussan',
    location: 'Solo, Tel Aviv',
    story: 'I built lindaWorld for my grandmother so we could stay connected across continents — a tool that connects family worldwide. Now I help small businesses turn daily chaos into systems that work for them.',
    currentStatus: 'One pilot client in progress — building an automated daily brief for a Tel Aviv service business. Results coming soon.',
  },
  comparison: {
    rows: [
      { oldWay: 'Hire a consultant to deck a 3-month "AI strategy"', newWay: 'Start integrating in week one' },
      { oldWay: 'Sit in a generic AI workshop', newWay: 'Get a system built around your role' },
      { oldWay: 'Pay for a big AI project that collects dust', newWay: 'Pay for one thing that actually works' },
      { oldWay: 'Bring in an agency that never learns your business', newWay: 'Work with one person who learns how you think' },
      { oldWay: 'Get tools nobody touches after onboarding', newWay: 'Get systems you open every day' },
    ],
    footer: {
      hebrew: 'אמת',
      text: '— it is just honest.',
    },
  },
  portfolio: {
    heading: 'The Tivnili Standard',
    stats: [
      {
        figure: '5–15 hours/week',
        label: 'Time small businesses save on routine work after AI adoption',
        source: 'HubSpot State of Marketing 2025',
      },
      {
        figure: '78%',
        label: 'Organizations now using AI in at least one function, up from 55% in 2023',
        source: 'McKinsey State of AI 2025',
      },
      {
        figure: '1–3 months',
        label: 'Typical time to ROI payback on focused AI integration for small business',
        source: 'McKinsey 2025; SME automation reports 2026',
      },
      {
        figure: '~₪3,000',
        label: 'Average cost of AI integration for small business in 2026, down ~80% from ₪15,000 in 2023',
        source: 'Industry reports 2026',
      },
    ],
    statsSubline: 'These are industry numbers — not mine. I am building my first client stories now. Want to be one of them?',
    useCases: [
      {
        name: 'The Owner Daily Brief',
        description: 'Wake up to an AI-written summary of what needs your attention — deals, messages, decisions — instead of digging for it. The kind of thing that turns a 2-hour Monday into 20 minutes.',
        tags: ['Time back to owner', 'Daily clarity'],
      },
      {
        name: 'Quote and Follow-Up Autopilot',
        description: 'AI drafts your quotes, chases the follow-ups you forget, and keeps communication warm with leads — so leads stop slipping through the cracks.',
        tags: ['More deals closed', 'Zero leads dropped'],
      },
      {
        name: 'Processes That Run Themselves',
        description: 'Scheduling, triggers for repeat bookings, weekly performance summaries — the repetitive ops work gets handled so you can think instead of chase.',
        tags: ['Hours saved per week', 'Fewer mistakes'],
      },
      {
        name: 'Your Business, Always On',
        description: 'A customer-facing AI that responds, books, and takes inquiries 24/7 — so you are available even when you are surfing, sleeping, or off the clock.',
        tags: ['24/7 availability', 'Happier customers'],
      },
    ],
  },
  socialProof: {
    testimonials: [
      {
        align: 'left' as const,
        name: '',
        business: '',
        message: 'I am taking on a small number of founding clients right now. Founder pricing, full personal attention, and your results become the first real stories on this page.',
      },
      {
        align: 'right' as const,
        name: '',
        business: '',
        message: 'No case studies here yet — on purpose. I would rather show you real ones than invent fake ones. Want to be the first?',
      },
      {
        align: 'left' as const,
        name: '',
        business: '',
        message: 'One pilot client in progress — building an automated daily brief for a Tel Aviv service business. Results coming soon.',
      },
    ],
  },
  manifesto: {
    lines: [
      'I learn how you think before I build anything.',
      'Built around you. Not around a template.',
      'Precision is respect.',
      'Truth before polish.',
    ],
    hebrew: 'אמת',
  },
  howItWorks: {
    heading: 'How It Works',
    steps: [
      {
        number: '01',
        title: 'We talk. I listen.',
        description: '30-45 minute meeting. You walk me through your business — your day, your decisions, your problems, the stuff eating your time. I am listening for the one thing AI can fix that gives you the most breathing room.',
      },
      {
        number: '02',
        title: 'I attack the biggest bottleneck first.',
        description: 'No 3-month roadmap. I find the highest-impact integration and build it — the one that gives you the most air to breathe, fast. You see the plan before I build. Build time: 1-2 weeks.',
      },
      {
        number: '03',
        title: 'It works. Then we expand.',
        description: 'Once that is running and proving itself, we add more — more connectors, more automations, more time back. We grow your AI layer at your pace, not all at once.',
      },
    ],
    disclaimer: 'After the first meeting, you decide whether to continue. No obligation.',
  },
  pricing: {
    heading: 'Pricing',
    ctaText: 'Book session',
    tiers: [
      {
        name: 'The Clarity Session',
        price: '₪400',
        description: 'In-depth observation meeting (we map how you actually work). A concrete recommendation: the single highest-impact AI integration for you. A clear next-step plan — no obligation to continue.',
        badge: 'Start here',
        features: [
          'In-depth observation meeting (we map how you actually work)',
          'A concrete recommendation: the single highest-impact AI integration for you',
          'A clear next-step plan — no obligation to continue',
        ],
        whatsappMessage: 'Hi, I am interested in the Clarity Session — when can we schedule?',
      },
      {
        name: 'The Integration',
        price: '₪1,100',
        description: 'Everything in The Clarity Session. One custom AI integration built for your role. WhatsApp / email-based setup so it lives where you already work.',
        badge: 'Most popular',
        popular: true,
        features: [
          'Everything in The Clarity Session',
          'One custom AI integration built for your role',
          'Examples: automated quote management, daily brief, or customer response AI',
          'WhatsApp / email-based setup so it lives where you already work',
          '1-on-1 onboarding and handoff',
          '2 weeks of fine-tuning support',
        ],
        whatsappMessage: 'Hi, I am interested in The Integration — let us talk about what I need.',
      },
      {
        name: 'The Complete System',
        price: '₪2,000',
        description: 'Everything in The Integration. 3-5 AI integrations across multiple areas (ops, comms, customer touchpoints). Custom automations connecting your tools.',
        badge: 'Most impact',
        features: [
          'Everything in The Integration',
          '3-5 AI integrations across multiple areas (ops, comms, customer touchpoints)',
          'Custom automations connecting your tools (CRM, calendar, WhatsApp, email)',
          'Priority support',
          'Ongoing post-launch support',
        ],
        whatsappMessage: 'Hi, I am interested in The Complete System — let us talk about my business.',
      },
    ],
  },
  finalCta: {
    headline: {
      before: 'Ready to get your',
      highlight: 'time back?',
      after: '',
    },
    subtitle: 'Let us build the system that gives you your weekends back.',
    footer: 'Usually responds within the hour. No account managers, no bots answering for me. Just me.',
  },
  footer: {
    logoText: 'Tivnili',
    logoHebrew: 'תִּבְנִילִי',
    tagline: 'AI integration for the people who run things.',
    copyright: '© 2026 Gal Moussan. All rights reserved.',
  },
} as const satisfies Content;
