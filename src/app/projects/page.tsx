import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BsPlusLg } from 'react-icons/bs';
import ActionDropDown from '@/components/ActionDropDown';
import { Project } from '@/types/global';

import './projects.scss';
import { getProjects } from '@/utils/apiUtils';
import { convertDate } from '@/utils/globalUtils';

const page = async () => {
  const projects: Project[] = await getProjects();

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
            {projects.map((project: Project) => (
              <tr key={project.id}>
                <td>
                  <span>
                    <Link href={`/projects/${project.id}`}>{project.name}</Link>
                  </span>
                  <p>{project.metadesc}</p>
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
                    {project.teamMembers.map((teamMember) => (
                      <div className="userAvatar" key={teamMember.agentId}>
                        <Image
                          src={`https://api.multiavatar.com/${teamMember.agentId}.svg`}
                          width={32}
                          height={32}
                          alt="thumb"
                        />
                      </div>
                    ))}
                  </div>
                </td>
                <td>
                  <ActionDropDown
                    class="projectOptionsDropdown"
                    optionId={project.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
