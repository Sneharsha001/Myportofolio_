import React, { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import ScrollToTop from '@/components/common/ScrollToTop';
import AIWidget from '@/components/common/AIWidget';

// ── Lazy-load below-fold sections for faster initial render ──────────────────
const Experience     = lazy(() => import('@/components/Experience'));
const Certifications = lazy(() => import('@/components/Certifications'));
const Research       = lazy(() => import('@/components/Research'));
const Blog           = lazy(() => import('@/components/Blog'));
const Resume         = lazy(() => import('@/components/Resume'));
const Contact        = lazy(() => import('@/components/Contact'));
const Footer         = lazy(() => import('@/components/Footer'));

// ── Section fallback: invisible placeholder that holds layout ───────────────
const SectionFallback = () => (
  <div className="py-24 flex items-center justify-center" aria-hidden="true">
    <span className="w-6 h-6 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

// ── Professional loading screen ──────────────────────────────────────────────
const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  useEffect(() => {
    const t = setTimeout(onComplete, 1400);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      role="status"
      aria-label="Loading portfolio"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(238 84% 67% / 0.10) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Brand mark */}
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--gradient-primary)' }}
          >
            <span className="font-sora text-xl font-bold text-white select-none">ST</span>
          </div>
          {/* Rotating ring */}
          <div
            className="absolute -inset-1.5 rounded-[18px] border-2 border-transparent animate-spin"
            style={{
              borderTopColor: 'hsl(238 84% 67% / 0.8)',
              borderRightColor: 'hsl(178 72% 52% / 0.4)',
              animationDuration: '1s',
            }}
            aria-hidden="true"
          />
        </div>

        <p className="font-sora text-sm font-medium text-muted-foreground tracking-wide">
          Loading portfolio…
        </p>

        {/* Progress bar */}
        <div className="w-48 h-0.5 bg-muted/60 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full animate-loading-bar"
            style={{ background: 'var(--gradient-primary)' }}
          />
        </div>
      </div>
    </div>
  );
};

// ── Portfolio page ────────────────────────────────────────────────────────────
const Portfolio = () => {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleLoadComplete = () => {
    setLoading(false);
    // Slight delay so the fade-out transition plays
    requestAnimationFrame(() => setVisible(true));
  };

  return (
    <>
      {/* Loading screen */}
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      {/* Main portfolio content */}
      <div
        className="min-h-screen bg-background"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(8px)',
          transition: 'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
        role="main"
        aria-label="Sneharsha Thammisetti Portfolio"
      >
        {/* ── Above the fold (eager) ── */}
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />

        {/* ── Below the fold (lazy) ── */}
        <Suspense fallback={<SectionFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Research />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Blog />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Resume />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        {/* ── Floating utilities ── */}
        <ScrollToTop />
        <AIWidget />
      </div>
    </>
  );
};

export default Portfolio;
