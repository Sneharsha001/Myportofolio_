import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle, RefreshCw } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { personal } from '@/data/personal';
import { githubLink, linkedinLink } from '@/data/social';

const inputClass =
  'w-full bg-[#121220] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network delay for UX realism
    await new Promise((res) => setTimeout(res, 1800));

    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailto;

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* ── Header ── */}
        <div className="text-center mb-4">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Get In Touch
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg font-medium">
            Let's engineer something remarkable together.
          </p>
        </div>

        {/* ── Two-column grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-14">

          {/* ── Left Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              I'm currently open to new opportunities, freelance projects, and technical collaborations.
              Whether you have a question or just want to connect, my inbox is always open.
            </p>

            {/* Email Row */}
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-5 p-5 bg-[#0a0a16]/60 backdrop-blur-md border border-slate-800/60 rounded-2xl hover:bg-[#121226]/80 hover:border-indigo-500/40 transition-all duration-300 mb-5 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#16162c] to-[#0b0b16] border border-slate-700/50 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-0.5">Email</p>
                <p className="text-sm text-slate-200 font-semibold">{personal.email}</p>
              </div>
            </a>

            {/* Location Row */}
            <div className="flex items-center gap-5 p-5 bg-[#0a0a16]/60 backdrop-blur-md border border-slate-800/60 rounded-2xl hover:bg-[#121226]/80 hover:border-indigo-500/40 transition-all duration-300 mb-5 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#16162c] to-[#0b0b16] border border-slate-700/50 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-0.5">Location</p>
                <p className="text-sm text-slate-200 font-semibold">Banglore, India</p>
              </div>
            </div>

            {/* Response Time Row */}
            <div className="flex items-center gap-5 p-5 bg-[#0a0a16]/60 backdrop-blur-md border border-slate-800/60 rounded-2xl hover:bg-[#121226]/80 hover:border-indigo-500/40 transition-all duration-300 mb-5 group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#16162c] to-[#0b0b16] border border-slate-700/50 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-widest mb-0.5">Response Time</p>
                <p className="text-sm text-slate-200 font-semibold">Average response time: Within 12 hours</p>
              </div>
            </div>

            {/* Social icon links */}
            <div className="mt-4 flex items-center gap-4">
              <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Find me on</span>
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-12 h-12 rounded-xl bg-[#0a0a1a] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 hover:shadow-[0_0_14px_rgba(255,255,255,0.1)] transition-all duration-300"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href={linkedinLink.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-12 h-12 rounded-xl bg-[#0a0a1a] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:shadow-[0_0_14px_rgba(59,130,246,0.25)] transition-all duration-300"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* ── Right Column: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-[#0b0b1a]/90 backdrop-blur-2xl border border-slate-800/80 p-8 md:p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative overflow-hidden min-h-[520px] flex flex-col">
              {/* Ambient corner glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {/* ── Success State ── */}
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center flex-1 py-12 text-center relative z-10"
                  >
                    {/* Glowing checkmark */}
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.25)]">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message Sent Successfully!</h3>
                    <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-8">
                      Thanks for reaching out! Your email client should have opened. I'll get back to you within 12 hours.
                    </p>
                    <button
                      onClick={handleReset}
                      className="flex items-center gap-2 px-6 py-3 bg-[#1a1a2e] border border-slate-700 text-slate-300 rounded-xl hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300 text-sm font-semibold"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form State ── */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col flex-1 relative z-10"
                  >
                    {/* Name */}
                    <div className="mb-5">
                      <label htmlFor="contact-name" className="block text-xs text-slate-400 font-semibold mb-2 uppercase tracking-widest">
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
                      <label htmlFor="contact-email" className="block text-xs text-slate-400 font-semibold mb-2 uppercase tracking-widest">
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
                      <label htmlFor="contact-subject" className="block text-xs text-slate-400 font-semibold mb-2 uppercase tracking-widest">
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
                    <div className="mb-8">
                      <label htmlFor="contact-message" className="block text-xs text-slate-400 font-semibold mb-2 uppercase tracking-widest">
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
                      disabled={isSubmitting}
                      className="mt-auto w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold py-4 rounded-xl hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;