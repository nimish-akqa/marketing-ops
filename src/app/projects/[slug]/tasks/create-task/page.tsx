import React from 'react';
import TaskForm from '@/components/TaskForm';
import { notFound } from 'next/navigation';

const page = ({
  params,
  searchParams
}: {
  params: { slug: number };
  searchParams?: { [key: string]: string };
}) => {
  const task = searchParams?.task;

  if (!task) {
    notFound();
  }

  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>CREATE NEW TASK</h4>
        </div>
      </div>
      <TaskForm platform={task} projectId={Number(params.slug)} />
    </>
  );
};

export default page;
