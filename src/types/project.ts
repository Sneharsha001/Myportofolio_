export type ProjectCategory =
  | 'Cloud'
  | 'AI'
  | 'Machine Learning'
  | 'Web Development'
  | 'Research'
  | 'Open Source'
  | 'DevOps'
  | 'Automation'
  | 'Cyber Security'
  | 'Data Engineering';

export type ProjectStatus = 'completed' | 'in-progress' | 'planned';

export type ProjectDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  difficulty: ProjectDifficulty;
  year: number;
  technologies: string[];
  image?: string;
  screenshots?: string[];
  architectureDiagram?: string;
  githubUrl?: string;
  liveUrl?: string;
  documentationUrl?: string;
  demoVideoUrl?: string;
  researchPaperUrl?: string;
  tags: string[];
  futureImprovements?: string[];
  challenges?: string[];
  features: string[];
  learningOutcomes?: string[];
  deploymentDetails?: string;
  cloudServicesUsed?: string[];
  databaseUsed?: string[];
  apiUsed?: string[];
  securityFeatures?: string[];
  performanceOptimizations?: string[];
  featured: boolean;
}

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Web Development',
  'AI',
  'Machine Learning',
  'Cloud',
  'DevOps',
  'Research',
  'Open Source',
  'Automation',
  'Cyber Security',
  'Data Engineering',
];
