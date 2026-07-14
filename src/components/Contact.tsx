import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { personal } from '@/data/personal';
import { githubLink, linkedinLink } from '@/data/social';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailto;
  };

  const inputClass =
    'w-full bg-[#121226] border border-slate-700/50 rounded-lg px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all';

  return (
    <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-300 via-purple-300 to-slate-300 bg-clip-text text-transparent text-center"
          >
            Get In Touch
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mt-12">

          {/* ── Left Column: Direct Connect ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Looking to collaborate on a full-stack project, discuss cloud architectures, or just
              want to say hi? My inbox is always open.
            </p>

            {/* Email Row */}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-4 p-4 bg-[#121226]/40 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-[#1a1a35]/60 hover:border-indigo-500/30 transition-all duration-300 mb-4"
            >
              <div className="w-12 h-12 rounded-full bg-[#0a0a1a] border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wider">Email</p>
                <p className="text-sm text-slate-200 font-semibold">{personal.email}</p>
              </div>
            </a>

            {/* Location Row */}
            <div className="flex items-center gap-4 p-4 bg-[#121226]/40 backdrop-blur-sm border border-white/5 rounded-xl hover:bg-[#1a1a35]/60 hover:border-indigo-500/30 transition-all duration-300 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0a0a1a] border border-slate-800 flex items-center justify-center text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5 font-medium uppercase tracking-wider">Location</p>
                <p className="text-sm text-slate-200 font-semibold">Vadlamudi, Andhra Pradesh, India</p>
              </div>
            </div>

            {/* Social icon links */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Find me on</span>
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-xl bg-[#0a0a1a] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:shadow-[0_0_12px_rgba(255,255,255,0.1)] transition-all duration-300"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href={linkedinLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-xl bg-[#0a0a1a] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] transition-all duration-300"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0b0b1a]/80 backdrop-blur-xl border border-slate-800/80 p-8 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.05)]"
            >
              {/* Name */}
              <div className="mb-5">
                <label htmlFor="contact-name" className="block text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div className="mb-5">
                <label htmlFor="contact-email" className="block text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* Subject */}
              <div className="mb-5">
                <label htmlFor="contact-subject" className="block text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div className="mb-7">
                <label htmlFor="contact-message" className="block text-xs text-slate-400 font-medium mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3.5 rounded-lg hover:opacity-90 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;