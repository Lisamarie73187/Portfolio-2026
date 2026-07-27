# portfolio-2026

Personal portfolio for Lisa Herzberg — full-stack developer.
Home / About / Resume + a project gallery with per-project detail pages. Project data is served from a **Neon (Postgres) database** via **Vercel Functions** under `/api`.

**Stack**: React + TypeScript (strict) · Vite · Tailwind CSS v4 · React Router v7 · Framer Motion · Vitest + RTL · Neon Postgres + Vercel Functions (`/api`)

This file is the codebase rulebook. Follow every rule strictly and consistently. Conventions here are authoritative — operational/workflow notes live in `AGENTS.md`.

## Stack

- React 19 + TypeScript — **strict mode**, no `any` without a justifying comment
- Vite — bundler + dev server (port 5173)
- Tailwind CSS v4 — all styling (CSS-first config via `@theme`)
- React Router v7 — routing
- Framer Motion — animation (scroll reveals, hover, page transitions)
- Vitest + React Testing Library — tests
- **Backend**: Neon (serverless Postgres) accessed through **Vercel Functions** in `/api`. No TanStack Query, no global store.
  - The frontend never imports the DB. It fetches `/api/projects` and `/api/projects/:slug` through **React Router loaders** (`src/data/loaders.ts`) — no data fetching in `useEffect`.
  - `useProjects()` / `useProject()` read loader data via `useLoaderData`; components stay unchanged when the data source changes.
  - `src/data/projects.ts` remains the seed source of truth (see `npm run seed`); it is no longer imported by the app at runtime.

> If a form is ever added (e.g. a contact form), use **React Hook Form + Zod** — never controlled `useState` inputs.

## Commands

- `npm run dev` — start dev server (port 5173)
- `npm run build` — production build (`tsc && vite build`)
- `npm run preview` — preview the production build
- `npm run typecheck` — `tsc --noEmit` (frontend / `src`)
- `npm run typecheck:api` — typecheck the `/api` functions + `scripts` (`tsconfig.api.json`)
- `npm run lint` — ESLint + Prettier check
- `npm run lint:fix` — auto-fix
- `npm run seed` — seed/upsert the Neon `projects` table from `src/data/projects.ts` (needs `DATABASE_URL`)
- `npm run test` — run all tests (Vitest)
- `npm run test -- --run src/components/ProjectCard` — run a single folder

Always run `npm run typecheck && npm run lint && npm run test` before committing.

## Routes

| Path | Page | Notes |
|------|------|-------|
| `/` | Home | Hero + featured projects + "See More Projects" CTA |
| `/about` | About | Bio, skills, story |
| `/resume` | Resume | Content page + "Download PDF" → `/resume.pdf` |
| `/projects` | Gallery | Grid of all projects |
| `/projects/:slug` | Project detail | Screenshots, tech tags, live/GitHub links, **prev/next** nav + back-to-gallery |

Top nav links to **Home / About / Resume**. The project gallery is reached from the Home page CTA (mirrors the reference). Use lazy route loading (`React.lazy` + `Suspense`) for page-level code splitting.

## Architecture

```
src/
  components/        # shared, reusable UI (NavBar, Footer, ProjectCard, Button, SectionHeading…)
  pages/             # one folder per route (Home, About, Resume, Projects, ProjectDetail)
  data/              # mock data (projects.ts, resume.ts) — the only "data source" for now
  hooks/             # shared custom hooks
  types/index.ts     # shared TypeScript types
  utils/             # pure utility functions
  styles/theme.css   # Tailwind @theme tokens (colors, fonts, radii)
  router.tsx         # route table
  App.tsx            # layout shell (NavBar + <Outlet /> + Footer)
  main.tsx           # entry
public/
  resume.pdf         # mock PDF for now
  mock/              # mock project images
```

- Route components live in `src/pages/`; anything reused across pages lives in `src/components/`.
- Mock data is imported directly from `src/data/`. When a real source is added later, swap it behind a hook in `src/hooks/` — components should never change.

## Component conventions

**All components and functions are arrow functions. Named exports only — no default exports** (including pages; the router imports named exports).

Component sizing rule:

- **Under 100 lines** → a single file: `src/components/ProjectCard/index.tsx` (or `Button/index.tsx`). Keep the co-located test alongside it.
- **100 lines or more** → break it into its own folder with co-located files:

```
src/components/ProjectGallery/
  index.tsx                # JSX only — presentational, no logic
  useProjectGallery.ts     # all state, handlers, derived values
  types.ts                 # ProjectGalleryProps + component-local types
  ProjectGallery.css       # only if custom CSS is genuinely needed (see Styling)
  ProjectGallery.test.tsx  # co-located test
```

- **Max 200 lines per file.** Split before exceeding.
- **Destructure props in the function signature.** Default values in the signature too.
- Props interface is named `{Component}Props` — e.g. `ProjectCardProps`.
- No `useState` / `useEffect` / handlers in `index.tsx` once a component has its own folder — everything goes in `use{Component}.ts`.
- No logic in `index.tsx` beyond wiring the hook to JSX.

```tsx
// src/components/ProjectCard/index.tsx — correct pattern
export const ProjectCard = ({ project, onSelect, featured = false }: ProjectCardProps) => {
  const { handleClick, cardRef } = useProjectCard({ project, onSelect });
  return (
    <article ref={cardRef} onClick={handleClick} className="rounded-2xl bg-surface …">
      {project.title}
    </article>
  );
};
```

## TypeScript

- Strict mode. No `any` without a `// eslint-disable`-style justifying comment explaining why.
- **Prefer `interface` over `type`** for object shapes; use `type` only for unions, intersections, and mapped/utility types.
- Shared types live in `src/types/index.ts`; component-local types live in the component's `types.ts`.
- No type assertions (`as`) without a comment explaining why.

## Styling

- **Tailwind classes only. No inline styles.**
- No hardcoded hex/color values in components — use theme tokens from `src/styles/theme.css`.
- A co-located `ComponentName.css` is allowed **only** for things Tailwind/Framer Motion can't express (custom keyframes, complex pseudo-selectors). It is not a license for inline styles.
- Design tokens (Tailwind v4 `@theme`) — starter palette, adjust freely:

```css
/* src/styles/theme.css */
@theme {
  --color-primary: #6d3beb;   /* violet — brand accent, buttons, links */
  --color-coral:   #ff6b5c;   /* warm coral pop */
  --color-accent:  #ffc24b;   /* sunny yellow, sparing use */
  --color-ink:     #1a1a2e;   /* headings / body text */
  --color-muted:   #5a5a6e;   /* secondary text */
  --color-cream:   #faf6ef;   /* section backgrounds */
  --color-surface: #ffffff;   /* cards */
}
```

Vibe: bright, friendly, design-forward — coral + violet on cream, navy ink, generous whitespace, a script/hand-drawn accent on one hero word.

## React patterns

- **No data fetching in `useEffect`.** (No backend now; keep it this way when one arrives — fetch through a hook.)
- `useEffect` is for synchronization only (subscriptions, DOM side effects, third-party setup). Always clean up in the return function.
- Don't pre-optimize with `useMemo` / `useCallback` — add only when profiling shows a real problem. Exception: stable references passed to `React.memo` children.
- **Never use array index as a list key** — use stable IDs from the data (`project.slug`).
- Composition over prop drilling beyond 2 levels.
- Handle loading/empty states for lazy-loaded routes (`Suspense` fallback).
- Accessibility: semantic HTML, `alt` on every image, focus-visible states, `aria-*` where needed. Nav is a `<nav>`, cards are `<article>`, etc.

## Testing

- Vitest + React Testing Library. Tests co-located with the code they test.
- **Every component gets at least a smoke test** (renders without crashing).
- **Every hook gets a unit test.**
- Test behavior, not implementation — query by role, label, or text.
- Shared test utilities in `src/test/helpers.ts`.

## Do NOT

- Do not use default exports.
- Do not use `any` without a comment.
- Do not use inline styles — Tailwind classes only.
- Do not hardcode colors — use theme tokens.
- Do not fetch data in `useEffect`.
- Do not pre-optimize with `useMemo` / `useCallback`.
- Do not use array index as a list key.
- Do not exceed 200 lines per file, or 100 lines in a single-file component (split into a folder).
- Do not push directly to `main` — branch, PR, self-review.
