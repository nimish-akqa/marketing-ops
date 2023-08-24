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
                <li className="menuTitle">Menu</li>
                <li className="menuContent">
                    <div className="menuHeading">
                        <NavLink href={'/'}>
                            <BiHomeCircle size={30} />
                            <span>Dashboard</span>
                        </NavLink>
                    </div>
                </li>
                <li className="menuTitle">Apps</li>
                <li
                    className={`menuContent ${
                        menuStates.projectsMenu ? 'menuActive' : ''
                    }`}
                >
                    <div
                        className="menuHeading"
                        onClick={() => handleMenuClick('projectsMenu')}
                    >
                        <NavLink href={''}>
                            <BiBriefcaseAlt2 size={30} />
                            <span>Projects</span>
                        </NavLink>

                        <RiArrowDownSLine size={20} className="menuArrow" />
                    </div>
                    <ul
                        className={`projectsMenu ${
                            menuStates.projectsMenu ? 'show' : ''
                        }`}
                    >
                        <li>
                            <NavLink href={'/projects'}>Projects List</NavLink>
                        </li>
                        {/* <li>
                            <NavLink href={'/projects/project-overview'}>
                                Projects Overview
                            </NavLink>
                        </li> */}
                        <li>
                            <NavLink href={'/projects/create-project'}>
                                Create Project
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li
                    className={`menuContent ${
                        menuStates.usersMenu ? 'menuActive' : ''
                    }`}
                >
                    <div
                        className="menuHeading"
                        onClick={() => handleMenuClick('usersMenu')}
                    >
                        <NavLink href={''}>
                            <BiSolidUserDetail size={30} />
                            <span>Users</span>
                        </NavLink>
                        <RiArrowDownSLine size={20} className="menuArrow" />
                    </div>
                    <ul
                        className={`usersMenu ${
                            menuStates.usersMenu ? 'show' : ''
                        }`}
                    >
                        <li>
                            <NavLink href={'/users'}>User List</NavLink>
                        </li>
                        <li>
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
