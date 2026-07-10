import type { SkillGroup, LearningItem } from '@/types/skill';
import {
  SiPython,
  SiC,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiInsomnia,
  SiMongodb,
  SiSqlite,
  SiLeetcode,
  SiLinux,
  SiTerraform,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
} from 'react-icons/si';
import { FaCoffee } from 'react-icons/fa';
import { TbBrandAws } from 'react-icons/tb';

// ============================================================
// SKILLS DATA — react-icons/si brand icons
// DevOps, AI, ML, Tools removed entirely
// ============================================================
export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java',       icon: FaCoffee,     iconColor: '#f89820', category: 'Programming Languages' },
      { name: 'Python',     icon: SiPython,     iconColor: '#3776AB', category: 'Programming Languages' },
      { name: 'C',          icon: SiC,          iconColor: '#A8B9CC', category: 'Programming Languages' },
      { name: 'JavaScript', icon: SiJavascript, iconColor: '#F7DF1E', category: 'Programming Languages' },
      { name: 'TypeScript', icon: SiTypescript, iconColor: '#3178C6', category: 'Programming Languages' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML',      icon: SiHtml5,     iconColor: '#E34F26', category: 'Frontend' },
      { name: 'CSS',       icon: SiCss,       iconColor: '#1572B6', category: 'Frontend' },
      { name: 'React',     icon: SiReact,     iconColor: '#61DAFB', category: 'Frontend' },
      { name: 'Bootstrap', icon: SiBootstrap, iconColor: '#7952B3', category: 'Frontend' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs, iconColor: '#339933', category: 'Backend' },
      { name: 'Express.js', icon: SiExpress,   iconColor: '#ffffff', category: 'Backend' },
      { name: 'Flask',      icon: SiFlask,     iconColor: '#ffffff', category: 'Backend' },
      { name: 'REST APIs',  icon: SiInsomnia,  iconColor: '#4000BF', category: 'Backend' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, iconColor: '#47A248', category: 'Databases' },
      { name: 'SQLite',  icon: SiSqlite,  iconColor: '#003B57', category: 'Databases' },
    ],
  },
  {
    category: 'Cloud',
    skills: [
      { name: 'AWS', icon: TbBrandAws,          iconColor: '#FF9900', category: 'Cloud', isLearning: true },
    ],
  },
];

// Flat list of all skills
export const allSkills = skillGroups.flatMap((g) => g.skills);

// Legacy compat — skills marked isLearning inside skillGroups
export const currentlyLearning = allSkills.filter((s) => s.isLearning);

// ============================================================
// LEARNING ROADMAP — dedicated 7-item ordered array
// Shown in the "Currently Learning" panel in Skills.tsx
// ============================================================
export const learningRoadmap: LearningItem[] = [
  {
    name: 'Data Structures & Algorithms',
    icon: SiLeetcode,
    iconColor: '#FFA116',
    tag: 'Problem Solving',
  },
  {
    name: 'Linux Administration',
    icon: SiLinux,
    iconColor: '#FCC624',
    tag: 'OS Fundamentals',
  },
  {
    name: 'AWS',
    icon: TbBrandAws,
    iconColor: '#FF9900',
    tag: 'Cloud Infrastructure',
  },
  {
    name: 'Terraform',
    icon: SiTerraform,
    iconColor: '#7B42BC',
    tag: 'Infrastructure as Code',
  },
  {
    name: 'Docker',
    icon: SiDocker,
    iconColor: '#2496ED',
    tag: 'Containerization',
  },
  {
    name: 'Kubernetes',
    icon: SiKubernetes,
    iconColor: '#326CE5',
    tag: 'Orchestration',
  },
  {
    name: 'CI/CD',
    icon: SiGithubactions,
    iconColor: '#2088FF',
    tag: 'Deployment Pipeline',
  },
];

