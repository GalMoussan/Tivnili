import { useRef } from 'react';
import { useScroll, type UseScrollOptions } from 'framer-motion';

export function useScrollProgress(offset: UseScrollOptions['offset'] = ['start end', 'end start']) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress: progress } = useScroll({
    target: ref,
    offset,
  });

  return { ref, progress };
}
