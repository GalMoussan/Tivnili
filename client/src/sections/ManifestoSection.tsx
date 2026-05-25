import { useTransform, useReducedMotion, useMotionValueEvent, type MotionValue } from 'framer-motion';
import { useState } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useContent } from '../hooks/useContent';

function Word({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const [currentOpacity, setCurrentOpacity] = useState(0.1);

  useMotionValueEvent(opacity, 'change', (latest) => {
    setCurrentOpacity(latest);
  });

  return (
    <span style={{ opacity: currentOpacity }}>
      {word}{' '}
    </span>
  );
}

function ManifestoLine({
  line,
  startIndex,
  total,
  progress,
  reducedMotion,
}: {
  line: string;
  startIndex: number;
  total: number;
  progress: MotionValue<number>;
  reducedMotion: boolean | null;
}) {
  const words = line.split(' ');

  return (
    <p className="text-xl font-light leading-relaxed text-cream sm:text-2xl md:text-4xl">
      <span className="sr-only">{line}</span>
      <span aria-hidden="true">
        {words.map((word, wi) => {
          const i = startIndex + wi;
          if (reducedMotion) {
            return (
              <span key={i}>
                {word}{' '}
              </span>
            );
          }
          return (
            <Word
              key={i}
              word={word}
              index={i}
              total={total}
              progress={progress}
            />
          );
        })}
      </span>
    </p>
  );
}

export function ManifestoSection() {
  const { content } = useContent();
  const { ref, progress } = useScrollProgress(['start end', 'start start']);
  const prefersReducedMotion = useReducedMotion();

  const allWords = content.manifesto.lines.flatMap((line) => line.split(' '));
  const totalWords = allWords.length;

  let wordOffset = 0;

  return (
    <section ref={ref} className="relative min-h-[120vh] sm:min-h-[150vh] bg-navy-950">
      <div className="sticky top-0 flex min-h-screen items-center justify-center px-4 sm:px-6">
        <div className="max-w-3xl space-y-8 text-center">
          {content.manifesto.lines.map((line) => {
            const offset = wordOffset;
            wordOffset += line.split(' ').length;
            return (
              <ManifestoLine
                key={line}
                line={line}
                startIndex={offset}
                total={totalWords}
                progress={progress}
                reducedMotion={prefersReducedMotion}
              />
            );
          })}

          <p lang="he" className="mt-12">
            <span className="text-5xl font-bold text-amber-500 sm:text-6xl md:text-8xl">
              {content.manifesto.hebrew}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
