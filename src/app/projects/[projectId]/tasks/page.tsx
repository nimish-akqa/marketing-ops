import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import TaskButton from '@/components/TaskButton';

import { Project, ProjectTask, Task } from '@/types/global';
import { getProject, getProjectTasks, getTasks } from '@/utils/apiUtils';

import '../../projects.scss';

const page = async ({ params }: { params: { projectId: number } }) => {
  const { projectId } = params;
  const project: Project = await getProject(projectId);

  if (!Object.keys(project).length) {
    notFound();
  }
  const tasks: Task[] = await getTasks();
  const projectTasks: ProjectTask[] = await getProjectTasks();
  const projectTaskIds = projectTasks
    .filter((pTask) => pTask.projectId === project.id)
    .map((data) => data.taskId);
  const filteredTasks = tasks?.filter((task: Task) =>
    projectTaskIds.includes(task.id)
  );

  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>TASKS LIST</h4>
        </div>
        <TaskButton params={params} />
      </div>
      <div className="section sectionContent">
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
                    <Link href={`/tasks/${task.id}`}>{task.topic}</Link>
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
      </div>
    </>
  );
};

export default page;
