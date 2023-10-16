import { AGENT_TYPE } from '@prisma/client';
export interface Project {
  id: number;
  name: string;
  desc: string;
  startDate: string;
  endDate: string;
  status: string;
}
export interface Agent {
  id: number;
  name: string;
  email: string;
  type: string;
  skills: string;
  image: string | null;
  ProjectAgents: any;
}
export interface AudiencePersona {
  id: number;
  name: string;
  role: string;
  problems: string;
  pains: string;
  jobs: string;
  motivation: string;
  trigger: string;
  barriers: string;
  context: string;
}

interface AudiencePersonaAgentList {
  audiencePersona?: AudiencePersona[];
  filteredAgents?: Agent[];
}

export interface Task {
  id: number;
  topic: string;
  subTopicsCSV?: string;
  wordCount?: string;
  audiencePersona?: string;
  toneOfVoice?: string;
  seoKeywordsCSV?: string;
  type: string;
  agent: number;
  status: string;
}
export interface ProjectUser {
  id: number;
  projectId: number;
  agentId: number;
}
export interface ProjectTask {
  id: number;
  projectId: number;
  taskId: number;
}

interface TextDeliverable {
  id: number;
  type: 'text';
  content: string; // ID of the associated task
}

interface ImageDeliverable {
  id: number;
  type: 'image';
  path: string; // ID of the associated task
}

interface DocumentDeliverable {
  id: number;
  type: 'document';
  path: string; // ID of the associated task
}
export type Deliverable =
  | TextDeliverable
  | ImageDeliverable
  | DocumentDeliverable;

export interface TaskDeliverable {
  id: number;
  taskId: number;
  deliverableId: number;
}

export interface ProjectForm {
  name: string;
  desc: string;
  startDate: Date | null;
  endDate: Date | null;
  status: string;
  team: string[];
}

export interface UserForm {
  name: string;
  email: string;
  type: AGENT_TYPE | string;
  skills: string;
}
