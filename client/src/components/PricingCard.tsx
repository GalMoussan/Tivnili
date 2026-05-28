const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  badge: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export function PricingCard({ name, price, description, badge, features, popular, ctaText }: PricingCardProps) {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hey! I'm interested in the ${name} plan.`)}`;

  return (
    <div
      className={`bg-white rounded-2xl p-6 sm:p-8 border relative flex flex-col hover:-translate-y-1 transition-all duration-300 ${
        popular ? 'border-amber-500 ring-2 ring-amber-500/30' : 'border-warm-gray/20'
      }`}
    >
      <span
        className={`absolute top-4 end-4 px-3 py-1 rounded-full text-xs font-semibold ${
          popular
            ? 'bg-amber-500 text-white font-bold'
            : 'bg-cream-dark text-warm-gray'
        }`}
      >
        {badge}
      </span>
      <h3 className="text-2xl font-bold text-navy font-display">{name}</h3>
      <p className="text-4xl font-extrabold text-navy mt-2">{price}</p>
      <p className="text-warm-gray mt-4">{description}</p>

      <ul className="mt-6 space-y-3 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-warm-gray">
            <svg className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 block w-full text-center rounded-full py-3 font-semibold transition-colors ${
          popular
            ? 'bg-amber-500 text-white hover:bg-amber-600'
            : 'bg-navy text-white hover:bg-navy-800'
        }`}
      >
        {ctaText}
      </a>
    </div>
  );
}
