import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (data.skills) {
      data.skills = data.skills.split(',').map((skill: string) => skill.trim());
    }
    // create agent in db
    const createAgentResponse = await fetch(
      `${process.env.NEXT_PUBLIC_JSON_SERVER_PATH}/agents/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
    );
    const projectDataResponse = await createAgentResponse.json();

    return NextResponse.json({ projectDataResponse });
  } catch (error) {
    console.error(error);
    return;
  }
}
