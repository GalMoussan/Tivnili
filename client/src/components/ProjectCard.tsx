interface ProjectCardProps {
  name: string;
  description: string;
  result: string;
  featured?: boolean;
}

export function ProjectCard({ name, description, result, featured }: ProjectCardProps) {
  return (
    <div
      className={`bg-navy-800 rounded-2xl border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-amber group ${
        featured ? 'p-6 sm:p-10 col-span-full' : 'p-6'
      }`}
    >
      <h3
        className={`font-bold text-cream font-display ${
          featured ? 'text-2xl sm:text-3xl' : 'text-xl'
        }`}
      >
        {name}
      </h3>
      <p className="text-smoke mt-3">{description}</p>
      <p className="text-amber mt-4 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {result}
      </p>
    </div>
  );
}
