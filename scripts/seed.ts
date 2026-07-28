/**
 * Seeds the Neon `projects` table from the local data in
 * `src/data/projects.ts`. Idempotent: upserts by slug, so re-running
 * updates existing rows instead of duplicating them.
 *
 * NOTE: seeding only adds/updates — it never removes rows. If you rename or
 * delete a project's slug, the old row lingers. Use `npm run sync` to make
 * the DB exactly match `projects.ts` (upsert + delete stale rows).
 *
 *   npm run seed
 */
import { neon, type NeonQueryFunction } from '@neondatabase/serverless';
import type { Project } from '../src/types';
import { projects } from '../src/data/projects';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL is not set — export it before running the seed.');
}

export const sql = neon(connectionString);

/** Upserts one project row by slug. `sortOrder` sets its display position. */
export const upsertProject = async (
  client: NeonQueryFunction<false, false>,
  p: Project,
  sortOrder: number,
) => {
  await client`
    insert into projects (
      slug, title, tagline, description, year, role, project_type, tags,
      cover_image, home_image, gallery, tech_stack, features,
      live_url, github_web_url, github_mobile_url, sort_order
    ) values (
      ${p.slug}, ${p.title}, ${p.tagline}, ${p.description}, ${p.year}, ${p.role},
      ${p.projectType ?? null}, ${JSON.stringify(p.tags)}, ${p.coverImage}, ${p.homeImage ?? null},
      ${JSON.stringify(p.gallery)}, ${JSON.stringify(p.techStack)},
      ${JSON.stringify(p.features)}, ${p.liveUrl ?? null},
      ${p.githubWebUrl ?? null}, ${p.githubMobileUrl ?? null},
      ${sortOrder}
    )
    on conflict (slug) do update set
      title             = excluded.title,
      tagline           = excluded.tagline,
      description       = excluded.description,
      year              = excluded.year,
      role              = excluded.role,
      project_type      = excluded.project_type,
      tags              = excluded.tags,
      cover_image       = excluded.cover_image,
      home_image        = excluded.home_image,
      gallery           = excluded.gallery,
      tech_stack        = excluded.tech_stack,
      features          = excluded.features,
      live_url          = excluded.live_url,
      github_web_url    = excluded.github_web_url,
      github_mobile_url = excluded.github_mobile_url,
      sort_order        = excluded.sort_order
  `;
};

async function seed() {
  console.log(`Seeding ${projects.length} projects…`);
  for (const [index, p] of projects.entries()) {
    await upsertProject(sql, p, index);
    console.log(`  ✓ ${p.slug}`);
  }
  console.log('Done.');
}

// Only run when executed directly (not when imported by sync.ts).
if (import.meta.url === `file://${process.argv[1]}`) {
  seed().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
