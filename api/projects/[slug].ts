import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql, rowToProject, type ProjectRow } from '../_lib/db';

/**
 * GET /api/projects/:slug — one project plus its prev/next neighbors
 * (by sort_order), matching the frontend's `UseProjectResult` shape.
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const slug = req.query.slug;
  if (typeof slug !== 'string') {
    return res.status(400).json({ error: 'Invalid slug' });
  }

  try {
    // Fetch all rows in order — the set is small, and we need neighbors anyway.
    const rows = (await sql`
      select * from projects order by sort_order asc
    `) as ProjectRow[];

    const index = rows.findIndex((row) => row.slug === slug);
    if (index === -1) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({
      project: rowToProject(rows[index]),
      prev: index > 0 ? rowToProject(rows[index - 1]) : null,
      next: index < rows.length - 1 ? rowToProject(rows[index + 1]) : null,
    });
  } catch (error) {
    console.error('GET /api/projects/[slug] failed', error);
    return res.status(500).json({ error: 'Failed to load project' });
  }
}
