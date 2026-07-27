import { useLoaderData } from 'react-router-dom';
import type { Project } from '@/types';

export interface UseProjectResult {
  project: Project | undefined;
  prev: Project | undefined;
  next: Project | undefined;
}

/**
 * Returns the current project plus its prev/next neighbors, loaded by the
 * route's `projectLoader` (which fetches `/api/projects/:slug`). Must be
 * rendered under a route that declares `loader: projectLoader`.
 */
export const useProject = (): UseProjectResult => useLoaderData() as UseProjectResult;
