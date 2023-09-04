import React from 'react';
import '../../projects.scss';
import './style.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Project, Task } from '@/types/global';
import { notFound } from 'next/navigation';
import { IoMdArrowDropdown } from 'react-icons/io';

const getProject = async (slug: number) => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/projects/${slug}`,
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

const handleButtonClick = () => {};
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
                <div className="createButton dropdown">
                    <div className="dropbtn">
                        Create Task
                        <IoMdArrowDropdown />
                    </div>
                    <div className="dropdown-content">
                        <Link href={`/projects/${slug}/tasks/create-task/`}>
                            Create Website Article
                        </Link>
                        <Link href={`/projects/${slug}/tasks/create-task`}>
                            Create Twitter Post
                        </Link>
                        <Link href={`/projects/${slug}/tasks/create-task`}>
                            Create Instagram Post
                        </Link>
                    </div>
                </div>
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
                                        <Link
                                            href={`/projects/${slug}/tasks/${task.id}`}
                                        >
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
                                        className={`projectStatus ${
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
