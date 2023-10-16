import React from 'react';
import ProjectForm from '@/components/ProjectForm';

import { Agent } from '@/types/global';
import { getAgents } from '@/utils/apiUtils';
import { PrismaClient } from '@prisma/client';

export type AgentList = Omit<
  Agent,
  'email' | 'skills' | 'image' | 'ProjectAgents'
>;

const page = async () => {
  // const agents: Agent[] = await getAgents();
  const prisma = new PrismaClient();

  // const agents: Agent[] = await getAgents();
  const agents: AgentList[] = await prisma.aGENT.findMany({
    select: {
      id: true,
      name: true,
      type: true
    }
  });
  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>CREATE NEW </h4>
        </div>
      </div>
      <ProjectForm agents={agents} />
    </>
  );
};

export default page;
