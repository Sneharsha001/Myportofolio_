import { motion } from 'framer-motion';
import profileImage from '@/assets/profile-image.jpeg';

/* ─── animation variants ──────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
});

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.12 } },
};

/* ─── neon particle dots on the concentric ring ─────────────────────────── */
const RING_DOTS = [
  { top: '8%',  left: '50%',  color: '#818cf8' },
  { top: '25%', left: '92%',  color: '#22d3ee' },
  { top: '72%', left: '93%',  color: '#a855f7' },
  { top: '90%', left: '50%',  color: '#6366f1' },
  { top: '72%', left: '7%',   color: '#22d3ee' },
  { top: '25%', left: '7%',   color: '#a855f7' },
];

/* ─── grid dot decoration config ────────────────────────────────────────── */
const GRID_COLS = 5;
const GRID_ROWS = 4;

/* ════════════════════════════════════════════════════════════════════════════ */

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-14 relative min-h-screen lg:min-h-0 lg:h-[calc(100vh-56px)] w-full bg-[#03030c] flex flex-col justify-center items-center py-6 px-4 sm:px-8 md:px-16 xl:px-24 overflow-hidden text-white"
    >
      {/* ── Ambient background glows ──────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[520px] w-[520px] rounded-full bg-indigo-900/20 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-purple-900/15 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[600px] rounded-full bg-indigo-950/10 blur-[90px]" />
      </div>

      {/* ── Section Header Stack ──────────────────────────────────────────── */}
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="text-center w-full"
      >
        <div className="text-center max-w-3xl mx-auto mb-6 flex flex-col items-center">
          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white flex items-center justify-center">
            About <span className="bg-gradient-to-r from-[#818cf8] to-[#6366f1] bg-clip-text text-transparent ml-2.5">Me</span>
          </h2>

          {/* Section Subtitle Bio */}
          <p className="text-sm text-slate-400 max-w-2xl mx-auto mt-3 leading-relaxed text-center">
            Engineering student passionate about cloud technologies, building scalable solutions,
            and turning ideas into real-world impact.
          </p>
        </div>
      </motion.div>

      {/* ── Core Split Layout Grid ────────────────────────────────────────── */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-4 mb-2 mx-auto">

        {/* ════ LEFT COLUMN — Image Box (col-span-5) ═══════════════════════ */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="col-span-1 lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Outer card panel */}
          <div className="w-full max-w-[360px] aspect-square bg-[#060612]/60 border border-slate-900 rounded-3xl p-6 relative flex justify-center items-center backdrop-blur-md shadow-2xl">

            {/* Concentric inner ring */}
            <div className="absolute w-[82%] h-[82%] border border-indigo-500/20 rounded-full pointer-events-none">
              {/* Neon particle dots along the ring */}
              {RING_DOTS.map((dot, i) => (
                <span
                  key={i}
                  className="absolute w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: dot.top,
                    left: dot.left,
                    backgroundColor: dot.color,
                    boxShadow: `0 0 8px 2px ${dot.color}99`,
                    animation: `pulse 2.${i}s ease-in-out infinite`,
                  }}
                />
              ))}
            </div>

            {/* Profile portrait — circular crop */}
            <div className="relative w-[72%] h-[72%] rounded-full overflow-hidden border border-indigo-500/30 shadow-[0_0_40px_#6366f130] z-10">
              <img
                src={profileImage}
                alt="Sneharsha Thammisetti"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060612]/50 via-transparent to-transparent rounded-full" />
            </div>

            {/* ── Floating Tool Capsules ──────────────────────────────────── */}

            {/* Top-Left — Cloud icon (neon cyan) */}
            <div className="absolute top-6 left-4 z-20 flex items-center justify-center w-11 h-11 rounded-xl bg-[#0a0f24] border border-slate-800/80 shadow-lg backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
            </div>

            {/* Bottom-Left — Database icon (neon purple) */}
            <div className="absolute bottom-8 left-4 z-20 flex items-center justify-center w-11 h-11 rounded-xl bg-[#0a0f24] border border-slate-800/80 shadow-lg backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>

            {/* Center-Right — Code bracket </> (bright indigo) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-3 z-20 flex items-center justify-center w-11 h-11 rounded-xl bg-[#0a0f24] border border-slate-800/80 shadow-lg backdrop-blur-md">
              <span className="text-[#818cf8] text-xs font-bold font-mono tracking-tight leading-none select-none">
                {'</>'}
              </span>
            </div>

            {/* ── Grid dot decoration — lower-right corner ───────────────── */}
            <div
              className="absolute bottom-5 right-5 z-10 grid gap-[5px]"
              style={{ gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)` }}
            >
              {Array.from({ length: GRID_COLS * GRID_ROWS }).map((_, i) => (
                <span key={i} className="w-[3px] h-[3px] rounded-full bg-slate-700/60" />
              ))}
            </div>

          </div>
        </motion.div>

        {/* ════ RIGHT COLUMN — Timeline + Focus Cards (col-span-7) ═════════ */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="col-span-1 lg:col-span-7 flex gap-5 items-stretch relative"
        >
          {/* ── Left-hand vertical timeline track ──────────────────────── */}
          <div className="w-[2px] bg-gradient-to-b from-indigo-500/40 via-purple-500/20 to-transparent relative self-stretch flex flex-col justify-between py-8 shrink-0">
            {/* Three glowing node dots — aligned to card centres */}
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1] -ml-[5px] shrink-0"
              />
            ))}
          </div>

          {/* ── Cards stack container ───────────────────────────────────── */}
          <div className="flex-1 flex flex-col gap-3">

            {/* Column subtitle */}
            <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-1">
              <span className="text-white">Turning ideas into scalable </span>
              <span className="bg-gradient-to-r from-[#818cf8] to-[#6366f1] bg-clip-text text-transparent">
                digital solutions.
              </span>
            </h3>

            {/* ── Card 1 · Cloud Engineering ────────────────────────────── */}
            <div className="w-full bg-[#070714]/80 border border-slate-900 rounded-2xl p-5 flex items-start gap-5 transition-all duration-300 hover:border-indigo-500/20 shadow-lg backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-[#0a0f24] border border-slate-800 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-cyan-400">
                  ☁️ Cloud Engineering
                </p>
                <p className="text-slate-400 text-xs sm:text-sm tracking-wide leading-relaxed mt-1">
                  Learning AWS, cloud-native architecture, deployment strategies, and scalable infrastructure.
                </p>
              </div>
            </div>

            {/* ── Card 2 · Full-Stack Development ───────────────────────── */}
            <div className="w-full bg-[#070714]/80 border border-slate-900 rounded-2xl p-5 flex items-start gap-5 transition-all duration-300 hover:border-indigo-500/20 shadow-lg backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-[#0a0f24] border border-slate-800 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-indigo-400">
                  💻 Full-Stack Development
                </p>
                <p className="text-slate-400 text-xs sm:text-sm tracking-wide leading-relaxed mt-1">
                  Building responsive web applications with React, Node.js, Express, and MongoDB.
                </p>
              </div>
            </div>

            {/* ── Card 3 · Continuous Learning ──────────────────────────── */}
            <div className="w-full bg-[#070714]/80 border border-slate-900 rounded-2xl p-5 flex items-start gap-5 transition-all duration-300 hover:border-indigo-500/20 shadow-lg backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-[#0a0f24] border border-slate-800 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-400">
                  🚀 Continuous Learning
                </p>
                <p className="text-slate-400 text-xs sm:text-sm tracking-wide leading-relaxed mt-1">
                  Constantly improving through projects, certifications, DSA, and hands-on cloud experience.
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;