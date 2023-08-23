'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiSolidPencil, BiSolidTrash } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';

type Props = {
    class: string;
    optionId: number;
};

const ActionDropDown = (props: Props) => {
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

    const toggleDropdown = (projectId: number) => {
        if (openDropdownId === projectId) {
            setOpenDropdownId(null);
        } else {
            setOpenDropdownId(projectId);
        }
    };
    return (
        <div className={props.class}>
            <Link href={'#'} onClick={() => toggleDropdown(props.optionId)}>
                <i>
                    <BsThreeDots />
                </i>
            </Link>
            {openDropdownId === props.optionId && (
                <div className="projectOptions">
                    <Link href={'#'}>
                        <i>
                            <BiSolidPencil color={'#34c38f'} />
                        </i>{' '}
                        <span>Edit</span>
                    </Link>
                    <Link href={'#'}>
                        <i>
                            <BiSolidTrash color={'#f46a6a'} />
                        </i>
                        <span>Delete</span>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default ActionDropDown;
