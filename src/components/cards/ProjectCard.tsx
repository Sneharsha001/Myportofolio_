import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Project } from '@/types/project';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const statusConfig = {
  completed: { label: 'Completed', class: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  'in-progress': { label: 'In Progress', class: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  planned: { label: 'Planned', class: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
};

const difficultyConfig = {
  beginner: { label: 'Beginner', class: 'text-emerald-400' },
  intermediate: { label: 'Intermediate', class: 'text-amber-400' },
  advanced: { label: 'Advanced', class: 'text-orange-400' },
  expert: { label: 'Expert', class: 'text-red-400' },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[project.status];
  const difficulty = difficultyConfig[project.difficulty];

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'glass rounded-2xl p-6 border border-border/40',
        'hover:border-primary/30 hover:shadow-neon-blue transition-all duration-300 group',
        'flex flex-col',
      )}
    >
      {/* Top bar */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex-1 min-w-0">
          {project.featured && (
            <div className="flex items-center gap-1 text-amber-400 text-xs font-medium mb-1.5">
              <Star className="h-3 w-3 fill-amber-400" />
              Featured
            </div>
          )}
          <h3 className="font-semibold text-lg leading-snug text-foreground group-hover:text-neon-blue transition-colors duration-200 truncate">
            {project.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">{project.category} · {project.year}</p>
        </div>
        <span className={cn('text-xs px-2 py-0.5 rounded-full border font-medium shrink-0', status.class)}>
          {status.label}
        </span>
      </div>

      {/* Gradient accent bar */}
      <div className="w-full h-px bg-gradient-primary mb-4 opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
        {project.shortDescription}
      </p>

      {/* Expanded details */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4 space-y-3"
        >
          {project.features?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-neon-green mb-1.5 uppercase tracking-wider">Key Features</p>
              <ul className="space-y-1">
                {project.features.slice(0, 4).map((f) => (
                  <li key={f} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">›</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {project.challenges?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-neon-purple mb-1.5 uppercase tracking-wider">Challenges</p>
              <ul className="space-y-1">
                {project.challenges.slice(0, 2).map((c) => (
                  <li key={c} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-secondary mt-0.5">›</span> {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Tag className="h-3 w-3 text-muted-foreground" />
            <div className="flex flex-wrap gap-1">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          <p className={cn('text-xs font-medium', difficulty.class)}>
            Difficulty: {difficulty.label}
          </p>
        </motion.div>
      )}

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.slice(0, 5).map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="text-xs px-2 py-0.5 bg-muted/60 border-border/40 hover:border-primary/40 transition-colors"
          >
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 5 && (
          <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-muted/60 text-muted-foreground">
            +{project.technologies.length - 5}
          </Badge>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3 mt-auto pt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors duration-200"
            aria-label={`GitHub repo for ${project.title}`}
          >
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-neon-blue hover:text-white transition-colors duration-200"
            aria-label={`Live demo for ${project.title}`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live Demo
          </a>
        )}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="ml-auto text-xs text-primary hover:text-white transition-colors duration-200 font-medium"
        >
          {expanded ? 'Less ↑' : 'Details ↓'}
        </button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
