import { PageTransition } from '@/components/PageTransition';
import { SectionHeading } from '@/components/SectionHeading';
import { ScrollReveal } from '@/components/ScrollReveal';
import { resume } from '@/data/resume';

export const About = () => (
  <PageTransition>
    <section className="mx-auto max-w-4xl px-6 py-12 sm:py-20">
      <SectionHeading eyebrow="About" title="Hi, I'm Lisa" align="left" />

      <div className="mt-8 grid gap-8 sm:grid-cols-[320px_minmax(0,1fr)] sm:items-start">
        <img
          src="/lisa-portrait.jpg"
          alt="Portrait of Lisa Herzberg"
          className="aspect-square w-full rounded-2xl border border-ink/10 object-cover"
        />

        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            I got into software development about eight years ago, and it quickly became the perfect mix of creativity, problem-solving, and continuous learning. There's something incredibly rewarding about taking an idea from a conversation or sketch and turning it into a real product that people can use.
          </p>
            <p>
            I thrive in fast-paced, collaborative environments where there's always something new to learn. I'm naturally curious, so I'm usually the one asking questions to better understand a problem, and I genuinely enjoy when teammates come to me with their own questions. Whether it's brainstorming solutions, mentoring a newer developer, or talking through a tricky bug, I enjoy helping others grow just as much as I enjoy learning myself.
          </p>
            <p>
Outside of work, you'll usually find me picking up a new hobby or making something with my hands. I love everything from knitting and DIY home projects to experimenting with new creative ideas. When I'm not building software, I'm probably playing beach volleyball, snowboarding, or exploring the outdoors.</p>
           <p>
I feel incredibly fortunate to have built a career around something I genuinely enjoy. I'm excited to keep learning, keep creating, and bring that curiosity, enthusiasm, and positive energy to every team and project I'm part of.          </p>
        </div>
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
