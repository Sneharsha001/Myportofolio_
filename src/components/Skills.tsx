import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { skillGroups, learningRoadmap } from '@/data/skills';
import SkillCard from '@/components/cards/SkillCard';

/* ── Allowed filter tabs — Tools, DevOps & AI removed ─────────────────── */
const FILTER_TABS = [
  'All',
  'Programming Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Cloud',
] as const;

type FilterTab = typeof FILTER_TABS[number];

/* ── Category accent dot color map ───────────────────────────────────── */
const ACCENT: Record<string, string> = {
  'Programming Languages': 'bg-yellow-400',
  Frontend:  'bg-cyan-400',
  Backend:   'bg-green-400',
  Databases: 'bg-blue-400',
  Cloud:     'bg-orange-400',
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('All');

  const visibleGroups = skillGroups.filter(
    (g) =>
      (activeTab === 'All' || g.category === activeTab) &&
      FILTER_TABS.includes(g.category as FilterTab),
  );

  return (
    <section
      id="skills"
      className="relative w-full bg-[#03030c] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* ── Ambient radial background glow ──────────────────────────── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative container mx-auto max-w-5xl">

        {/* ── Section heading ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
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
          className="flex flex-wrap gap-2 justify-center mb-14"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-5 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-300',
                activeTab === tab
                  ? 'border-indigo-500/30 bg-gradient-to-r from-[#11112a] to-[#0a0a1f] text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                  : 'bg-[#070714]/60 border-slate-800 text-slate-400 hover:border-indigo-500/30 hover:text-slate-200 hover:bg-[#0d0d26]/50',
              )}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* ── Skill groups ────────────────────────────────────────────── */}
        <div className="space-y-12">
          {visibleGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: gi * 0.07 }}
            >
              {/* Premium category header */}
              <h3 className="text-[11px] uppercase tracking-[0.25em] font-semibold text-slate-500/90 mb-6 flex items-center gap-2">
                <span className={cn('w-1 h-1 rounded-full shrink-0', ACCENT[group.category] ?? 'bg-indigo-500')} />
                {group.category}
              </h3>

              {/* Capsule pill flow */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <SkillCard key={skill.name} skill={skill} index={gi * 10 + si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Currently Learning panel ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-24"
        >
          {/* Panel container */}
          <div className="relative bg-[#060614]/80 border border-slate-800/70 rounded-2xl px-8 py-10 backdrop-blur-md overflow-hidden">

            {/* Inner ambient glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-600/4 blur-[80px] pointer-events-none rounded-full" />

            {/* Panel heading */}
            <div className="text-center mb-8 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-indigo-400">
                  Active Roadmap
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Currently Learning
              </h3>
              <p className="text-xs text-slate-500 mt-1.5 max-w-md mx-auto">
                My structured learning path — from fundamentals to cloud-native DevOps.
              </p>
            </div>

            {/* Roadmap cards grid */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto relative z-10">
              {learningRoadmap.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.055 }}
                    className="group relative flex items-center gap-3.5 bg-gradient-to-b from-[#08081a]/95 to-[#04040d]/98 border border-slate-900/90 hover:border-indigo-500/50 px-5 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] shadow-xl hover:shadow-[0_15px_30px_rgba(99,102,241,0.12)] cursor-pointer overflow-hidden"
                  >
                    {/* Ambient neon highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />

                    {/* Icon shield */}
                    <div className="w-8 h-8 rounded-lg bg-[#0c0c24] border border-slate-800/80 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-indigo-500/30 z-10">
                      <Icon
                        size={16}
                        className="transition-all duration-300 group-hover:scale-110 group-hover:text-indigo-400"
                        style={{ color: item.iconColor ?? '#94a3b8' }}
                      />
                    </div>

                    {/* Name + tag */}
                    <div className="z-10 flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200 tracking-wide leading-none whitespace-nowrap">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] text-slate-600 group-hover:text-slate-500 transition-colors duration-200 leading-none">
                          {item.tag}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
