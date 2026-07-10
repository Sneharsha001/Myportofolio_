import React from 'react';
import { motion } from 'framer-motion';
import type { Skill } from '@/types/skill';

interface SkillCardProps {
  skill: Skill;
  index?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group flex items-center gap-3 bg-[#070714]/60 border border-slate-900 px-4 py-3 rounded-xl transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#0a0a1f]/80 cursor-default"
    >
      <span className="text-base leading-none select-none" aria-hidden="true">
        {skill.emoji}
      </span>
      <span className="text-sm font-medium text-slate-200 tracking-wide leading-none">
        {skill.name}
      </span>
      {skill.isLearning && (
        <span className="ml-auto text-[10px] font-semibold text-amber-400/80 border border-amber-400/20 rounded-full px-2 py-0.5 leading-none shrink-0">
          learning
        </span>
      )}
    </motion.div>
  );
};

export default SkillCard;
