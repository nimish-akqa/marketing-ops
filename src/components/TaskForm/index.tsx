import React from 'react';
import Instagram from './Instagram';
import Website from './Website';
import X from './X';
import { AudiencePersona } from '@/types/global';
import { getAudiencePersona } from '@/utils/apiUtils';
import { notFound } from 'next/navigation';

interface TaskFormProps {
  platform: string | undefined;
}

const TaskForm: React.FC<TaskFormProps> = async ({ platform }) => {
  const audiencePersona: AudiencePersona[] = await getAudiencePersona();

  const component =
    platform == 'instagram' ? (
      <Instagram />
    ) : platform == 'website' ? (
      <Website audiencePersona={audiencePersona} />
    ) : platform == 'x' ? (
      <X />
    ) : (
      notFound()
    );
  return <>{component}</>;
};

export default TaskForm;
