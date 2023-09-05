import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BiCalendar, BiCalendarCheck, BiRightArrowAlt } from 'react-icons/bi';
import { Project, Agent, Task } from '@/types/global';
import { getAgents, getProject } from '@/utils/apiUtils';
import { convertDate } from '@/utils/globalUtils';

import './style.scss';
import TaskButton from '@/components/TaskButton';

const page = async ({ params }: { params: { slug: number } }) => {
  const { slug } = params;
  const project: Project = await getProject(slug);

  if (!Object.keys(project).length) {
    notFound();
  }
  const agents: Agent[] = await getAgents();
  const tasks: Task[] = project.tasks?.slice(0, 3);

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
                <p>{project?.startDate && convertDate(project.startDate)}</p>
              </div>
              <div className="date">
                <div>
                  <BiCalendarCheck color={'#556ee6'} />
                  <h5>End Date</h5>
                </div>
                <p>{project?.endDate && convertDate(project?.endDate)}</p>
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
                    project?.teamMembers.map((member) => (
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
                                  (agent) => agent.agentId === member.agentId
                                )
                                ?.skills.map((skill) => (
                                  <span
                                    className={`skills success`}
                                    key={skill}
                                  >
                                    {skill}
                                  </span>
                                ))}
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

      <div className="section sectionTaskList">
        <div className="card">
          <div className="cardBody">
            <div className="cardTitle taskCardTitle">
              <h5>Tasks List</h5>
              <TaskButton params={params} />
            </div>
            <div className="cardContent">
              {tasks ? (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Type</th>
                        <th>Agent</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tasks.map((task: Task) => (
                        <tr key={task.id}>
                          <td>
                            <span>
                              <Link href={`/projects/${task.id}`}>
                                {task.title}
                              </Link>
                            </span>
                          </td>
                          <td>
                            <span>{task.type}</span>
                          </td>

                          <td>
                            <div className="userGroup">
                              <div className="userAvatar">
                                <Image
                                  src={`https://api.multiavatar.com/${task.agent}.svg`}
                                  width={32}
                                  height={32}
                                  alt="thumb"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            <span
                              className={`taskStatus ${
                                task.status === 'Completed'
                                  ? `success`
                                  : task.status === 'Pending'
                                  ? `warning`
                                  : task.status === 'Waiting'
                                  ? `waiting`
                                  : `danger`
                              }`}
                            >
                              {task.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {project?.tasks?.length >= 3 && (
                    <div className="showMore">
                      <Link href={`/projects/${slug}/tasks`}>
                        Show more
                        <BiRightArrowAlt size={20} />
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <div className="noTasks">No tasks found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
