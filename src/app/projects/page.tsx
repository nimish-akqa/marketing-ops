import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BsPlusLg } from 'react-icons/bs';
import ActionDropDown from '@/components/ActionDropDown';
import { Project, ProjectUser } from '@/types/global';

import './projects.scss';
import { getProjects, getProjectUsers } from '@/utils/apiUtils';
import { convertDate } from '@/utils/globalUtils';
import { PrismaClient } from '@prisma/client';

const page = async () => {
  // const projects: Project[] = await getProjects();
  // const projectUsers: ProjectUser[] = await getProjectUsers();
  const prisma = new PrismaClient();

  const projects = await prisma.pROJECT.findMany({
    include: {
      ProjectAgents: {
        include: {
          agent: true
        }
      }
    }
  });

  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>PROJECTS LIST</h4>
        </div>
        <Link className="createButton" href={`projects/create-project`}>
          <BsPlusLg />
          Create Project
        </Link>
      </div>
      <div className="section sectionContent">
        {projects ? (
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Start Date</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Team</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {projects?.map((project) => (
                <tr key={project.id}>
                  <td>
                    <span>
                      <Link href={`/projects/${project.id}`}>
                        {project.name}
                      </Link>
                    </span>
                    {/* <p>{project.metadesc}</p> */}
                  </td>
                  <td>{convertDate(project.startDate)}</td>
                  <td>{convertDate(project.endDate)}</td>
                  <td>
                    <span
                      className={`projectStatus ${
                        project.status === 'Completed'
                          ? `success`
                          : project.status === 'Pending'
                          ? `warning`
                          : `danger`
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td>
                    <div className="userGroup">
                      {project.ProjectAgents &&
                        project.ProjectAgents.map((data) => (
                          <div className="userAvatar" key={data.agent.id}>
                            {data.agent.image !== '' ? (
                              <Image
                                src={data.agent.image!}
                                width={32}
                                height={32}
                                alt="thumb"
                              />
                            ) : (
                              <Image
                                src={`https://api.multiavatar.com/${data.agent.id}.svg`}
                                width={32}
                                height={32}
                                alt="thumb"
                              />
                            )}
                          </div>
                        ))}
                    </div>
                  </td>
                  <td>
                    <ActionDropDown
                      class="optionsDropdown"
                      optionId={project.id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="noData">No Projects found.</div>
        )}
      </div>
    </>
  );
};

export default page;
