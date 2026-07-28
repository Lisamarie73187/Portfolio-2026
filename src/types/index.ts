export interface TechStackItem {
  /** Technology name, e.g. "TypeScript". */
  name: string;
  /** Optional one-line explanation of how it's used in this project. */
  description?: string;
}

export interface ProjectFeature {
  /** Short feature title, e.g. "Real-time Sync". */
  title: string;
  /** One-line description of what the feature does. */
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  /** A single year (2026) or a range string ("2018–2022"). */
  year: number | string;
  role: string;
  /** Optional category label, e.g. "Personal Project", "Client Work". */
  projectType?: string;
  tags: string[];
  /** Image shown on the gallery card and (by default) the project detail page. */
  coverImage: string;
  /** Optional image for the Home page featured card. Falls back to `coverImage` when omitted. */
  homeImage?: string;
  gallery: string[];
  /** Per-technology blurbs shown in the detail-page "Tech Stack" section. */
  techStack: TechStackItem[];
  /** Highlighted capabilities shown in the detail-page "Main Features" section. */
  features: ProjectFeature[];
  liveUrl?: string;
  /** GitHub repo for the web/frontend codebase. */
  githubWebUrl?: string;
  /** GitHub repo for the mobile codebase. */
  githubMobileUrl?: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface EducationEntry {
  school: string;
  credential: string;
  period: string;
}

export interface ResumeData {
  summary: string;
  experience: ExperienceEntry[];
  skills: SkillGroup[];
  education: EducationEntry[];
  pdfUrl: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
