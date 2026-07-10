import { useMemo, useState } from 'react';
import type { Project, ProjectCategory } from '@/types/project';

export const ALL_FILTER = 'All' as const;
export type FilterValue = typeof ALL_FILTER | ProjectCategory;

export function useFilter(projects: Project[]) {
  const [activeFilter, setActiveFilter] = useState<FilterValue>(ALL_FILTER);

  const filtered = useMemo(() => {
    if (activeFilter === ALL_FILTER) return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [projects, activeFilter]);

  return { activeFilter, setActiveFilter, filtered };
}
