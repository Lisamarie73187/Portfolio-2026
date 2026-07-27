import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'outline' | 'gradient';
  onClick?: () => void;
  className?: string;
}

const base =
  'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-primary text-white hover:bg-primary-dark',
  outline: 'border border-ink/15 text-ink hover:border-primary hover:text-primary',
  gradient:
    'bg-gradient-to-b from-primary-light to-primary-deep text-white shadow-lg shadow-primary/25 hover:shadow-primary/40',
};

export const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  className = '',
}: ButtonProps) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
