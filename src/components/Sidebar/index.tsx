'use client';
import './sidebar.scss';
import { RiArrowDownSLine } from 'react-icons/ri';
import {
    BiBriefcaseAlt2,
    BiHomeCircle,
    BiSolidUserDetail
} from 'react-icons/bi';
import { useState } from 'react';
import NavLink from './navLink';

type MenuStates = {
    [menu: string]: boolean;
};
const Sidebar = () => {
    const [menuStates, setMenuStates] = useState<MenuStates>({
        projectsMenu: false,
        usersMenu: false
    });

    const handleMenuClick = (menuName: string) => {
        setMenuStates(prevMenuStates => ({
            ...prevMenuStates,
            [menuName]: !prevMenuStates[menuName]
        }));

        Object.keys(menuStates).forEach(key => {
            if (key !== menuName) {
                setMenuStates(prevMenuStates => ({
                    ...prevMenuStates,
                    [key]: false
                }));
            }
        });
    };

    return (
        <nav className="sidebar">
            <ul>
                <li className="menu_title">Menu</li>
                <li className="menu_content">
                    <div className="menuHeading">
                        <span>
                            <BiHomeCircle size={30} />
                            <NavLink href={'/'}>Dashboard</NavLink>
                        </span>
                    </div>
                </li>
                <li className="menu_title">Apps</li>
                <li
                    className={`menu_content ${
                        menuStates.projectsMenu ? 'menuActive' : ''
                    }`}
                >
                    <div
                        className="menuHeading"
                        onClick={() => handleMenuClick('projectsMenu')}
                    >
                        <span>
                            <BiBriefcaseAlt2 size={30} />
                            {/* <Link href="#">Projects</Link> */}
                            <NavLink href={'/'}>Projects</NavLink>
                        </span>

                        <RiArrowDownSLine size={20} className="menuArrow" />
                    </div>
                    <ul
                        className={`projectsMenu ${
                            menuStates.projectsMenu ? 'show' : ''
                        }`}
                    >
                        <li>
                            {/* <Link href="/projects">Projects List</Link> */}
                            <NavLink href={'/projects'}>Projects List</NavLink>
                        </li>
                        <li>
                            {/* <Link href="/projects/project-overview">
                                Project Overview
                            </Link> */}
                            <NavLink href={'/projects/project-overview'}>
                                Projects Overview
                            </NavLink>
                        </li>
                        <li>
                            {/* <Link href="/projects/create-project">
                                Create Project
                            </Link> */}
                            <NavLink href={'/projects/create-project'}>
                                Create Project
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li
                    className={`menu_content ${
                        menuStates.usersMenu ? 'menuActive' : ''
                    }`}
                >
                    <div
                        className="menuHeading"
                        onClick={() => handleMenuClick('usersMenu')}
                    >
                        <span>
                            <BiSolidUserDetail size={30} />
                            <NavLink href={'/'}>Users</NavLink>
                        </span>
                        <RiArrowDownSLine size={20} className="menuArrow" />
                    </div>
                    <ul
                        className={`usersMenu ${
                            menuStates.usersMenu ? 'show' : ''
                        }`}
                    >
                        <li>
                            <NavLink href={'/users'}>User List</NavLink>
                            {/* <Link href="/users"></Link> */}
                        </li>
                        <li>
                            {/* <Link href="/users/create-user">Create User</Link> */}
                            <NavLink href="/users/create-user">
                                Create User
                            </NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};
export default Sidebar;
