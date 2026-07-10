import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { skillGroups, currentlyLearning } from '@/data/skills';
import SkillCard from '@/components/cards/SkillCard';

/* ── Allowed filter tabs — DevOps & AI removed ───────────────────────── */
const FILTER_TABS = [
  'All',
  'Programming Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Cloud',
  'Tools',
] as const;

type FilterTab = typeof FILTER_TABS[number];

/* ── Category accent dot color map ───────────────────────────────────── */
const ACCENT: Record<string, string> = {
  'Programming Languages': 'bg-yellow-400',
  Frontend:  'bg-cyan-400',
  Backend:   'bg-green-400',
  Databases: 'bg-blue-400',
  Cloud:     'bg-orange-400',
  Tools:     'bg-pink-400',
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  // Only show groups whose category is in FILTER_TABS (guards against stale data)
  const visibleGroups = skillGroups.filter(
    (g) => activeTab === 'All' || g.category === activeTab
  );

  return (
    <section id="skills" className="py-20 relative bg-[#03030c]">
      <div className="container mx-auto px-6">

        {/* ── Section heading ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center gap-2.5">
            Skills &amp;{' '}
            <span className="bg-gradient-to-r from-[#818cf8] to-[#6366f1] bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-3 max-w-xl mx-auto leading-relaxed">
            Technologies I work with, grouped by domain.
          </p>
        </motion.div>

        {/* ── Filter tabs ─────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 justify-center mb-12"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-4 py-1.5 rounded-full text-xs font-semibold border tracking-wide transition-all duration-200',
                activeTab === tab
                  ? 'bg-indigo-500/20 border-indigo-500/60 text-indigo-300 shadow-[0_0_12px_#6366f120]'
                  : 'bg-[#070714]/60 border-slate-800 text-slate-400 hover:border-indigo-500/30 hover:text-slate-200',
              )}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* ── Skill groups ────────────────────────────────────────────── */}
        <div className="max-w-6xl mx-auto space-y-10">
          {visibleGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: gi * 0.06 }}
            >
              {/* Category label */}
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2">
                <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', ACCENT[group.category] ?? 'bg-slate-500')} />
                {group.category}
              </h3>

              {/* Capsule badge grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
                {group.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} index={gi * 10 + si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Currently Learning panel ────────────────────────────────── */}
        {currentlyLearning.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16"
          >
            <div className="max-w-3xl mx-auto bg-[#070714]/70 border border-slate-800 rounded-2xl px-8 py-7 flex flex-col items-center gap-5 backdrop-blur-md">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  Currently Learning
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Technologies I'm actively picking up right now.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {currentlyLearning.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2 bg-[#0a0a1f]/80 border border-indigo-500/20 rounded-full text-sm font-medium text-slate-200 hover:border-indigo-500/50 transition-colors duration-200"
                  >
                    <span className="text-base leading-none" aria-hidden="true">
                      {skill.emoji}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Skills;
