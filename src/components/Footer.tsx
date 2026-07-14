import { Github, Linkedin, Twitter, Mail, Code2 } from 'lucide-react';
import { personal } from '@/data/personal';
import { socialLinks } from '@/data/social';
import { cn } from '@/lib/utils';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  twitter: <Twitter className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
};

const quickLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const sectionId = href.replace('#', '');
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/20">
      {/* Animated neon line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-primary animate-gradient-shift" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
              <Code2 className="h-5 w-5 text-neon-blue" />
              <h3 className="font-orbitron text-2xl font-bold text-neon-blue">
                {personal.shortName}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">{personal.tagline}</p>
            {personal.openToOpportunities && (
              <p className="text-xs text-neon-green mt-1 flex items-center gap-1 justify-center lg:justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-green inline-block animate-glow-pulse" />
                {personal.availability}
              </p>
            )}
          </div>

          {/* Quick Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {quickLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 relative group text-sm"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-neon-purple group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.icon === 'mail' ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={social.name}
                className={cn(
                  'w-10 h-10 rounded-full glass flex items-center justify-center',
                  'border border-border/40 text-muted-foreground',
                  'hover:shadow-neon-blue hover:border-primary/40 transition-all duration-300',
                  social.color,
                )}
              >
                {iconMap[social.icon] ?? social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border/20 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {personal.name}. Built with passion using React & TypeScript.
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-24 h-px bg-gradient-primary animate-glow-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;