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
        'Build end-to-end features across AcreConnect and an agricultural drone operations platform using React, TypeScript, Kotlin, and PostgreSQL.',
        'Expanded beyond a frontend specialization into backend development, contributing to Kotlin services, PostgreSQL data models, APIs, and integration tests.',
        'Lead, coordinate, and facilitate engineering meetings to improve team alignment, clarify decisions, and ensure clear ownership of next steps.',
        'Drive feature planning for select initiatives, working with product and engineering to clarify requirements, define scope, and write actionable Jira stories.',
        'Collaborate on building AI-assisted engineering workflows including a tool that converts PRDs into structured Jira epics and stories, reducing ticket-writing time and planning.',
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
        "Built and launched the PetSmart mobile e-commerce app as part of a 3-person React Native team, integrating with iOS, and Android.",
        "Drove the creation of a design system with reusable UI components and documentation that improved consistency and development speed.",
        "Mentored engineers through the team's formal mentorship program.",
        "Recognized with the team's MVP Award for versatility across web, React Native, and native mobile development.",
      ],
    },
    {
      company: 'STYR Labs',
      role: 'Software Engineer',
      period: 'April 2018 — November 2018',
      location: 'Phoenix, Arizona',
      highlights: [
        'Designed and built a mobile nutrition and pregnancy tracking app in React Native from idea to production with a 5-person startup team, owning UX/UI design.',
      ],
    },
  ],
  skills: [
    { label: 'Languages', skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
    {
      label: 'Frontend',
      skills: ['React', 'React Native', 'Next.js', 'Redux', 'Tailwind CSS', 'Sass'],
    },
    { label: 'Backend & data', skills: ['Node.js', 'Express', 'Kotlin', 'PostgreSQL'] },
    {
      label: 'Tooling',
      skills: ['Git', 'GitHub Actions', 'Claude', 'Cursor', 'Paperclip.io'],
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
  pdfUrl: '/resume.pdf',
};
