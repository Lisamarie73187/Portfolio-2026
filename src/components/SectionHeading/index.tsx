export interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({ title, eyebrow, align = 'center' }: SectionHeadingProps) => (
  <div className={align === 'center' ? 'text-center' : 'text-left'}>
    {eyebrow && (
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
    )}
    <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{title}</h2>
  </div>
);
