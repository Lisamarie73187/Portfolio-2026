import type { LoaderFunctionArgs } from 'react-router-dom';
import type { Project } from '@/types';
import type { UseProjectResult } from '@/hooks/useProject';

/**
 * React Router loaders that fetch project data from the `/api` Vercel
 * Functions. Loaders run before the route renders, so components read the
 * result synchronously via `useLoaderData` — no `useEffect`, no query lib.
 */

/** Loader for the gallery + home (returns all projects). */
export const projectsLoader = async (): Promise<Project[]> => {
  const res = await fetch('/api/projects');
  if (!res.ok) {
    throw new Response('Failed to load projects', { status: res.status });
  }
  return res.json();
};

/** Loader for the project detail route (returns project + prev/next). */
export const projectLoader = async ({
  params,
}: LoaderFunctionArgs): Promise<UseProjectResult> => {
  const res = await fetch(`/api/projects/${params.slug}`);

  if (res.status === 404) {
    return { project: undefined, prev: undefined, next: undefined };
  }
  if (!res.ok) {
    throw new Response('Failed to load project', { status: res.status });
  }

  const data = (await res.json()) as {
    project: Project;
    prev: Project | null;
    next: Project | null;
  };

  return {
    project: data.project,
    prev: data.prev ?? undefined,
    next: data.next ?? undefined,
  };
};
