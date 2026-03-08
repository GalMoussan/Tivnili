import { AmberText } from '../components/AmberText';
import { WhatsAppInput } from '../components/WhatsAppInput';

export function FinalCTASection() {
  return (
    <section className="bg-gradient-to-br from-amber-500/10 via-navy-900 to-navy-800 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center flex flex-col items-center gap-8">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-cream leading-tight">
          Your business, <AmberText>finally</AmberText> built.
        </h2>

        <p className="text-lg text-smoke">
          You've read enough. Let's talk.
        </p>

        <div className="w-full">
          <WhatsAppInput />
        </div>

        <p className="text-sm text-smoke/70">
          Usually responds within the hour. Never a bot. Never a project manager. Just me.
        </p>
      </div>
    </section>
  );
}
