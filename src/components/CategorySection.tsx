import { Project, Category } from "@/data/projects";
import ProjectCard from "./ProjectCard";

interface Props {
  id: Category;
  label: string;
  description: string;
  icon: React.ReactNode;
  projects: Project[];
}

export default function CategorySection({
  id,
  label,
  description,
  icon,
  projects,
}: Props) {
  if (projects.length === 0) return null;

  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">{icon}</span>
        <h2 className="text-2xl font-bold text-gray-900">{label}</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6 ml-9">{description}</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
