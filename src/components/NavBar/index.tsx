import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavBar } from './useNavBar';

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-base font-medium transition-colors ${isActive ? 'text-primary' : 'text-ink hover:text-primary'}`;

export const NavBar = () => {
  const { navItems, isOpen, toggle, close } = useNavBar();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          onClick={close}
          className="relative font-display text-xl font-bold text-ink"
        >
          <span className="absolute right-full mr-2 text-coral" aria-hidden="true">
            ✦
          </span>
          Lisa Herzberg
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          onClick={toggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink hover:bg-ink/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d={isOpen ? 'M4 4l12 12M16 4L4 16' : 'M3 6h14M3 10h14M3 14h14'}
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-ink/10 sm:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={close}
                  className={linkClass}
                >
                  <span className="block py-2">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
