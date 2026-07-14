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
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-300 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
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
              className="group relative flex flex-col bg-[#121226]/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-[0_10px_30px_rgba(34,211,238,0.15)] cursor-pointer overflow-hidden text-left h-full"
            >
              {/* Ambient Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Header Row (Logo & Issuer) */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors z-10">
                  <cert.logo className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1 z-10">
                  <CalendarIcon size={12} /> {cert.date}
                </span>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-bold text-white mb-1 z-10">{cert.title}</h3>
              <p className="text-sm text-cyan-400/80 mb-4 z-10">{cert.issuer}</p>

              {/* Skills Pill Grid */}
              <div className="flex flex-wrap gap-2 mb-6 z-10">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/5 border border-white/10 text-slate-300 text-[10px] px-2.5 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* External Link Indicator (Bottom) */}
              <div className="mt-auto pt-6 flex items-center text-sm font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors z-10">
                Verify Credential{' '}
                <ArrowUpRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
