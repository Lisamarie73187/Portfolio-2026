import type { ResumeData } from '@/types';

/** Mock resume content. Swap `pdfUrl` and details for the real ones. */
export const resume: ResumeData = {
  summary:
    'Full-stack engineer with 8+ years building with React and React Native. Writes clean, maintainable code with a strong eye for detail and organization. Brings a design sensibility to the work, from UI polish to broader UX decisions. Comfortable owning features end to end. Uses Claude and Cursor to build faster AI-assisted workflows without cutting corners on code quality.',
  experience: [
    {
      company: 'American Autonomy',
      role: 'Software Engineer',
      period: 'January 2025 — Present',
      location: 'Remote',
      highlights: [
        'Own the design and development of features across AcreConnect and an agricultural drone operations platform, translating complex workflows into intuitive interfaces using React and TypeScript.',
        'Lead features from requirements through UX/UI design, frontend implementation, backend integration, testing, and production delivery.',
        'Collaborate on Kotlin services, PostgreSQL data models, and APIs to deliver cohesive, end-to-end product experiences.',
        'Drive feature planning by clarifying ambiguous requirements, defining scope, making technical tradeoffs, and translating product needs into actionable engineering stories.',
        'Develop AI-assisted engineering workflows using Claude Code and Paperclip.io to accelerate planning, implementation, and testing while maintaining code quality.',
      ],
    },
    {
      company: 'WebPT',
      role: 'Software Engineer',
      period: 'August 2022 — December 2024',
      location: 'Remote',
      highlights: [
        "Contributed to the development of SOAP Notes 2.0, building React and TypeScript user interfaces and scalable Node.js, Express, and SQL services for a modern healthcare platform.",
        "Earned 3rd place in a company-wide hackathon by building real-time collaborative patient form editing with WebSockets, enabling multiple clinicians to edit the same form simultaneously.",
        "Increased unit and integration test coverage from 45% to 75% by identifying testing gaps and writing comprehensive Jest test suites, improving code quality and reducing regressions.",
      ],
    },
    {
      company: 'PetSmart',
      role: 'Software Engineer',
      period: 'December 2018 — July 2022',
      location: 'Phoenix, Arizona',
      highlights: [
        "Drove the development of a reusable UI component library and design system, establishing consistent interface patterns and improving development efficiency.",
        "Built and launched PetSmart's iOS and Android e-commerce application as part of a three-person React Native engineering team.",
        "Implemented customer-facing features including Apple Pay, curbside pickup, delivery integrations, and loyalty experiences.",
        "Mentored engineers through the formal mentorship program and received the team's MVP Award for versatility across web and mobile engineering.",
      ],
    },
    {
      company: 'STYR Labs',
      role: 'Software Engineer',
      period: 'April 2018 — November 2018',
      location: 'Phoenix, Arizona',
      highlights: [
        'Owned UX/UI design and React Native development for a mobile nutrition and pregnancy tracking application, taking the product from concept to production on a five-person startup team.',
      ],
    },
  ],
  skills: [
    {
      label: 'Frontend',
      skills: ['React', 'React Native', 'TypeScript', 'Redux', 'Tailwind CSS', 'Sass', 'Responsive UI'],
    },
    {
      label: 'Backend and APIs',
      skills: ['Node.js', 'Express', 'Kotlin', 'REST', 'PostgreSQL', 'SQL', 'WebSockets'],
    },
    {
      label: 'Design',
      skills: ['UX/UI Design', 'Figma', 'Design Systems', 'Reusable Components', 'UI Prototyping'],
    },
    {
      label: 'AI tooling',
      skills: ['Claude', 'Claude Code', 'Cursor', 'Paperclip.io'],
    },
  ],
  education: [
    {
      school: 'Arizona State University',
      credential: "Bachelor's in Biology",
      period: '2009 — 2013',
    },
    {
      school: 'Dev Mountain',
      credential: 'Full Stack Developer',
      period: '2017 — 2018',
    },
  ],
  volunteer: [
    {
      organization: 'High Desert Volleyball Association',
      role: 'Social Media, Web and Marketing Committee Chair',
    },
  ],
  pdfUrl: '/resume.pdf',
};
