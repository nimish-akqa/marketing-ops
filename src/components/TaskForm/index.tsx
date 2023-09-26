import React, { MenuHTMLAttributes } from 'react';
import Instagram from './Instagram';
import Website from './Website';
import Twitter from './Twitter';

import { Agent, AudiencePersona, ProjectUser } from '@/types/global';
import { TaskFormProps } from '@/types/taskform';

import {
  getAgents,
  getAudiencePersona,
  getProjectUsers
} from '@/utils/apiUtils';

const TaskForm: React.FC<TaskFormProps> = async ({ ...props }) => {
  const audiencePersona: AudiencePersona[] = await getAudiencePersona();
  const agents: Agent[] = await getAgents();
  const projectUsers: ProjectUser[] = await getProjectUsers();
  const filteredProjectUsers: Number[] = projectUsers
    ?.filter((pUser) => pUser.projectId === props.projectId)
    .map((data) => data.agentId);

  const filteredAgents = agents.filter((agent) =>
    filteredProjectUsers.includes(agent.id)
  );

  const TASK_FORM = {
    instagram: <Instagram filteredAgents={filteredAgents} {...props} />,
    website: (
      <Website
        audiencePersona={audiencePersona}
        filteredAgents={filteredAgents}
        {...props}
      />
    ),
    twitter: <Twitter filteredAgents={filteredAgents} {...props} />
  };

  return <>{TASK_FORM[props.platform]}</>;
};

export default TaskForm;
