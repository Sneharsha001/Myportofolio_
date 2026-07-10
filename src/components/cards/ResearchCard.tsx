import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ResearchPaper } from '@/types/research';

interface ResearchCardProps {
  paper: ResearchPaper;
  index?: number;
}

const statusConfig = {
  published: { label: 'Published', class: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
  'under-review': { label: 'Under Review', class: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
  'in-progress': { label: 'In Progress', class: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  draft: { label: 'Draft', class: 'bg-muted text-muted-foreground border-border/40' },
};

const ResearchCard: React.FC<ResearchCardProps> = ({ paper, index = 0 }) => {
  const [expanded, setExpanded] = useState(false);
  const status = statusConfig[paper.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 border border-border/40 hover:border-primary/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 rounded-xl bg-gradient-secondary flex items-center justify-center shrink-0">
          <BookOpen className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className={cn('text-xs px-2 py-0.5 rounded-full border font-medium', status.class)}>
              {status.label}
            </span>
            <span className="text-xs text-muted-foreground">{paper.year}</span>
          </div>
          <h3 className="text-base font-semibold text-foreground leading-snug">{paper.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{paper.authors.join(', ')}</p>
        </div>
      </div>

      {/* Abstract */}
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{paper.abstract}</p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {paper.keywords.map((kw) => (
          <span key={kw} className="text-xs bg-muted/60 border border-border/40 px-2 py-0.5 rounded-full text-muted-foreground">
            {kw}
          </span>
        ))}
      </div>

      {/* Expanded academic details */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 mb-4 border-t border-border/40 pt-4"
        >
          {[
            { label: 'Problem Statement', value: paper.problemStatement },
            { label: 'Objective', value: paper.objective },
            { label: 'Methodology', value: paper.methodology },
            paper.results ? { label: 'Results', value: paper.results } : null,
            paper.limitations ? { label: 'Limitations', value: paper.limitations } : null,
            paper.futureScope ? { label: 'Future Scope', value: paper.futureScope } : null,
          ]
            .filter(Boolean)
            .map((item) => (
              <div key={item!.label}>
                <p className="text-xs font-semibold text-neon-blue uppercase tracking-wider mb-1">
                  {item!.label}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item!.value}</p>
              </div>
            ))}
        </motion.div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-3">
        {paper.publicationUrl && (
          <a
            href={paper.publicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-primary hover:text-white transition-colors font-medium"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Read Paper
          </a>
        )}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors ml-auto"
        >
          {expanded ? <><ChevronUp className="h-3.5 w-3.5" /> Less</> : <><ChevronDown className="h-3.5 w-3.5" /> Full Details</>}
        </button>
      </div>
    </motion.div>
  );
};

export default ResearchCard;
