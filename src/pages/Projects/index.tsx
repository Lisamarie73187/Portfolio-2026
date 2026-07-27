import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { ScrollReveal } from '@/components/ScrollReveal';
import { useProjects } from '@/hooks/useProjects';

export const Projects = () => {
  const projects = useProjects();

  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 py-12 sm:py-20">
        <SectionHeading eyebrow="Portfolio" title="Everything I've built" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={(index % 3) * 0.08}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};
