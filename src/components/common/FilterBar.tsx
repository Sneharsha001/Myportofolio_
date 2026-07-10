import React from 'react';
import { cn } from '@/lib/utils';
import { PROJECT_CATEGORIES } from '@/types/project';
import type { FilterValue } from '@/hooks/useFilter';
import { ALL_FILTER } from '@/hooks/useFilter';

interface FilterBarProps {
  activeFilter: FilterValue;
  onChange: (filter: FilterValue) => void;
  className?: string;
}

const filters: FilterValue[] = [ALL_FILTER, ...PROJECT_CATEGORIES];

const FilterBar: React.FC<FilterBarProps> = ({ activeFilter, onChange, className }) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={cn(
            'px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200',
            activeFilter === filter
              ? 'bg-gradient-primary border-primary/60 text-white shadow-neon-blue'
              : 'bg-muted/50 border-border/50 text-muted-foreground hover:border-primary/40 hover:text-foreground',
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
