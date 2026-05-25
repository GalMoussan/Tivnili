import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import { LocaleProvider } from '../hooks/useLocale';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {}

function customRender(ui: ReactElement, options?: CustomRenderOptions) {
  return render(ui, { wrapper: LocaleProvider, ...options });
}

export * from '@testing-library/react';
export { customRender as render };
