import { ConnectionOptions, Queue } from 'bullmq';

const connection: ConnectionOptions = {
  host: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
  port: parseInt(process.env.REDIS_PORT!)
};
const queue = new Queue('website-copywriter-queue', { connection });

export async function addJob(data: any) {
  const job = await queue.add('websiteDataBrief', data);
  return job;
}
