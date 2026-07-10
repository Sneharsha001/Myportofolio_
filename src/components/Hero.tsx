import { useEffect, useState } from "react";
import {
  Download,
  Mail,
  Linkedin,
  Github,
  Code2,
  Database,
  Cloud,
  Rocket,
  Award,
  RefreshCw,
} from "lucide-react";
import { personal } from "@/data/personal";
import profileImage from "@/assets/profile-image.jpeg";

// ── Rotating roles (preserves original logic) ─────────────────────────────
const roles = [
  "Web Developer",
  "UI/UX Enthusiast",
  "AI Explorer",
  ...personal.currentlyLearning.slice(0, 2).map((t) => `Learning ${t}`),
];

// ── Metric banner data (4 cards) ─────────────────────────────────────────────
const metrics = [
  {
    icon: <Rocket className="w-5 h-5 text-[#a78bfa]" />,
    iconBg: "bg-[#a78bfa]/10",
    value: "10+",
    label: "Projects Completed",
  },
  {
    icon: <Award className="w-5 h-5 text-[#f59e0b]" />,
    iconBg: "bg-[#f59e0b]/10",
    value: "5+",
    label: "Certifications",
  },
  {
    icon: <Cloud className="w-5 h-5 text-[#38bdf8]" />,
    iconBg: "bg-[#38bdf8]/10",
    value: "Cloud",
    label: "AWS",
  },
  {
    icon: <Code2 className="w-5 h-5 text-[#6366f1]" />,
    iconBg: "bg-[#6366f1]/10",
    value: "Full-Stack",
    label: "MERN Developer",
  },
];

// ── Social links ────────────────────────────────────────────────────────────
const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sneharsha-thammisetti-a3bb44285/",
    icon: <Linkedin className="w-4 h-4" />,
    ariaLabel: "LinkedIn profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/Sneharsha001",
    icon: <Github className="w-4 h-4" />,
    ariaLabel: "GitHub profile",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/PytH8OWhNh/",
    icon: <RefreshCw className="w-4 h-4" />,
    ariaLabel: "LeetCode profile",
  },
  {
    label: "Email",
    href: `mailto:${personal.email}`,
    icon: <Mail className="w-4 h-4" />,
    ariaLabel: "Send email",
  },
];

// ── Component ───────────────────────────────────────────────────────────────
const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  // Preserves original rotating-role interval logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Preserves original scroll helper
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    if (personal.resumeUrl) {
      window.open(personal.resumeUrl, "_blank", "noopener,noreferrer");
    } else {
      scrollToSection("resume");
    }
  };

  // Keep currentRole usage to avoid unused-var lint warning
  void currentRole;

  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-[#03030c] flex flex-col justify-between items-center pt-20 pb-6 px-4 sm:px-8 md:px-16 xl:px-24 overflow-hidden text-white"
    >
      {/* ── Subtle ambient background glows ────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-700/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-700/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-sky-700/[0.08] blur-[100px] -translate-x-1/2" />
        {/* Subtle dot-grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* ── HERO BODY: Split-screen 12-column grid ───────────────────── */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-12 items-center my-auto py-2 relative z-10">

        {/* ════════════════ LEFT CONTENT (7 cols) ════════════════════ */}
        <div className="col-span-1 lg:col-span-6 xl:col-span-7 flex flex-col justify-center space-y-4 text-left">


          {/* Main heading */}
          <div>
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#f3f4f6] block">
              Hi, I&apos;m
            </span>
            <span className="text-4xl sm:text-5xl md:text-5xl xl:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#c084fc] via-[#6366f1] to-[#38bdf8] bg-clip-text text-transparent block mt-1.5">
              {personal.name}
            </span>
          </div>

          {/* Subtitle with colored tint on "Full-Stack Developer" */}
          <p className="text-lg md:text-xl font-medium text-[#9ca3af] mt-2">
            Engineering Student •{" "}
            <span className="text-[#a78bfa]">Aspiring Full-Stack Developer</span>
          </p>

          {/* Bio paragraph */}
          <p className="text-base md:text-lg text-[#9ca3af] max-w-xl leading-relaxed mt-4">
            I build scalable web applications, explore cloud technologies, and
            love turning ideas into impactful digital experiences.
          </p>

          {/* CTA buttons row */}
          <div className="flex flex-wrap gap-4 items-center mb-4">
            {/* Primary CTA */}
            <button
              id="hero-view-work-btn"
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#6366f1] to-[#4f46e5] text-white font-semibold tracking-wide px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_24px_rgba(99,102,241,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              View My Work →
            </button>

            {/* Secondary – Download Resume */}
            <button
              id="hero-download-resume-btn"
              onClick={handleDownloadResume}
              className="inline-flex items-center gap-2 border border-slate-800 bg-slate-950/40 text-slate-200 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-slate-900/60 transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              <Download className="w-4 h-4" />
              My Resume
            </button>

            {/* Quick contact icon button */}
            <a
              id="hero-email-btn"
              href={`mailto:${personal.email}`}
              aria-label="Send an email"
              className="inline-flex items-center justify-center w-12 h-12 border border-slate-800 bg-slate-950/40 backdrop-blur-sm rounded-lg text-slate-200 hover:bg-slate-900/60 hover:text-[#4ade80] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Social media footer row */}
          <div className="flex flex-col gap-2 mt-2 mb-2 text-left relative z-20">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
              Connect with me
            </span>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.ariaLabel}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-slate-800 bg-slate-950/40 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#9ca3af] hover:text-white hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════ RIGHT VISUAL (5 cols) ════════════════════ */}
        <div className="col-span-1 lg:col-span-6 xl:col-span-5 relative flex justify-center lg:justify-end items-center w-full min-h-[320px] lg:min-h-[380px]">

          {/* ── Concentric spinning ring network ── */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-full border border-indigo-500/[0.08]"
              style={{ animation: "spin 80s linear infinite" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[360px] h-[360px] md:w-[410px] md:h-[410px] rounded-full border border-indigo-500/[0.12]"
              style={{ animation: "spin 50s linear infinite reverse" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[310px] h-[310px] md:w-[350px] md:h-[350px] rounded-full border border-indigo-500/20"
              style={{ animation: "spin 35s linear infinite" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[260px] h-[260px] md:w-[295px] md:h-[295px] rounded-full border border-indigo-500/30"
              style={{ animation: "spin 20s linear infinite reverse" }}
            />
          </div>

          {/* ── Developer portrait image ── */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="relative">
              {/* Glow behind portrait */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-sky-600/20 blur-2xl scale-110 pointer-events-none" />
              <img
                src={profileImage}
                alt="Sneharsha Thammisetti – Developer portrait"
                className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl relative z-10 border border-indigo-500/20"
                style={{
                  boxShadow:
                    "0 0 0 2px rgba(99,102,241,0.15), 0 0 60px rgba(99,102,241,0.25), 0 25px 50px rgba(0,0,0,0.6)",
                }}
              />
            </div>
          </div>

          {/* ── Floating Widget: Code bracket – top-left ── */}
          <div
            className="absolute top-6 left-2 md:left-8 z-20 flex items-center justify-center w-12 h-12 rounded-xl border border-slate-800/80 bg-[#070714]/80 backdrop-blur-md shadow-lg"
            style={{ animation: "float 6s ease-in-out infinite" }}
          >
            <span className="text-[#c084fc] font-mono text-sm font-bold">&lt;/&gt;</span>
          </div>

          {/* ── Floating Widget: Database – bottom-left ── */}
          <div
            className="absolute bottom-24 left-4 md:left-10 z-20 flex items-center justify-center w-12 h-12 rounded-xl border border-slate-800/80 bg-[#070714]/80 backdrop-blur-md shadow-lg"
            style={{ animation: "float 7s ease-in-out infinite 1s" }}
          >
            <Database className="w-5 h-5 text-[#38bdf8]" />
          </div>

          {/* ── Floating Widget: Cloud – right ── */}
          <div
            className="absolute top-1/3 right-0 md:right-4 z-20 flex items-center justify-center w-12 h-12 rounded-xl border border-slate-800/80 bg-[#070714]/80 backdrop-blur-md shadow-lg"
            style={{ animation: "float 8s ease-in-out infinite 0.5s" }}
          >
            <Cloud className="w-5 h-5 text-[#4ade80]" />
          </div>

          {/* ── Floating Widget: Code tag – far right ── */}
          <div
            className="absolute bottom-1/3 right-0 md:-right-2 z-20 flex items-center justify-center w-10 h-10 rounded-xl border border-slate-800/80 bg-[#070714]/80 backdrop-blur-md shadow-lg"
            style={{ animation: "float 9s ease-in-out infinite 1.5s" }}
          >
            <Code2 className="w-4 h-4 text-[#a78bfa]" />
          </div>

          {/* ── Floating IDE Code Panel ("developer.ts") ── */}
          <div className="absolute z-20 bottom-[-4px] left-2 lg:left-[-12px] w-full max-w-[320px] bg-[#070714]/95 border border-slate-800/80 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] font-mono text-[11px] backdrop-blur-md">
            {/* Panel top bar */}
            <div className="flex items-center justify-between px-4 pt-3 pb-2 mb-1">
              <span className="text-slate-400 text-[11px] font-mono">developer.ts</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
            </div>

            {/* Syntax-highlighted code block */}
            <div className="pl-6 pr-4 py-2 space-y-0.5 leading-5">
              <div>
                <span className="text-[#c084fc]">const </span>
                <span className="text-slate-200">sneharsha = {"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-[#f39c12]">passion</span>
                <span className="text-slate-400">: </span>
                <span className="text-[#4ade80]">&quot;Building Scalable Solutions&quot;</span>
                <span className="text-slate-400">,</span>
              </div>
              <div className="pl-4">
                <span className="text-[#f39c12]">focus</span>
                <span className="text-slate-400">: [</span>
                <span className="text-[#4ade80]">&quot;Web Dev&quot;</span>
                <span className="text-slate-400">, </span>
                <span className="text-[#4ade80]">&quot;Cloud&quot;</span>
                <span className="text-slate-400">, </span>
                <span className="text-[#4ade80]">&quot;AI&quot;</span>
                <span className="text-slate-400">],</span>
              </div>
              <div className="pl-4">
                <span className="text-[#f39c12]">goal</span>
                <span className="text-slate-400">: </span>
                <span className="text-[#4ade80]">&quot;Create Impactful Products&quot;</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="text-slate-200">{"}"}</span>
                <span className="text-slate-400">;</span>
              </div>
              <div className="mt-2">
                <span className="text-[#c084fc]">console</span>
                <span className="text-slate-400">.log(</span>
                <span className="text-[#4ade80]">&quot;Let&apos;s build the future together! 🚀&quot;</span>
                <span className="text-slate-400">);</span>
              </div>
            </div>
          </div>
        </div>
        {/* ═══════════════════════════════════════════════════════════ */}
      </div>

      {/* ── METRIC BANNER ROW ─────────────────────────────────────── */}
      <div className="w-full max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-950/10 backdrop-blur-sm p-2 rounded-2xl relative z-10">
        {metrics.map((m, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-[#09091b]/70 border border-slate-800/80 p-4 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:border-indigo-500/30 hover:scale-[1.02]"
          >
            <div
              className={`flex-shrink-0 w-10 h-10 rounded-lg ${m.iconBg} flex items-center justify-center`}
            >
              {m.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xl font-bold text-white leading-tight">
                {m.value}
              </span>
              <span className="text-xs text-[#9ca3af] tracking-wide font-medium leading-tight mt-0.5">
                {m.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;