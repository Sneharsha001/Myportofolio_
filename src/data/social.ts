// ============================================================
// SOCIAL LINKS — update handles here; components auto-update
// ============================================================

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string; // lucide icon name or emoji fallback
  color: string; // Tailwind hover color class
}

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Sneharsha001', // TODO: Confirm your GitHub handle
    handle: '@sneharsha',
    icon: 'github',
    color: 'hover:text-white',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sneharsha-thammisetti-a3bb44285/', // TODO: Confirm your LinkedIn handle
    handle: 'Sneharsha Thammisetti',
    icon: 'linkedin',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Twitter / X',
    url: 'https://twitter.com/sneharsha', // TODO: Confirm your Twitter/X handle
    handle: '@sneharsha',
    icon: 'twitter',
    color: 'hover:text-sky-400',
  },
  {
    name: 'Email',
    url: `mailto:sneharshathammisetti@gmail.com`, // TODO: Confirm email
    handle: 'sneharshathammisetti@gmail.com',
    icon: 'mail',
    color: 'hover:text-emerald-400',
  },
];

export const githubLink = socialLinks.find((s) => s.name === 'GitHub')!;
export const linkedinLink = socialLinks.find((s) => s.name === 'LinkedIn')!;
