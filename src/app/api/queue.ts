import { ConnectionOptions, Queue } from 'bullmq';

const connection: ConnectionOptions = {
  host: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
  port: parseInt(process.env.REDIS_PORT!)
};
const queue = new Queue('copywriter-agent-queue', { connection });

export async function addJob(jobName: string, data: any) {
  const job = await queue.add(jobName, data);
  return job;
}
