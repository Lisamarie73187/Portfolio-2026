import { SocialLinks } from '@/components/SocialLinks';

export const Footer = () => (
  <footer className="border-t border-ink/10 bg-cream">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
      <div className="text-center sm:text-left">
        <p className="font-display font-bold text-ink">Lisa Herzberg</p>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Lisa Marie Herzberg. All rights reserved.
        </p>
      </div>
      <SocialLinks />
    </div>
  </footer>
);
