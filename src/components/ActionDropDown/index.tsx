'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { BiSolidPencil, BiSolidTrash } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';

type Props = {
    class: string;
    optionId: number;
};

const ActionDropDown = (props: Props) => {
    const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleClick = (projectId: number) => {
        setOpenDropdownId(projectId);
    };

    const handleDocumentClick = (event: MouseEvent) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
        ) {
            setOpenDropdownId(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    return (
        <div className={props.class} ref={dropdownRef}>
            <Link href={'#'} onClick={() => handleClick(props.optionId)}>
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
