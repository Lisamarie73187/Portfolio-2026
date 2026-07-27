/* eslint-disable react-refresh/only-export-components -- data module: exports a static list of pill icons, not live components */
import type { ReactNode } from 'react';

export interface TechItem {
  label: string;
  icon: ReactNode;
}

const ReactAtom = ({ className }: { className?: string }) => (
  <svg viewBox="-11.5 -10.23 23 20.46" fill="none" className={`h-5 w-5 ${className ?? ''}`} aria-hidden="true">
    <circle r="2" fill="currentColor" />
    <g stroke="currentColor" strokeWidth="1">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

/** Small brand-ish inline icons for the hero skill pills. */
export const techStack: TechItem[] = [
  {
    label: 'TypeScript',
    icon: (
      <span className="grid h-5 w-5 place-items-center rounded bg-[#3178c6] text-[10px] font-bold text-white">
        TS
      </span>
    ),
  },
  {
    label: 'React',
    icon: <ReactAtom className="text-[#61dafb]" />,
  },
  {
    label: 'React Native',
    icon: <ReactAtom className="text-[#61dafb]" />,
  },
  {
    label: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#5fa04e]" aria-hidden="true">
        <path d="M12 1.85 3.5 6.75v10.5L12 22.15l8.5-4.9V6.75L12 1.85Zm0 2.31 6.5 3.75v7.18L12 18.84 5.5 15.09V7.91L12 4.16Z" />
        <circle cx="12" cy="12" r="2.4" />
      </svg>
    ),
  },
  {
    label: 'AI Tools',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-primary" aria-hidden="true">
        <path d="M12 2l1.9 5.1L19 9l-5.1 1.9L12 16l-1.9-5.1L5 9l5.1-1.9L12 2Zm6 10 .95 2.55L21.5 15.5l-2.55.95L18 19l-.95-2.55L14.5 15.5l2.55-.95L18 12Z" />
      </svg>
    ),
  },
];
