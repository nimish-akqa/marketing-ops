import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { BiCalendar, BiCalendarCheck, BiRightArrowAlt } from 'react-icons/bi';
import { Project, Agent, Task, ProjectUser, ProjectTask } from '@/types/global';
import {
  getAgents,
  getProject,
  getProjectTasks,
  getProjectUsers,
  getTasks
} from '@/utils/apiUtils';
import { convertDate } from '@/utils/globalUtils';

import './style.scss';
import TaskButton from '@/components/TaskButton';

const page = async ({ params }: { params: { projectId: number } }) => {
  const { projectId } = params;
  const project: Project = await getProject(projectId);

  if (!Object.keys(project).length) {
    notFound();
  }
  const projectUsers: ProjectUser[] = await getProjectUsers();
  const agents: Agent[] = await getAgents();
  const tasks: Task[] = await getTasks();
  const projectTasks: ProjectTask[] = await getProjectTasks();
  const projectTaskIds = projectTasks
    .filter((pTask) => pTask.projectId === project.id)
    .map((data) => data.taskId);
  const filteredTasks = tasks
    ?.filter((task: Task) => projectTaskIds.includes(task.id))
    .slice(0, 3);

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
              {/* <p>{project?.metadesc}</p> */}
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
              <h5>Project Users</h5>
            </div>
            <div className="cardContent">
              <table>
                <tbody>
                  {projectUsers &&
                    projectUsers
                      ?.filter((pUser) => pUser.projectId === project.id)
                      .map((data) => (
                        <tr key={data.agentId}>
                          <td>
                            <div className="userGroup">
                              <div className="userAvatar">
                                <Image
                                  src={`https://api.multiavatar.com/${data.agentId}.svg`}
                                  width={32}
                                  height={32}
                                  alt="thumb"
                                />
                              </div>
                            </div>
                          </td>
                          <td>
                            {agents && (
                              <h5>
                                {
                                  agents?.find(
                                    (agent) => agent.id === data.agentId
                                  )?.name
                                }
                              </h5>
                            )}
                          </td>
                          <td>
                            <div className="skillGroup">
                              {agents &&
                                agents
                                  .find((agent) => agent.id === data.agentId)
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
            <div className="cardContent taskCardContent">
              {filteredTasks.length ? (
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
                      {filteredTasks.map((task: Task) => (
                        <tr key={task.id}>
                          <td>
                            <span>
                              <Link href={`/tasks/${task.id}`}>
                                {task.topic}
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
                  {projectTaskIds?.length > 3 && (
                    <div className="showMore">
                      <Link href={`/projects/${projectId}/tasks`}>
                        Show more
                        <BiRightArrowAlt size={20} />
                      </Link>
                    </div>
                  )}
                </>
              ) : (
                <div className="noData">No tasks found.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
