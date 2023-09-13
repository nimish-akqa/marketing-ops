export interface Task {
  id: number;
  title: string;
  type: string;
  agent: string;
  status: string;
}
export interface Project {
  id: number;
  name: string;
  desc: string;
  metadesc: string;
  startDate: string;
  endDate: string;
  status: string;
  teamMembers: { agentId: number; name: string }[];
  tasks: Task[];
}
export interface Agent {
  id: number;
  name: string;
  email: string;
  agentType: string;
  skills: string[];
  projects: number;
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

export interface ProjectUser {
  id: number;
  projectId: number;
  agentId: number;
}
