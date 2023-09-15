import { NextResponse } from 'next/server';
import { addJob } from '../queue';

export async function POST(request: Request) {
  const data = await request.json();
  const apiUrl = new URL(request.url);
  const jobName = apiUrl?.searchParams.get('jobName')!;
  try {
    const job = await addJob(jobName, data);
    return NextResponse.json({ success: true, job });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Job creation failed' },
      { status: 500 }
    );
  }
}
