import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.75, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 16 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={handleClick}
          className={cn(
            // Position — sits above the AI FAB
            'fixed bottom-24 right-5 sm:right-6 z-40',
            'w-10 h-10 rounded-xl glass flex items-center justify-center',
            'border border-primary/30 text-primary',
            // Hover
            'hover:bg-primary/10 hover:border-primary/60 hover:shadow-neon-blue',
            // Transitions
            'transition-all duration-200',
            // Focus ring for keyboard navigation
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          )}
          aria-label="Scroll to top of page"
          title="Back to top"
        >
          <ArrowUp className="h-4 w-4" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
