export type ExperienceType =
  | 'internship'
  | 'virtual-experience'
  | 'freelance'
  | 'hackathon'
  | 'competition'
  | 'leadership'
  | 'education';

export interface Experience {
  id: string;
  type: ExperienceType;
  role: string;
  organization: string;
  duration: string;
  startDate: string;
  endDate?: string; // undefined = present
  description: string;
  achievements?: string[];
  technologies?: string[];
  certificateUrl?: string;
  logo?: string;
}
