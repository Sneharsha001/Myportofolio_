export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  skillsLearned: string[];
  image?: string;
  category?: string;
}
