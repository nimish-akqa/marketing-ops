import React from 'react';
import TaskForm from '@/components/TaskForm';
import { notFound } from 'next/navigation';

const page = ({
  params,
  searchParams
}: {
  params: { projectId: number };
  searchParams?: { [key: string]: 'instagram' | 'website' | 'twitter' };
}) => {
  const task = searchParams?.task;

  if (!task || !['instagram', 'website', 'twitter'].includes(task)) {
    notFound();
  }

  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>CREATE NEW TASK</h4>
        </div>
      </div>
      <TaskForm platform={task} projectId={Number(params.projectId)} />
    </>
  );
};

export default page;
