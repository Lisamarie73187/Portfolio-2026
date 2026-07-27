import { readFileSync } from 'node:fs';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin, Connect } from 'vite';

/**
 * Dev-only Vite plugin that runs the `/api/*` Vercel Functions in-process,
 * so `npm run dev` serves the real API without needing `vercel dev`.
 *
 * In production these same files are deployed as Vercel Functions; this
 * plugin only affects the local dev server. It loads `DATABASE_URL` from
 * `.env` and adds the minimal `res.status().json()` helpers the handlers use.
 */

/** Load .env into process.env (no dependency; runs once at dev startup). */
const loadEnv = () => {
  try {
    const raw = readFileSync(new URL('../.env', import.meta.url), 'utf8');
    for (const line of raw.split('\n')) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
      if (!match) continue;
      const key = match[1];
      let value = match[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!(key in process.env)) process.env[key] = value;
    }
  } catch {
    // No .env — the handlers will surface a clear DATABASE_URL error.
  }
};

/** Adds the Vercel-style helpers the handlers rely on onto a Node response. */
const decorateRes = (res: ServerResponse) => {
  const r = res as ServerResponse & {
    status: (code: number) => typeof r;
    json: (body: unknown) => void;
  };
  r.status = (code: number) => {
    r.statusCode = code;
    return r;
  };
  r.json = (body: unknown) => {
    r.setHeader('Content-Type', 'application/json');
    r.end(JSON.stringify(body));
  };
  return r;
};

export const viteApiPlugin = (): Plugin => ({
  name: 'local-vercel-api',
  configureServer(server) {
    loadEnv();

    server.middlewares.use('/api', (req: IncomingMessage, res: ServerResponse, next: Connect.NextFunction) => {
      void (async () => {
        const url = new URL(req.url ?? '/', 'http://localhost');
        const path = url.pathname; // relative to /api mount, e.g. "/projects" or "/projects/sudoku"
        const query = Object.fromEntries(url.searchParams);

        const segments = path.split('/').filter(Boolean);

        try {
          let handlerPath: string;
          if (segments[0] === 'projects' && segments.length === 1) {
            handlerPath = '../api/projects/index.ts';
          } else if (segments[0] === 'projects' && segments.length === 2) {
            handlerPath = '../api/projects/[slug].ts';
            (query as Record<string, string>).slug = segments[1];
          } else {
            return next();
          }

          const mod = await server.ssrLoadModule(
            new URL(handlerPath, import.meta.url).pathname,
          );
          const handler = mod.default as (rq: unknown, rs: unknown) => unknown;

          const vercelReq = Object.assign(req, { query, method: req.method });
          await handler(vercelReq, decorateRes(res));
        } catch (error) {
          console.error('[local-vercel-api]', error);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Internal error' }));
        }
      })();
    });
  },
});
