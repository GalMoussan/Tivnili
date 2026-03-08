import { type ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
}

export function SectionHeading({ children, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-cream">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg text-smoke mt-4">{subtitle}</p>
      )}
    </div>
  );
}
