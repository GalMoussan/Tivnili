import { useState, type KeyboardEvent, type FormEvent } from 'react';

const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ?? '';

export function WhatsAppInput() {
  const [message, setMessage] = useState('');

  function handleSubmit(e?: FormEvent) {
    e?.preventDefault();
    const base = `https://wa.me/${WHATSAPP_NUMBER}`;
    const url = message.trim()
      ? `${base}?text=${encodeURIComponent(message.trim())}`
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
        placeholder="Tell me what your business needs →"
        aria-label="Your message"
        className="w-full rounded-full bg-navy-800 border border-white/10 py-4 pl-6 pr-14 text-cream placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:shadow-glow-amber transition-shadow"
      />
      <button
        type="submit"
        aria-label="Send message via WhatsApp"
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-500 text-navy-900 hover:bg-amber-400 transition-colors"
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
