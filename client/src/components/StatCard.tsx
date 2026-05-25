export interface StatCardProps {
  stat: string;
  label: string;
  citation?: string;
}

export function StatCard({ stat, label, citation }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-navy-800 border border-white/5 px-6 py-8 shadow-glow-amber/20 hover:shadow-glow-amber hover:-translate-y-1 transition-all duration-200">
      <div className="text-4xl sm:text-5xl font-extrabold text-amber-500 font-display">
        {stat}
      </div>
      <div className="text-sm sm:text-base text-cream text-center font-medium">
        {label}
      </div>
      {citation && (
        <div className="text-xs text-smoke/60 text-center mt-1">
          {citation}
        </div>
      )}
    </div>
  );
}
