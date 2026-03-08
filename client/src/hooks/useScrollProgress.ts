import { useRef } from 'react';
import { useScroll } from 'framer-motion';

export function useScrollProgress() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: progress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return { ref, progress };
}
