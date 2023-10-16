import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BsPlusLg } from 'react-icons/bs';
import ActionDropDown from '@/components/ActionDropDown';
import { Agent, ProjectUser } from '@/types/global';
import { getAgents, getProjectUsers } from '@/utils/apiUtils';

import './agents.scss';
import { PrismaClient } from '@prisma/client';

const page = async () => {
  const prisma = new PrismaClient();

  const agents = await prisma.aGENT.findMany({
    include: {
      ProjectAgents: true
    }
  });

  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>AGENT LIST</h4>
        </div>
        <Link className="createButton" href={`users/create-user`}>
          <BsPlusLg />
          Create New Agent
        </Link>
      </div>
      <div className="section sectionContent">
        {agents ? (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Agent Type</th>
                <th>Email</th>
                <th>Skills</th>
                <th>Projects</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {agents?.map((agent) => (
                <tr key={agent.id}>
                  <td>
                    <div className="userAvatar">
                      {agent.image !== '' ? (
                        <Image
                          src={agent.image!}
                          width={32}
                          height={32}
                          alt="thumb"
                        />
                      ) : (
                        <Image
                          src={`https://api.multiavatar.com/${agent.id}.svg`}
                          width={32}
                          height={32}
                          alt="thumb"
                        />
                      )}
                    </div>
                  </td>
                  <td>{agent.name}</td>
                  <td>{agent.type}</td>
                  <td>{agent.email}</td>
                  <td>
                    <div className="skillGroup">
                      {agent.skills.split(',').map((skill) => (
                        <span className={`skills success`} key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>{agent.ProjectAgents.length}</td>
                  <td>
                    <ActionDropDown
                      class="optionsDropdown"
                      optionId={agent.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="noData">No Users found.</div>
        )}
      </div>
    </>
  );
};

export default page;
