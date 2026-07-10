import type { IconType } from 'react-icons';

export type SkillCategory =
  | 'Programming Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Cloud';

export interface Skill {
  name: string;
  icon: IconType;          // react-icons Simple Icons brand icon
  iconColor?: string;      // brand colour for the idle state
  category: SkillCategory;
  isLearning?: boolean;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

/** Standalone roadmap items shown in the "Currently Learning" panel */
export interface LearningItem {
  name: string;
  icon: IconType;
  iconColor?: string;
  tag?: string;          // optional context tag, e.g. "Cloud Infra"
}
