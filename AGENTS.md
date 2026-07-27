# AGENTS.md

Operational guide for any AI coding agent working in **portfolio-2026**.

> **Conventions are authoritative in [`CLAUDE.md`](./CLAUDE.md). Read it first.** This file covers *how to work* in the repo (setup, workflow, checklist), not *how to write code* — that's in CLAUDE.md, and there is exactly one source of truth for conventions so the two files can't drift.

## What this is

Lisa Herzberg's personal portfolio. **Frontend-only, no backend.** React + TypeScript + Vite + Tailwind CSS v4 + React Router v7 + Framer Motion. All data is local mock data in `src/data/`. Home / About / Resume + a project gallery with per-project detail pages (prev/next navigation).

## Setup

```bash
cd ~/Code
npm create vite@latest portfolio-2026 -- --template react-ts
cd portfolio-2026
npm install react-router-dom framer-motion
npm install -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom @vitejs/plugin-react
npm install -D tailwindcss @tailwindcss/vite
```

Tailwind v4 is configured CSS-first (`@import "tailwindcss";` + `@theme { … }` in `src/styles/theme.css`) and the `@tailwindcss/vite` plugin — no `tailwind.config.js` needed for tokens.

Env: none required (no backend). Do not add `.env` secrets.

## Where things live

- `src/pages/` — one folder per route: `Home`, `About`, `Resume`, `Projects` (gallery), `ProjectDetail`
- `src/components/` — shared UI reused across pages (`NavBar`, `Footer`, `ProjectCard`, `Button`, `SectionHeading`, …)
- `src/data/` — `projects.ts`, `resume.ts` (mock data — the only data source for now)
- `src/types/index.ts` — shared types (`Project`, `ResumeEntry`, …)
- `src/styles/theme.css` — Tailwind `@theme` design tokens
- `src/router.tsx` — route table (lazy-loaded pages)
- `public/resume.pdf` — mock resume PDF; `public/mock/` — mock project images

## Build order (foundation)

1. Configure Tailwind CSS v4 + `src/styles/theme.css` with the palette tokens from CLAUDE.md.
2. Set up Vitest + RTL (`vitest.config.ts`, `src/test/setup.ts`, `src/test/helpers.ts`).
3. Create the folder structure above.
4. Define shared types in `src/types/index.ts` (`Project`, `ResumeEntry`, etc.).
5. Add mock data in `src/data/` (5–6 projects with slugs, tags, links, mock image paths).
6. Build the layout shell: `App.tsx` = `NavBar` + `<Outlet />` + `Footer`; wire `router.tsx`.
7. Build shared components: `NavBar`, `Footer`, `Button`, `ProjectCard`, `SectionHeading`.
8. Build pages: `Home` → `About` → `Resume` → `Projects` → `ProjectDetail` (with prev/next + back).
9. Add Framer Motion page transitions + scroll-in reveals.
10. Smoke test on every component; unit test on every hook, as you go.

Build one page/component at a time. Write the test when you create the component, not after.

## Commands

Run before every commit:

```bash
npm run typecheck && npm run lint && npm run test
```

(Full command list is in CLAUDE.md.)

## Workflow

- **Never push directly to `main`.** Branch → PR → self-review.
- Branch names: `feature/<short-name>` (e.g. `feature/project-gallery`), `fix/<short-name>`.
- Conventional commits: `feat: add project detail prev/next nav`, `fix: …`, `chore: …`, `test: …`.
- Keep PRs small — one page or one component group per PR.
- Self-review against the checklist below before marking a PR ready.

## Review checklist

- [ ] Arrow functions everywhere; **no default exports**
- [ ] Props destructured in the signature; interface named `{Component}Props`
- [ ] Component ≥100 lines split into its own folder (`index.tsx` + `use*.ts` + `types.ts` + optional `.css`)
- [ ] No file over 200 lines
- [ ] `interface` preferred over `type` for object shapes
- [ ] No `any` without a justifying comment
- [ ] Tailwind classes only — no inline styles, no hardcoded colors (theme tokens only)
- [ ] No data fetching / async in `useEffect`
- [ ] No `useMemo` / `useCallback` unless justified
- [ ] Stable IDs (`slug`) as list keys — never array index
- [ ] `alt` text on every image; semantic HTML; focus-visible states
- [ ] Smoke test for the component; unit test for any hook
- [ ] `npm run typecheck && npm run lint && npm run test` all pass

## Do NOT

- Do not add a backend, Supabase, TanStack Query, or a global store — this project doesn't need them.
- Do not introduce a UI/component library — build components per CLAUDE.md conventions.
- Do not commit real personal data or secrets — mock data only for now.
- Do not deviate from CLAUDE.md conventions. If a rule seems to block you, flag it in the PR rather than working around it.
