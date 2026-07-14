import React from 'react';
import { motion } from 'framer-motion';
import { SiMeta, SiPython } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { Calendar as CalendarIcon, ArrowUpRight as ArrowUpRightIcon } from 'lucide-react';

// Strict schema for certification data
interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  logo: React.ComponentType<{ className?: string }>;
  credentialUrl?: string;
}

// Data array outside the component render
const certificationsData: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Skill Builder',
    date: '2025',
    skills: ['AWS Core Services', 'Cloud Fundamentals', 'IAM', 'EC2', 'S3', 'Lambda'],
    logo: FaAws,
    credentialUrl: '#',
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer Certificate',
    issuer: 'Meta / Coursera',
    date: '2024',
    skills: ['React', 'JavaScript', 'UI/UX Fundamentals', 'Version Control'],
    logo: SiMeta,
    credentialUrl: '#',
  },
  {
    id: 'python-everybody',
    title: 'Python for Everybody',
    issuer: 'University of Michigan',
    date: '2023',
    skills: ['Python', 'Data Structures', 'Web Scraping', 'Databases'],
    logo: SiPython,
    credentialUrl: '#',
  },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header Cleanup & Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="mt-4 text-sm md:text-base font-medium tracking-wide bg-gradient-to-r from-slate-300 via-indigo-300 to-indigo-500 bg-clip-text text-transparent">
            Credentials that validate my skills and commitment to continuous learning.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {certificationsData.map((cert) => (
            <a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col bg-[#0b0b1a]/80 backdrop-blur-xl border border-slate-800/80 p-7 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-[#12122a]/90 hover:border-indigo-500/50 hover:shadow-[0_15px_40px_-10px_rgba(99,102,241,0.2)] cursor-pointer overflow-hidden h-full z-10"
            >
              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10" />

              {/* Header Row (Logo & Issuer) */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1c] border border-slate-700/50 flex items-center justify-center text-slate-300 group-hover:text-indigo-400 group-hover:border-indigo-500/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all duration-300 z-10">
                  <cert.logo className="w-7 h-7" />
                </div>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1 z-10">
                  <CalendarIcon size={12} /> {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold text-white mb-1 z-10">{cert.title}</h3>
              <p className="text-sm font-semibold text-indigo-400/90 mb-5 z-10">{cert.issuer}</p>

              {/* Skills Pill Grid */}
              <div className="flex flex-wrap gap-2 mb-6 z-10">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#16162c] border border-slate-800/60 text-slate-300 text-[11px] font-medium px-3 py-1.5 rounded-md group-hover:border-slate-700 transition-colors z-10"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* External Link Indicator (Bottom) */}
              <div className="mt-auto pt-8 flex items-center justify-between w-full border-t border-slate-800/50 group-hover:border-indigo-500/20 transition-colors z-10">
                <span className="text-sm font-semibold text-slate-400 group-hover:text-indigo-400 transition-colors">Verify Credential</span>
                <ArrowUpRightIcon className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
