import { type ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-navy-800 rounded-2xl p-6 sm:p-8 border border-white/5 hover:-translate-y-2 transition-all duration-300 hover:shadow-glow-amber">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-bold text-cream font-display">{title}</h3>
      <p className="text-smoke mt-3">{description}</p>
    </div>
  );
}
