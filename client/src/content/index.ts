import { en } from './en';
import { he } from './he';
import type { Content } from './types';

export type Locale = 'en' | 'he';

const content: Record<Locale, Content> = {
  en,
  he,
};

export function getContent(locale: Locale): Content {
  return content[locale];
}

export { en, he };
export type { Content };
