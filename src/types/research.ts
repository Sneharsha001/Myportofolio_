export interface ResearchPaper {
  id: string;
  title: string;
  abstract: string;
  problemStatement: string;
  objective: string;
  methodology: string;
  architecture?: string;
  results?: string;
  limitations?: string;
  futureScope?: string;
  publicationUrl?: string;
  presentationUrl?: string;
  authors: string[];
  keywords: string[];
  year: number;
  status: 'published' | 'under-review' | 'in-progress' | 'draft';
  conference?: string;
  journal?: string;
}
