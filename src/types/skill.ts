export type SkillCategory =
  | 'Programming Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Cloud'
  | 'Tools';

export interface Skill {
  name: string;
  emoji: string;   // simple emoji icon — zero external deps, zero compile risk
  category: SkillCategory;
  isLearning?: boolean;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}
