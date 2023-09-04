import React from 'react';
import ProjectForm from '@/components/ProjectForm';

import { Agent } from '@/types/global';
import { getAgents } from '@/utils/apiUtils';

const page = async () => {
  const agents: Agent[] = await getAgents();
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
