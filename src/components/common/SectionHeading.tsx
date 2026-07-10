import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  accent?: 'blue' | 'purple' | 'green' | 'cyan' | 'amber';
  className?: string;
  centered?: boolean;
}

const accentMap = {
  blue:   'text-neon-blue',
  purple: 'text-neon-purple',
  green:  'text-neon-green',
  cyan:   'text-neon-cyan',
  amber:  'text-amber',
};

const accentBarMap = {
  blue:   'from-primary to-violet-500',
  purple: 'from-violet-500 to-primary',
  green:  'from-secondary to-teal-light',
  cyan:   'from-teal-light to-secondary',
  amber:  'from-amber-400 to-amber-600',
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  accent = 'blue',
  className,
  centered = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(centered ? 'text-center' : 'text-left', 'mb-14 md:mb-16', className)}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className={cn(
          'text-xs font-mono font-medium tracking-[0.15em] uppercase mb-3 opacity-70',
          accentMap[accent],
        )}
      >
        {'// ' + title.toLowerCase().replace(/\s+/g, '-')}
      </motion.p>

      {/* Main heading */}
      <h2
        className={cn(
          'font-sora text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-4',
          accentMap[accent],
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={cn(
          'text-base md:text-lg text-muted-foreground leading-relaxed',
          centered ? 'max-w-2xl mx-auto' : 'max-w-xl',
        )}>
          {subtitle}
        </p>
      )}

      {/* Accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={cn(
          'mt-5 h-px rounded-full bg-gradient-to-r origin-left',
          accentBarMap[accent],
          centered ? 'mx-auto w-20' : 'w-16',
        )}
      />
    </motion.div>
  );
};

export default SectionHeading;
