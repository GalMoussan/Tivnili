import { AmberText } from '../components/AmberText';
import { WhatsAppInput } from '../components/WhatsAppInput';
import { useContent } from '../hooks/useContent';

export function FinalCTASection() {
  const { content } = useContent();

  return (
    <section className="bg-gradient-to-br from-amber-100 via-cream to-cream-dark py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center flex flex-col items-center gap-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
          {content.finalCta.headline.before} <AmberText>{content.finalCta.headline.highlight}</AmberText> {content.finalCta.headline.after}
        </h2>

        <p className="text-lg text-warm-gray">
          {content.finalCta.subtitle}
        </p>

        <div className="w-full">
          <WhatsAppInput
            placeholder={content.hero.whatsappPlaceholder}
            ariaLabel={content.hero.whatsappAriaLabel}
            buttonAriaLabel={content.hero.whatsappButtonAriaLabel}
            prefillText={content.hero.whatsappDefaultMessage}
          />
        </div>

        <p className="text-sm text-warm-gray/70">
          {content.finalCta.footer}
        </p>
      </div>
    </section>
  );
}
