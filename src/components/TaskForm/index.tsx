import React, { MenuHTMLAttributes } from 'react';
import Instagram from './Instagram';
import Website from './Website';
import X from './X';
import { Agent, AudiencePersona, ProjectUser } from '@/types/global';
import {
  getAgents,
  getAudiencePersona,
  getProjectUsers
} from '@/utils/apiUtils';
import { notFound } from 'next/navigation';

interface TaskFormProps {
  platform: string | undefined;
  projectId: number;
}

const TaskForm: React.FC<TaskFormProps> = async ({ platform, projectId }) => {
  const audiencePersona: AudiencePersona[] = await getAudiencePersona();
  const agents: Agent[] = await getAgents();
  const projectUsers: ProjectUser[] = await getProjectUsers();
  const filteredProjectUsers: Number[] = projectUsers
    ?.filter((pUser) => pUser.projectId === projectId)
    .map((data) => data.agentId);

  const fileredAgents = agents.filter((agent) =>
    filteredProjectUsers.includes(agent.id)
  );

  const component =
    platform == 'instagram' ? (
      <Instagram />
    ) : platform == 'website' ? (
      <Website
        audiencePersona={audiencePersona}
        fileredAgents={fileredAgents}
      />
    ) : platform == 'x' ? (
      <X />
    ) : (
      notFound()
    );
  return <>{component}</>;
};

export default TaskForm;
