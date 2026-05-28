import { type ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-warm-gray/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-bold text-navy font-display">{title}</h3>
      <p className="text-warm-gray mt-3">{description}</p>
    </div>
  );
}
