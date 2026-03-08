interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  badge: string;
  popular?: boolean;
}

export function PricingCard({ name, price, description, badge, popular }: PricingCardProps) {
  return (
    <div
      className={`bg-navy-800 rounded-2xl p-8 border relative hover:-translate-y-1 transition-all duration-300 ${
        popular ? 'border-amber-500/30' : 'border-white/5'
      }`}
    >
      <span
        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
          popular
            ? 'bg-amber-500 text-navy-900 font-bold'
            : 'bg-navy-700 text-smoke'
        }`}
      >
        {badge}
      </span>
      <h3 className="text-2xl font-bold text-cream font-display">{name}</h3>
      <p className="text-4xl font-extrabold text-cream mt-2">{price}</p>
      <p className="text-smoke mt-4">{description}</p>
    </div>
  );
}
