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
          <p className="mt-4 text-sm md:text-base font-medium tracking-wide bg-gradient-to-r from-slate-300 via-indigo-300 to-indigo-500 bg-clip-text text-transparent max-w-2xl mx-auto text-center">
            Technologies I work with.
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

        <div className="min-h-[450px] lg:min-h-[380px] w-full mt-10">
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
              <h3 className="text-xl font-bold text-white tracking-tight">
                Currently Learning
              </h3>
              <p className="mt-3 text-sm md:text-base font-medium tracking-wide bg-gradient-to-r from-indigo-300 via-purple-300 to-slate-300 bg-clip-text text-transparent max-w-2xl mx-auto text-center">
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
                    className="group relative flex items-center gap-4 bg-[#121226]/60 backdrop-blur-md border border-white/10 hover:border-indigo-500/50 px-5 py-3 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#1a1a35]/80 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] cursor-pointer overflow-hidden"
                  >
                    {/* Micro-glow spotlight backdrop */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    {/* Icon shield */}
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/50 transition-all duration-300 z-10">
                      <Icon
                        className="w-6 h-6 transition-all duration-300 group-hover:scale-110"
                        style={{ color: item.iconColor ?? '#94a3b8' }}
                      />
                    </div>

                    {/* Name + tag */}
                    <div className="z-10 flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors duration-200 tracking-wide leading-none whitespace-nowrap">
                        {item.name}
                      </span>
                      {item.tag && (
                        <span className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors duration-200 leading-none">
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
