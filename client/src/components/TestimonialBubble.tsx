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
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-5 py-4 shadow-sm">
        <span className="text-xs text-emerald-600 font-medium">WhatsApp</span>

        <p className="text-navy mt-2">{message}</p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-sm text-warm-gray">
            {name} — {business}
          </span>
          <span className="text-xs text-warm-gray/50 ml-4">2:34 PM</span>
        </div>
      </div>
    </div>
  );
}
