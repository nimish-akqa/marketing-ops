import { NextResponse } from 'next/server';

type projectusers = {
  projectId: number;
  agentId: number;
};
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { team, ...projectData } = data;
    // create project in db
    const createProjectResponse = await fetch(
      `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/projects/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
      }
    );
    const projectDataResponse = await createProjectResponse.json();
    let mappedData: projectusers[] = team.map((agentId: string) => ({
      projectId: projectDataResponse.id,
      agentId: parseInt(agentId)
    }));
    mappedData.forEach((puid: projectusers) => {
      createProjectUsers(puid);
    });

    return NextResponse.json({ projectData });
  } catch (error) {
    console.error(error);
    return;
  }
}

async function createProjectUsers(obj: projectusers) {
  try {
    //create project users mapping in db
    const createProjectTaskResponse = await fetch(
      `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/project-users/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
      }
    );
  } catch (error) {
    console.error(error);
    return;
  }
}
