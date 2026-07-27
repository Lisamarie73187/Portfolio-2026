import { Button } from '@/components/Button';

export const ConnectBanner = () => (
  <section className="px-6 pb-16 sm:pb-24">
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 rounded-3xl bg-surface px-6 py-8 shadow-sm ring-1 ring-ink/5 sm:flex-row sm:px-8 sm:py-10">
      <div className="flex items-center gap-4 text-center sm:text-left">
        <span className="text-3xl text-coral" aria-hidden="true">✦</span>
        <div>
          <h3 className="font-display text-xl font-bold text-ink">
            Interested in working together?
          </h3>
          <p className="text-sm text-muted">
            I'm always open to new opportunities and exciting projects.
          </p>
        </div>
      </div>
      <Button href="mailto:hello@example.com">Let's Connect ✉</Button>
    </div>
  </section>
);
