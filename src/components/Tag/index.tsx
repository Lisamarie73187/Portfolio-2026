export interface TagProps {
  label: string;
}

export const Tag = ({ label }: TagProps) => (
  <span className="rounded-full border border-ink/10 bg-cream px-3 py-1 text-xs font-medium text-muted">
    {label}
  </span>
);
