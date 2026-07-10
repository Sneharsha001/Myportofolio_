import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { personal } from '@/data/personal';
import ProjectCard from '@/components/cards/ProjectCard';
import SearchBar from '@/components/common/SearchBar';
import FilterBar from '@/components/common/FilterBar';
import SectionHeading from '@/components/common/SectionHeading';
import { useSearch } from '@/hooks/useSearch';
import { useFilter, ALL_FILTER } from '@/hooks/useFilter';

const Projects: React.FC = () => {
  // Chain: search first, then filter by category
  const { query, setQuery, filtered: searchResults } = useSearch(projects);
  const { activeFilter, setActiveFilter, filtered: visibleProjects } = useFilter(searchResults);

  // Derive categories that actually have results (for smart filter counts)
  const resultCount = visibleProjects.length;
  const totalCount = projects.length;

  const isFiltered = query.trim() !== '' || activeFilter !== ALL_FILTER;

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A curated collection of things I've built — from full-stack web apps to creative frontend experiments."
          accent="blue"
        />

        {/* Search + Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-4 mb-10 max-w-7xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search by project, tech, tag…"
              className="sm:max-w-sm"
            />
            {isFiltered && (
              <span className="text-xs text-muted-foreground shrink-0">
                {resultCount} of {totalCount} project{totalCount !== 1 ? 's' : ''}
              </span>
            )}
          </div>
          <FilterBar activeFilter={activeFilter} onChange={setActiveFilter} />
        </motion.div>

        {/* Project Grid */}
        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 max-w-md mx-auto"
          >
            <p className="text-4xl mb-4">🔍</p>
            <p className="text-lg font-medium text-foreground mb-2">No projects found</p>
            <p className="text-sm text-muted-foreground mb-6">
              Try a different search term or filter category.
            </p>
            <button
              onClick={() => { setQuery(''); setActiveFilter(ALL_FILTER); }}
              className="text-sm text-primary hover:text-white transition-colors font-medium"
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see more? All my work lives on GitHub.
            </p>
            <a
              href={`https://github.com/${personal.email.split('@')[0]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-secondary rounded-xl font-semibold hover:shadow-neon-purple transition-all duration-300 text-white"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;