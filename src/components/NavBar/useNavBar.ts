import { useState } from 'react';
import type { NavItem } from './types';

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
];

export const useNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((open) => !open);
  const close = () => setIsOpen(false);

  return { navItems, isOpen, toggle, close };
};
