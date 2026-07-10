import type { SkillGroup } from '@/types/skill';

// ============================================================
// SKILLS DATA — no external icon libraries, emoji only
// DevOps & AI & Machine Learning removed entirely
// ============================================================
export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'JavaScript', emoji: '🟨', category: 'Programming Languages' },
      { name: 'TypeScript', emoji: '🔷', category: 'Programming Languages' },
      { name: 'Python',     emoji: '🐍', category: 'Programming Languages' },
      { name: 'C',          emoji: '⚙️', category: 'Programming Languages' },
      { name: 'Java',       emoji: '☕', category: 'Programming Languages' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React',        emoji: '⚛️', category: 'Frontend' },
      { name: 'HTML5',        emoji: '🌐', category: 'Frontend' },
      { name: 'CSS3',         emoji: '🎨', category: 'Frontend' },
      { name: 'Tailwind CSS', emoji: '💨', category: 'Frontend' },
      { name: 'Bootstrap',    emoji: '🅱️', category: 'Frontend' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',    emoji: '🟢', category: 'Backend' },
      { name: 'Express.js', emoji: '🚂', category: 'Backend' },
      { name: 'Flask',      emoji: '🧪', category: 'Backend' },
      { name: 'REST APIs',  emoji: '🔌', category: 'Backend' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB',    emoji: '🍃', category: 'Databases' },
      { name: 'MySQL',      emoji: '🐬', category: 'Databases' },
      { name: 'PostgreSQL', emoji: '🐘', category: 'Databases', isLearning: true },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS',      emoji: '☁️', category: 'Cloud', isLearning: true },
      { name: 'Firebase', emoji: '🔥', category: 'Cloud' },
      { name: 'Vercel',   emoji: '▲',  category: 'Cloud' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'VS Code', emoji: '💻', category: 'Tools' },
      { name: 'Figma',   emoji: '🎭', category: 'Tools' },
      { name: 'Postman', emoji: '📬', category: 'Tools' },
      { name: 'Linux',   emoji: '🐧', category: 'Tools' },
      { name: 'Git',     emoji: '🌿', category: 'Tools' },
      { name: 'GitHub',  emoji: '🐙', category: 'Tools' },
    ],
  },
];

// Flat list of all skills
export const allSkills = skillGroups.flatMap((g) => g.skills);

export const currentlyLearning = allSkills.filter((s) => s.isLearning);
