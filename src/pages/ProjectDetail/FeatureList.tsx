import type { ProjectFeature } from '@/types';

export interface FeatureListProps {
  features: ProjectFeature[];
}

export const FeatureList = ({ features }: FeatureListProps) => {
  if (features.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="features-heading">
      <h2
        id="features-heading"
        className="text-xs font-semibold uppercase tracking-wider text-primary"
      >
        Main Features
      </h2>
      <ul className="mt-4 space-y-4">
        {features.map((feature) => (
          <li key={feature.title} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
            />
            <div>
              <p className="font-display font-bold text-ink">{feature.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
