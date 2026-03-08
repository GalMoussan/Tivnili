import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface ComparisonRowProps {
  oldWay: string;
  newWay: string;
  delay?: number;
}

export function ComparisonRow({ oldWay, newWay, delay = 0 }: ComparisonRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();

  const content = (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 py-4 border-b border-white/10">
      <span className="text-smoke line-through opacity-60 text-base sm:text-lg">
        {oldWay}
      </span>
      <span className="text-amber-500 font-semibold text-base sm:text-lg">
        {newWay}
      </span>
    </div>
  );

  if (prefersReducedMotion) {
    return <div ref={ref}>{content}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {content}
    </motion.div>
  );
}
