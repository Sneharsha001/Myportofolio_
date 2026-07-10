import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  prefix = '',
  duration = 1500,
  className,
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ once: true, triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 60;
    const stepTime = duration / steps;
    let current = 0;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
