import { NextResponse } from 'next/server';
import { addJob } from '../queue';

export async function POST(request: Request) {
  const data = await request.json();
  try {
    const job = await addJob(data);
    // console.log(job);
    return NextResponse.json({ success: true, job });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: 'Job creation failed' },
      { status: 500 }
    );
  }
}
