'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { IoMdArrowDropdown } from 'react-icons/io';

import './taskButton.scss';

const TaskButton = ({ params }: { params: { projectId: number } }) => {
  const { projectId } = params;
  const [dropDownClicked, setDropDownClicked] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDownClicked(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleDropDownClick = () => {
    setDropDownClicked(!dropDownClicked);
  };

  return (
    <div
      className="createButton dropdown"
      onClick={handleDropDownClick}
      ref={dropdownRef}
    >
      <div className="dropbtn">
        Create Task
        <IoMdArrowDropdown />
      </div>
      <div className={`dropdownContent ${dropDownClicked ? 'show' : ''}`}>
        <Link
          href={{
            pathname: `/projects/${projectId}/create-task/`,
            query: { task: 'website' }
          }}
        >
          Create Website Article
        </Link>
        <Link
          href={{
            pathname: `/projects/${projectId}/create-task/`,
            query: { task: 'twitter' }
          }}
        >
          Create Twitter Post
        </Link>
        <Link
          href={{
            pathname: `/projects/${projectId}/create-task/`,
            query: { task: 'instagram' }
          }}
        >
          Create Instagram Post
        </Link>
      </div>
    </div>
  );
};

export default TaskButton;
