import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '@/types/skill';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index = 0 }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.035 }}
      className="group relative flex items-center gap-4 bg-[#121226]/60 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a1a35]/80 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] cursor-pointer overflow-hidden w-fit"
    >
      {/* Micro-glow spotlight backdrop */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Brand icon shield */}
      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300 z-10">
        <Icon
          className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
          style={{ color: skill.iconColor ?? '#94a3b8' }}
        />
      </div>

      {/* Skill name */}
      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200 tracking-wide leading-none whitespace-nowrap z-10">
        {skill.name}
      </span>

      {/* Learning badge */}
      {skill.isLearning && (
        <span className="text-[9px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 tracking-wider uppercase ml-auto z-10 animate-pulse">
          Learning
        </span>
      )}
    </motion.div>
  );
};

export default SkillCard;
