export interface StatCardProps {
  stat: string;
  label: string;
  citation?: string;
}

export function StatCard({ stat, label, citation }: StatCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg bg-white border border-warm-gray/10 px-6 py-8 shadow-sm hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1 transition-all duration-200">
      <div className="text-4xl sm:text-5xl font-extrabold text-amber-500 font-display">
        {stat}
      </div>
      <div className="text-sm sm:text-base text-navy text-center font-medium">
        {label}
      </div>
      {citation && (
        <div className="text-xs text-warm-gray/60 text-center mt-1">
          {citation}
        </div>
      )}
    </div>
  );
}
