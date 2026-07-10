import type { Certificate } from '@/types/certificate';

// ============================================================
// CERTIFICATES DATA
// Add new certifications here — cards auto-render
// ============================================================
export const certificates: Certificate[] = [
  {
    id: 'aws-cloud-practitioner-prep',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Skill Builder',
    date: '2025',
    credentialUrl: undefined, // TODO: Add credential URL when available
    skillsLearned: ['AWS Core Services', 'Cloud Fundamentals', 'IAM', 'EC2', 'S3', 'Lambda'],
    category: 'Cloud',
  },
  {
    id: 'react-meta',
    title: 'Meta Front-End Developer Certificate', // TODO: Replace with your actual cert
    issuer: 'Meta / Coursera',
    date: '2024',
    credentialUrl: undefined, // TODO: Add credential URL
    skillsLearned: ['React', 'JavaScript', 'UI/UX Fundamentals', 'Version Control'],
    category: 'Frontend',
  },
  {
    id: 'python-basics',
    title: 'Python for Everybody', // TODO: Replace with your actual cert
    issuer: 'University of Michigan / Coursera',
    date: '2023',
    credentialUrl: undefined, // TODO: Add credential URL
    skillsLearned: ['Python', 'Data Structures', 'Web Scraping', 'Databases'],
    category: 'Programming',
  },
  // ↓ Template — copy and fill in to add new certifications
  // {
  //   id: 'unique-id',
  //   title: 'Certification Title',
  //   issuer: 'Issuing Organization',
  //   date: 'YYYY',
  //   credentialUrl: 'https://credential-url.com',
  //   skillsLearned: ['Skill 1', 'Skill 2'],
  //   category: 'Category',
  // },
];
