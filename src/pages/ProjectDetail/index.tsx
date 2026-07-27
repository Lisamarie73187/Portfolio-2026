import { Link } from 'react-router-dom';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/Button';
import { Tag } from '@/components/Tag';
import { TechStack } from './TechStack';
import { FeatureList } from './FeatureList';
import { useProjectDetail } from './useProjectDetail';

export const ProjectDetail = () => {
  const { project, prev, next } = useProjectDetail();

  if (!project) {
    return (
      <PageTransition>
        <section className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h1 className="font-display text-3xl font-semibold text-ink">Project not found</h1>
          <p className="mt-3 text-muted">This project doesn't exist — it may have moved.</p>
          <div className="mt-6">
            <Button to="/projects" variant="outline">
              ← Back to projects
            </Button>
          </div>
        </section>
      </PageTransition>
    );
  }

  const images = [project.coverImage, ...project.gallery];

  return (
    <PageTransition>
      <article className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
        <Link to="/projects" className="text-sm text-muted transition-colors hover:text-primary">
          ← All projects
        </Link>

        <header className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">
            {project.role} · {project.year}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted">{project.tagline}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          {/* Left: stacked screenshots */}
          <div className="space-y-6">
            {images.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-ink/10">
                <img
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  loading={i === 0 ? undefined : 'lazy'}
                  className="w-full"
                />
              </div>
            ))}
          </div>

          {/* Right: about, tech stack, features, links */}
          <div className="space-y-10 lg:sticky lg:top-24 lg:self-start">
            <section aria-labelledby="about-heading">
              <h2
                id="about-heading"
                className="text-xs font-semibold uppercase tracking-wider text-primary"
              >
                About the Project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted">{project.description}</p>
            </section>

            <TechStack items={project.techStack} />
            <FeatureList features={project.features} />

            {(project.liveUrl || project.githubWebUrl || project.githubMobileUrl) && (
              <section aria-labelledby="links-heading">
                <h2
                  id="links-heading"
                  className="text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  Links
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {project.liveUrl && <Button href={project.liveUrl}>Visit live site ↗</Button>}
                  {project.githubWebUrl && (
                    <Button href={project.githubWebUrl} variant="outline">
                      Web code
                    </Button>
                  )}
                  {project.githubMobileUrl && (
                    <Button href={project.githubMobileUrl} variant="outline">
                      Mobile code
                    </Button>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>

        <nav className="mt-16 flex items-center justify-between gap-4 border-t border-ink/10 pt-6 text-sm">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="group">
              <span className="block text-xs uppercase tracking-wider text-muted">Previous</span>
              <span className="font-display font-bold text-ink transition-colors group-hover:text-primary">
                ← {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/projects/${next.slug}`} className="group text-right">
              <span className="block text-xs uppercase tracking-wider text-muted">Next</span>
              <span className="font-display font-bold text-ink transition-colors group-hover:text-primary">
                {next.title} →
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>
    </PageTransition>
  );
};
