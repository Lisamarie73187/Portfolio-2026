import type { TechStackItem } from '@/types';

export interface TechStackProps {
  items: TechStackItem[];
}

export const TechStack = ({ items }: TechStackProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="tech-stack-heading">
      <h2
        id="tech-stack-heading"
        className="text-xs font-semibold uppercase tracking-wider text-primary"
      >
        Tech Stack
      </h2>
      <ul className="mt-4 space-y-4">
        {items.map((item) => (
          <li key={item.name}>
            <p className="font-display font-bold text-ink">{item.name}</p>
            {item.description && (
              <p className="mt-0.5 text-sm leading-relaxed text-muted">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};
