import { type ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center">
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-warm-gray mt-4 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
