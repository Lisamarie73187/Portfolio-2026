import { PageTransition } from '@/components/PageTransition';
import { Hero } from './Hero';
import { FeaturedProjects } from './FeaturedProjects';
import { ConnectBanner } from './ConnectBanner';

export const Home = () => (
  <PageTransition>
    <Hero />
    <div className="border-t border-ink/5">
      <FeaturedProjects />
      <ConnectBanner />
    </div>
  </PageTransition>
);
