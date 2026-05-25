import type { Content } from './types';

export const en = {
  meta: {
    title: 'Tivnili — AI Integration for Business Owners',
    description: 'I embed AI into how you manage — so you think clearer, move faster, and stop doing the work a machine should be doing for you.',
    ogTitle: 'Tivnili — AI Integration for Business Owners',
    ogDescription: 'I embed AI into how you manage — so you think clearer, move faster, and stop doing the work a machine should be doing for you.',
    twitterTitle: 'Tivnili — AI Integration for Business Owners',
    twitterDescription: 'I embed AI into how you manage — so you think clearer, move faster, and stop doing the work a machine should be doing for you.',
  },
  nav: {
    services: 'Services',
    work: 'Work',
    pricing: 'Pricing',
    whatsapp: 'WhatsApp',
    skipToContent: 'Skip to content',
  },
  hero: {
    logoText: 'tivnili',
    logoHebrew: 'תִּבְנִילִי',
    headline: {
      before: 'Your business, run',
      highlight: 'smarter',
      after: '.',
    },
    subtitle: 'I embed AI into how you manage — so you think clearer, move faster, and stop doing the work a machine should be doing for you.',
    whatsappPlaceholder: 'Tell me how you run your business →',
    whatsappAriaLabel: 'Your message',
    whatsappButtonAriaLabel: 'Send message via WhatsApp',
    whatsappDefaultMessage: "Hi — I run a business and want to see where AI can save me time.",
    ctaPrimary: 'Message me on WhatsApp',
    ctaSecondary: 'See How It Works',
  },
  services: {
    heading: 'What I Do',
    items: [
      {
        title: 'AI for Your Role',
        description: 'I learn how you actually run your day, then build AI that makes you sharper — better decisions, faster replies, less noise in your head.',
      },
      {
        title: 'AI for Your Business',
        description: "Once you're running on AI, we push it outward — your team, your operations, your customers. The whole machine, upgraded one piece at a time.",
      },
      {
        title: 'The Clarity Session',
        description: 'One focused session. You come in running on gut feel and chaos. You leave knowing exactly which AI integration will buy you back the most time — and we start building from there.',
      },
    ],
  },
  comparison: {
    rows: [
      { oldWay: 'Hire a consultant for a 3-month "AI strategy" deck', newWay: 'Start integrating in week one' },
      { oldWay: 'Sit through a generic AI workshop', newWay: 'Get a system built around your role' },
      { oldWay: 'Pay for a big AI project that gathers dust', newWay: 'Pay for one thing that actually runs' },
      { oldWay: 'Bring in an agency that never learns your business', newWay: 'Work with one person who learns how you think' },
      { oldWay: 'Get tools nobody touches after onboarding', newWay: 'Get systems you open every single day' },
    ],
    footer: {
      hebrew: 'אמת',
      text: '— This is just honest.',
    },
  },
  portfolio: {
    heading: 'The Tivnili Standard',
    stats: [
      {
        figure: '5–15 hours/week',
        label: 'time small businesses save on routine work after adopting AI',
        source: 'HubSpot State of Marketing 2025',
      },
      {
        figure: '78%',
        label: 'of organizations now use AI in at least one function, up from 55% in 2023',
        source: 'McKinsey State of AI 2025',
      },
      {
        figure: '1–3 months',
        label: 'typical time to ROI on a focused SMB AI integration',
        source: 'McKinsey 2025; SME automation reports 2026',
      },
      {
        figure: '~₪3,000',
        label: 'the average cost of an SMB AI integration in 2026, down ~80% from ₪15,000 in 2023',
        source: 'Industry reports 2026',
      },
    ],
    statsSubline: "These are industry numbers — not mine. I'm building my first client stories now. Want to be one of them?",
    useCases: [
      {
        name: "The Owner's Daily Brief",
        description: 'Wake up to an AI-written summary of what needs your attention — deals, messages, decisions — instead of digging for it. The kind of thing that turns a 2-hour Monday into 20 minutes.',
        tags: ["Owner's time back", 'Daily clarity'],
      },
      {
        name: 'Quote & Follow-Up on Autopilot',
        description: 'AI drafts your quotes, chases the follow-ups you forget, and keeps client comms warm — so leads stop slipping through the cracks.',
        tags: ['More closed deals', 'Zero dropped leads'],
      },
      {
        name: 'Ops That Run Themselves',
        description: 'Scheduling, reordering triggers, weekly performance summaries — the repetitive operational work handled, so you can think instead of chase.',
        tags: ['Hours saved weekly', 'Fewer mistakes'],
      },
      {
        name: 'Your Business, Always On',
        description: "Customer-facing AI that answers, books, and intakes 24/7 — so you're responsive even when you're surfing, sleeping, or off the clock.",
        tags: ['24/7 responsiveness', 'Happier customers'],
      },
    ],
  },
  socialProof: {
    testimonials: [
      {
        align: 'left' as const,
        name: '',
        business: '',
        message: "I'm taking on a small number of founding clients right now. Founder pricing, founder attention, and your results become the first real stories on this page.",
      },
      {
        align: 'right' as const,
        name: '',
        business: '',
        message: "No case studies here yet — on purpose. I'd rather show you real ones than invent fake ones. Want to be the first?",
      },
    ],
  },
  manifesto: {
    lines: [
      'I learn how you think before I build anything.',
      'Built around you. Not around a template.',
      'Precision is a form of respect.',
    ],
    hebrew: 'אמת',
  },
  howItWorks: {
    heading: 'How It Works',
    steps: [
      {
        number: '01',
        title: 'We talk. I listen.',
        description: "We meet and you walk me through your business — your day, your decisions, your bottlenecks, the stuff that eats your time. I'm listening for the one thing AI can fix that buys you the most breathing room.",
      },
      {
        number: '02',
        title: 'I attack the biggest bottleneck first.',
        description: 'No 3-month roadmap. I find the highest-impact integration and build it — the one that gives you the most air to breathe, fast. You see the plan before I build.',
      },
      {
        number: '03',
        title: 'It works. Then we expand.',
        description: "Once that's running and proving itself, we add more — more connectors, more automations, more time back. We grow your AI layer at your pace, not all at once.",
      },
    ],
  },
  pricing: {
    heading: 'Pricing',
    ctaText: "Let's talk",
    tiers: [
      {
        name: 'The Clarity Session',
        price: '₪400',
        description: 'One focused session. We map your business and pinpoint exactly where AI buys you back the most time.',
        badge: 'Start here',
        features: [
          'In-depth observation meeting (we map how you actually work)',
          'A concrete recommendation: the single highest-impact AI integration for you',
          'A clear next-step plan — no obligation to continue',
        ],
        whatsappMessage: "Hi — I'd like to book the ₪400 Clarity Session.",
      },
      {
        name: 'The Integration',
        price: '₪1,100',
        description: 'The session, plus your first AI system built and running — the one that solves your biggest bottleneck.',
        badge: 'Most popular',
        popular: true,
        features: [
          'Everything in The Clarity Session',
          'One custom AI integration built for your role (briefings, drafting, follow-ups, or your biggest pain)',
          'WhatsApp / email-based setup so it lives where you already work',
          '1-on-1 onboarding + handoff',
          '2 weeks of fine-tuning support',
        ],
        whatsappMessage: "Hi — I'm interested in The Integration (₪1,100).",
      },
      {
        name: 'The Full Stack',
        price: '₪2,000',
        description: 'AI built across more of your business — multiple workflows, more time back, more of the machine upgraded.',
        badge: 'Most impact',
        features: [
          'Everything in The Integration',
          'AI integrations across multiple areas (ops, comms, customer touchpoints)',
          'Custom automations connecting your tools',
          'Priority support',
          'Ongoing post-launch support',
        ],
        whatsappMessage: 'Hi — tell me about The Full Stack (₪2,000).',
      },
    ],
  },
  finalCta: {
    headline: {
      before: 'Your management,',
      highlight: 'finally',
      after: 'working for you.',
    },
    subtitle: "You've seen enough. Let's build your AI layer.",
    footer: "I use AI to do what humans simply can't do alone — but there's always a human steering it. That human is me. Usually responds within the hour. No account managers, no bots answering for me. Just me.",
  },
  footer: {
    logoText: 'tivnili',
    logoHebrew: 'תִּבְנִילִי',
    tagline: 'AI integration for the people who run things.',
    copyright: 'All rights reserved.',
  },
} as const satisfies Content;
