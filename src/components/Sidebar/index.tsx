// import React from "react";
// 'use client'
import Link from 'next/link';
import './sidebar.scss';
import { RiArrowDownSLine } from 'react-icons/ri';
// import { useSelectedLayoutSegment } from 'next/navigation'

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <ul>
                <li className="menu_title">Menu</li>
                <li className="menu_content">
                    <span>Dashboard</span>
                </li>
                <li className="menu_title">Apps</li>
                <li className="menu_content">
                    <span>
                        Projects <RiArrowDownSLine />
                    </span>

                    <ul>
                        <li>
                            <Link href="/projects">Projects List</Link>
                        </li>
                        <li>
                            <Link href="/projects/project-overview">
                                Project Overview
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects/create-project">
                                Create Project
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="menu_content">
                    <span>
                        Users
                        <RiArrowDownSLine />
                    </span>
                    <ul>
                        <li>
                            <Link href="/users">User List</Link>
                        </li>
                        <li>
                            <Link href="/users/create-user">Create User</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
export default Sidebar;
