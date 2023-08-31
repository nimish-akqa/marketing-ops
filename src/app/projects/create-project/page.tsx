import ProjectForm from '@/components/ProjectForm';
import React from 'react';
import { Agent } from '@/types/global';

const getAgents = async () => {
    const data = await fetch(`/agents/`, {
        cache: 'no-store'
    })
        .then(res => res.json())
        .catch(err => {
            console.log(err.message);
        });
    return data;
};
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
