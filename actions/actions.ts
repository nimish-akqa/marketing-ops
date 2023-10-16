'use server';

import { Prisma, PrismaClient } from '@prisma/client';
import { join } from 'path';
import { writeFile, mkdir, stat } from 'fs/promises';

const prisma = new PrismaClient();

export const addAgent = async (formData: FormData) => {
  const formDataObj: { [key: string]: any } = {};

  for (const [key, value] of formData) {
    formDataObj[key] = value;
  }
  const { name, type, email, skills, avatar } = formDataObj;
  let imageUrl = '';

  if (avatar.name !== undefined && avatar.size !== 0) {
    const bytes = await avatar.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadDir = join(process.cwd(), '/public/uploads');

    try {
      await stat(uploadDir);
    } catch (e: any) {
      if (e.code === 'ENOENT') {
        await mkdir(uploadDir, { recursive: true });
      } else {
        console.error(
          'Error while trying to create directory when uploading a file\n',
          e
        );
        return {
          error: e
        };
      }
    }
    try {
      const filename = Date.now().toString() + avatar.name.replace(/ /g, '_');
      await writeFile(`${uploadDir}/${filename}`, buffer);
      imageUrl = `/uploads/${filename}`;
    } catch (e) {
      console.error('Error while trying to upload a file\n', e);
      return {
        error: e
      };
    }
  }

  try {
    const newAgent = await prisma.aGENT.create({
      data: {
        name,
        email,
        type,
        image: imageUrl,
        skills
      }
    });
    return {
      success: true
    };
  } catch (e) {
    console.log(e);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        return {
          error:
            'There is a unique constraint violation, a new user cannot be created with this email'
        };
      }
    }
  }
};

export const addProject = async (formData: FormData) => {
  console.log(formData);
  const formDataObj: { [key: string]: any } = {};
  for (const [key, value] of formData) {
    formDataObj[key] = value;
  }
  //   console.log(formDataObj);
  const { name, desc, startDate, endDate, status } = formDataObj;
  const agents = formData.getAll('team').map((id) => parseInt(id as string));
  //   console.log(agents);

  try {
    const newProject = await prisma.pROJECT.create({
      data: {
        name,
        desc,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
        status
      }
    });
    console.log(newProject);
    for (const agent of agents) {
      await prisma.projectAgents.create({
        data: {
          projectId: newProject.id,
          agentId: agent // Assuming teamId represents agentId
        }
      });
    }
  } catch (e) {
    console.log(e);
    // return {
    //   error: e
    // };
  }
};
