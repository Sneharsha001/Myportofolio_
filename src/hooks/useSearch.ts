import { useMemo, useState } from 'react';
import type { Project } from '@/types/project';

// Searches projects by title, tags, technologies, and category
export function useSearch(projects: Project[]) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    if (!query.trim()) return projects;
    const q = query.toLowerCase();
    return projects.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        p.technologies.some((t) => t.toLowerCase().includes(q)),
    );
  }, [projects, query]);

  return { query, setQuery, filtered };
}
