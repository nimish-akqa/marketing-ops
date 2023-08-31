import React from 'react';
import './projectoverview.scss';
import { BiCalendar, BiCalendarCheck } from 'react-icons/bi';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Project, Agent } from '@/types/global';

const getProject = async (slug: number) => {
    const data = await fetch(
        `https://json-server-vercel-nimish-akqa.vercel.app/projects/${slug}`,
        {
            cache: 'no-store'
        }
    )
        .then(res => res.json())
        .catch(err => {
            console.log(err.message);
        });
    return data;
};

const getAgents = async () => {
    const data = await fetch(
        `https://json-server-vercel-nimish-akqa.vercel.app/agents/`,
        {
            cache: 'no-store'
        }
    )
        .then(res => res.json())
        .catch(err => {
            console.log(err.message);
        });
    return data;
};

const convertDate = (date: string) => {
    return new Date(date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};

const page = async ({ params }: { params: { slug: number } }) => {
    const { slug } = params;
    const project: Project = await getProject(slug);

    if (!Object.keys(project).length) {
        notFound();
    }
    const agents: Agent[] = await getAgents();

    return (
        <>
            <div className="section sectionHeader">
                <div className="pageTitle">
                    <h4>Project Overview</h4>
                </div>
            </div>
            <div className="section sectionProjectOverview">
                <div className="card projectCard">
                    <div className="cardBody">
                        <div className="cardTitle projectTitle">
                            <h5>{project?.name}</h5>
                            <p>{project?.metadesc}</p>
                        </div>
                        {/* <div className="cardContent"> */}
                        <div className="projectDetails">
                            <h5>Project Details: </h5>
                            <p>{project?.desc}</p>
                        </div>
                        <div className="projectDuration">
                            <div className="date">
                                <div>
                                    <BiCalendar color={'#556ee6'} />
                                    <h5>Start Date</h5>
                                </div>
                                <p>
                                    {project?.startDate &&
                                        convertDate(project.startDate)}
                                </p>
                            </div>
                            <div className="date">
                                <div>
                                    <BiCalendarCheck color={'#556ee6'} />
                                    <h5>End Date</h5>
                                </div>
                                <p>
                                    {project?.endDate &&
                                        convertDate(project?.endDate)}
                                </p>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
                <div className="card teamCard">
                    <div className="cardBody">
                        <div className="cardTitle">
                            <h5>Team Members</h5>
                        </div>
                        <div className="cardContent">
                            <table>
                                <tbody>
                                    {project?.teamMembers &&
                                        project?.teamMembers.map(member => (
                                            <tr key={member.agentId}>
                                                <td>
                                                    <div className="userGroup">
                                                        <div className="userAvatar">
                                                            <Image
                                                                src={`https://api.multiavatar.com/${member.agentId}.svg`}
                                                                width={32}
                                                                height={32}
                                                                alt="thumb"
                                                            />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <h5>{member.name}</h5>
                                                </td>
                                                <td>
                                                    <div className="skillGroup">
                                                        {agents &&
                                                            agents
                                                                .find(
                                                                    agent =>
                                                                        agent.agentId ===
                                                                        member.agentId
                                                                )
                                                                ?.skills.map(
                                                                    skill => (
                                                                        <span
                                                                            className={`skills success`}
                                                                            key={
                                                                                skill
                                                                            }
                                                                        >
                                                                            {
                                                                                skill
                                                                            }
                                                                        </span>
                                                                    )
                                                                )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;
