import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import TaskButton from '@/components/TaskButton';

import { Project, Task } from '@/types/global';
import { getProject } from '@/utils/apiUtils';

import '../../projects.scss';

const page = async ({ params }: { params: { slug: number } }) => {
  const { slug } = params;
  const project: Project = await getProject(slug);

  if (!Object.keys(project).length) {
    notFound();
  }
  const tasks: Task[] = project.tasks;

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
            {tasks.map((task: Task) => (
              <tr key={task.id}>
                <td>
                  <span>
                    <Link href={`/projects/${slug}/tasks/${task.id}`}>
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
      </div>
    </>
  );
};

export default page;
