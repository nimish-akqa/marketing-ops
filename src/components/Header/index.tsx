'use client';
import React, { useEffect, useState } from 'react';
import './header.scss';
import { BsBell } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

const Header = () => {
    const toggleNavbar = () => {
        const body = document.body;
        if (body.classList.contains('sidebarCollapsed')) {
            body.classList.remove('sidebarCollapsed');
        } else {
            body.classList.add('sidebarCollapsed');
        }
    };

    return (
        <header className="pageHeader">
            <div className="navBarHeader">
                <div className="dflex" onClick={toggleNavbar}>
                    <button type="button" className="btn">
                        <FaBars />
                    </button>
                </div>
                <div className="dflex">
                    <li className="bell">
                        <button>
                            <BsBell />
                        </button>
                    </li>

                    <div className="profile">
                        <button className="dropdown">
                            <img
                                className="header-profile-user"
                                src="https://skote-v-light.react.themesbrand.com/static/media/avatar-1.3921191a8acf79d3e907.jpg"
                                alt="Header Avatar"
                            ></img>{' '}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
