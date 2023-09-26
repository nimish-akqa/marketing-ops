import { NextResponse } from 'next/server';
import { addJob } from '../queue';

export async function POST(request: Request) {
  const apiUrl = new URL(request.url);

  const platform = apiUrl?.searchParams.get('platform')!;
  const projectId = parseInt(apiUrl?.searchParams.get('projectId')!);

  const jobNameMapping: Record<string, string> = {
    instagram: 'instagramContentBrief',
    twitter: 'twitterContentBrief',
    website: 'websiteContentBrief'
  };
  const jobName = jobNameMapping[platform];

  const data = await request.json();
  const { assignee, ...restData } = data;
  const modifiedData = {
    ...restData,
    type: platform,
    agent: parseInt(assignee), // Convert assignee to an integer if needed
    status: 'Pending'
  };
  try {
    //create task in db
    const createTaskResponse = await fetch(
      `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/tasks/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedData)
      }
    );
    const taskData = await createTaskResponse.json();

    try {
      //create project task mapping in db
      const createProjectTaskResponse = await fetch(
        `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/project-tasks/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            projectId: projectId,
            taskId: taskData.id
          })
        }
      );
    } catch (error) {
      console.error(error);
      return;
    }

    await sleep(10000);

    const jobResult = await addJob(jobName, modifiedData);

    try {
      //create project task mapping in db
      const createDeliverableResponse = await fetch(
        `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/deliverables/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            type: 'text',
            content: jobResult
          })
        }
      );
      const deliverableData = await createDeliverableResponse.json();
      try {
        //create task deliverable mapping in db
        const createTaskDeliverableResponse = await fetch(
          `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/task-deliverables/`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              taskId: taskData.id,
              deliverableId: deliverableData.id
            })
          }
        );

        const updatedTask = await updateTaskWithJobResult(taskData.id);
      } catch (error) {
        console.error(error);
        return;
      }
    } catch (error) {
      console.error(error);
      return;
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Job creation failed' },
      { status: 500 }
    );
  }
}

async function updateTaskWithJobResult(taskId: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/tasks/${taskId}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          status: 'Completed'
        })
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
