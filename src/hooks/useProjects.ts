import { useLoaderData } from 'react-router-dom';
import type { Project } from '@/types';

/**
 * Returns all projects, loaded by the route's `projectsLoader`
 * (which fetches `/api/projects`). Components using this must be rendered
 * under a route that declares `loader: projectsLoader`.
 */
export const useProjects = (): Project[] => useLoaderData() as Project[];
