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
      className="group relative flex items-center gap-3.5 bg-gradient-to-b from-[#08081a]/95 to-[#04040d]/98 border border-slate-900/90 hover:border-indigo-500/50 px-5 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] shadow-xl hover:shadow-[0_15px_30px_rgba(99,102,241,0.12)] cursor-pointer overflow-hidden w-fit"
    >
      {/* Ambient neon highlight on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

      {/* Brand icon shield */}
      <div className="w-8 h-8 rounded-lg bg-[#0c0c24] border border-slate-800/80 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-indigo-500/30 z-10">
        <Icon
          size={16}
          className="transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-400"
          style={{ color: skill.iconColor ?? '#94a3b8' }}
        />
      </div>

      {/* Skill name */}
      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 tracking-wide leading-none whitespace-nowrap z-10">
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
