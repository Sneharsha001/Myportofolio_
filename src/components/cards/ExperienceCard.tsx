import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Zap, Trophy, Users, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Experience, ExperienceType } from '@/types/experience';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}

const typeConfig: Record<ExperienceType, { icon: React.ReactNode; label: string; color: string }> = {
  internship: { icon: <Briefcase className="h-4 w-4" />, label: 'Internship', color: 'text-neon-blue' },
  'virtual-experience': { icon: <Zap className="h-4 w-4" />, label: 'Virtual Experience', color: 'text-neon-cyan' },
  freelance: { icon: <Code2 className="h-4 w-4" />, label: 'Freelance', color: 'text-neon-green' },
  hackathon: { icon: <Trophy className="h-4 w-4" />, label: 'Hackathon', color: 'text-amber-400' },
  competition: { icon: <Award className="h-4 w-4" />, label: 'Competition', color: 'text-orange-400' },
  leadership: { icon: <Users className="h-4 w-4" />, label: 'Leadership', color: 'text-neon-purple' },
  education: { icon: <GraduationCap className="h-4 w-4" />, label: 'Education', color: 'text-neon-blue' },
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, isLast }) => {
  const config = typeConfig[experience.type];

  return (
    <div className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />
      )}

      {/* Dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full glass border border-primary/40 flex items-center justify-center mt-1"
      >
        <span className={config.color}>{config.icon}</span>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-xl p-5 border border-border/40 hover:border-primary/30 transition-all duration-300 flex-1 mb-6"
      >
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <span className={cn('text-xs font-semibold uppercase tracking-wider', config.color)}>
              {config.label}
            </span>
            <h3 className="text-base font-semibold text-foreground mt-0.5">{experience.role}</h3>
            <p className="text-sm text-muted-foreground">{experience.organization}</p>
          </div>
          <span className="text-xs text-muted-foreground glass px-3 py-1 rounded-full border border-border/40 font-mono">
            {experience.duration}
          </span>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{experience.description}</p>

        {experience.achievements && experience.achievements.length > 0 && (
          <ul className="space-y-1 mb-3">
            {experience.achievements.map((a) => (
              <li key={a} className="text-xs text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-0.5 shrink-0">▸</span>
                {a}
              </li>
            ))}
          </ul>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {experience.technologies.map((t) => (
              <span key={t} className="text-xs bg-muted/60 border border-border/40 px-2 py-0.5 rounded-full text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ExperienceCard;
