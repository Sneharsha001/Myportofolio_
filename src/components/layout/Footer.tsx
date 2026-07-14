import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code2, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personal } from '@/data/personal';
import { socialLinks } from '@/data/social';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
};

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="relative border-t border-border/20 pt-12 pb-8"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-primary opacity-60" />

      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-sora font-bold text-xl text-primary mb-3">
              <Code2 className="h-5 w-5" aria-hidden="true" />
              {personal.shortName}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {personal.tagline}
            </p>
            <p className="text-xs text-muted-foreground mt-3">{personal.location}</p>
            {personal.openToOpportunities && (
              <p className="text-xs text-secondary mt-2 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-glow-pulse inline-block" aria-hidden="true" />
                {personal.availability}
              </p>
            )}
          </div>

          {/* Quick nav */}
          <div>
            <h4 className="font-sora text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2" role="list">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group flex items-center gap-1.5 focus-visible:outline-none focus-visible:text-primary"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary transition-all duration-200 rounded" aria-hidden="true" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sora text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-2" role="list">
              {socialLinks.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target={s.name !== 'Email' ? '_blank' : undefined}
                    rel={s.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    className={cn('flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:text-primary', s.color)}
                    aria-label={s.name}
                  >
                    {iconMap[s.icon] ?? <ExternalLink className="h-4 w-4" aria-hidden="true" />}
                    <span>{s.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. Built with React, TypeScript & passion.
          </p>
          <div className="flex gap-3">
            {socialLinks.filter(s => ['github', 'linkedin'].includes(s.icon)).map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass border border-border/40 flex items-center justify-center text-muted-foreground hover:text-white hover:shadow-neon-blue transition-all duration-300"
                aria-label={s.name}
              >
                {iconMap[s.icon]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
