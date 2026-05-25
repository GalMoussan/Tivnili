import { useLocale } from './useLocale';
import { getContent } from '../content';

export function useContent() {
  const { locale } = useLocale();
  return { content: getContent(locale) };
}
