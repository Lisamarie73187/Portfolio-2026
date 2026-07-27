import { Link } from 'react-router-dom';
import { Tag } from '@/components/Tag';
import type { Project } from '@/types';

export interface ProjectCardProps {
  project: Project;
  /** In the masonry mosaic the image shows at its natural height (no crop) instead of a fixed ratio. */
  featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => (
  <Link
    to={`/projects/${project.slug}`}
    className="group block overflow-hidden rounded-2xl border border-ink/10 bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
  >
    <div className={`overflow-hidden bg-cream ${featured ? '' : 'aspect-[16/10]'}`}>
      <img
        src={featured ? (project.homeImage ?? project.coverImage) : project.coverImage}
        alt={project.title}
        loading="lazy"
        className={`w-full transition-transform duration-500 group-hover:scale-105 ${
          featured ? 'h-auto' : 'h-full object-cover'
        }`}
      />
    </div>
    <div className="p-5">
      <h3 className="mb-1 font-display text-lg font-bold text-ink">{project.title}</h3>
      <p className="mb-3 text-sm text-muted">{project.tagline}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, featured ? 3 : 4).map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  </Link>
);
