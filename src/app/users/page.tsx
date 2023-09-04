import React from 'react';
import './agents.scss';
import Image from 'next/image';
import { BsPlusLg } from 'react-icons/bs';
import ActionDropDown from '@/components/ActionDropDown';
import Link from 'next/link';
import { Agent } from '@/types/global';

const getAgents = async () => {
    const data = await fetch(
        `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/agents/`,
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

const page = async () => {
    const agents: Agent[] = await getAgents();

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
                        {agents.map(agent => (
                            <tr key={agent.agentId}>
                                <td>
                                    <div className="userGroup">
                                        <div className="userAvatar">
                                            <Image
                                                src={`https://api.multiavatar.com/${agent.agentId}.svg`}
                                                width={32}
                                                height={32}
                                                alt="thumb"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{agent.name}</td>
                                <td>{agent.agentType}</td>
                                <td>{agent.email}</td>
                                <td>
                                    <div className="skillGroup">
                                        {agent.skills.map(skill => (
                                            <span
                                                className={`skills success`}
                                                key={skill}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td>{agent.projects}</td>
                                <td>
                                    <ActionDropDown
                                        class="projectOptionsDropdown"
                                        optionId={agent.agentId}
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
