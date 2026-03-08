import { type ReactNode } from 'react';

interface AmberTextProps {
  children: ReactNode;
}

export function AmberText({ children }: AmberTextProps) {
  return <span className="text-amber-500">{children}</span>;
}
