import { ConnectionOptions, Job, Queue, QueueEvents } from 'bullmq';

const connection: ConnectionOptions = {
  host: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
  port: parseInt(process.env.REDIS_PORT!)
};
const queue = new Queue('copywriter-agent-queue', { connection });
const queueEvents = new QueueEvents('copywriter-agent-queue', { connection });

export async function addJob(jobName: string, data: any) {
  const job = await queue.add(jobName, data);
  console.log('Queued');
  await job.waitUntilFinished(queueEvents);
  console.log('Done');
  const result = await Job.fromId(queue, job.id!);
  console.log(result?.returnvalue);
  return result?.returnvalue;
}
