import React from 'react';
import {
  Deliverable,
  TextDeliverable,
  Task,
  TaskDeliverable
} from '@/types/global';
import {
  getDeliverables,
  getTask,
  getTaskDeliverables
} from '@/utils/apiUtils';

import '../../projects/[projectId]/style.scss';
import { notFound } from 'next/navigation';

function plainTextToMarkdown(plainText: string) {
  const paragraphs = plainText.split('\n');
  const markdownParagraphs = paragraphs.map((paragraph) => {
    return `

${paragraph}
`;
  });
  return markdownParagraphs.join('');
}
const page = async ({ params }: { params: { taskId: number } }) => {
  const { taskId } = params;
  const task: Task = await getTask(taskId);
  if (!Object.keys(task).length) {
    notFound();
  }

  const deliverables: TextDeliverable[] = await getDeliverables();
  const taskDeliverables: TaskDeliverable[] = await getTaskDeliverables();

  const taskDeliverablesIds = taskDeliverables
    .filter((taskDeliverable) => taskDeliverable.taskId === task.id)
    .map((data) => data.deliverableId);
  const filteredDel = deliverables?.filter((del: Deliverable) =>
    taskDeliverablesIds.includes(del.id)
  );
  return (
    <>
      <div className="section sectionHeader">
        <div className="pageTitle">
          <h4>{`${task.type.substring(0, 1).toUpperCase()}${task.type.substring(
            1
          )} Content Brief`}</h4>
        </div>
      </div>
      <div className="section sectionProjectOverview">
        <div className="card ">
          <div className="cardBody">
            <div className="cardTitle">
              <h4>Topic</h4>
              <p>{task.topic}</p>
            </div>
            {task.subTopicsCSV && (
              <div className="cardContent flex">
                <div>Subtopics</div>
                <p>{task?.subTopicsCSV}</p>
              </div>
            )}
            {task.wordCount && (
              <div className="cardContent flex">
                <div>No. of Words</div>
                <p>{task?.wordCount}</p>
              </div>
            )}
            {task.audiencePersona && (
              <div className="cardContent flex">
                <div>Audience Persona</div>
                <p>{task?.audiencePersona}</p>
              </div>
            )}
            {task.toneOfVoice && (
              <div className="cardContent flex">
                <div>Tone of Voice</div>
                <p>{task?.toneOfVoice}</p>
              </div>
            )}
            {task.toneOfVoice && (
              <div className="cardContent flex">
                <div>Seo Keywords / Phrases</div>
                <p>{task?.toneOfVoice}</p>
              </div>
            )}
          </div>
        </div>
        <div className="card">
          <div className="cardBody">
            <div className="cardTitle">
              <h4>Deliverables</h4>
            </div>
            <div className="cardContent">
              {filteredDel && (
                <div className="deliverableList">
                  {filteredDel.map((del) => (
                    <div
                      key={del.id}
                      dangerouslySetInnerHTML={{
                        __html: plainTextToMarkdown(
                          del.content.replace(/\n/g, '<br>')
                        )
                      }}
                    ></div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
