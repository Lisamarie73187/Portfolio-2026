import { neon } from '@neondatabase/serverless';
import type { Project } from '../../src/types';


const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set');
}

export const sql = neon(connectionString);

export interface ProjectRow {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  role: string;
  project_type: string | null;
  tags: string[];
  cover_image: string;
  home_image: string | null;
  gallery: string[];
  tech_stack: Project['techStack'];
  features: Project['features'];
  live_url: string | null;
  github_web_url: string | null;
  github_mobile_url: string | null;
}

export const rowToProject = (row: ProjectRow): Project => ({
  slug: row.slug,
  title: row.title,
  tagline: row.tagline,
  description: row.description,
  year: row.year,
  role: row.role,
  projectType: row.project_type ?? undefined,
  tags: row.tags,
  coverImage: row.cover_image,
  homeImage: row.home_image ?? undefined,
  gallery: row.gallery,
  techStack: row.tech_stack,
  features: row.features,
  liveUrl: row.live_url ?? undefined,
  githubWebUrl: row.github_web_url ?? undefined,
  githubMobileUrl: row.github_mobile_url ?? undefined,
});
