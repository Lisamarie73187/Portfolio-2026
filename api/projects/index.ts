import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sql, rowToProject, type ProjectRow } from '../_lib/db';

/** GET /api/projects — all projects in display order. */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const rows = (await sql`
      select * from projects order by sort_order asc
    `) as ProjectRow[];

    // Cache at the edge: fresh for 60s, serve stale while revalidating.
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(rows.map(rowToProject));
  } catch (error) {
    console.error('GET /api/projects failed', error);
    return res.status(500).json({ error: 'Failed to load projects' });
  }
}
