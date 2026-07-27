import { lazy, Suspense, type ReactElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App';
import { PageLoader } from '@/components/PageLoader';
import { projectsLoader, projectLoader } from '@/data/loaders';

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })));
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })));
const Resume = lazy(() => import('@/pages/Resume').then((m) => ({ default: m.Resume })));
const Projects = lazy(() => import('@/pages/Projects').then((m) => ({ default: m.Projects })));
const ProjectDetail = lazy(() =>
  import('@/pages/ProjectDetail').then((m) => ({ default: m.ProjectDetail })),
);
const NotFound = lazy(() => import('@/pages/NotFound').then((m) => ({ default: m.NotFound })));

const withSuspense = (node: ReactElement) => <Suspense fallback={<PageLoader />}>{node}</Suspense>;

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: withSuspense(<Home />), loader: projectsLoader },
      { path: 'about', element: withSuspense(<About />) },
      { path: 'resume', element: withSuspense(<Resume />) },
      { path: 'projects', element: withSuspense(<Projects />), loader: projectsLoader },
      { path: 'projects/:slug', element: withSuspense(<ProjectDetail />), loader: projectLoader },
      { path: '*', element: withSuspense(<NotFound />) },
    ],
  },
]);
