import { useState, type KeyboardEvent, type FormEvent } from 'react';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

export interface WhatsAppInputProps {
  placeholder?: string;
  ariaLabel?: string;
  buttonAriaLabel?: string;
  prefillText?: string;
}

export function WhatsAppInput({
  placeholder = 'Tell me what your business needs →',
  ariaLabel = 'Your message',
  buttonAriaLabel = 'Send message via WhatsApp',
  prefillText,
}: WhatsAppInputProps) {
  const [message, setMessage] = useState('');

  function handleSubmit(e?: FormEvent) {
    e?.preventDefault();
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    const textToSend = message.trim() || prefillText || '';
    const url = textToSend
      ? `${base}?text=${encodeURIComponent(textToSend)}`
      : base;
    window.open(url, '_blank');
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-xl mx-auto"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className="w-full rounded-full bg-navy-800 border border-white/10 py-4 pl-5 pr-14 sm:pl-6 text-cream placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-glow-amber transition-shadow min-h-[48px]"
      />
      <button
        type="submit"
        aria-label={buttonAriaLabel}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-navy-900 hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-navy-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </form>
  );
}
