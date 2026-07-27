/**
 * Makes the Neon `projects` table exactly match `src/data/projects.ts`:
 *   1. Upserts every project in the file (add new / update existing).
 *   2. Deletes any DB row whose slug is NOT in the file (removes stale rows
 *      left behind by slug renames or deletions).
 *
 * Use this instead of `npm run seed` when you've renamed or removed a project.
 *
 *   npm run sync
 */
import type { ProjectRow } from '../api/_lib/db';
import { projects } from '../src/data/projects';
import { sql, upsertProject } from './seed';

async function sync() {
  console.log(`Syncing ${projects.length} projects…`);

  // 1. Upsert everything in the file.
  for (const [index, p] of projects.entries()) {
    await upsertProject(sql, p, index);
    console.log(`  ✓ ${p.slug}`);
  }

  // 2. Delete rows whose slug is not in the file.
  const wantedSlugs = new Set(projects.map((p) => p.slug));
  const existing = (await sql`select slug from projects`) as Pick<ProjectRow, 'slug'>[];
  const stale = existing.map((row) => row.slug).filter((slug) => !wantedSlugs.has(slug));

  if (stale.length > 0) {
    // Delete only the specific stale slugs (parameterized — no interpolation).
    await sql`delete from projects where slug = any(${stale})`;
    for (const slug of stale) console.log(`  ✗ removed ${slug}`);
  }

  console.log(`Done. ${projects.length} in file, ${stale.length} stale removed.`);
}

sync().catch((error) => {
  console.error(error);
  process.exit(1);
});
