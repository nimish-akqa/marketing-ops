export interface InstagramForm {
  assignee: string;
  summary: string;
  tagsCSV: string;
}
export interface WebsiteForm {
  assignee: string;
  topic: string;
  subTopicsCSV: string;
  wordCount: string;
  audiencePersona: string;
  toneOfVoice: string;
  seoKeywordsCSV: string;
}
export interface TwitterForm {
  assignee: string;
  topic: string;
}
export interface TaskFormProps {
  platform: 'instagram' | 'website' | 'twitter';
  projectId: number;
}
