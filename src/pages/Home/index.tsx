import { PageTransition } from '@/components/PageTransition';
import { Hero } from './Hero';
import { FeaturedProjects } from './FeaturedProjects';

export const Home = () => (
  <PageTransition>
    <Hero />
    <div className="border-t border-ink/5">
      <FeaturedProjects />
    </div>
  </PageTransition>
);
