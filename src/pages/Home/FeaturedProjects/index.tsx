import { ProjectCard } from '@/components/ProjectCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Button } from '@/components/Button';
import { useProjects } from '@/hooks/useProjects';

export const FeaturedProjects = () => {
  const projects = useProjects();
  const featured = projects.slice(0, 6);

  return (
    <section className="px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-base font-semibold uppercase tracking-[0.2em] text-primary sm:text-lg">
          Featured Projects
        </p>
        {/* Masonry: cards keep their natural image height and pack into columns.
            Each image shows in full (no crop), so tiles vary in height organically. */}
        <div className="mt-12 gap-6 [column-fill:_balance] sm:columns-2 lg:columns-3">
          {featured.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={(index % 3) * 0.08}
              className="mb-6 break-inside-avoid"
            >
              <ProjectCard project={project} featured />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/projects" variant="outline">
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
