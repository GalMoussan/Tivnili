import { useRef } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollRevealOptions {
  threshold?: number;
  once?: boolean;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { threshold = 0.1, once = true } = options;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: threshold, once });

  return { ref, isInView };
}
