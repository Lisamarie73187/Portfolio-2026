import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/SocialLinks';
import { techStack } from './techStack';

export const Hero = () => (
  <section className="relative overflow-hidden px-6 py-6 text-left sm:py-10">
    <div className="mx-auto max-w-6xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
      >
        Full-Stack Software Engineer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 max-w-3xl font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl"
      >
I combine technical problem-solving with thoughtful design to create clear, intuitive, and user-friendly digital experiences.
</motion.h1>

      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mt-6 flex flex-wrap justify-start gap-3"
      >
        {techStack.map(({ label, icon }) => (
          <li
            key={label}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-surface px-4 py-2 text-sm font-medium text-ink shadow-sm"
          >
            {icon}
            {label}
          </li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-6"
      >
        <SocialLinks />
      </motion.div>
    </div>
  </section>
);
