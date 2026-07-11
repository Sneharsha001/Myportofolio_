import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X } from 'lucide-react';
import { projects } from '@/data/projects';
import { personal } from '@/data/personal';
import type { Project } from '@/types/project';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">

        {/* ── Section heading ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Proof of{' '}
            <span className="bg-gradient-to-r from-[#818cf8] to-[#6366f1] bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium tracking-wide bg-gradient-to-r from-indigo-300 via-purple-300 to-slate-300 bg-clip-text text-transparent max-w-2xl mx-auto text-center">
            Transforming complex logic into seamless, scalable, and production-ready digital experiences.
          </p>
        </motion.div>

        {/* ── Project Grid ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-[#121226]/60 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)]"
            >
              {/* Image Header */}
              <div className="w-full h-48 overflow-hidden relative shrink-0">
                <div className="absolute inset-0 bg-indigo-500/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-purple-900/20 flex items-center justify-center">
                    <span className="text-5xl opacity-20">🖥️</span>
                  </div>
                )}
                {/* Status badge over image */}
                <span className={`absolute top-3 left-3 z-20 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                  project.status === 'completed'
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                    : project.status === 'in-progress'
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                    : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                }`}>
                  {project.status === 'in-progress' ? 'In Progress' : project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Click hint */}
                <p className="text-[11px] text-slate-600 mt-3 group-hover:text-slate-500 transition-colors duration-200">
                  Click to view details →
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── GitHub CTA ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <div className="bg-[#121226]/60 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-2xl mx-auto">
            <p className="text-base text-slate-400 mb-6">
              Want to see more? All my work lives on GitHub.
            </p>
            <a
              href={`https://github.com/Sneharsha001/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </div>
        </motion.div>

      </div>

      {/* ── Cinematic Modal Overlay ──────────────────────────────── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a1a] border border-indigo-500/30 rounded-2xl shadow-2xl flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-indigo-500/20 text-white rounded-full transition-colors duration-200 border border-white/10 hover:border-indigo-500/40"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Image — Left on md+, Top on mobile */}
              <div className="w-full md:w-1/2 h-56 md:h-auto shrink-0 overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                {selectedProject.imageUrl ? (
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/40 to-purple-900/20 flex items-center justify-center">
                    <span className="text-7xl opacity-20">🖥️</span>
                  </div>
                )}
              </div>

              {/* Modal Content — Right on md+, Bottom on mobile */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                {/* Category & year */}
                <p className="text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-2">
                  {selectedProject.category} · {selectedProject.year}
                </p>

                <h2 className="text-3xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h2>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {selectedProject.detailedDescription}
                </p>

                {/* Full Tech Stack */}
                <div className="mb-6">
                  <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                {selectedProject.features?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-[11px] uppercase tracking-widest text-slate-500 font-semibold mb-2">
                      Key Features
                    </p>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((f) => (
                        <li key={f} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-indigo-400 mt-0.5 shrink-0">›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Links */}
                <div className="flex items-center gap-4 mt-auto pt-2">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/40 text-sm font-medium text-slate-300 hover:text-white transition-all duration-200"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm font-medium text-white transition-all duration-200 hover:shadow-[0_0_16px_rgba(99,102,241,0.4)]"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;