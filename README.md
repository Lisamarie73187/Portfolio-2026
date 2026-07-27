# portfolio-2026

Personal portfolio for Lisa Herzberg — React + TypeScript + Vite + Tailwind CSS v4 + React Router v7 + Framer Motion. Project data is served from **Neon (Postgres)** via **Vercel Functions** under `/api`.

**Live:** https://portfolio-2026-coral-sigma.vercel.app

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173 — runs the app + /api together (needs .env)
```

Create a `.env` from `.env.example` with your Neon `DATABASE_URL`.

## Scripts

- `npm run dev` — dev server (frontend + `/api` in-process)
- `npm run build` — typecheck + production build
- `npm run preview` — preview the build
- `npm run typecheck` — tsc --noEmit (frontend)
- `npm run typecheck:api` — typecheck `/api` + scripts
- `npm run lint` / `npm run lint:fix`
- `npm run db:schema` — apply `schema.sql` to Neon
- `npm run seed` — upsert projects from `src/data/projects.ts` into Neon
- `npm run sync` — make the DB exactly match `projects.ts` (upsert + delete stale rows)

## Conventions

See `CLAUDE.md` (code conventions) and `AGENTS.md` (workflow). Mock data lives in `src/data/`; replace `public/mock/*` images and `public/resume.pdf` with real assets when ready.
