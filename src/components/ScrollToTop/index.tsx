import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets scroll to top on route change (DOM synchronization, not data fetching). */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
