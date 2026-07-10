import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personal } from '@/data/personal';
import { githubLink, linkedinLink } from '@/data/social';
import { projects } from '@/data/projects';
import { allSkills } from '@/data/skills';
import { certificates } from '@/data/certificates';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import { useAnalytics } from '@/hooks/useAnalytics';

const roles = [
  'Full-Stack Developer',
  'Cloud Explorer',
  'AI Enthusiast',
  'Open-Source Contributor',
  'Software Engineer',
];

const Hero: React.FC = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const { trackResumeDownload, trackGithubClick, trackLinkedinClick } = useAnalytics();

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIdx];
    let i = 0;
    setTyping(true);
    setDisplayed('');
    const typeTimer = setInterval(() => {
      i++;
      setDisplayed(target.slice(0, i));
      if (i === target.length) {
        clearInterval(typeTimer);
        setTyping(false);
        setTimeout(() => {
          setRoleIdx((prev) => (prev + 1) % roles.length);
        }, 2200);
      }
    }, 60);
    return () => clearInterval(typeTimer);
  }, [roleIdx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const handleResume = () => {
    trackResumeDownload();
    if (personal.resumeUrl) {
      window.open(personal.resumeUrl, '_blank');
    } else {
      alert('Resume PDF coming soon!');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Subtle ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(193 100% 50%) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full border border-primary/30 text-sm text-neon-blue mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 animate-glow-pulse" />
            {personal.availability}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-orbitron text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent leading-tight"
          >
            {personal.shortName}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-6 font-poppins"
          >
            {personal.tagline}
          </motion.p>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="h-10 flex items-center justify-center mb-8"
          >
            <span className="text-2xl md:text-3xl font-semibold text-neon-blue font-poppins">
              {displayed}
              <span className="inline-block w-0.5 h-7 bg-neon-blue ml-1 align-middle animate-[blink_1s_infinite]" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
          >
            {personal.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button
              onClick={() => scrollTo('projects')}
              size="lg"
              className="bg-gradient-primary hover:shadow-neon-blue transition-all duration-300 font-semibold px-8 rounded-xl"
            >
              View My Work →
            </Button>
            <Button
              onClick={handleResume}
              variant="outline"
              size="lg"
              className="border-primary/60 text-primary hover:bg-primary/10 hover:shadow-neon-blue transition-all duration-300 font-semibold px-8 rounded-xl gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
            <div className="flex items-center gap-3">
              <a
                href={githubLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGithubClick(githubLink.url)}
                className="w-10 h-10 rounded-xl glass border border-border/40 flex items-center justify-center text-muted-foreground hover:text-white hover:shadow-neon-blue transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={linkedinLink.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackLinkedinClick}
                className="w-10 h-10 rounded-xl glass border border-border/40 flex items-center justify-center text-muted-foreground hover:text-blue-400 hover:shadow-neon-blue transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="grid grid-cols-3 gap-4 max-w-sm mx-auto"
          >
            {[
              { value: projects.length, label: 'Projects', suffix: '+' },
              { value: allSkills.length, label: 'Skills', suffix: '+' },
              { value: certificates.length, label: 'Certs', suffix: '+' },
            ].map(({ value, label, suffix }) => (
              <div key={label} className="glass rounded-xl p-3 border border-border/30 text-center">
                <div className="font-orbitron text-2xl font-bold text-neon-blue">
                  <AnimatedCounter target={value} suffix={suffix} />
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollTo('about')} aria-label="Scroll down" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
