export interface Project {
  id: number;
  name: string;
  desc: string;
  metadesc: string;
  startDate: string;
  endDate: string;
  status: string;
}
export interface Agent {
  id: number;
  name: string;
  email: string;
  agentType: string;
  skills: string[];
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
export interface Task {
  id: number;
  title: string;
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
