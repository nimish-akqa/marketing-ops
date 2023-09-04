'use client';
import { useEffect, useState } from 'react';

import { RiArrowDownSLine } from 'react-icons/ri';
import {
  BiBriefcaseAlt2,
  BiHomeCircle,
  BiSolidUserDetail
} from 'react-icons/bi';

import NavLink from './navLink';
import { useSidebarContext } from '@/app/sidebar-context';

type MenuStates = {
  [menu: string]: boolean;
};
const Sidebar = () => {
  const [menuStates, setMenuStates] = useState<MenuStates>({
    projectsMenu: false,
    usersMenu: false
  });
  const { sidebarCollapsed } = useSidebarContext();
  const handleMenuClick = (menuName: string) => {
    if (!sidebarCollapsed) {
      setMenuStates((prevMenuStates) => ({
        ...prevMenuStates,
        [menuName]: !prevMenuStates[menuName]
      }));

      Object.keys(menuStates).forEach((key) => {
        if (key !== menuName) {
          setMenuStates((prevMenuStates) => ({
            ...prevMenuStates,
            [key]: false
          }));
        }
      });
    }
  };
  useEffect(() => {
    if (sidebarCollapsed)
      setMenuStates({
        projectsMenu: false,
        usersMenu: false
      });
  }, [sidebarCollapsed]);

  return (
    <nav className="sidebar">
      <ul>
        <li className="menuTitle">Menu</li>
        <li className="menuContent">
          <div className="menuHeading">
            <NavLink href={'/'}>
              <i>
                <BiHomeCircle size={30} />
              </i>
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
              <i>
                <BiBriefcaseAlt2 size={30} />
              </i>
              <span>Projects</span>
            </NavLink>

            <i>
              <RiArrowDownSLine size={20} className="menuArrow" />
            </i>
          </div>
          <ul
            className={`projectsMenu ${menuStates.projectsMenu ? 'show' : ''}`}
          >
            <li>
              <NavLink href={'/projects'}>Projects List</NavLink>
            </li>
            <li>
              <NavLink href={'/projects/create-project'}>
                Create Project
              </NavLink>
            </li>
          </ul>
        </li>
        <li
          className={`menuContent ${menuStates.usersMenu ? 'menuActive' : ''}`}
        >
          <div
            className="menuHeading"
            onClick={() => handleMenuClick('usersMenu')}
          >
            <NavLink href={''}>
              <i>
                <BiSolidUserDetail size={30} />
              </i>
              <span>Users</span>
            </NavLink>
            <i>
              <RiArrowDownSLine size={20} className="menuArrow" />
            </i>
          </div>
          <ul className={`usersMenu ${menuStates.usersMenu ? 'show' : ''}`}>
            <li>
              <NavLink href={'/users'}>User List</NavLink>
            </li>
            <li>
              <NavLink href="/users/create-user">Create User</NavLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
