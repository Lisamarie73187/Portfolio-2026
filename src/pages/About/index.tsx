import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollReveal } from '@/components/ScrollReveal';
import { resume } from '@/data/resume';

export const About = () => (
  <PageTransition>
    <section className="mx-auto max-w-3xl px-6 py-12 sm:py-20">
      <SectionHeading eyebrow="About" title="Hi, I'm Lisa" align="left" />

      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
        <p>{resume.summary}</p>
        <p>
          I'm a solo indie developer based in Bend, Oregon, building consumer-facing web and mobile
          apps — often map-based or location-aware. I care about color, vibe, and visual polish as
          much as clean architecture.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-display text-xl font-bold text-ink">What I work with</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {resume.skills.map((group, index) => (
            <ScrollReveal key={group.label} delay={index * 0.06}>
              <div className="rounded-2xl border border-ink/10 bg-surface p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  {group.label}
                </p>
                <p className="text-sm text-muted">{group.skills.join(' · ')}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);
