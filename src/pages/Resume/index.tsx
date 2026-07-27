import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/Button';
import { resume } from '@/data/resume';

export const Resume = () => (
  <PageTransition>
    <section className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Resume" title="Experience & skills" align="left" />
        <Button href={resume.pdfUrl}>Download PDF ↓</Button>
      </div>

      <p className="mt-8 text-base leading-relaxed text-muted">{resume.summary}</p>

      <div className="mt-12">
        <h3 className="mb-6 font-display text-xl font-bold text-ink">Experience</h3>
        <div className="space-y-8 border-l border-ink/10 pl-6">
          {resume.experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-cream"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-display font-bold text-ink">
                  {job.role} · {job.company}
                </h4>
                <span className="text-xs text-muted">{job.period}</span>
              </div>
              <p className="text-xs text-muted">{job.location}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-display text-xl font-bold text-ink">Skills</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          {resume.skills.map((group) => (
            <div key={group.label}>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {group.label}
              </p>
              <p className="text-sm text-muted">{group.skills.join(' · ')}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-display text-xl font-bold text-ink">Education</h3>
        {resume.education.map((entry) => (
          <div key={entry.school} className="flex flex-wrap items-baseline justify-between gap-2">
            <p className="font-medium text-ink">
              {entry.credential} · {entry.school}
            </p>
            <span className="text-xs text-muted">{entry.period}</span>
          </div>
        ))}
      </div>
    </section>
  </PageTransition>
);
