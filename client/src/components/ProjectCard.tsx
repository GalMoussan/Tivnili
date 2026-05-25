interface ProjectCardProps {
  name: string;
  description: string;
  result: string;
  featured?: boolean;
  tags?: string[];
  mockup?: 'crm' | 'restaurant' | 'service' | 'beauty' | 'crypto';
}

function MockupCRM() {
  return (
    <div className="w-full h-full bg-[#0F172A] p-3 sm:p-4 flex flex-col gap-2 overflow-hidden font-body text-[10px] sm:text-xs">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-400" />
        <div className="h-2 w-2 rounded-full bg-yellow-400" />
        <div className="h-2 w-2 rounded-full bg-green-400" />
        <div className="ml-auto h-3 w-20 rounded bg-white/5" />
      </div>
      <div className="flex flex-1 gap-2 min-h-0">
        <div className="w-14 sm:w-20 shrink-0 flex flex-col gap-1.5 py-2">
          <div className="h-2 w-full rounded bg-amber-500/30" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="flex-1 rounded bg-amber-500/10 p-2">
              <div className="h-2 w-12 rounded bg-amber-500/40 mb-1.5" />
              <div className="text-amber-400 font-bold text-sm sm:text-base">47</div>
              <div className="h-1.5 w-8 rounded bg-white/10 mt-1" />
            </div>
            <div className="flex-1 rounded bg-emerald-500/10 p-2">
              <div className="h-2 w-10 rounded bg-emerald-500/40 mb-1.5" />
              <div className="text-emerald-400 font-bold text-sm sm:text-base">$2.4M</div>
              <div className="h-1.5 w-8 rounded bg-white/10 mt-1" />
            </div>
            <div className="flex-1 rounded bg-blue-500/10 p-2 hidden sm:block">
              <div className="h-2 w-8 rounded bg-blue-500/40 mb-1.5" />
              <div className="text-blue-400 font-bold text-sm sm:text-base">92%</div>
              <div className="h-1.5 w-8 rounded bg-white/10 mt-1" />
            </div>
          </div>
          <div className="flex-1 rounded bg-white/5 p-2 space-y-1.5">
            {[85, 60, 92, 45].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-white/10 shrink-0" />
                <div className="h-2 rounded bg-white/10" style={{ width: `${w}%` }} />
                <div className="h-4 w-10 rounded bg-amber-500/15 shrink-0 hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupRestaurant() {
  return (
    <div className="w-full h-full bg-[#1a1a2e] p-3 sm:p-4 flex flex-col gap-2 overflow-hidden font-body text-[10px] sm:text-xs">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded bg-orange-300/40" />
        <div className="flex gap-3">
          <div className="h-2 w-8 rounded bg-white/15" />
          <div className="h-2 w-8 rounded bg-white/15" />
          <div className="h-5 w-14 rounded-full bg-orange-500/80 hidden sm:block" />
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-2 min-h-0">
        {[
          { color: 'bg-orange-900/40', label: 'Pasta', price: '$18' },
          { color: 'bg-red-900/40', label: 'Steak', price: '$32' },
          { color: 'bg-amber-900/40', label: 'Risotto', price: '$22' },
        ].map((item, i) => (
          <div key={i} className={`${item.color} rounded-lg p-2 flex flex-col justify-end ${i === 2 ? 'hidden sm:flex' : ''}`}>
            <div className="h-8 sm:h-12 w-full rounded bg-white/5 mb-2" />
            <div className="text-white/80 font-medium">{item.label}</div>
            <div className="text-orange-300 font-bold">{item.price}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
        <div className="h-3 w-3 rounded bg-green-500/60" />
        <span className="text-green-300">Open Now</span>
        <span className="text-white/30 ml-auto">Book a Table →</span>
      </div>
    </div>
  );
}

function MockupService() {
  return (
    <div className="w-full h-full bg-[#1a1a2e] p-3 sm:p-4 flex flex-col gap-2 overflow-hidden font-body text-[10px] sm:text-xs">
      <div className="flex items-center justify-between">
        <div className="h-3 w-16 rounded bg-blue-300/40" />
        <div className="h-5 w-5 rounded-full bg-blue-500/30" />
      </div>
      <div className="grid grid-cols-7 gap-px bg-white/5 rounded overflow-hidden flex-1">
        {Array.from({ length: 21 }).map((_, i) => (
          <div key={i} className={`p-1 text-center ${i === 9 || i === 15 ? 'bg-blue-500/20' : 'bg-navy-800/50'}`}>
            <span className="text-[8px] text-white/30">{(i % 7) + 1}</span>
            {(i === 9 || i === 15) && <div className="h-1 w-full rounded-full bg-blue-400 mt-0.5" />}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 bg-blue-500/10 rounded p-2">
          <div className="text-blue-300 font-bold">12</div>
          <div className="text-white/30">This week</div>
        </div>
        <div className="flex-1 bg-emerald-500/10 rounded p-2">
          <div className="text-emerald-300 font-bold">$3.2K</div>
          <div className="text-white/30">Revenue</div>
        </div>
      </div>
    </div>
  );
}

function MockupBeauty() {
  return (
    <div className="w-full h-full bg-[#1a1a2e] p-3 sm:p-4 flex flex-col gap-2 overflow-hidden font-body text-[10px] sm:text-xs">
      <div className="flex items-center justify-between">
        <div className="h-3 w-20 rounded bg-purple-300/40" />
        <div className="flex gap-1">
          <div className="h-4 w-4 rounded-full bg-purple-500/30" />
          <div className="h-4 w-4 rounded-full bg-pink-500/30" />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 min-h-0">
        {[
          { name: 'Hair Styling', time: '45 min', price: '$80', color: 'purple' },
          { name: 'Facial Treatment', time: '60 min', price: '$120', color: 'pink' },
          { name: 'Manicure', time: '30 min', price: '$45', color: 'fuchsia' },
        ].map((svc, i) => (
          <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg p-2">
            <div className={`h-6 w-6 rounded-full bg-${svc.color}-500/20 shrink-0`} />
            <div className="flex-1 min-w-0">
              <div className="text-white/80 font-medium truncate">{svc.name}</div>
              <div className="text-white/30">{svc.time}</div>
            </div>
            <div className="text-purple-300 font-bold shrink-0">{svc.price}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex -space-x-1.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-5 w-5 rounded-full bg-purple-500/20 border border-[#1a1a2e]" />
          ))}
        </div>
        <span className="text-white/30">+128 happy clients</span>
      </div>
    </div>
  );
}

function MockupCrypto() {
  return (
    <div className="w-full h-full bg-[#0B1120] p-3 sm:p-4 flex flex-col gap-2 overflow-hidden font-body text-[10px] sm:text-xs">
      <div className="flex items-center justify-between">
        <div className="h-3 w-16 rounded bg-emerald-300/40" />
        <div className="text-emerald-400 font-bold">+12.4%</div>
      </div>
      <div className="flex-1 flex items-end gap-px min-h-0">
        {[30, 45, 35, 55, 42, 65, 58, 72, 62, 78, 70, 85, 75, 90, 82, 95].map((h, i) => (
          <div key={i} className="flex-1 rounded-t" style={{
            height: `${h}%`,
            background: `linear-gradient(to top, rgba(34,197,94,${0.15 + i * 0.03}), rgba(34,197,94,${0.4 + i * 0.02}))`,
          }} />
        ))}
      </div>
      <div className="flex gap-2">
        {[
          { symbol: 'BTC', value: '$67,432', change: '+2.3%', up: true },
          { symbol: 'ETH', value: '$3,521', change: '+4.1%', up: true },
          { symbol: 'SOL', value: '$142', change: '-0.8%', up: false },
        ].map((coin) => (
          <div key={coin.symbol} className="flex-1 bg-white/5 rounded p-1.5">
            <div className="text-white/60 font-medium">{coin.symbol}</div>
            <div className="text-white/80 font-bold">{coin.value}</div>
            <div className={coin.up ? 'text-emerald-400' : 'text-red-400'}>{coin.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mockups: Record<string, () => JSX.Element> = {
  crm: MockupCRM,
  restaurant: MockupRestaurant,
  service: MockupService,
  beauty: MockupBeauty,
  crypto: MockupCrypto,
};

export function ProjectCard({ name, description, result, featured, tags, mockup }: ProjectCardProps) {
  const MockupComponent = mockup ? mockups[mockup] : null;

  return (
    <div
      className={`bg-navy-800 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-amber group overflow-hidden ${
        featured ? 'col-span-full' : ''
      }`}
    >
      {/* Mockup screenshot */}
      <div className={`w-full ${featured ? 'h-48 sm:h-64' : 'h-36 sm:h-44'}`}>
        {MockupComponent ? (
          <MockupComponent />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy-700 to-amber-500/20" />
        )}
      </div>

      <div className={`${featured ? 'p-6 sm:p-8' : 'p-5'}`}>
        <h3
          className={`font-bold text-cream font-display ${
            featured ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {name}
        </h3>
        <p className="text-smoke mt-2">{description}</p>
        <p className="text-amber-500 mt-3 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {result}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-1 rounded-full bg-navy-700 text-smoke">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
