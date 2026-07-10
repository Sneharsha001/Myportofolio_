import type { Experience } from '@/types/experience';

// ============================================================
// EXPERIENCE DATA — timeline entries
// Add new experiences here without touching any component
// ============================================================
export const experiences: Experience[] = [
  {
    id: 'be-cse',
    type: 'education',
    role: 'B.E. Computer Science & Engineering',
    organization: 'Institute of Aeronautical Engineering', // TODO: Confirm university name
    duration: '2022 – 2026',
    startDate: '2022-08',
    description:
      'Pursuing a Bachelor of Engineering in Computer Science & Engineering, building a strong foundation in algorithms, data structures, operating systems, databases, and software engineering principles.',
    achievements: [
      'Led the Smart Campus Portal team project',
      'Active participant in college tech events and hackathons',
      'Consistently exploring beyond the curriculum through self-learning',
    ],
    technologies: ['C', 'Java', 'Python', 'MySQL', 'Flask', 'React'],
  },
  {
    id: 'freelance-dev',
    type: 'freelance',
    role: 'Freelance Web Developer',
    organization: 'Independent Projects',
    duration: '2023 – Present',
    startDate: '2023-01',
    description:
      'Building personal and client projects to sharpen full-stack skills. Developed multiple production-grade web applications including an e-commerce platform, music player, and image gallery.',
    achievements: [
      'Delivered 5+ full-stack web applications',
      'Implemented JWT auth, payment gateways, and REST APIs',
      'Maintained clean, documented codebases on GitHub',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Flask'],
  },
  {
    id: 'smart-campus-lead',
    type: 'leadership',
    role: 'Team Lead',
    organization: 'Smart Campus Portal Project',
    duration: '2024',
    startDate: '2024-01',
    endDate: '2024-06',
    description:
      'Led a team of 4 engineers in designing and delivering a Flask + MySQL campus management system. Responsible for architecture decisions, task delegation, code review, and final delivery.',
    achievements: [
      'Successfully delivered project on schedule',
      'Designed the relational database schema',
      'Implemented role-based access control',
    ],
    technologies: ['Flask', 'MySQL', 'Python', 'Bootstrap', 'SQLAlchemy'],
  },
  {
    id: 'aws-learning',
    type: 'virtual-experience',
    role: 'AWS Cloud Learner',
    organization: 'Self-directed + AWS Skill Builder',
    duration: '2025 – Present',
    startDate: '2025-01',
    description:
      'Actively learning AWS cloud services through AWS Skill Builder, hands-on labs, and project experiments. Working towards the AWS Cloud Practitioner certification.',
    achievements: [
      'Completed EC2, S3, Lambda, and IAM modules',
      'Deployed sample applications to AWS',
    ],
    technologies: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS IAM', 'CloudFormation'],
    isLearning: true,
  } as Experience & { isLearning?: boolean },
];
