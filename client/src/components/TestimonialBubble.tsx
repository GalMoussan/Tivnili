interface TestimonialBubbleProps {
  name: string;
  business: string;
  message: string;
  align?: 'left' | 'right';
}

export function TestimonialBubble({
  name,
  business,
  message,
  align = 'left',
}: TestimonialBubbleProps) {
  const alignClass = align === 'right' ? 'self-end' : 'self-start';

  return (
    <div className={`${alignClass} max-w-md`}>
      <div className="bg-emerald-900/20 rounded-2xl px-5 py-4">
        <span className="text-xs text-emerald-400 font-medium">WhatsApp</span>

        <p className="text-cream mt-2">{message}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-smoke">
            {name} — {business}
          </span>
          <span className="text-xs text-smoke/50 ml-4">2:34 PM</span>
        </div>
      </div>
    </div>
  );
}
