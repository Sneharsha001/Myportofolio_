import { Linkedin, Github, Twitter, Mail, MapPin, Clock, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';

const Contact = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-5 w-5" aria-hidden="true" />,
      url: 'https://linkedin.com/in/sneharsha',
      colorClass: 'hover:text-primary hover:border-primary/40 hover:shadow-neon-blue',
      handle: 'sneharsha',
    },
    {
      name: 'GitHub',
      icon: <Github className="h-5 w-5" aria-hidden="true" />,
      url: 'https://github.com/sneharsha',
      colorClass: 'hover:text-violet hover:border-violet/40',
      handle: 'sneharsha',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="h-5 w-5" aria-hidden="true" />,
      url: 'https://twitter.com/sneharsha',
      colorClass: 'hover:text-secondary hover:border-secondary/40 hover:shadow-neon-green',
      handle: '@sneharsha',
    },
    {
      name: 'Email',
      icon: <Mail className="h-5 w-5" aria-hidden="true" />,
      url: 'mailto:sneharsha@example.com',
      colorClass: 'hover:text-amber hover:border-amber/40',
      handle: 'sneharsha@example.com',
    },
  ];

  const quickInfo = [
    { icon: <MapPin className="h-4 w-4" aria-hidden="true" />, label: 'Location', value: 'India' },
    { icon: <Clock className="h-4 w-4" aria-hidden="true" />, label: 'Response Time', value: 'Within 24 hours' },
    { icon: <Briefcase className="h-4 w-4" aria-hidden="true" />, label: 'Available For', value: 'Projects & Collaboration' },
  ];

  return (
    <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Let's Connect"
          subtitle="Open to exciting opportunities, collaborations, and conversations about technology."
          accent="cyan"
        />

        <div className="max-w-4xl mx-auto">
          {/* Intro card */}
          <div className="glass border border-border/40 p-8 rounded-2xl mb-10 text-center">
            <h3 className="font-sora text-xl font-semibold mb-3 text-foreground">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on projects,
              or just chat about technology and innovation. Reach out through any of the
              channels below!
            </p>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className={`glass border border-border/40 p-5 rounded-xl card-hover group flex flex-col items-center gap-3 text-center transition-all duration-300 ${link.colorClass}`}
                aria-label={`Contact via ${link.name}`}
              >
                <div className="w-10 h-10 rounded-full bg-muted/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <div>
                  <h4 className="font-sora text-sm font-semibold">{link.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{link.handle}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Quick info */}
          <address className="not-italic">
            <div className="glass border border-border/40 p-8 rounded-2xl">
              <h3 className="font-sora text-base font-semibold mb-6 text-foreground text-center">
                Quick Info
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                {quickInfo.map(({ icon, label, value }) => (
                  <div key={label} className="flex flex-col items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      {icon}
                    </div>
                    <p className="text-xs text-muted-foreground">{label}</p>
                    <p className="text-sm font-medium text-foreground">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </address>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              Let's create something extraordinary together
              <span className="ml-1 text-secondary">✦</span>
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-24 h-px bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;