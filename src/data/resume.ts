import type { ResumeData } from '@/types';

/** Mock resume content. Swap `pdfUrl` and details for the real ones. */
export const resume: ResumeData = {
  summary:
    'Full-stack developer specializing in React, React Native, and Node.js with a strong foundation in TypeScript. I turn ideas into clean, intuitive, user-focused applications — with an eye for color, vibe, and visual polish.',
  experience: [
    {
      company: 'Independent',
      role: 'Solo Developer',
      period: '2022 — Present',
      location: 'Bend, Oregon',
      highlights: [
        'Design, build, and ship consumer-facing web and mobile apps end to end.',
        'Work across a modern React + TypeScript + Supabase stack with a focus on clean architecture.',
        'Own the full product loop: research, design, engineering, and release.',
      ],
    },
    {
      company: 'Placeholder Studio',
      role: 'Frontend Engineer',
      period: '2020 — 2022',
      location: 'Remote',
      highlights: [
        'Built accessible, responsive interfaces for consumer products.',
        'Partnered with design to raise the bar on visual polish and interaction detail.',
      ],
    },
  ],
  skills: [
    { label: 'Languages', skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    { label: 'Frontend', skills: ['React', 'React Native', 'Vite', 'Tailwind CSS'] },
    { label: 'Backend & data', skills: ['Node.js', 'Supabase', 'PostgreSQL'] },
    { label: 'Tooling', skills: ['Git', 'Vitest', 'Zod', 'Framer Motion'] },
  ],
  education: [
    {
      school: 'Placeholder University',
      credential: 'B.S. in Computer Science',
      period: '2016 — 2020',
    },
  ],
  pdfUrl: '/resume.pdf',
};
