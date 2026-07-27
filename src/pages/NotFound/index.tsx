import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/Button';

export const NotFound = () => (
  <PageTransition>
    <section className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="font-script text-5xl text-coral">oops</p>
      <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink">Page not found</h1>
      <p className="mt-3 text-muted">The page you're looking for wandered off.</p>
      <div className="mt-6">
        <Button to="/">Back home</Button>
      </div>
    </section>
  </PageTransition>
);
