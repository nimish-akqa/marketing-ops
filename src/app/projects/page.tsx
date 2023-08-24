import React from 'react';
import './projects.scss';
import Image from 'next/image';
import { projects } from '@/tempJson/projects';
import { BsPlusLg } from 'react-icons/bs';
// import Modal from '@/components/modal';
// import ProjectForm from '@/components/ProjectForm';
import Link from 'next/link';
import ActionDropDown from '@/components/ActionDropDown';

const page = () => {
    const convertDate = (date: string) => {
        return new Date(date).toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    return (
        <div className="mainContent">
            <div className="pageContent">
                <div className="section sectionHeader">
                    <div className="pageTitle">
                        <h4>PROJECTS LIST</h4>
                    </div>
                    <div>
                        <div className="createButton">
                            <BsPlusLg />
                            <Link href={`projects/create-project`}>
                                Create Project
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="section">
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
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td>
                                        <span>
                                            <Link
                                                href={`/projects/project-overview/${project.id}`}
                                            >
                                                {project.name}
                                            </Link>
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
                                                    : project.status ===
                                                      'Pending'
                                                    ? `warning`
                                                    : `danger`
                                            }`}
                                        >
                                            {project.status}
                                        </span>
                                    </td>
                                    <td>
                                        <div className="userGroup">
                                            {project.teamMembers.map(
                                                teamMember => (
                                                    <div
                                                        className="userAvatar"
                                                        key={teamMember.agentId}
                                                    >
                                                        <Image
                                                            src={`https://api.multiavatar.com/${teamMember.agentId}.svg`}
                                                            width={32}
                                                            height={32}
                                                            alt="thumb"
                                                        />
                                                    </div>
                                                )
                                            )}
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
            </div>
        </div>
    );
};

export default page;
